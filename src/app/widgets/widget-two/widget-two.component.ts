import { Component, OnInit } from '@angular/core';
import {SimpleService} from "../../services/simple.service";

@Component({
  selector: 'app-widget-two',
  templateUrl: './widget-two.component.html',
  styleUrls: ['./widget-two.component.css']
})
export class WidgetTwoComponent implements OnInit {

  constructor(private simpelService : SimpleService) {
     console.log(simpelService.message)
  }

  ngOnInit() {
  }

}
