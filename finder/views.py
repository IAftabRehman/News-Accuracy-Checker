from django.shortcuts import render

def homePage(request):
    return render(request, 'home.html')

def signUpPage(request):
    return render(request, 'signUp.html')

def aboutPage(request):
    return render(request, 'about.html')

def contactPage(request):
    return render(request, 'contact.html')