import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableRowComponent} from "../table/table-row/table-row.component";
import {TableComponent} from "./table.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableRowComponent],
  exports: [TableRowComponent]
})
export class TableModule { }
