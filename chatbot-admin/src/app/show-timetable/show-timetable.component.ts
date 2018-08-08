import { Component, OnInit } from '@angular/core';
import {Timetable} from '../timetable'
import {TimetableService} from '../timetable.service';
import {Router} from "@angular/router";

declare var HoldOn:any;
@Component({
  selector: 'app-show-timetable',
  templateUrl: './show-timetable.component.html',
  styleUrls: ['./show-timetable.component.css']
})
export class ShowTimetableComponent implements OnInit {  
  Timetable:Timetable[]
  settings = {
    actions:{
      add:false,
      delete:false

    },
    edit:{
      confirmSave:true
     },
     delete :{
      confirmDelete: true
    },
    columns: {
      id:{
        title:'ID',
        editable:false
      },
      course: {
        title: 'COURSE'
      },
      semester: {
        title: 'SEMESTER'
      },
      day: {
        title: 'DAY'
      },
      lectures: {
        title: 'LECTURES'
      }
    }
  };

  updateRecord(event)
  {
    console.log(event.newData);
    this.TimetableService.puttimetable(event.newData).subscribe(
      res=>{
      
      if(res){  
      event.confirm.resolve(event.newData);
      }}
    )
  }

  refresh(event){ 
    console.log('refersh called')
   this.router.navigate(['show-timetable'])
    
  }

  constructor(private TimetableService: TimetableService,private router: Router) { 
    this.TimetableService.gettimetablearray()
    .subscribe(
      
      timetable=>{
        HoldOn.close();
        this.Timetable=timetable}
      
    );
  }
  ngOnInit() {
    HoldOn.open(
      {
        theme:"sk-cube-grid",
        message:'Loading data.... ',
        textColor:"white"
      }   
    );
  }
}
