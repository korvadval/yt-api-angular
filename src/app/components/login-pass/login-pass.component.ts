import { Component, OnInit } from '@angular/core';

import data  from 'src/assets/users.json';

@Component({
  selector: 'app-login-pass',
  templateUrl: './login-pass.component.html',
  styleUrls: ['./login-pass.component.css']
})
export class LoginPassComponent implements OnInit {

  constructor() { }


  onSubmit(userLogin:string, userPasssword:string){
    let users=data.users;
    for(let i=0;i<users.length;i++){
      if(users[i].login==userLogin &&
         users[i].password==userPasssword){
        localStorage.setItem("token", users[i].login)
        
        if(!localStorage.getItem("users")){
            let users: never[]=[]
            localStorage.setItem("users",JSON.stringify(users))
        }
        let needAddToLC=true
        let usersBuf = JSON.parse(localStorage.getItem("users") as string)
        
        usersBuf.forEach((el: { login: string; }) => {
            if(el.login==users[i].login){
                needAddToLC=false;
            }
        });
        if(usersBuf.length==0 ||needAddToLC){
            let user={
                login:users[i].login,
                favorites:[]
            }
            usersBuf.push(user)
            localStorage.setItem("users",JSON.stringify(usersBuf))
        }
        window.location.reload()
        break;
      }
    }
  }

  ngOnInit(): void {
  }

}
