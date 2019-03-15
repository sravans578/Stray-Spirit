import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { PetlistingComponent } from './petlisting/petlisting.component';
import { ProductlistingComponent } from './productlisting/productlisting.component';

import { PetProfilePageComponent } from './pet-profile-page/pet-profile-page.component';
import { WhyAdoptCatComponent } from './why-adopt-cat/why-adopt-cat.component';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { ProfileInventoryComponent } from './profile-inventory/profile-inventory.component';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import {ProductDetailPageComponent} from './product-detail-page/product-detail-page.component';
import { WhyadoptdogComponent } from './whyadoptdog/whyadoptdog.component';
import { ContactComponent } from './contact/contact.component';


import { LoginDheerajComponent } from './login-dheeraj/login-dheeraj.component';


import { ForgotComponent} from './forgot-pwd/forgot.component';
import {RegistrationAdityaComponent} from './registration-aditya/registration-aditya.component';
import { RegisterAparnaComponent } from './register_aparna/register_aparna.component';
import { RescueComponent } from './rescue/rescue.component'; 
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'pets', component:  PetlistingComponent },
  { path: 'shop', component: ProductlistingComponent},
  { path: 'pet-profile-page',component: PetProfilePageComponent},
  { path:'why-adopt-cat' ,component:WhyAdoptCatComponent},
  { path: 'why-adopt-dog',component:WhyadoptdogComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'register-aparna', component: RegisterAparnaComponent },

  { path: 'login-Dheeraj',component:LoginDheerajComponent},
  { path: 'rescue', component: RescueComponent },


  {path: 'forgot-pwd',component:ForgotComponent},

  {path:'registration-aditya',component:RegistrationAdityaComponent},


  // Implemented nested routes https://angular-2-training-book.rangle.io/handout/routing/child_routes.html
  { path:'profile', 
    component:ProfileNavComponent,
     canActivate:[AuthGuard],
    children: [
      { path: '', component: ProfileHomeComponent },
      { path: 'inventory', component: ProfileInventoryComponent }
    ]
  },
  {path:'product-detail',component:ProductDetailPageComponent},
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
