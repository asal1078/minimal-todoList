# TodoList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Run Backend

Install Flask and Flask-SQLAlchemy which is used for our database:

```cmd
$ pip install Flask
$ pip install Flask-SQLAlchemy
```

Run the app:

```cmd
$ python app.py
```

Now you can access it from http://127.0.0.1:5000/

### Task Model

id: int
title: str
detail: text
complete: bool

### Usage
Get http://127.0.0.1:5000/  for get all tasks

POST http://127.0.0.1:5000/add for create new task

GET http://127.0.0.1:5000/update/<task_id> for make a task done or un-complete

GET http://127.0.0.1:5000/delete/<task_id> for delete a task

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
