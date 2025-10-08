import { Routes } from '@angular/router';
import { OtpComponent } from 'src/app/pages/auth/otp/otp.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/components/home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  { path: 'otp', component: OtpComponent },
  { path: 'dashboard', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
