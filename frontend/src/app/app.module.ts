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
<<<<<<< HEAD
<<<<<<< HEAD
import { ForgotComponent } from './forgot-pwd/forgot.component';
=======
import { RegistrationAdityaComponent } from './registration-aditya/registration-aditya.component';

>>>>>>> cdc0e3f3d5add57e0af7f9a0dafe9634f6f4a79d
=======

import { ForgotComponent } from './forgot-pwd/forgot.component';

import { RegistrationAdityaComponent } from './registration-aditya/registration-aditya.component';


>>>>>>> 89bfa5e7ea1070153a1f039100f33098568e3c6a
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
<<<<<<< HEAD
<<<<<<< HEAD
    ForgotComponent
=======
    RegistrationAdityaComponent
>>>>>>> cdc0e3f3d5add57e0af7f9a0dafe9634f6f4a79d
=======
    ForgotComponent,
    RegistrationAdityaComponent

>>>>>>> 89bfa5e7ea1070153a1f039100f33098568e3c6a
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
