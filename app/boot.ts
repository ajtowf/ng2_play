/// <reference path="../typings/browser/ambient/es6-shim/index.d.ts" />

import {bootstrap} from '@angular/platform-browser-dynamic';
import {bind, provide} from '@angular/core';
import {ROUTER_PROVIDERS } from '@angular/router';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AppComponent} from './app';

import {HTTP_PROVIDERS, Http} from '@angular/http';
import {AuthHttp, AuthConfig} from 'angular2-jwt';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	bind(LocationStrategy).toClass(HashLocationStrategy),
  provide(AuthConfig, { useFactory: () => {
    return new AuthConfig();
  }}),
  AuthHttp
]);