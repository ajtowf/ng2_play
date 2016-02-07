import {bootstrap} from 'angular2/platform/browser';
import {bind, provide} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {AppComponent} from './app';

import {HTTP_PROVIDERS, Http} from 'angular2/http';
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