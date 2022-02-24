from django.http import Http404
from django.shortcuts import redirect, render
from .models import Company
from django.http.response import JsonResponse
from django.db.models import Q
from django.core import serializers


def displayRegisterForm(request):
    return render(request, 'index.html')


def displayLoginForm(request):
    return render(request, 'index.html')


def displayProfileForm(request):
    if 'company' in request.session:
        return render(request, 'index.html')
    else:
        return redirect('/login/')


def login(request):
    email = request.POST['company_email']
    password = request.POST['company_password']

    company = Company.objects.filter(Q(email=email), Q(password=password))

    data = serializers.serialize('json', company)

    if bool(company):
        request.session['company'] = data

        return JsonResponse(data, safe=False)

    else:
        raise Exception('Invalid email or password')


def signup(request):
    companyName = request.POST['company_name']
    companyEmail = request.POST['company_email']
    companyPassword = request.POST['company_password']
    companyAddress = request.POST['company_address']
    companyPhone = request.POST['company_phone']
    companyPassword = request.POST['company_password']
    companyPasswordConfirm = request.POST['company_password_confirmation']
    companyNit = request.POST['company_nit']

    if companyPassword == companyPasswordConfirm:

        response = {}

        obj = Company.objects.filter(
            email=companyEmail
        )

        if bool(obj):
            raise Exception('Email already exists')

        else:
            obj = Company.objects.create(
                nit=companyNit,
                name=companyName,
                address=companyAddress,
                phone=companyPhone,
                email=companyEmail,
                password=companyPassword
            )

            response['message'] = 'Company created successfully'

        return JsonResponse(response, safe=False)


def updateProfile(request):
    companyName = request.POST['company_name']
    companyEmail = request.POST['company_email']
    companyPassword = request.POST['company_password']
    companyAddress = request.POST['company_address']
    companyPhone = request.POST['company_phone']
    companyNit = request.POST['company_nit']

    sessionData = serializers.deserialize('json', request.session['company'])

    for i in sessionData:
        companySession = i.object

    company = Company.objects.get(id=companySession.pk)

    if company:
        company.nit = companyNit
        company.name = companyName
        company.address = companyAddress
        company.phone = companyPhone
        company.email = companyEmail
        
        if companyPassword:
            company.password = companyPassword

        company.save()

        return JsonResponse({'message': 'Company updated successfully'}, safe=False)


    return render(request, 'index.html')


def getProfileData(request):
    sessionData = serializers.deserialize('json', request.session['company'])

    for i in sessionData:
        company = i.object

    try:
        companyData = Company.objects.get(id=company.pk)
    except Company.DoesNotExist:
        raise Http404

    companyJson = serializers.serialize("json", [companyData])

    return JsonResponse(companyJson, safe=False)

    pass


def logout(request):

    try:
        del request.session['company']
    except KeyError:
        pass

    return redirect('/')
