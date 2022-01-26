from email.base64mime import header_length
from django.db import models
from django.contrib.auth.models import User
from mptt.models import MPTTModel, TreeForeignKey

class Storyline(MPTTModel):
    created     = models.DateTimeField(auto_now_add=True)
    content     = models.TextField()
    is_author   = models.BooleanField(default=True)
    is_ending   = models.BooleanField(default=False)
    parent      = TreeForeignKey('self', blank=True, null=True, related_name='children', on_delete=models.CASCADE)
    # Show Info Tab
    wealth      = models.IntegerField(blank=True, null=True)
    health      = models.IntegerField(blank=True, null=True)   
    story_date  = models.DateField(blank=True, null=True)
    papers_headline = models.TextField(blank=True, null=True)
    papers_content = models.TextField(blank=True, null=True)
    hero_position_x = models.IntegerField(blank=True, null=True)
    hero_position_y = models.IntegerField(blank=True, null=True)

    class Meta:
        ordering = ['created']

class Story(models.Model):
    name = models.CharField(max_length = 200, blank = False, default="Time Transmitter")
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    last_storyline  = models.ForeignKey(Storyline, on_delete=models.CASCADE)