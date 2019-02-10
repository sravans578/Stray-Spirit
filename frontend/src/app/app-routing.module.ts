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
<<<<<<< HEAD
import { ForgotComponent} from './forgot-pwd/forgot.component';
<<<<<<< HEAD
=======
import {RegistrationAdityaComponent} from './registration-aditya/registration-aditya.component';
>>>>>>> cdc0e3f3d5add57e0af7f9a0dafe9634f6f4a79d
=======
import {RegistrationAdityaComponent} from './registration-aditya/registration-aditya.component';
>>>>>>> 89bfa5e7ea1070153a1f039100f33098568e3c6a

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'petlisting', component:  PetlistingComponent },
  { path: 'productlisting', component: ProductlistingComponent},
  { path: 'pet-profile-page',component: PetProfilePageComponent},
  { path:'why-adopt-cat' ,component:WhyAdoptCatComponent},
  { path: 'why-adopt-dog',component:WhyadoptdogComponent},
<<<<<<< HEAD
<<<<<<< HEAD
  {path: 'forgot-pwd',component:ForgotComponent},
=======
  {path:'registration-aditya',component:RegistrationAdityaComponent},
>>>>>>> cdc0e3f3d5add57e0af7f9a0dafe9634f6f4a79d
=======

  {path: 'forgot-pwd',component:ForgotComponent},

  {path:'registration-aditya',component:RegistrationAdityaComponent},

>>>>>>> 89bfa5e7ea1070153a1f039100f33098568e3c6a
  // Implemented nested routes https://angular-2-training-book.rangle.io/handout/routing/child_routes.html
  { path:'profile', 
    component:ProfileNavComponent,
    children: [
      { path: '', component: ProfileHomeComponent },
      { path: 'inventory', component: ProfileInventoryComponent }
    ]
  },
  {path:'product-detail-page',component:ProductDetailPageComponent},
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
