import {Component, OnInit, OnDestroy, AfterContentInit} from '@angular/core';
import { DataService } from '../shared';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit, OnDestroy, AfterContentInit {
  profile: any;
  quote: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    console.log('ngOnInit() called');
    this.profile = JSON.parse(localStorage.getItem('profile'));
    this.dataService
      .getSecretQuote()
      .subscribe(
        data => this.quote = data,
        err => this.quote = 'No connection to backend...'
      );
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy() called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit() called');
  }
}
