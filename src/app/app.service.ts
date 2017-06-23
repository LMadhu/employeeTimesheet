import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectService {
    
    constructor(private http: Http) {}

    getProjects() {
        return this.http.get('../../assets/projects.json')
                    .toPromise()
                    .then(res => <any[]> res.json().data)
                    .then(data => { return data; });
    }
}