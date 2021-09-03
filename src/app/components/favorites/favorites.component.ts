import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  items:any = []
  constructor() { }

  ngOnInit(): void {
    let usersBuf = JSON.parse(localStorage.getItem("users") as string)
    usersBuf.forEach((el: { login: string | null; favorites: { name: any; }[]; }) => {
        if(el.login==localStorage.getItem("token")){
                let i=0
                el.favorites.forEach((element: { name: any; }) => {
                  let item={  id:i,
                              name:element.name
                            }
                  this.items.push(item)
                  i=i+1;
            });
        }
    });
  }
  onFindClick(id:any){
    let usersBuf = JSON.parse(localStorage.getItem("users") as string)
        usersBuf.forEach((el: { login: string; favorites: { ask: any; count:any }[]; }) => {
            if(el.login==localStorage.getItem("token")){
              localStorage.setItem("count", el.favorites[id].count)
              localStorage.setItem("userAsk", el.favorites[id].ask)
            }
        });
  }
  onDeleteClick(id:any){
    let usersBuf = JSON.parse(localStorage.getItem("users") as string)
    usersBuf.forEach((el: { login: string; favorites: any[]; }) => {
      if(el.login==localStorage.getItem("token")){
        el.favorites.splice(id, 1);
      }
      localStorage.setItem("users",JSON.stringify(usersBuf))
    });
    window.location.reload();
  }
  onEnter(id:any){
    document.getElementsByTagName('button')[id].className="itemFavoritesHover"
    let buf=document.getElementById("find"+id) as HTMLElement;
    buf.className="itemFavoritesButtonHover find"
    buf=document.getElementById("delete"+id) as HTMLElement;
    buf.className="itemFavoritesButtonHover delete"
  }
  onLeave(id:any){
    document.getElementsByTagName('button')[id].className="itemFavorites"
    let buf=document.getElementById("find"+id) as HTMLElement;
    buf.className="itemFavoritesButton find"
    buf=document.getElementById("delete"+id) as HTMLElement;
    buf.className="itemFavoritesButton delete"
  }
}
