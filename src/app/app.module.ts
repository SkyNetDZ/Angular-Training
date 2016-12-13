import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MailService } from "./mail.service";
import { CommonModule } from "@angular/common";
import { TreeGridModule } from "./tree-grid/tree-grid.module";
import {ServicesModule} from "./services/services.module";
import {WidgetOneComponent} from "./widgets/widget-one/widget-one.component";
import {WidgetTwoComponent} from "./widgets/widget-two/widget-two.component";
import {WidgetThreeComponent} from "./widgets/widget-three/widget-three.component";
import {TreeModule} from "./tree/tree.module";
import {TreeComponent} from "./tree/tree.component";

@NgModule({
  entryComponents: [WidgetThreeComponent],
  declarations: [
    AppComponent,
    SimpleFormComponent,
    WidgetOneComponent,
    WidgetTwoComponent,
    WidgetThreeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    TreeGridModule,
    ServicesModule.forRoot(),
    TreeModule
  ],
  providers: [
    { provide: 'mail', useClass: MailService },
    { provide: 'api', useValue: 'test !!!!' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
