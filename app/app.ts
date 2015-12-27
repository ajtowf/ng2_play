import {bootstrap} from 'angular2/platform/browser';
import {Component, View, bind} from 'angular2/core';
import {ROUTER_PROVIDERS, RouterOutlet, RouteConfig, RouterLink} from 'angular2/router';

import {LocationStrategy, HashLocationStrategy} from 'angular2/router';

import { Todo } from './components/todo/todo';
import { About } from './components/about/about';

@Component({
	selector: 'app'
})
@View({
	template: `
		<div class="container">
			<nav>
				<ul>
					<li><a [routerLink]="['/Home']">Todo</a></li>
					<li><a [routerLink]="['/About', {'id': 'Hello world'}]">About</a></li>
				</ul>
			</nav>
			<router-outlet></router-outlet>
		</div>
	`,
	directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
	{ path: '/', component: Todo, as: 'Home' },
	{ path: '/about/:id', component: About, as: 'About' }
])
class AppComponent {

}

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);
