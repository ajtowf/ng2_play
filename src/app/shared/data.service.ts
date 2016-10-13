import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import './rxjs-operators';

@Injectable()
export class DataService {

  constructor(private authHttp: AuthHttp) {}

  getSecretQuote(): Observable<string> {
    return this.authHttp
      .get('http://localhost:3002/api/quote')
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError (error) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
