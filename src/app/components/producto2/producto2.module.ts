import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Producto2RoutingModule } from './producto2-routing.module';
import { Producto2Component } from './producto2.component';


@NgModule({
  declarations: [
    Producto2Component
  ],
  imports: [
    CommonModule,
    Producto2RoutingModule
  ]
})
export class Producto2Module { }
