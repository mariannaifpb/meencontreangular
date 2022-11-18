import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {   Routes } from "@angular/router";
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import {MatCardModule} from '@angular/material/card';

//import { CardActionsComponent } from './produtos/card-actions/card-actions.component';//
import {HeaderComponent} from "./produtos/header/header.component";

const routes: Routes =[
  //{ path: 'cardactions', component: CardActionsComponent}//
  { path: '', component: HeaderComponent}
]
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatToolbarModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
