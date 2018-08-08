import { Component, OnInit } from '@angular/core';
import { Timetable } from "../timetable";
import { TimetableService } from "../timetable.service";
import swal from 'sweetalert';


@Component({
  selector: 'app-add-timetable',
  templateUrl: './add-timetable.component.html',
  styleUrls: ['./add-timetable.component.css']
})
export class AddTimetableComponent implements OnInit {

  semesters=['1','2','3','4'];
  days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  course=['mba','mca']
  model = new Timetable(0,'','','',['','','','']);
  submitted = false;
  
  
  onSubmit() { 
    this.TimetableService.addtimetable(this.model).subscribe(
      res=>{
        if(res)
        {
          swal({
            title: "Success",
            text: "Record Created Successfully",
            icon: "success",

          });
          this.model.course='';
          this.model.day='';
          this.model.semester='';
          this.model.lectures=[];
          

        }
      }
      
    ) 

  }
  constructor(private TimetableService: TimetableService) { }

  ngOnInit() {
  
  }

}
