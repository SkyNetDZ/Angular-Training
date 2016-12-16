import {Component, OnInit, Input, ContentChildren, QueryList, ElementRef} from '@angular/core';
import {Directory} from "../model/Directory";

@Component({
  selector: 'app-table-row',
  templateUrl: 'table-row.component.html',
  styleUrls: ['table-row.component.css']
})
export class TableRowComponent {

  @Input() children: Array<Directory>;

  @Input() padding: number ;

  @ContentChildren('row') items: QueryList<ElementRef>;

  constructor() {
  }

  ngAfterContentInit() {
    console.log(this.items);
  }

}
