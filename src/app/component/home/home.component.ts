import { Component, OnInit, AfterViewInit, ViewChild, ViewChildren } from '@angular/core';
import { ProjectService } from 'app/app.service';
import { UserService } from 'app/service/user.service';
import { UserRole } from 'domain/userrole';
import { Time } from 'domain/timesheet';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TimeSheetComponent } from '../timesheet/timesheet.component';


import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // @ViewChild ("timesheet") timesheet: TimeSheetComponent;


  project: any;
  projects: any[];
  weekList: any[];
  filteredProjects: any[];
  requirements: any[];
  selectedRequirements: string[];
  startingValue: number;
  date6: Date;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private storage: LocalStorageService,
    private projectService: ProjectService) { 
      
    }
    
    // ngAfterViewInit() {

    // }
  
  ngOnInit() {
    console.log("isSessionValid: "+this.storage.retrieve('isSessionValid'));
  }

    
  projectFilter(event) {
    let query = event.query;
    this.projectService.getProjects().then(projects => {
      this.filteredProjects = this.filterProject(query, projects);
    });
  }
    
  filterProject(query, projects: any[]):any[] {
    let filtered : any[] = [];
    for(let i = 0; i < projects.length; i++) {
      let project = projects[i];
      if(project.pName.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(project);
      }
    }
    return filtered;
  }

  addProject(event) {
    if (!this.projects)
      this.projects = [];
    this.projects.push(event);
    console.log(this.projects); 
  }

  generateArray(obj) {
    return Object.keys(obj).map((key) => { return obj[key] });
  }

  isSessionValid() {
    if (this.storage.retrieve('isSessionValid')) {
      return true;
    } else {
      return false;
    }
  }

  get user(): any {
    return this.storage.retrieve('firstname');
  }

  get firstname(): any {
    return this.storage.retrieve('firstname'); 
  }
  get lastname(): any {
    return this.storage.retrieve('lastname'); 
  }

  logout() {
    this.userService.purgeAuth();
    this.storage.store('isSessionValid',false);
    this.router.navigateByUrl('/login');
  }

}
