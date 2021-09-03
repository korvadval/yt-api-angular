import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import searcherYT from "src/assets/js/youTubeSearcher.js";

const API_KEY = "AIzaSyDNbqAYrxkk9nv7YzdHXsimoxO-w2WFnZQ";

@Component({
  selector: 'app-video-panel',
  templateUrl: './video-panel.component.html',
  styleUrls: ['./video-panel.component.css']
})

export class VideoPanelComponent implements OnInit {
  @Input() userAsk: string = "";
  @Input() count: string = "";
  videos:any[]=[]
  
  constructor() { }
  
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.userAsk)
    {
      searcherYT ({key: API_KEY, term: this.userAsk, res: this.count}, (videos: any[]) => { 
         this.videos=videos;
      })
    }
  }

}
