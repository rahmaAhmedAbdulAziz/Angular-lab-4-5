import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoFoundComponent } from './no-found/no-found.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { RegisterComponent } from './register/register.component';
import { SallesDetailesComponent } from './salles-detailes/salles-detailes.component';
import { SallesListComponent } from './salles-list/salles-list.component';

const routes: Routes = [
  { path: '', component: SallesListComponent },
   { path: 'product-details/:id', component: SallesDetailesComponent },


  // {
  //   path:'Products' ,
  //   children:[{path:'' , component:ProductListComponent},
  //   {
  // {
  //   path:'Cart' , component:CartComponent,
  //   canActivate:[AuthGuardGuard]
  // },
  {
    path:'' , component:SallesListComponent
  },
  {
    path:'Login' , component:PageLoginComponent
  },
  {
    path:'Register' , component:RegisterComponent
  },
  {
    path:'**' , component:NoFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
