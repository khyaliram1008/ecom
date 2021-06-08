import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'konnect3';
  inputvar='hi i am prantes';
  constructor(){

  }
  getdata(value:any){
    console.log(value)

  }
}

