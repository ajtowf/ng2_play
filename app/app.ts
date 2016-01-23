
import {Component, View, bind} from 'angular2/core';
import {ROUTER_PROVIDERS, RouterOutlet, RouteConfig, RouterLink, Location} from 'angular2/router';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';
import {LocationStrategy, HashLocationStrategy} from 'angular2/router';

import { Todo } from './components/todo/todo';
import { About } from './components/about/about';
import { Profile } from './components/profile/profile';

declare var Auth0Lock;

@Component({
	selector: 'my-app'
})
@View({
	templateUrl: './app/app.html',
	directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
	{ path: '/', component: Todo, as: 'Home' },
	{ path: '/about/:id', component: About, as: 'About' },
  { path: '/profile', component: Profile, as: 'Profile' }
])
export class AppComponent {
    lock = new Auth0Lock('T1wdQrDposGW5BisaKViC0Cu9CuxtR0c', 'towfeek.eu.auth0.com');
    jwtHelper: JwtHelper = new JwtHelper();
    location: Location;
    constructor(location: Location) {
        this.location = location;
    }

    login() {
      var self = this;
      this.lock.show((err: string, profile: string, id_token: string) => {
        if (err) {
          throw new Error(err);
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.setItem('id_token', id_token);

        console.log(
          this.jwtHelper.decodeToken(id_token),
          this.jwtHelper.getTokenExpirationDate(id_token),
          this.jwtHelper.isTokenExpired(id_token)
        );

        self.loggedIn();
      });
    }

    logout() {
      localStorage.removeItem('profile');
      localStorage.removeItem('id_token');

      this.loggedIn();
    }

    loggedIn() {
      return tokenNotExpired();
    }

    isActive(path) {
        return this.location.path() === path;
    }
}