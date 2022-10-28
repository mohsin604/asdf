import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './main-component/about-us/about-us.component';
import { ContactUsComponent } from './main-component/contact-us/contact-us.component';
import { FooterComponent } from './main-component/footer/footer.component';
import { HeaderComponent } from './main-component/header/header.component';
import { HomeComponent } from './main-component/home/home.component';
import { LoginComponent } from './main-component/login/login.component';
import { ServicesComponent } from './main-component/services/services.component';
import { MainModuleComponent } from './main-module.component';

const routes: Routes = [{ path: '', component: MainModuleComponent, children:[
  {path:'home', component:HomeComponent },
  {path:'', component:HomeComponent },
  {path:'contact-us', component:ContactUsComponent },
  {path:'about-us', component:AboutUsComponent },
  {path:'services', component:ServicesComponent },
  { path: 'login', component:LoginComponent},




]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
