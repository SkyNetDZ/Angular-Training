import {Component, OnInit, Input} from '@angular/core';
import {Directory} from "../Directory";

@Component({
  selector: 'app-table-row',
  // templateUrl: 'table-row.component.html',
  template: `
   <div class="rTableRow" *ngFor="let dir of directories">
    <div class="rTableCell">
      <span><input type="checkbox" [checked]="dir.checked" (click)="dir.check()"/></span>
      <span (click)="dir.toggle()">{{ dir.name }}</span>
    </div>
    <div class="rTableCell">balabala</div>
          <div *ngIf="dir.expanded">
          <app-table-row [directories]="dir.directories"></app-table-row>
        <div class="rTableRow" *ngFor="let file of dir.files">
          <div class="rTableCell" >{{file}}</div>
        </div>
      </div>
  </div>`,
  styleUrls: ['table-row.component.css']
})
export class TableRowComponent implements OnInit {

  @Input() directories: Array<Directory>;

  constructor() {
  }

  ngOnInit() {
    console.log(this.directories);
  }


}
