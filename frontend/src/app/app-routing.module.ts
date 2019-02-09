import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterAparnaComponent } from './register_aparna/register_aparna.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RescueComponent } from './rescue/rescue.component'; 
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterAparnaComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'rescue', component: RescueComponent },
  { path: 'inventory', component: InventoryComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
