# DRF_Reactjs_JWTAuthantication: 
Django RestFramework API with JWT Authentication Intergration with Reactjs frontend.
a) DRF API Creation process steps:
1) Create Virtual Environment : python -m venv env_name(any name)
2) Activate venv : env\Scripts\activate
3) Install djangorestframework : pip install djangorestframework
4) create project : djnago-admin startproject project_name
5) create app/module : djnago-admin startapp app_name
6) cd app_name
7) py manage.py migrate
8) py manage.py runserver

b) DRF integration with Reactjs
1) pip install django-cors-headers
2) setting.py :
   INSTALLED_APPS = [ 'corsheaders','rest-framework']
   MIDDLEWARE = [ 'corsheaders.middleware.CorsMiddleware']
   CORS_ORIGION_WHITELIST = ['http://localhost:3000']

c) Frontend Reactjs creation process step
1) npx create-react-app app_name
2) cd app_name
3) npm install bootstrap
4) npm install react-router-dom
5) npm install react-hook-form
6) npm install axios
7) npm start
8) add into package.json file : "proxy":"http://localhost:8000"
