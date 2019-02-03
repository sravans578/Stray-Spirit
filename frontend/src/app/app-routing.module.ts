import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'StraySpirit - Home' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login to StraySpirit' }  },
  { path: 'register', component: RegisterComponent, data: { title: 'Register on StraySpirit' }  },
  { path: '**', component: NotfoundComponent, data: { title: 'No Page Found' }  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
