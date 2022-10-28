import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HomeComponent } from './main-component/home/home.component';
import { HeaderComponent } from './main-component/header/header.component';
import { FooterComponent } from './main-component/footer/footer.component';
import { ContactUsComponent } from './main-component/contact-us/contact-us.component';
import { AboutUsComponent } from './main-component/about-us/about-us.component';
import { ServicesComponent } from './main-component/services/services.component';
import { LoginComponent } from './main-component/login/login.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    AboutUsComponent,
    ServicesComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
