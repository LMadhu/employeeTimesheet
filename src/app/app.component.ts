import { Component } from '@angular/core';
import { ProjectService } from './app.service';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    // title = 'app';

    project: any;
    projects: any[];
    weekList: any[];
    filteredProjects: any[];

    constructor(private projectService: ProjectService) { 

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

    getWeekDays(weekDate) {
        let weekList : any[] = [];
        var curr = weekDate;
        var first = curr.getDate() - curr.getDay();
        var second = first + 1;
        var third = first + 2;
        var fourth = first + 3;
        var fifth = first + 4;
        var sixth = first + 5;
        var last = first + 6;
        
        weekList.push(first);
        weekList.push(second);weekList.push(third);weekList.push(fourth);weekList.push(fifth);weekList.push(sixth);weekList.push(last);
        console.log(this.weekList);
        return weekList;
    }

}
