import { enableProdMode } from '@angular/core';
import {bind, provide} from '@angular/core';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AppComponent, environment} from './app';

import {provideForms, disableDeprecatedForms} from '@angular/forms';

import {APP_ROUTER_PROVIDER, AuthGuard} from './app';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import { bootstrap } from '@angular/platform-browser-dynamic';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS,
	APP_ROUTER_PROVIDER,
	bind(LocationStrategy).toClass(HashLocationStrategy),
  provide(AuthConfig, { useFactory: () => {
    return new AuthConfig();
  }}),
  AuthHttp,
  AuthGuard
]);