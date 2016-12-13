import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-widget-one',
  templateUrl: './widget-one.component.html',
  styleUrls: ['./widget-one.component.css']
})


//Presentation Compoenent : Data injected By @Input
export class WidgetOneComponent implements OnInit {

  selected = true;

  @Input() message ;

  constructor() {
  }

  ngOnInit() {
  }

}
