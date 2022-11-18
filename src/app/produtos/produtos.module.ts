import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardActionsComponent } from './card-actions/card-actions.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  imports: [
    CommonModule, MatCardModule, MatButtonModule, MatToolbarModule
  ],
  declarations: [HeaderComponent, CardActionsComponent],
  exports: [HeaderComponent, CardActionsComponent]
})
export class ProdutosModule { }
