import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MailService } from "./mail.service";
import { CommonModule } from "@angular/common";
import {ServicesModule} from "./services/services.module";
import {WidgetOneComponent} from "./widgets/widget-one/widget-one.component";
import {WidgetTwoComponent} from "./widgets/widget-two/widget-two.component";
import {WidgetThreeComponent} from "./widgets/widget-three/widget-three.component";
import {TableRowComponent} from "./table/table-row/table-row.component";
import {TableComponent} from "./table/table.component";
import {FilterComponent} from "./table/filter/filter.component";
import {TableColumnComponent} from "./table/table-column/table-column.component";
import {TableModule} from "./table/table.module";

@NgModule({
  entryComponents: [WidgetThreeComponent,TableColumnComponent],
  declarations: [
    AppComponent,
    SimpleFormComponent,
    WidgetOneComponent,
    WidgetTwoComponent,
    WidgetThreeComponent,
    TableRowComponent,
    TableComponent,
    FilterComponent,
    TableColumnComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ServicesModule.forRoot()
  ],
  providers: [
    { provide: 'mail', useClass: MailService },
    { provide: 'api', useValue: 'test !!!!' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
