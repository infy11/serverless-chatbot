import { Component, OnInit } from '@angular/core';
import { Paper } from '../paper';
import { PaperService} from '../paper.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-paper',
  templateUrl: './add-paper.component.html',
  styleUrls: ['./add-paper.component.css']
})
export class AddPaperComponent implements OnInit {

  course:String[]=['mca','mba'];
  semester:String[]=['1','2','3','4'];
  paper:Paper =new Paper(0,'','','');
  submitted:false;
  submit(){
    this.addpaperservice.addpaper(this.paper).subscribe(
      res=>{
        if(res)
        {
          swal({
            title: "Success",
            text: "Record Created Successfully",
            icon: "success",

          });
          this.paper.course='';
          this.paper.semester='';
          this.paper.link='';
        }
      }
    )
  }



  constructor(private addpaperservice:PaperService) { }

  ngOnInit() {
  }

}
