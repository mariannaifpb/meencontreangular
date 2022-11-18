import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardActionsComponent } from './card-actions/card-actions.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule, MatCardModule
  ],
  declarations: [HeaderComponent, CardActionsComponent],
  exports: [HeaderComponent, CardActionsComponent]
})
export class ProdutosModule { }