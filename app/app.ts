
import {Component, View, bind} from 'angular2/core';
import {ROUTER_PROVIDERS, RouterOutlet, RouteConfig, RouterLink} from 'angular2/router';

import {LocationStrategy, HashLocationStrategy} from 'angular2/router';

import { Todo } from './components/todo/todo';
import { About } from './components/about/about';

@Component({
	selector: 'my-app'
})
@View({
	templateUrl: './app/app.html',
	directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
	{ path: '/', component: Todo, as: 'Home' },
	{ path: '/about/:id', component: About, as: 'About' }
])
export class AppComponent {
}