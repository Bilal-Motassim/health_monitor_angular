import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path : "signin", component: SigninComponent

  },
  {
    path : "signup", component: SignupComponent

  },
  {
    path : "details", component: DetailsComponent

  }
  //{path: "", redirectTo: "signin", pathMatch : 'full'}
 /* {
    path : "admin", component: AdminComponent, children:[
        {
    path : "signin", component: SigninComponent

  },
  {
    path : "signup", component: SignupComponent

  }
    ]

  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
