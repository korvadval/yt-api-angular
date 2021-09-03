import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  userAsk!:string;
  saveIcon:string=String.fromCharCode(10084);
  needDialog:boolean=false;

  constructor() { }

  onSubmit(userAsk:string){
    this.userAsk=userAsk;
  }
  onSave(){
    //if(this.userAsk)
    {
      this.needDialog=!this.needDialog;
    }
  }
  ngOnInit(): void {
  }
}
