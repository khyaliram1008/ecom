import { Component,Output,EventEmitter ,OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() myinput:string='';
  @Output() myoutput:EventEmitter<string> = new EventEmitter();
  outputstr="hi i am child"
  constructor() { }
  
  ngOnInit(): void {
    console.log(this.myinput)
  }
  send(){
    this.myoutput.emit(this.outputstr)
  }

}
