from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from api.models import Storyline
from api.serializers import StorylineSerializer

@csrf_exempt
def storyline_list(request):
    """
    List all code storyline, or create a new storyline.
    """
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