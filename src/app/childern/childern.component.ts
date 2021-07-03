import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-childern',
  templateUrl: './childern.component.html',
  styleUrls: ['./childern.component.css']
})
export class ChildernComponent implements OnInit {
  
    num:any='';
  @Input() mystu:string='';
 @Output() num1:EventEmitter<string>=new EventEmitter()


  constructor() { }

  ngOnInit(): void {
    console.log(this.mystu)
  }
  
  senddat(val:any){
    this.num1.emit(this.num)
  }
}
