import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeGridComponent } from './tree-grid.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TreeGridComponent],
  exports:[TreeGridComponent]
})
export class TreeGridModule { }
