import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { BcCardModule } from 'bancolombia-design-system/bc-card';

import { Producto2RoutingModule } from './producto2-routing.module';
import { Producto2Component } from './producto2.component';
import { BcInputModule } from 'bancolombia-design-system/bc-input';

@NgModule({
  declarations: [
    Producto2Component
  ],
  imports: [
    CommonModule,
    Producto2RoutingModule,
    SharedModule,
    BcCardModule,
    BcInputModule
  ]
})
export class Producto2Module { }
