import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogin!:boolean;
  ngOnInit(): void {
    if(localStorage.getItem("token"))
    {
      this.isLogin=true;
    }
  }
  deleteToken(){
    localStorage.removeItem("token");
    localStorage.removeItem("userAsk");
    window.location.reload()
  }
}
