# AngularDatabinding

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

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

---

## Important !!!

### Data Bindng - Property & Event Binding

<ol>
<li>HTML Elements => Native Properties & Events</li>
    Example : {{data}} , [property]="data"

<li>Directives => Custom Properties & Events</li>
    Example : *ngFor , *ngClass , etc.

<li>Components => Custom Properties & Events</li>
    Example : use our Own component and bind to our own custom properties and custom events.
</ol>

---

- EventEmitter , is a generic type which is indicated in TypeScript by using this smaller than and greater than sign and in-between you simply define the type of event data you're going to emit ;; an object in the Angular Framework which allows you to emit your own event.
- Example : serverCreated = new EventEmitter<{serverName: string; serverContent: string}>(); => And should added () to call the constructor of EventEmitter and create a new EventEmitter object which is now stored in serverCreated.

<br>

### Component Communication

- @Input => to make a property bindable from outside ;; The Ability to make your properties bindable from outside from the parent component using this component
- @Output => passing something out of the component, passing our event out of the component.;; Which allows parent components using this component to listen to your own event which you created with new EventEmiiter
