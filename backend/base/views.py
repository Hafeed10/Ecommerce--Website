from django.shortcuts import render, redirect, reverse
from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth.models import User
from users.forms import UserForm

from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login as auth_login
from django.http import JsonResponse

def login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        if email and password:
            user = authenticate(request, email=email, password=password)
            if user is not None:
                auth_login(request, user)
                return JsonResponse({'redirect_url': '/web/index'})
            else:
                return JsonResponse({'message': 'Invalid email or password'}, status=400)
        else:
            return JsonResponse({'message': 'Please provide both email and password'}, status=400)

    return render(request, 'users/login.html')


def signup(request):
    context = {}
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')
            email = form.cleaned_data.get('email')

            # Create a new user instance
            user = User.objects.create_user(
                username=username,
                password=password,
                email=email,
                first_name=form.cleaned_data.get('first_name'),
                last_name=form.cleaned_data.get('last_name')
            )

            # Authenticate and login the user
            user = authenticate(username=username, password=password)
            if user is not None:
                auth_login(request, user)
                return JsonResponse({'redirect_url': '/web/index'})
            else:
                return JsonResponse({'message': 'User could not be authenticated after creation'}, status=400)
        else:
            # Handle form errors
            errors = form.errors.as_json()
            return JsonResponse({'message': 'Form is invalid', 'errors': errors}, status=400)
    else:
        form = UserForm()

    context['title'] = 'Signup'
    context['form'] = form
    return render(request, 'users/signup.html', context=context)