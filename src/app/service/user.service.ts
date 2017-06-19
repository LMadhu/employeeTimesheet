import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { JwtService } from './jwt.service';
import { UserRole } from "domain/userrole";
import { LoginComponent } from "app/component/login/login.component";


@Injectable()
export class UserService {

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor (
  ) {}

  setAuth() {
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    this.isAuthenticatedSubject.next(false);
  }

}
