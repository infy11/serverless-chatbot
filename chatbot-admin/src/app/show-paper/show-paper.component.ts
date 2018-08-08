import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { PaperService} from '../paper.service';
import { Button } from 'protractor';
import { Paper } from '../paper';
declare var HoldOn:any;
@Component({
  selector: 'app-show-paper',
  templateUrl: './show-paper.component.html',
  styleUrls: ['./show-paper.component.css']
})
export class ShowPaperComponent implements OnInit {

  Paper:any=[]
  data=[
    {
      id:1,
      semester:3,
      course:'mca',
      link:'testing'
    },
    {
      id:2,
      semester:3,
      course:'mba',
      link:'testing2'
    }
  ]

  settings = { 
    actions:{ 
    add:false,
    delete:false, 
    },
    edit:{
      confirmSave:true,
    },
    columns: {
      id: {
        title: 'ID',
        editable:false
      },
      course: {
        title: 'course'
      },
      semester: {
        title: 'semester'
      },
      link: {
        title: 'link'
      },
    }
  };
  putpaper(event){
    console.log(event.newData)
    this.addpaperservice.putpaper(event.newData).subscribe(
      res=>{
        if(res)
        {
    
          event.confirm.resolve(event.newData)
        }
      })
    
  }

  constructor(private addpaperservice:PaperService) {
    this.addpaperservice.getpaper().subscribe(
      Paper=>
      { 
        HoldOn.close();
        this.Paper=Paper
        console.log(this.Paper);
        console.log(this.data);
      }
  
     )

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
