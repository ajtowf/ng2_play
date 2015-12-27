import {Component, View} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
	selector: 'about'
})
@View({
	template: `
		Welcome to the about page! This is the ID: {{id}}
	`
})
export class About {
	id: string;
	constructor(params: RouteParams) {
		this.id = params.get('id');
	}
}
