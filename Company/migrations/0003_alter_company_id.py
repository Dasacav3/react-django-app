# Generated by Django 4.0.2 on 2022-02-22 03:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Company', '0002_alter_company_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='id',
            field=models.BigIntegerField(auto_created=True, max_length=11, primary_key=True, serialize=False),
        ),
    ]
