import {
  Component, OnInit, ViewChild, ViewContainerRef, Input, ComponentFactoryResolver,
  ContentChild, ContentChildren, QueryList, ElementRef
} from '@angular/core';
import {Directory} from "./model/Directory";
import {TableColumnComponent} from "./table-column/table-column.component";
import {TableCellComponent} from "./table-cell/table-cell.component";
import {forEach} from "@angular/router/src/utils/collection";
import {TableRowComponent} from "./table-row/table-row.component";

@Component({
  selector: 'app-table',
  // templateUrl: './table.component.html',
  template: `<h2>My Table</h2>
<button (click)="onClickAddRow()">add row</button>
<button (click)="onClickAddColumn()">add column</button>
<button (click)="onClickDeleteColumn()">delete column</button>
<div class="rTable" #table>
  <div class="rTableRow" #header>
    <div class="rTableHead">Compteur
    <app-filter></app-filter>
    </div>
    <div class="rTableHead"><span style="font-weight: bold;">Description</span><app-filter></app-filter></div>
  </div>
  <app-table-row [children]="children" [padding]="20"></app-table-row>
</div>`,
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  children: [Directory];

  @ViewChild('table', {read: ViewContainerRef}) container;

  @ViewChild('header', {read: ViewContainerRef}) header;

  @ViewChild(TableRowComponent, {read: ViewContainerRef}) row;

  @ViewChild('column') column;


  widgetRef;
  widgetRef2;

  numbreLignes: number;

  numberColumns: number;

  constructor(private resolver: ComponentFactoryResolver) {
    let music = new Directory('Compteur Z', [], ['song1.mp3', 'song2.mp3']);
    let fall2014 = new Directory('Compteur W', [], ['image1.jpg', 'image2.jpg', 'image3.jpg']);
    let summer2014 = new Directory('Compteur Y', [music], ['image10.jpg', 'image20.jpg', 'image30.jpg']);
    let pics = new Directory('Compteur X', [summer2014, fall2014], []);
    this.children = [pics];
  }

  ngOnInit() {
    // console.log(this.contentChildren);
  }

  onClickAddRow() {
  }

  ngAfterViewInit() {
  }

  onClickAddColumn() {
    const factory = this.resolver.resolveComponentFactory(TableColumnComponent);
    this.widgetRef = this.header.createComponent(factory);

    //insert TableCellCompoenent as last child foreach TableRowCompoenent
    const factory2 = this.resolver.resolveComponentFactory(TableCellComponent);
    this.widgetRef2 = this.row.createComponent(factory2);


    //this.widgetRef.instance.message = "I'm last";


    // this.container.insert(this.widgetRef.hostView,0); // move comp
  }

  onClickDeleteColumn() {
  }

  toggleFilter() {

  }

  ngAfterContentInit() {


  }
}
