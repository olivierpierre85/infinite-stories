from rest_framework import serializers
from api.models import Storyline


class StorylineSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(required=False, allow_blank=True, max_length=100)
    content = serializers.CharField(style={'base_template': 'textarea.html'})

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