import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { PetlistingComponent } from './petlisting/petlisting.component';
import { ProductlistingComponent } from './productlisting/productlisting.component';

=======
import { PetProfilePageComponent } from './pet-profile-page/pet-profile-page.component';
import { WhyAdoptCatComponent } from './why-adopt-cat/why-adopt-cat.component';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { ProfileInventoryComponent } from './profile-inventory/profile-inventory.component';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import {ProductDetailPageComponent} from './product-detail-page/product-detail-page.component';
import { WhyadoptdogComponent } from './whyadoptdog/whyadoptdog.component';
>>>>>>> b6d25899748e34f52002b66007d984968fdc8c03

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
<<<<<<< HEAD
  { path: 'petlisting', component:  PetlistingComponent },
  { path: 'productlisting', component: ProductlistingComponent},
=======
  { path: 'pet-profile-page',component: PetProfilePageComponent},
  { path:'why-adopt-cat' ,component:WhyAdoptCatComponent},
  { path: 'why-adopt-dog',component:WhyadoptdogComponent},
  // Implemented nested routes https://angular-2-training-book.rangle.io/handout/routing/child_routes.html
  { path:'profile', 
    component:ProfileNavComponent,
    children: [
      { path: '', component: ProfileHomeComponent },
      { path: 'inventory', component: ProfileInventoryComponent }
    ]
  },
  {path:'product-detail-page',component:ProductDetailPageComponent},
>>>>>>> b6d25899748e34f52002b66007d984968fdc8c03
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
