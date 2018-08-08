import { Component, OnInit } from '@angular/core';
import { Syllabus } from "../syllabus";
import { SyllabusService } from "../syllabus.service";
declare var HoldOn:any;
@Component({
  selector: 'app-show-syllabus',
  templateUrl: './show-syllabus.component.html',
  styleUrls: ['./show-syllabus.component.css']
})
export class ShowSyllabusComponent implements OnInit {

  Syllabus:Syllabus[]
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
      link: {
        title: 'link'
      }
    }
  };
  putSyllabus(event){
    console.log(event.newData)
    this.addsyllabusService.putsyllabus(event.newData).subscribe(
    
     event.confirm.resolve(event.newData)
    )
    
  }

  constructor(private addsyllabusService:SyllabusService) {

    this.addsyllabusService.getsyllabus().subscribe(
      Paper=>
      { 
        HoldOn.close();
        this.Syllabus=Paper
        
      }
  
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
