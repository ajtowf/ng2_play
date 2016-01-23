import {Component, View} from 'angular2/core';
import {CanActivate} from 'angular2/router';
import {tokenNotExpired} from 'angular2-jwt';

@Component({
	selector: 'profile'
})
@View({
	template: `
	 Hello {{profile.name}}
   <img src="{{profile.picture}}">
	`
})
@CanActivate(() => tokenNotExpired())
export class Profile {
  profile: any;

  constructor() {
    this.profile = JSON.parse(localStorage.getItem('profile'));

    console.log(this.profile);
  }
}
