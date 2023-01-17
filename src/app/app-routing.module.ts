import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})



export class AppRoutingModule { }
