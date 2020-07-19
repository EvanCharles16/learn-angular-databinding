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

#### Ng-Content

a special directive you can add in the components template, in the place where I want to render the content, I can add ng-content, opening and closing again.

It still is a directive, just using this element like selector and this serves as a hook you can place.

---

## Component LifeCycle

<ol>
<li><b>ngOnChanges</b> (Called after a bound input property changes)</li>
 this may actually be executed multiple times, it's executed right at the start when a new component is created but thereafter, it's also always called whenever one of our bound input properties changes and with that, I mean properties decorated with @input, so whenever these properties received new values.

<li><b>ngOnInit</b> (Called once the component is initialized)</li>
this method gets executed once the component has been initialized. This does not mean that we can see it, it has not been added to the DOM yet so to say, it has not been displayed yet but Angular finished the basic initialization, our properties can now be accessed and initialized for example, so the object was created you could say and if you're interested, ngOnInit will run after the constructor.

<li><b>ngDoCheck</b> (Called during event change detection run)</li>
that will also run multiple times, actually this method will be executed a lot because this will run whenever change detection runs. 
<br/>
ngDoCheck is a great method to use if you want to do something on every change detection cycle, like maybe manually inform Angular about some change it would not be able to detect otherwise, though that is a very advanced use case.

<li><b>ngAfterContentInit</b> (Called after content (ng-content) has been projected to view)</li>
this is called whenever the content which is projected via ng-content has been initialized. So not the view of the component itself but instead you could say the view of the parent component, especially the part which will get added to our component through ng-content.

<li><b>ngAfterContentChecked</b> (Called every time the projected content has been checked)</li>
ngAfterContentChecked is executed whenever change detection checked this content we're projecting into our component.

<li><b>ngAfterViewInit</b> (Called after the component's view (and child views) has been initialized)</li>
ngAfterViewInit is then reached once the view of our own component has been finished initializing, so once our view has been rendered you could say.

<li><b>ngAfterViewChecked</b> (Called every time the view (and child views) has been checked)</li>
ngAfterViewChecked, well that is called whenever our view has been checked, so once we are sure that either all changes which had to be done were displayed in the view or no changes were detected by Angular.
<br/>
if you destroy a component, for example if you placed ngIf on it and this gets then set to false and therefore it removes it from the DOM.

<li><b>ngOnDestroy</b> (Called once the component is about to be destroyed)</li>
ngOnDestroy is called and here's a great place to do some clean up work because this is called right before the object itself will be destroyed by Angular.
</ol>
