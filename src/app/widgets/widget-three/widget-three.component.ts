import {Component, OnInit, Renderer, ViewChild, Input} from '@angular/core';

@Component({
  selector: 'app-widget-three',
  templateUrl: './widget-three.component.html',
  styleUrls: ['./widget-three.component.css']
})
export class WidgetThreeComponent implements OnInit {

  @ViewChild('MyInput') input; // Référence

  @Input() message = 'default message';

  constructor(private renderer : Renderer) {// Renderer pour un accée sécurisé à l'élement
  }

  ngAfterViewInit(){
    this.renderer.invokeElementMethod(
      this.input.nativeElement,
      'focus',
      []
    )
  }

  ngOnInit() {
  }

}
