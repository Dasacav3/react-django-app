# React + Django App

Esta aplicación fue desarrollada utilizando la libreria React.js para el frontend y el framework Django para el backend. Para la persistencia de los datos se utilizo una conexión a una base de datos PostgreSQL la cual se ejecuta desde un contenedor Docker.

## Requerimientos

- Node.js (<= 16.x)
- Python (>= 3.6)
- Docker (>= 17.x) opcional
- Django (>= 4.0)

## Instalación

Para realizar la instalación de esta aplicación de manera local, se deben seguir los pasos que se describen a continuación:

1. Clonar el repositorio de la aplicación: `git clone`
2. Ingresar a la carpeta de la aplicación: `cd react-django-app` y dentro de la misma ejecutar el comando `python manage.py migrate` para crear las tablas de la base de datos.
3. Ahora ingresamos a la carpeta donde se encuentra en frontend de la app `cd ../reactapp` y ejecutamos el comando `npm install` para instalar las dependencias de la aplicación.
4. Agregamos un archivo .env con la variable de entorno `REACT_APP_URL` con el valor de la URL del backend de la aplicación.
5. Luego de esto ejecutamos el comando `npm run build` para generar los archivos estaticos de la aplicación.
6. Por ultimo debemos ejecutar el comando `python manage.py runserver` para que el servidor de desarrollo inicie.
7. Finalmente podemos ingresar y testear la aplicación en el navegador.


### __@author__ Dasacav3