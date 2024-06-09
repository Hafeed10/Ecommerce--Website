from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.shortcuts import render
from .forms import UserForm

def signup(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            user = form.save()
            user = authenticate(username=user.username, password=request.POST['password1'])
            if user is not None:
                auth_login(request, user)
                return JsonResponse({'redirect_url': '/web/index'})
            else:
                return JsonResponse({'message': 'User could not be authenticated after creation'}, status=400)
        else:
            return JsonResponse({'message': 'Form is invalid', 'errors': form.errors.as_json()}, status=400)
    else:
        form = UserForm()
    return render(request, 'users/signup.html', {'form': form})
