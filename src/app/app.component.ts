import {
  Component, Inject, ViewChild, ViewContainerRef, ComponentFactoryResolver, ContentChildren,
  QueryList, ElementRef
} from '@angular/core';
import {SimpleService} from "./services/services.module";
import {Resolve} from "@angular/router";
import {WidgetThreeComponent} from "./widgets/widget-three/widget-three.component";
import {TableRowComponent} from "./table/table-row/table-row.component";
import {TestComponent} from "./widgets/test/test.component";

@Component({
  selector: 'app-root',
  template: `
  <!--<ul>-->
    <!--<li *ngFor="let text of mail.texts">-->
    <!--{{text.message}}-->
<!--</li>-->
<!--</ul>-->
  <!--<h1>-->
    <!--<app-simple-form  *ngFor="let text of mail.texts" [text]="text.message" (update)="onUpdate(text.id,$event.text)"></app-simple-form>-->
   <!--</h1>-->
<!--<app-widget-one [message]="simpleService.message"></app-widget-one>-->
<app-widget-two>
     <h2 header>Start</h2>
     <app-widget-one [message]="'I m without service message'" content></app-widget-one>
     <div footer>End</div>
</app-widget-two>
<button (click)="onClick()">Move Component</button>
<div #container></div>
<template #template let-name="name" let-children="children">
    <ul>
    {{name}}
       <li *ngFor="let child of children">
             {{child}}
       </li>
    </ul>
</template>
<app-table>
</app-table>
`,
  styleUrls: ['./app.component.css']
})

//Smart component : Data injected by Service
export class AppComponent {
  @ViewChild('container', { read :ViewContainerRef }) container;

  @ViewChild('template') template;

  widgetRef ;

  constructor(private resolver:ComponentFactoryResolver){

  }
  ngAfterContentInit(){
    const factory = this.resolver.resolveComponentFactory(WidgetThreeComponent);
    this.container.createComponent(factory);
    this.container.createComponent(factory);
    this.container.createComponent(factory);
    this.container.createComponent(factory);
    this.container.createComponent(factory);
    this.container.createComponent(factory);
    this.container.createComponent(factory);
    this.container.createComponent(factory);
    this.container.createComponent(factory);
    this.widgetRef = this.container.createComponent(factory , 5);
    this.widgetRef.instance.message = "I'm last";

  }

  onClick(){
     const randomIndex = Math.floor(Math.random() * this.container.length);
     //this.container.move(this.widgetRef.hostView, randomIndex); // move comp

     // this.container.detach(3);//delete comp

     //Create template dynamicaly
     this.container.createEmbeddedView(this.template, {
          name : "totot",
          children : [
            'titit',
            'titito',
            'tatatat'
          ]
     });


  }

  // constructor( @Inject('mail') private mail, @Inject('api') private api , private simpleService : SimpleService) {
  //
  // }
  //
  // onUpdate(id, msg) {
  //   this.mail.update(id, msg);
  // }

}
