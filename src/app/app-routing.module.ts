import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
const routes: Routes = [
  { path: 'login', component: LoginComponent, ...canActivate(redirectLoggedInTo(['comments'])) },
  { path: 'comments', component: DashboardComponent, ...canActivate(redirectUnauthorizedTo(['login'])) },
  { path: '', redirectTo: 'comments', pathMatch: 'full' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
