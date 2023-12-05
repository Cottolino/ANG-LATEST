import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { UserService } from "../services/user.service";
import { User } from "../classes/user";

interface Card
{
  name: string;
  img: string;
}

@Component({
    selector: 'app-users',
    //Se lo vogliamo in locale
    //providers: [UserService],
    templateUrl: 'users.component.html',
    styleUrls: [
        'users.component.css'
    ]
})
export class UsersComponent implements OnInit
{
    title = 'Users'
    public users: User[]= [];
    public cards: any[] = [];
    //Nome evento PADRE che ascolterà
    //Quindi avremo il metodo uipdateUser sul padre(APP.COMPONENT)
    @Output("updateUser") updateUser = new EventEmitter<User>();
    
    //Importare il servizio globale o locale!
    //La variabile service viente importata nell'oggetto in automatico
    constructor(private service: UserService)
    {
        
        //const svs = new UserService();
        //Static
        //this.users = UserService.getUsers();
        //this.users = svs.getUsers();
        
        //this.users = service.getUsers();
    }
    //L'interface richiede il metodo OnInit()
    ngOnInit(): void {
        //Ciclo di vita del componente
        this.users = this.service.getUsers();
    }

    //Evento gestito dal padre
    //Nome decoratore OUTPUT del figlio
    onDeleteUser(user: User)
    {
        this.service.deleteUser(user);
    }
    
    //Padre APP.COMPONENT in ascolto
    onSelectUser(user: User)
    {
        //Creo una copia
        const userCopy = Object.assign({},user);
        //Passo la copia, vosì non viene modifcato il riferimento!
        this.updateUser.emit(userCopy);
    }






}