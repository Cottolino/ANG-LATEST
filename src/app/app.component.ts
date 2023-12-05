import { Component } from '@angular/core';
import { User } from './classes/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ShowForm: boolean = false;
  userSelected: User;
  constructor()
  {
    this.userSelected = {
      id: 0,
      name: '',
      lastname: '',
      email: '',
      fiscalcode: '',
      province: '',
      phone: '',
      age: 0,
    }

  }
  //Ogni volta che clicco su un USER emetto evento USERS emette evento USERSELECTED
  //E aggiorno la USER-DETAIL alla quale ho passato il @INPUT(userSelected)
  updateUser(user: User)
  {
    this.ShowForm = true;
    //Ho creato una copia, così non viene passato per riferimento!
    this.userSelected = user;
  }
}
