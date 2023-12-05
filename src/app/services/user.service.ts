import { Injectable } from "@angular/core";
import { from, map, switchMap, tap } from "rxjs";
import { User } from "../classes/user";
import { UserInterface } from "../interfaces/user";
// import * as Scry from "scryfall-sdk";

//Direttiva per iniettare a funzione il servizio
@Injectable({
    //Se vogliamo utilizzarlo globale anche negli altri moduli alternativi a APP
    providedIn: 'root'
})
export class UserService
{
    users: Array<User> = 
    [
        {
          id: 1,
          name: 'Hidran1',
          lastname: 'Arias1',
          email: 'hidran@gmail.com',
          fiscalcode: 'RSAHRN72M22Z444S',
          province: 'Torino',
          phone: '454545455',
          age: 43
        },
        {
          id: 2,
          name: 'Hidran2',
          lastname: 'Arias2',
          email: 'hidran@gmail.com',
          fiscalcode: 'RSAHRN72M22Z444S',
          province: 'Torino',
          phone: '454545455',
          age: 43
        },
        {
          id: 3,
          name: 'Hidran3',
          lastname: 'Arias3',
          email: 'hidran@gmail.com',
          fiscalcode: 'RSAHRN72M22Z444S',
          province: 'Torino',
          phone: '454545455',
          age: 43
        },
        {
          id: 4,
          name: 'Hidran4',
          lastname: 'Arias4',
          email: 'hidran@gmail.com',
          fiscalcode: 'RSAHRN72M22Z444S',
          province: 'Torino',
          phone: '454545455',
          age: 43
        }
  ];
    getUsers()
    {
        return this.users;
    }
    //Analogo per aggiungere carta a this.cards(local)
    //addUser(user: any) psuh
    deleteUser(user: any)
    {
        const index = this.users.indexOf(user);
        if(index > -1)
        {
            this.users.splice(index,1);
        }
    }

    updateUser(user: UserInterface)
    {
        //Controllo se nell'array USERS esite l'id di USER(passato come parametro al metodo!)
        //Ritorna l'indice 
        const idx = this.users.findIndex((v) => v.id == user.id );
        alert(idx);
        if(idx != -1)
        {
          this.users[idx] = user;
        }
    }




}