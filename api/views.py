from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from api.models import Storyline, Story
from api.serializers import StorylineSerializer
from rest_framework.permissions import IsAuthenticated

@csrf_exempt
def story_detail(request, pk=1):
    """
    Retrieve, update or delete a code Story.
    """
    try:
        # Get current story
        story = Story.objects.get(pk=pk)
        # Get Story lines linked to story
        storylines = Storyline.objects.get(pk=story.last_storyline.id).get_ancestors(ascending=False, include_self=True)
    except Story.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = StorylineSerializer(storylines,many=True)
        return JsonResponse(serializer.data, safe=False)