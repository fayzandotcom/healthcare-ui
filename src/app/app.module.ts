import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AlertService, AuthenticationService, DashboardService, SignUpService,
        DoctorSearchService } from './_services/index';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PublicLayoutComponent } from './_layout/public-layout/public-layout.component';
import { SecureLayoutComponent } from './_layout/secure-layout/secure-layout.component';

import { AppConfig } from './app.config'

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    DashboardComponent,
    DoctorDetailComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    LoginComponent,
    SignUpComponent,
    PublicLayoutComponent,
    SecureLayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [
    AuthGuard,
    AppConfig,
    AlertService,
    AuthenticationService,
    SignUpService,
    DoctorSearchService,
    DashboardService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
