from rest_framework import serializers
from api.models import Storyline, Story

class StorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    content = serializers.CharField(style={'base_template': 'textarea.html'})

class StorylineParentSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)

class StorylineSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    is_author = serializers.BooleanField()
    is_ending = serializers.BooleanField()
    content = serializers.CharField(style={'base_template': 'textarea.html'})
    parent = StorylineParentSerializer()
    wealth      = serializers.IntegerField()
    health      = serializers.IntegerField()   
    story_date  = serializers.DateField()
    papers_headline = serializers.CharField()
    papers_content = serializers.CharField()
    hero_position_x = serializers.IntegerField()
    hero_position_y = serializers.IntegerField()

    def create(self, validated_data):
        """
        Create and return a new `Storyline` instance, given the validated data.
        """
        return Storyline.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Storyline` instance, given the validated data.
        """
        instance.title = validated_data.get('title', instance.title)
        instance.content = validated_data.get('content', instance.content)
        instance.save()
        return instance