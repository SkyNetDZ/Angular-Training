import {Component, OnInit, Input} from '@angular/core';
import {Directory} from "../model/Directory";

@Component({
  selector: 'app-table-row',
  templateUrl: 'table-row.component.html',
  styleUrls: ['table-row.component.css']
})
export class TableRowComponent implements OnInit {

  @Input() children: Array<Directory>;

  @Input() padding: number ;

  constructor() {
  }

  ngOnInit() {
    console.log(this.children);
  }

}
