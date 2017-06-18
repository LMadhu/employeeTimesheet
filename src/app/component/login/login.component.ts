import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Message } from "primeng/components/common/api";
import { UserRole } from "domain/userrole";
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  userName: String;
  passwd: String;
  loginErrorMessages: Message[] = [];
  authForm: FormGroup;
  name: FormControl;
  password: FormControl;

  userRoles: any[] = [  
   {  
      "itemId":1,
      "firstName":"David",
      "lastName":"Katz",
      "passwd":"password",
      "middleName":null,
      "userName":"David",
      "userId":1,
      "activeFlag":true,
      "token":"david"
   },
   {  
      "itemId":2,
      "firstName":"Brian",
      "lastName":"Gansle",
      "passwd":"password",
      "middleName":null,
      "userName":"brian",
      "userId":2,
      "activeFlag":true,
      "token":"brian"
   }
];
  loggedInUser: any[] = [  
   {  
      "itemId":1,
      "firstName":"David",
      "lastName":"Katz",
      "passwd":"password",
      "middleName":null,
      "userName":"David",
      "userId":1,
      "activeFlag":true,
      "token":"david"
   },
   {  
      "itemId":2,
      "firstName":"Brian",
      "lastName":"Gansle",
      "passwd":"password",
      "middleName":null,
      "userName":"brian",
      "userId":2,
      "activeFlag":true,
      "token":"brian"
   }
];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private storage: LocalStorageService,
    private fb: FormBuilder,
    private userService: UserService) {

    this.authForm = new FormGroup({
      name: new FormControl()
    });
    this.name = new FormControl();

    this.password = new FormControl();


    this.createForm();

  }

  createForm() {
    this.authForm = this.fb.group({
      name: '',
      password: ''
    });
  }


  businessLogoPath: String = 'assets/images/business.jpg';
  ngOnInit() {
    if(this.storage.retrieve('isSessionValid') == true){
    this.router.navigate(['/home']);
  }
}

  validateUser() {
    console.log(this.name.value);
    console.log(this.password.value);
    this.userName = this.name.value;
    this.passwd = this.password.value;
    this.loginErrorMessages = [];
    console.log("user name:" + this.userName);
    console.log("passwd:" + this.passwd);
    this.loggedInUser = this.userRoles.filter(x => (x.userName === this.userName && x.passwd === this.passwd));
    if (this.loggedInUser[0]) {
      console.log("valid user");
      console.log("username --->" + this.loggedInUser[0].userName);
      console.log("password --->" + this.loggedInUser[0].passwd);
      console.log("rolename --->" + this.loggedInUser[0].roleName);
      console.log(this.loggedInUser);
      this.storage.store('username', this.loggedInUser[0].userName);
      console.log("session --->" + this.storage.retrieve('boundValue'));
      this.storage.store('taskOwner', this.loggedInUser[0].roleName);
      this.storage.store('isSessionValid',true);
      console.log("isSessionValid: "+this.storage.retrieve('isSessionValid'));
      this.loginErrorMessages = [];
      this.userService.setAuth();
      this.router.navigate(['home']);
    } else {
      console.log("====INVALID USER CREDENTIALS=======");
      this.loginErrorMessages.push({ severity: 'error', summary: 'Login Error.', detail: 'Invalid username and/or password. Please provide valid credentials.' });
    }
  }

}
