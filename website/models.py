from django.db import models

# Create your models here.
class Facts(models.Model):
    name = models.CharField(max_length=255, verbose_name="Назваие факта")
    text = models.TextField(verbose_name="Описание факта")
    
    class Meta:
        verbose_name = "Факт"
        verbose_name_plural = "Факты"
        
    def __str__(self):
        return self.name
    


class Test(models.Model):
    title = models.CharField(max_length=255, verbose_name="Название теста")

    class Meta:
        verbose_name = "Тест"
        verbose_name_plural = "Тесты"

    def __str__(self):
        return self.title

class Question(models.Model):
    test = models.ForeignKey(Test, on_delete=models.CASCADE, related_name="questions", verbose_name="Тест")
    question_text = models.TextField(verbose_name="Текст вопроса")
    answer1 = models.CharField(max_length=255, verbose_name="Вариант 1")
    answer2 = models.CharField(max_length=255, verbose_name="Вариант 2")
    answer3 = models.CharField(max_length=255, verbose_name="Вариант 3")
    correct_answer = models.CharField(max_length=255, verbose_name="Правильный ответ")

    class Meta:
        verbose_name = "Вопрос"
        verbose_name_plural = "Вопросы"

    def __str__(self):
        return self.question_text