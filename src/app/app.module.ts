import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AutoCompleteModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { OverlayPanelModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { MultiSelectModule } from 'primeng/primeng';
import { SharedModule } from 'primeng/primeng';
import { ProjectService } from './app.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CalendarModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    OverlayPanelModule,
    DataTableModule,
    SharedModule,
    MultiSelectModule,
    BrowserAnimationsModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
