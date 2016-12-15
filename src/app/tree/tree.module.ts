import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import {TableRowComponent} from "../table/table-row/table-row.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TreeComponent, TreeViewComponent],
  exports: [TreeComponent, TreeViewComponent]
})
export class TreeModule { }
