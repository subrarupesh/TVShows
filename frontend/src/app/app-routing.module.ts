import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { ShowsComponent } from './shows/shows.component';
import { AddShowComponent } from './add-show/add-show.component';
const routes: Routes = [
  {
    path: 'signup', 
    component: SignupComponent
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'add-show', 
    component: AddShowComponent
  },
  {
    path: 'delete-show/:id', 
    component: ShowsComponent
  },
  {
    path: 'my-shows', 
    component: ShowsComponent
  },
  {
    path: 'edit-show/:id', 
    component: ShowsComponent
  },
  {
    path: 'save-recommendation/:id', 
    component: ShowsComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }