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
import { ReactiveFormsModule , FormsModule  } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { PetProfilePageComponent } from './pet-profile-page/pet-profile-page.component';
<<<<<<< HEAD
import { WhyAdoptCatComponent } from './why-adopt-cat/why-adopt-cat.component';
=======
>>>>>>> b792a91fcf173f30d69c16e7a2a10e39c03ae0f5
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    HomeComponent,
<<<<<<< HEAD
    PetProfilePageComponent,
    WhyAdoptCatComponent
=======
    PetProfilePageComponent
>>>>>>> b792a91fcf173f30d69c16e7a2a10e39c03ae0f5
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
