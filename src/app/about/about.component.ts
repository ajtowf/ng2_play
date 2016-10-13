import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  template: `
    <md-card>
       <h2 md-line>About page</h2>
       <p>Router param passed to page is: {{id}}</p>
      <h2 md-line>Source code on Github</h2>
      <p>
        This app is built throughout a series of screencasts, 
        source code can be found at 
        <a href="https://github.com/ajtowf/ng2_play/" target="_blank">
          https://github.com/ajtowf/ng2_play/
        </a>	
      </p>
      <h2 md-line>Youtube</h2>
      <p>
        For screencast on the latest and greates tech from web development, check out my youtube channel  
        <a href="https://www.youtube.com/c/AjdenTowfeek" target="_blank">
          https://www.youtube.com/c/AjdenTowfeek
        </a>	
      </p>
      <h2 md-line>Twitter</h2>
      <p>
        And make sure to follow me on twitter to stay tuned   
        <a href="https://twitter.com/ajtowf" target="_blank">
          https://twitter.com/ajtowf
        </a>	
      </p>  
    </md-card>
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
