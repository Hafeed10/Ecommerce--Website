# Generated by Django 5.0.1 on 2024-06-06 06:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_item_price_just'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='price_just',
        ),
        migrations.AddField(
            model_name='item',
            name='loop_just',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
