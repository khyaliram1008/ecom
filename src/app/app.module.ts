import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StudentComponent } from './student/student.component';
import { ChildernComponent } from './childern/childern.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    ChildernComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule,
     NgbAlertModule,
     NgbModule,
     FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
