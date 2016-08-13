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
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdCoreModule } from '@angular2-material/core';
import { MdInputModule } from '@angular2-material/input';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdToolbarModule } from '@angular2-material/toolbar';

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
      FormsModule,
      RouterModule,
      MdButtonModule,
      MdCardModule,
      MdCheckboxModule,
      MdCoreModule,
      MdInputModule,
      MdProgressCircleModule,
      MdToolbarModule
    ],
    bootstrap:    [AppComponent],
})
export class AppModule {}
