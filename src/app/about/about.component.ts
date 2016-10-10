import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-about',
	template: `
		Welcome to the about page! This is the ID: {{id}}
	`
})
export class AboutComponent implements OnInit {
	id: string;

	constructor(private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.id = this.route.snapshot.params['id'];
		this.route.params
			.map(params => params['id'])
			.subscribe(id => {
				this.id = id;
			});
	}
}
