import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginMarleeComponent} from "./login-marlee/login-marlee.component";
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { HomeMarleeComponent } from './home-marlee/home-marlee.component';
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
import { ProfilePetAdsComponent } from './profile-pet-ads/profile-pet-ads.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { ProfileEventComponent } from './profile-event/profile-event.component';
import { EditPetsComponent } from './edit-pets/edit-pets.component';
import { EventListComponent } from './event-list/event-list.component';
import { AdoptionFormComponent } from './adoption-form/adoption-form.component';
import { MyAdoptionsComponent } from './my-adoptions/my-adoptions.component';
import { EditInventoryComponent } from './edit-inventory/edit-inventory.component';
import { AdoptionRequestComponent } from './adoption-request/adoption-request.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

import { AdminUserManagementComponent} from "./admin-user-management/admin-user-management.component";
import { AdminApproveContentComponent} from "./admin-approve-content/admin-approve-content.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home_marlee', component: HomeMarleeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login_marlee', component: LoginMarleeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'pets', component:  PetlistingComponent },
  { path: 'shop', component: ProductlistingComponent },
  { path: 'pet-profile/:id',component: PetProfilePageComponent},
  { path:'why-adopt-cat' ,component:WhyAdoptCatComponent},
  { path: 'why-adopt-dog',component:WhyadoptdogComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'register-aparna', component: RegisterAparnaComponent },
  { path: 'event-list', component: EventListComponent },
  { path: 'user_management', component: AdminUserManagementComponent },
  { path: 'approve_content', component: AdminApproveContentComponent },

  { path: 'login-Dheeraj',component:LoginDheerajComponent},
  { path: 'rescue', component: RescueComponent },


  {path: 'forgot-pwd',component:ForgotComponent},

  {path:'confirmation/:token',component:ConfirmationComponent},
  {path:'event-detail/:id',component:EventDetailComponent},
  {path:'adopt/:id',component:AdoptionFormComponent, canActivate:[AuthGuard]},


  // Implemented nested routes https://angular-2-training-book.rangle.io/handout/routing/child_routes.html
  { path:'profile',
    component:ProfileNavComponent,
     canActivate:[AuthGuard],
    children: [
      { path: '', component: ProfileHomeComponent },
      { path: 'inventory', component: ProfileInventoryComponent },
      { path: 'my-pet-ads', component: ProfilePetAdsComponent },
      { path: 'my-events', component: ProfileEventComponent },
      { path: 'edit-pet/:id', component: EditPetsComponent },
      {path: 'edit-inventory/:id', component: EditInventoryComponent},
      { path: 'my-adoptions', component: MyAdoptionsComponent },
      { path: 'adoption-request/:id', component: AdoptionRequestComponent }
    ]
  },
  {path:'product/:id',component:ProductDetailPageComponent},
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
