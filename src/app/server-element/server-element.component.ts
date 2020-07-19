import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterContentChecked,
    OnDestroy {
  @Input('srvElements') element: {
    type: string;
    name: string;
    content: string;
  };
  @Input() name: string;

  constructor() {
    console.log('constructor called !');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called !');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called !');
  }

  ngDoCheck() {
    console.log('ngDoCheck called !');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called !');
    // Called after DoCheck and it called once , cant be multiple because it doesn't get initialized again.
    // Content is the thing we projected into this through ng-content
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called !');
    // Called again after DoCheck , which make sense because it is called after each change detection cycle.
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called !');
    // Called after AfterContentChecked
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called ! ');
    // Called after AfterContentChecked
  }

  ngOnDestroy() {}
}
