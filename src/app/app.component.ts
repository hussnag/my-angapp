import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  front_end : any = [];
   

  constructor (){

  } 
    ngOnInit():void { 
      this.front_end  = [
        {
        "firstname":"Ali",
        "lastname":"Asghar",
        "email":"test@gmail.com"
        },
        {
          "firstname":"Aslam",
          "lastname":"Gujjar",
          "email":"testGujjar@gmail.com"
          },
      ]
    
  }
}
