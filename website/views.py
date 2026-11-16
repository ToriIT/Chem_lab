from django.shortcuts import render, get_object_or_404
from .models import Facts, Test

# Create your views here.
# метод открытия страницы - главная
def home(request):
    return render(request, 'website/home.html')

# метод открытия страницы - лаборатория
def laboratory(request):
    return render(request, 'website/laboratory.html')

# метод открытия страницы - факты
def facts(request):
    facts = Facts.objects.all().order_by('-id')
    return render(request, 'website/facts.html', context = {
        'facts': facts
    })

# метод открытия страницы - теория
def theory(request):
    return render(request, 'website/theory.html')

# метод открытия страницы - таблица Менделеева
def table(request):
    lanthanides = [
        {"symbol": "La", "number": 57},
        {"symbol": "Ce", "number": 58},
        {"symbol": "Pr", "number": 59},
        {"symbol": "Nd", "number": 60},
        {"symbol": "Pm", "number": 61},
        {"symbol": "Sm", "number": 62},
        {"symbol": "Eu", "number": 63},
        {"symbol": "Gd", "number": 64},
        {"symbol": "Tb", "number": 65},
        {"symbol": "Dy", "number": 66},
        {"symbol": "Ho", "number": 67},
        {"symbol": "Er", "number": 68},
        {"symbol": "Tm", "number": 69},
        {"symbol": "Yb", "number": 70},
        {"symbol": "Lu", "number": 71}
    ]

    actinides = [
        {"symbol": "Ac", "number": 89},
        {"symbol": "Th", "number": 90},
        {"symbol": "Pa", "number": 91},
        {"symbol": "U", "number": 92},
        {"symbol": "Np", "number": 93},
        {"symbol": "Pu", "number": 94},
        {"symbol": "Am", "number": 95},
        {"symbol": "Cm", "number": 96},
        {"symbol": "Bk", "number": 97},
        {"symbol": "Cf", "number": 98},
        {"symbol": "Es", "number": 99},
        {"symbol": "Fm", "number": 100},
        {"symbol": "Md", "number": 101},
        {"symbol": "No", "number": 102},
        {"symbol": "Lr", "number": 103}
    ]

    return render(request, 'website/table.html', {
        'lanthanides': lanthanides,
        'actinides': actinides
    })



def tests(request):
    tests = Test.objects.all()
    return render(request, 'website/test.html', {'tests': tests})

def test_detail(request, test_id):
    test = get_object_or_404(Test, id=test_id)
    return render(request, 'website/test_detail.html', {'test': test})

