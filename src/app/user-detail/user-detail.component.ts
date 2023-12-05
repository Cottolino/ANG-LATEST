import { Component, Input, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
@Input("user") user: User;

  constructor(private userService: UserService) {
    this.user = {
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
  
  saveUser()
  {
    if(this.user.id > 0 )
    {
      this.userService.updateUser(this.user);
    }
  }

}
