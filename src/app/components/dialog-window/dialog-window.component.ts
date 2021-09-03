import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.css']
})
export class DialogWindowComponent implements OnInit {

  @Input() needDialog!:boolean;
  @Input() userAsk!:string;
  @Output() needDialogChange = new EventEmitter<boolean>();
  counter:number=12;

  constructor() { }
  
  onSubmit(name:string, ask:string, count:string){
    //alert("Ваш запрос \nНазвание: " + name +"\nЗапрос: " + ask+ "\nКол-во " + count)

    let usersBuf = JSON.parse(localStorage.getItem("users")as string)
    usersBuf.forEach((el: { login: string; favorites: { name: string; ask: string; count: string; }[]; }) => {
        if(el.login==localStorage.getItem("token")){
            let favorite={
                name:name,
                ask:ask,
                count:count
            }
            el.favorites.push(favorite)
        }
        localStorage.setItem("users",JSON.stringify(usersBuf))
    });
    this.needDialogChange.emit(false)
  }
  ngOnInit(): void {
  }

}
