import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableRowComponent} from "../table/table-row/table-row.component";
import {TableComponent} from "./table.component";
import { FilterComponent } from './filter/filter.component';
import { TableColumnComponent } from './table-column/table-column.component';

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents:[TableColumnComponent],
  declarations: [TableRowComponent, FilterComponent, TableColumnComponent],
  exports: [TableRowComponent]
})
export class TableModule { }
