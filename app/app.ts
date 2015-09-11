import {Component, View, bootstrap, bind} from 'angular2/angular2';
import {ROUTER_BINDINGS, RouterOutlet, RouteConfig, RouterLink} from 'angular2/router';

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
					<li><a [router-link]="['/home']">Todo</a></li>
					<li><a [router-link]="['/about', {'id': 'Hello world'}]">About</a></li>
				</ul>
			</nav>
			<router-outlet></router-outlet>
		</div>
	`,
	directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
	{ path: '/', component: Todo, as: 'home' },
	{ path: '/about/:id', component: About, as: 'about' }
])
class AppComponent {

}

bootstrap(AppComponent, [
	ROUTER_BINDINGS,
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);
