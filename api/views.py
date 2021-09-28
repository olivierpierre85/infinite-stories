from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from api.models import Storyline, Story
from api.serializers import StorylineSerializer
from rest_framework.permissions import IsAuthenticated

@csrf_exempt
def story_detail(request, pk):
    """
    Retrieve, update or delete a code Story.
    """
    try:
        # Get current story
        story = Story.objects.get(pk=pk)
    except Story.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        # Get Story lines linked to story
        storylines = Storyline.objects.get(pk=story.last_storyline.id).get_ancestors(ascending=False, include_self=True)
        serializer = StorylineSerializer(storylines,many=True)
        return JsonResponse(serializer.data, safe=False)
    
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        try:
            previous_storyline = Storyline.objects.get(pk=data["parent"]["id"])

            if data["is_author"] == previous_storyline.is_author :
                # When same author, just concat the text to last storyline
                previous_storyline.content += "\r\n\r\n" + data["content"]
                previous_storyline.save()
            else:
                new_storyline = Storyline()

                new_storyline.is_author = data["is_author"]
                new_storyline.is_ending = data["is_ending"]
                new_storyline.content = data["content"]
                new_storyline.parent = Storyline.objects.get(pk=data["parent"]["id"])
                new_storyline.save()

                # Update the last storyline of the story
                story.last_storyline = new_storyline
                story.save()

            return HttpResponse(status=201)
        except :
            return HttpResponse(status=400)

@csrf_exempt
def storyline_detail(request, pk):
    """
    Retrieve, update or delete a code storyline.
    """
    try:
        storyline = Storyline.objects.get(pk=pk)
    except Storyline.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = StorylineSerializer(storyline)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = StorylineSerializer(storyline, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        storyline.delete()
        return HttpResponse(status=204)

@csrf_exempt
def storyline_restart(request, s_pk, pk):
    """
    Rebase story to selected storyline
    """
    try:
        story = Story.objects.get(pk=s_pk)
        last_storyline = Storyline.objects.get(pk=pk)

        story.last_storyline = last_storyline.parent
        story.save()

        return HttpResponse(status=204)
    except Storyline.DoesNotExist:
        return HttpResponse(status=404)