import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FlowerComponent } from './flower/flower.component';
import { DetailComponent } from './detail/detail.component';
import { ProductComponent } from './product/product.component';
import { PruductManagerComponent } from './pruduct-manager/pruduct-manager.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'flower', component: FlowerComponent },
  { path: 'maumoi', component: DetailComponent, data: {title: "", type: "maumoi"}},
  { path: 'product', component: ProductComponent },
  { path: 'quanly', component: PruductManagerComponent }
]


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
