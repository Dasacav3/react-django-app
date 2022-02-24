"""djangoproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views
from Company import views as company_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index),
    path('register/', company_views.displayRegisterForm),
    path('login/', company_views.displayLoginForm),
    path('login-user/', company_views.login),
    path('signup/', company_views.signup),
    path('profile/', company_views.displayProfileForm),
    path('profile-data/', company_views.getProfileData),
    path('update-profile/', company_views.updateProfile),
    path('logout/', company_views.logout),
]
