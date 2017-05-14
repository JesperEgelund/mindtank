import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

import Auth0 from 'auth0-js';

const DOMAIN: string = 'jesperegelund.eu.auth0.com';
const CLIENT_ID: string = 'RI4v412uu7oPcBXvmxkjELZHUpzPOaNh';
const CALLBACK_URL: string = 'https://jesperegelund.github.io/mindtank/'; // or whatever your callback URL is

@Injectable()
export class AuthService {
  private auth0 = new Auth0({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    callbackOnLocationHash: true,
    callbackURL: CALLBACK_URL
  });

  constructor(private router: Router) {
    let result = this.auth0.parseHash(window.location.hash);

    if (result && result.idToken) {
      localStorage.setItem('id_token', result.idToken);
      this.router.navigate(['/home']);
    } else if (result && result.error) {
      alert('error: ' + result.error);
    }
  }

  public signUp(username, password) {
    this.auth0.signup({
      connection: 'Username-Password-Authentication',
      responseType: 'token',
      email: username,
      password: password,
    }, function(err) {
      if (err) {
        alert('something went wrong: ' + err.message);
      }
    });
  };

  public login(username, password) {
    this.auth0.login({
      connection: 'Username-Password-Authentication',
      responseType: 'token',
      email: username,
      password: password,
    }, function(err) {
      if (err) {
        alert('something went wrong: ' + err.message);
      }
    });
  }

  public googleLogin() {
    this.auth0.login({
      connection: 'google-oauth2'
    }, function(err) {
      if (err) {
        alert('something went wrong: ' + err.message);
      }
    });
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  }
}
