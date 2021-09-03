import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  userAsk!:string;
  count!:string;
  saveIcon:string=String.fromCharCode(10084);
  needDialog:boolean=false;

  constructor() { }

  onSubmit(userAsk:string){
    this.userAsk=userAsk;
    this.count="12";
    localStorage.setItem("userAsk", userAsk);
    localStorage.setItem("userAskCount", "12");
  }
  onSave(){
    //if(this.userAsk)
    {
      this.needDialog=!this.needDialog;
    }
  }
  ngOnInit(): void {
    let ask=localStorage.getItem("userAsk"),
        count=localStorage.getItem("count");
    if(ask && count)
    {
      this.userAsk=ask;
      this.count=count;
    }
  }
}
