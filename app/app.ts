import {Component, View, bootstrap, bind} from 'angular2/angular2';
import {routerInjectables, RouterOutlet, RouteConfig, RouterLink} from 'angular2/router'

import {LocationStrategy, HTML5LocationStrategy, HashLocationStrategy} from 'angular2/router'

import { todo } from './components/todo/todo';
import { about } from './components/about/about';

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
	{ path: '/', component: todo, as: 'home' },
	{ path: '/about/:id', component: about, as: 'about' }
])
class AppComponent {
	
}

bootstrap(AppComponent, [
	routerInjectables, 
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);