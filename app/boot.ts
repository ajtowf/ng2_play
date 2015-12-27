import {bootstrap} from 'angular2/platform/browser';
import {bind} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {AppComponent} from './app';

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);