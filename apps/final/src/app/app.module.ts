import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Http Client Module
import { HttpClientModule } from '@angular/common/http';

// Module Angular Material
import { MaterialModule } from './material/material.module';

// Fullcalendar.io
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

// Route
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CalendarComponent,
  },
  {
    path: 'scorring',
    component: ScoringComponent,
  },
  {
    path: 'scorring/:subjectID',
    component: ScoringComponent,
  },
  {
    path: 'scorring2',
    component: Scoriingv2Component,
  },
];

// Toast
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

import { CalendarComponent } from './calendar/calendar.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { InfoComponent } from './info/info.component';
import { TestSidenavComponent } from './test-sidenav/test-sidenav.component';
import { ScoringComponent } from './scoring/scoring.component';
import { Scoriingv2Component } from './scoriingv2/scoriingv2.component';

// // Charts
// import { NgChartsModule } from 'ng2-charts';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin,
]);

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    AddScheduleComponent,
    InfoComponent,
    TestSidenavComponent,
    ScoringComponent,
    Scoriingv2Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FullCalendarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    ToastrModule.forRoot(), // ToastrModule added
    // NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
