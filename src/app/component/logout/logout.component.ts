import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(     private userService: UserService,
    private router: Router, private storage:LocalStorageService ) {
   }

  ngOnInit() {
    this.userService.purgeAuth();
    this.storage.store('isSessionValid',false);
    this.router.navigateByUrl('/login');
  }

}