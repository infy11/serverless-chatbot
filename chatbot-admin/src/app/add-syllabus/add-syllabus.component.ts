import { Component, OnInit } from '@angular/core';
import {Syllabus} from "../syllabus";
import {SyllabusService} from "../syllabus.service";
import swal from 'sweetalert';

@Component({
  selector: 'app-add-syllabus',
  templateUrl: './add-syllabus.component.html',
  styleUrls: ['./add-syllabus.component.css']
})
export class AddSyllabusComponent implements OnInit {
  course:String[]=['mca','mba'];
  semester:String[]=['1','2','3','4'];
  model=new Syllabus(0,'','','');

  onSubmit()
  {
    this.SyllabusService.addsyllabus(this.model).subscribe(
      res=>{
        if(res)
        {
          swal({
            title: "Success",
            text: "Record Created Successfully",
            icon: "success",

          });
          this.model.course='';
          this.model.semester='';
          this.model.link='';
        }
      }
    );
  }

  constructor(private SyllabusService:SyllabusService) { }

  ngOnInit() {
  }

}
