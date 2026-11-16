from django.urls import path
from . import views

app_name = 'website'

urlpatterns = [
    path('', views.home, name="home"),
    path('facts/', views.facts, name='facts'),
    path('laboratory/', views.laboratory, name="laboratory"),
    path('theory/', views.theory, name="theory"),
    path('test/', views.tests, name="tests"),
    path('test/<int:test_id>/', views.test_detail, name='test_detail'),  # добавили
    path('table/', views.table, name="table"),
]

