import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
const routes: Routes = [
  {
    path:'', pathMatch: 'full', redirectTo:'login'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'profile', component: ProfileComponent
  },
  {
    path:'**', redirectTo:'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
