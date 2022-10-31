import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModuleComponent } from './admin-module.component';
import { DashboardComponent } from './AdminComponent/dashboard/dashboard.component';
import { ProductsComponent } from './AdminComponent/products/products.component';

const routes: Routes = [{ path: '', component: AdminModuleComponent ,children:[
 {path:'dashboard',component:DashboardComponent},
 {path:'products',component:ProductsComponent},
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
