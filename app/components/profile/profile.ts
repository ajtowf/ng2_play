import {Component, View, OnInit, OnDestroy, AfterContentInit} from 'angular2/core';
import {CanActivate} from 'angular2/router';
import {tokenNotExpired} from 'angular2-jwt';
import {AuthHttp} from 'angular2-jwt';

@Component({
	selector: 'profile'
})
@View({
	template: `
	 <img src="{{profile.picture}}" style="width: 50px" /> {{profile.name}}    
   <h2>Chuck quote of the day</h2>
   {{quote}}
	`
})
@CanActivate(() => tokenNotExpired())
export class Profile implements OnInit, OnDestroy, AfterContentInit {
  profile: any;
  quote: any;

  constructor(public authHttp: AuthHttp) {
  }

  ngOnInit(): void {
    console.log('ngOnInit() called');
    this.profile = JSON.parse(localStorage.getItem('profile'));
    this.getSecretThing();
  }

  ngOnDestroy() : void {
    console.log('ngOnDestroy() called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit() called');
  }

  getSecretThing() {
    this.authHttp.get('http://localhost:3002/api/quote')
      .subscribe(
        data => {
          console.log(data.json());
          this.quote = data.json();
        },
        err => console.log(err),
        () => console.log('Complete')
      );
  }
}
