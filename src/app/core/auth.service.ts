import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authState = new BehaviorSubject<boolean>(false)

  get isLoggedIn$() {
     return this._authState.asObservable()
  }
  get isLoggedIn() {
     return this._authState.value;
  }
  constructor() { }

  logIn() {
    this._authState.next(true)
  }

  logOut() {
    this._authState.next(false)
  }
}
