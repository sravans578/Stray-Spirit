import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { PetProfilePageComponent } from './pet-profile-page/pet-profile-page.component';
<<<<<<< HEAD
import { WhyAdoptCatComponent } from './why-adopt-cat/why-adopt-cat.component';
=======
>>>>>>> b792a91fcf173f30d69c16e7a2a10e39c03ae0f5

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'pet-profile-page',component: PetProfilePageComponent},
<<<<<<< HEAD
  { path:'why-adopt-cat' ,component:WhyAdoptCatComponent},
=======
>>>>>>> b792a91fcf173f30d69c16e7a2a10e39c03ae0f5
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
