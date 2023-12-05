import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
interface Card
{
    name: string
    rarity: string
    imageUrl: string
}
@Component({
  selector: 'tr[app-card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
@Input('card-data') card: any
constructor(){}
ngOnInit(): void{}
info()
{
  alert(this.card.name);
}
}
