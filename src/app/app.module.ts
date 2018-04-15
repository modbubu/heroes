import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { FlowerComponent } from './flower/flower.component';
import { DetailComponent } from './detail/detail.component';
import { MaumoiComponent } from './maumoi/maumoi.component';
import { HoatuoiComponent } from './hoatuoi/hoatuoi.component';
import { HoachauComponent } from './hoachau/hoachau.component';
import { KhuyenmaiComponent } from './khuyenmai/khuyenmai.component';
import { MessageService } from './message.service';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { PruductManagerComponent } from './pruduct-manager/pruduct-manager.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    FlowerComponent,
    DetailComponent,
    MaumoiComponent,
    HoatuoiComponent,
    HoachauComponent,
    KhuyenmaiComponent,
    PruductManagerComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ MessageService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
