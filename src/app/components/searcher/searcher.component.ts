import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  userAsk!:string;

  constructor() { }

  onSubmit(userAsk:string){
    this.userAsk=userAsk;
  }
  
  ngOnInit(): void {
  }

}