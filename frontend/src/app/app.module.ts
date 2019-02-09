import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// https://mdbootstrap.com/docs/angular/
import{ MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule , FormsModule  } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { PetlistingComponent } from './petlisting/petlisting.component';
import { ProductlistingComponent } from './productlisting/productlisting.component';
import { PetProfilePageComponent } from './pet-profile-page/pet-profile-page.component';
import { WhyAdoptCatComponent } from './why-adopt-cat/why-adopt-cat.component';
import { WhyadoptdogComponent } from './whyadoptdog/whyadoptdog.component';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { ProfileInventoryComponent } from './profile-inventory/profile-inventory.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';

import { LoginDheerajComponent } from './login-dheeraj/login-dheeraj.component';


import { ForgotComponent } from './forgot-pwd/forgot.component';

import { RegistrationAdityaComponent } from './registration-aditya/registration-aditya.component';



// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    HomeComponent,
    PetlistingComponent,
    ProductlistingComponent,
    WhyAdoptCatComponent,
    ProfileHomeComponent,
    ProfileNavComponent,
    ProfileInventoryComponent,
    PetProfilePageComponent,
    WhyadoptdogComponent,
    PetProfilePageComponent,
    ProductDetailPageComponent,

    LoginDheerajComponent,

    ForgotComponent,
    RegistrationAdityaComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
