from django.db import models

class Storyline(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    content = models.TextField()
    is_author = models.BooleanField(default=True)

    class Meta:
        ordering = ['created']
