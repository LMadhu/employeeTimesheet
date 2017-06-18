import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { routing } from './app.route';
import { RouterModule } from '@angular/router';
import { Ng2Webstorage } from 'ngx-webstorage';
import { AutoCompleteModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { OverlayPanelModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { MultiSelectModule } from 'primeng/primeng';
import { SharedModule } from 'primeng/primeng';
import { ProjectService } from './app.service';
import { JwtService } from './service/jwt.service';
import { UserService } from './service/user.service';
import { AuthenticationService } from './service/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { LogoutComponent } from './component/logout/logout.component';
import { AuthenticationComponent } from './component/authentication/authentication.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    AuthenticationComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CalendarModule,
    Ng2Webstorage,
    routing,
    RouterModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    OverlayPanelModule,
    DataTableModule,
    SharedModule,
    MultiSelectModule,
    BrowserAnimationsModule
  ],
  providers: [ProjectService, JwtService, UserService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
