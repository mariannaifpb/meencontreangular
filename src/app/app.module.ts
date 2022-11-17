import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { HelloComponent } from "./hello.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes =[
  { path: '', component: HeaderComponent}
]
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent//declaração do módulo criado
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    HelloComponent,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
