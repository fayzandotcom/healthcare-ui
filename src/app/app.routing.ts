import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/index';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PublicLayoutComponent } from './_layout/public-layout/public-layout.component';
import { SecureLayoutComponent } from './_layout/secure-layout/secure-layout.component';

const routes: Routes = [

    { path: '',               redirectTo: 'dashboard', pathMatch: 'full' },
    // public routes
    {
      path: '',
      component: PublicLayoutComponent,
      children: [
        { path: 'login', component: LoginComponent },
        { path: 'logout', component: LoginComponent },
        { path: 'sign-up', component: SignUpComponent },
      ]
    },
    // secure routes
    {
      path: '',
      component: SecureLayoutComponent,
      canActivate: [AuthGuard],
      children: [
        { path: 'dashboard',      component: DashboardComponent },
        { path: 'doctor-detail/:doctorUid', component: DoctorDetailComponent },
        { path: 'icons',          component: IconsComponent },
        { path: 'maps',           component: MapsComponent },
        { path: 'notifications',  component: NotificationsComponent },
        { path: '',      component: DashboardComponent },
      ]
    },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
