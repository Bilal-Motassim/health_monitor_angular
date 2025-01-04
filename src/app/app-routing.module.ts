import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { DetailsComponent } from './details/details.component';
import { ScanMealsComponent } from './scan-meals/scan-meals.component';
import { RepportComponent } from './repport/repport.component';

const routes: Routes = [
  {
    path: 'signin', component: SigninComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'details', component: DetailsComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'scanMeals', component: ScanMealsComponent
  },
  {
    path: 'repport', component: RepportComponent
  },
  // Default route to redirect to sign-in page
  {
    path: '', redirectTo: '/signin', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
