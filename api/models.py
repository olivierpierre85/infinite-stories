from django.db import models
from django.contrib.auth.models import User
from mptt.models import MPTTModel, TreeForeignKey

class Storyline(MPTTModel):
    created     = models.DateTimeField(auto_now_add=True)
    content     = models.TextField()
    is_author   = models.BooleanField(default=True)
    is_ending   = models.BooleanField(default=False)
    parent      = TreeForeignKey('self', blank=True, null=True, related_name='children', on_delete=models.CASCADE)    

    class Meta:
        ordering = ['created']

# class Storyline(models.Model):
#     created     = models.DateTimeField(auto_now_add=True)
#     content     = models.TextField()
#     is_author   = models.BooleanField(default=True)
#     is_ending   = models.BooleanField(default=False)
#     parent      = models.ForeignKey('self', blank=True, null=True, related_name='children', on_delete=models.CASCADE)

#     class Meta:
#         ordering = ['created']

class Story(models.Model):
    name = models.CharField(max_length = 200, blank = False, default="Time Transmitter")
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    last_storyline  = models.ForeignKey(Storyline, on_delete=models.CASCADE)