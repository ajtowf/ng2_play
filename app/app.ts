import {Component, bind, NgZone} from '@angular/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';
import {Location} from '@angular/common';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { Todo } from './components/todo/todo';
import { About } from './components/about/about';
import { Profile } from './components/profile/profile';

import {MdToolbar} from '@angular2-material/toolbar';

declare var Auth0Lock;

@Component({
	selector: 'my-app',
  templateUrl: './app/app.html',
  styleUrls: ['./app/app.css'],
	directives: [ROUTER_DIRECTIVES, MdToolbar]
})
@Routes([
	{ path: '/', component: Todo },
	{ path: '/about/:id', component: About },
  { path: '/profile', component: Profile}
])
export class AppComponent {
    lock = new Auth0Lock('T1wdQrDposGW5BisaKViC0Cu9CuxtR0c', 'towfeek.eu.auth0.com');
    jwtHelper: JwtHelper = new JwtHelper();
    location: Location;
    ngZone: NgZone;

    constructor(
      location: Location,
      ngZone: NgZone) {
        this.location = location;
        this.ngZone = ngZone;
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

        this.ngZone.run(() => self.loggedIn());
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