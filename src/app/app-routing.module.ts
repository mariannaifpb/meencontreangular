import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardActionsComponent } from './produtos/card-actions/card-actions.component';
import { HeaderComponent } from './produtos/header/header.component';

const routes: Routes = [
  {
    path: 'cardactions',
    component: CardActionsComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
