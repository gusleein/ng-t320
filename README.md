# Ng T3.20

В рамках тестового задания предлагается разработать SPA приложение на фреймворке Angular 8+.

Требования к приложению:
  - опубликовано в публичном доступе (StackBlitz или GitHub|GitLab|Bitbucket)
  - поддержка актуальных версий Chrome, Firefox
  - использование SCSS|LESS

Приложение состоит из общего layout с единой шапкой и контентной области.
  - При прокручивании страницы, шапка всегда остается на месте.
  - На первой странице необходимо вывести список разделов.
  - На второй странице, после выбора раздела, необходимо вывести список его элементов.
  - В именах элементом могут встречаться числа, поэтому они должны быть натурально отсортированными
       например: element 1, element 2…element 10
  - Приложение должно поддерживать отображение активной страницы даже после обновления (перезагрузки) страницы
  - Приложение должно поддерживать навигацию через историю браузера (вперед/назад)
  - Тестовый набор данных для списка разделов/элементов можно генерировать на стороне клиента
    - Список элементов для каждого раздела должен быть свой
  - Компоненты получают данные только с помощью сервиса, имеющего следующий интерфейс:

   interface DataService<T extends { id: number }> {
     get(id: number): Promise<T>;
     query(): Promise<T[]>;
     delete(id: number): Promise<void>;
   }

Интерактивный макет доступен по адресу: https://www.figma.com/file/NjxyB2D0mh4IB7HsA4dxSw/ТЗ.20



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
