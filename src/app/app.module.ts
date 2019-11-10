import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiblingComponent } from './sibling/sibling.component';
import { MessengerService } from './messenger.service';
import { Sib2Component } from './sib2/sib2.component';
import { Sib3Component } from './sib3/sib3.component';

@NgModule({
  declarations: [
    AppComponent,
    SiblingComponent,
    Sib2Component,
    Sib3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MessengerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
