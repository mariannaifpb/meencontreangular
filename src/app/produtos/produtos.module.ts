import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardActionsComponent } from './card-actions/card-actions.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [HeaderComponent, CardActionsComponent],
  imports: [CommonModule, BrowserAnimationsModule, MaterialModule],
  exports: [HeaderComponent, CardActionsComponent],
})
export class ProdutosModule {}
