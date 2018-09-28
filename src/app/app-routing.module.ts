import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './core/login.guard';
import { UserResolver } from './components/user/user.resolver';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AuthGuard} from './core/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [LoginGuard] },
  { path: 'comments', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
