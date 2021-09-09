from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from api.models import Storyline, Story
from api.serializers import StorylineSerializer
from rest_framework.permissions import IsAuthenticated

# Used once to update all system
# def update_olds(request):
#     storylines = Storyline.objects.all()
#     for s in storylines:
#         new_id = (s.id-1)
#         if new_id > 19:
#             s.parent = Storyline.objects.get(pk=new_id)
#             s.save()
#     return HttpResponse(status=204)

    # storylines = Storyline.objects.all()
    # parent = None
    # for s in storylines:
    #     new_s = Storyline()
    #     new_s.content =    s.content
    #     new_s.is_author  =    s.is_author   
    #     new_s.is_ending  =    s.is_ending   
    #     if parent != None:
    #         new_s.parent  =    StorylineTree.objects.get(pk=parent)      
    #     new_s.save()
    #     parent = new_s.id
    # return HttpResponse(status=204)

@csrf_exempt
def storyline_list(request):
    """
    List all code storyline, or create a new storyline.
    """
    #permission_classes = (IsAuthenticated,)
    if request.method == 'GET':
        storylines = Storyline.objects.all()
        serializer = StorylineSerializer(storylines, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = StorylineSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

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

def test_fct(request):
    story = Story.objects.get(pk=1)
    storylines = Storyline.objects.get(pk=story.last_storyline.id).get_ancestors(ascending=False, include_self=True)
    serializer = StorylineSerializer(storylines, many=True)
    return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def story_detail(request, pk):
    """
    Retrieve, update or delete a code Story.
    """
    try:
        storyline = Storyline.objects.get(pk=pk)
    except Storyline.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = StorylineSerializer(storyline)
        return JsonResponse(serializer.data)