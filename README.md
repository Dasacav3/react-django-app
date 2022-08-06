# React + Django Application

This application was developed using the React.js library for the frontend and the Django framework for the backend. For data persistence, a connection to a PostgreSQL database is used, which is executed from a Docker container.

## Requirements

- Node.js (<= 16.x)
- Python (>= 3.6)
- Docker (>= 17.x) optional
-Django (>= 4.0)

## Installation

To install this application locally, follow the steps described below:

1. Clone the application repository: `git clone`
2. Enter the application folder: `cd react-django-app` and within the same run the command `python manage.py migrate` to create the database tables.
3. Now we go to the folder where the app frontend is located `cd ../reactapp` and run the `npm install` command to install the app dependencies.
4. We add an .env file with the environment variable `REACT_APP_URL` with the value of the application's backend URL.
5. After this we execute the command `npm run build` to generate the static files of the application.
6. Lastly, we need to run the `python manage.py runserver` command to get the development server started.
7. Finally we can enter and test the application in the browser.


### __@author__ Dasacav3
