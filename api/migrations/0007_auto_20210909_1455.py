# Generated by Django 3.2.5 on 2021-09-09 14:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_storylinetree'),
    ]

    operations = [
        migrations.AlterField(
            model_name='story',
            name='last_storyline',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.storylinetree'),
        ),
        migrations.DeleteModel(
            name='Storyline',
        ),
    ]
