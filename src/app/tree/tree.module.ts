import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree.component';
import { TreeViewComponent } from './tree-view/tree-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TreeComponent, TreeViewComponent],
  exports: [TreeComponent, TreeViewComponent]
})
export class TreeModule { }
