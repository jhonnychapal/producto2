import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Producto2Component } from './producto2.component';

const routes: Routes = [
  {
    path: '',
    component: Producto2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Producto2RoutingModule { }
