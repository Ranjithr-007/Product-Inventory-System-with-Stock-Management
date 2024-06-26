# Generated by Django 4.2 on 2024-06-12 10:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_subvariant_stock'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='subvariant',
            name='stock',
        ),
        migrations.CreateModel(
            name='Stock',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stock', models.PositiveIntegerField(default=0)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='stocks', to='app.products')),
                ('subvariant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='stocks', to='app.subvariant')),
                ('variant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='stocks', to='app.variant')),
            ],
            options={
                'verbose_name': 'stock',
                'verbose_name_plural': 'stock',
                'db_table': 'Stock',
                'ordering': ['stock'],
                'unique_together': {('product', 'variant', 'subvariant', 'stock')},
            },
        ),
    ]
