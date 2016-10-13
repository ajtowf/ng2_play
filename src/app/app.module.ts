import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { Ng2PlayRoutingModule } from './app-routing.module';

import { HomeComponent } from './home';
import { TodoComponent } from './todo';
import { AboutComponent } from './about';
import { ProfileComponent } from './profile';
import { MaterialComponent } from './material/material.component';

import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AuthGuard } from './auth-guard';
import { DataService } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    AboutComponent,
    ProfileComponent,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    Ng2PlayRoutingModule
  ],
  providers: [
    {
      provide: AuthConfig,
      useFactory: () => {
        return new AuthConfig();
      },
      deps: [Http]
    },
    AuthHttp,
    AuthGuard,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
