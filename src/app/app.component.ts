import { Component } from '@angular/core';
import { ProjectService } from './app.service';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/primeng';
import { OverlayPanelModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { MultiSelectModule } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    // title = 'app';

    project: any;
    
    projects: any[];
        
    filteredProjects: any[];

    requirements: SelectItem[];

    selectedRequirements: string[];
    


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

    

}
