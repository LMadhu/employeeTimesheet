import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from "app/component/login/login.component";
import { HomeComponent } from "app/component/home/home.component";
import { LogoutComponent } from "app/component/logout/logout.component";


export const routes: Routes = [
    
    {
        path: 'login',
        component: LoginComponent
    },    
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path:'logout',
        component: LogoutComponent
    }
    ,
    { path: '**', component: LoginComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);