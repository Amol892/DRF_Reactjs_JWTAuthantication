# Generated by Django 4.2.4 on 2023-08-02 07:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project_details',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('project_name', models.CharField(max_length=50)),
                ('project_description', models.CharField(max_length=256)),
                ('project_lead', models.CharField(max_length=50)),
                ('team_size', models.PositiveIntegerField()),
                ('programming_langauge', models.CharField(max_length=100)),
                ('project_start_date', models.DateField()),
                ('project_delivery_date', models.DateField()),
                ('weeks', models.CharField(blank=True, max_length=2)),
                ('project_status', models.CharField(max_length=20)),
            ],
        ),
    ]
