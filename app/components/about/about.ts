import {Component} from '@angular/core';
import { Router, RouteSegment, RouteTree, OnActivate } from '@angular/router';

@Component({
	selector: 'about',
  template: `
		Welcome to the about page! This is the ID: {{id}}
	`
})
export class About implements OnActivate {
	id: string;

	constructor(private router: Router) {
	}

	routerOnActivate(
      current: RouteSegment,
      prev?: RouteSegment,
      currTree?: RouteTree,
      prevTree?: RouteTree) {
		this.id = current.getParam('id');
	}
}
