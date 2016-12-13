import {Component, OnInit, Inject, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  encapsulation : ViewEncapsulation.Native,
  selector: 'app-simple-form',
  template: `
   <div>
        <input #myInput type="text" [(ngModel)]="text"
        [ngClass]="{mousedown: isMousedown}"        
        (mousedown)="isMousedown = true"
        (mouseup)="isMousedown = false"
         (mouseleave)="isMousedown =false"
        >
        <!--<button (click)="onClick($event, myInput.value)"> Test me ! </button>-->
        <button (click)="update.emit({text : text})" class="bg-dark-red courier"> Test me ! </button>
        {{text}}
    </div>
  `,
  styles: [
    `:host{
           display: flex;
           flex-direction: column;
     }
     input:focus {
           font-weight: bold;
           outline: none;
     }
     button {
           border: none;
     }
     
     .mousedown {
          border: 2px solid red;
     }
    `
  ]
})
export class SimpleFormComponent implements OnInit {

  @Input() text;
  @Output() update = new EventEmitter();

  constructor() {
    // setInterval(() => this.text = Math.random().toString(),1000);
  }

  ngOnInit() {
  }

  onClick(event, value) {
    console.log(event);
    console.log(value);
  }


  //change style conditionnaly
  isMousedown;


}
