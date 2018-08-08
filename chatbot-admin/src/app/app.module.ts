import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

//service
import { PaperService } from "./paper.service";
import { SyllabusService } from "./syllabus.service";
import { TimetableService } from "./timetable.service";

//component
import { AppComponent } from './app.component';
import { AddPaperComponent } from './add-paper/add-paper.component';
import { ShowPaperComponent } from './show-paper/show-paper.component';
import { AddTimetableComponent } from './add-timetable/add-timetable.component';
import { ShowTimetableComponent } from './show-timetable/show-timetable.component';
import { AddSyllabusComponent } from './add-syllabus/add-syllabus.component';
import { ShowSyllabusComponent } from './show-syllabus/show-syllabus.component';
import { NoticePushComponent } from './notice-push/notice-push.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { PushNoticeComponent } from './push-notice/push-notice.component';

//routes
const appRoutes:Routes =[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path:'add-timetable', component:AddTimetableComponent
  },
  {
    path:'show-timetable',component:ShowTimetableComponent
  },
  {
    path:'add-syllabus',component:AddSyllabusComponent
  },
  {
    path:'show-syllabus',component:ShowSyllabusComponent
  },
  {
    path:'add-paper',component:AddPaperComponent
  },
  {
    path:'show-paper',component:ShowPaperComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'aboutus',component:AboutusComponent
  },
  {
    path:'contactus',component:ContactusComponent
  },
  {
    path:'notice',component:PushNoticeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AddPaperComponent,
    ShowPaperComponent,
    AddTimetableComponent,
    ShowTimetableComponent,
    AddSyllabusComponent,
    ShowSyllabusComponent,
    NoticePushComponent,
    ContactusComponent,
    AboutusComponent,
    HomeComponent,
    PushNoticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng2SmartTableModule,
    RouterModule.forRoot(appRoutes,
      { enableTracing: true } )
  ],
  providers: [PaperService,TimetableService,SyllabusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
