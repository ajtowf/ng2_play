import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app';
import { environment} from './';

import { enableProdMode } from '@angular/core';
import { bind, provide } from '@angular/core';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

import {APP_ROUTER_PROVIDER, AuthGuard} from './';
import {DataService} from './shared';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {AuthHttp, AuthConfig} from 'angular2-jwt';

import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module'

import { Todo } from './todo';
import { About } from './about';
import { Profile } from './profile';

if (environment.production) {
  enableProdMode();
}

@NgModule({
    declarations: [
      AppComponent,
      Todo,
      About,
      Profile
    ],
    providers: [
      APP_ROUTER_PROVIDER,
      bind(LocationStrategy).toClass(HashLocationStrategy),
      provide(AuthConfig, { useFactory: () => {
        return new AuthConfig();
      }}),
      AuthHttp,
      AuthGuard,
      DataService
    ],
    imports:      [
      BrowserModule,
      HttpModule, 
      ReactiveFormsModule,
      RouterModule,
      MaterialModule
    ],
    bootstrap:    [AppComponent],
})
export class AppModule {}
