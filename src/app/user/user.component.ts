import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/user';

@Component({
  //selector: 'app-user',
  //Imporetaten che abbia il parametro app-user
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  //Per passare dati da padre a figlio
  //Lo utilizzero dentro il componente HTML ex: {{user.name}}
  @Input('user-data') user: User | undefined;

  //Nome evento che ascolta sul padre, quindi il padre avra il metodo onDeleteUser()
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output('onSelectUser') onSelectUser = new EventEmitter();
  constructor(private userSerivce :UserService){}
  ngOnInit(): void {
      
  }
  deleteUser()
  {
    //alert(this.user.lastname);
    //this.userSerivce.deleteUser(this.user);

    //Emette un OBSERVABLE a chi ascolta(PADRE)
    this.userDeleted.emit(this.user);
  }
  //Padre USERS.COMPONENT in ascolto dall'HTML
  updateUser()
  {
    this.onSelectUser.emit(this.user);
  }
}
