import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { RegisterComponent } from './register/register.component';
import { SallesComponent } from './salles/salles.component';
import { SallesDetailesComponent } from './salles-detailes/salles-detailes.component';
import { SallesListComponent } from './salles-list/salles-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    NavbarComponent,
    NoFoundComponent,
    RegisterComponent,
    SallesComponent,
    SallesDetailesComponent,
    SallesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
