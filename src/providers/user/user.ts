import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';

import { Api } from '../api/api';
import { Observable } from 'rxjs/Observable';

/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class User {
  list: Account[] = [{name: "Alex Huynh", email: "alex", password: "123"},
          {name: "Ginny nguyen", email: "ginny", password: "123"},
          {name: "Tyler", email: "tyler", password: "123"},]
  _user: Account;

  constructor(public api: Api) { }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: Account): Observable<Account[]> {
    console.log(accountInfo)
    const temp =  this.list.filter( r => r.email === accountInfo.email && r.password === r.password);
       if( temp.length >= 0  )  {
        this._loggedIn(accountInfo);
       } 
    return  Observable.of(temp) ;
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: Account): Observable<Account> {
    const temp =  this.list.filter( r => r.email === accountInfo.email);
     if( temp.length > 0) {
      return  Observable.of(null);
     }else{
      this.list.push(accountInfo);
      this._loggedIn(accountInfo);
      return  Observable.of(accountInfo);
     }
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp;
  }
  
}
export class Account {
  name?: string ;
  email?: string;
  password?: string 
}
