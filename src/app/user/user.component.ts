import { Component, computed, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// Input -> decorator
// input -> special f()


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({ 'required': true }) selected!: boolean;

  @Input({ 'required': true }) user! : User;

  // ! to tell TS this will be filled later, dont worry
  // hence: configuration-obj - meaning: 'error' if nothing there -> { 'required': true }
  // @Input({ 'required': true }) id!: string;
  // @Input({ 'required': true }) avatar!: string; // now, l+r are in line
  // @Input({ 'required': true }) name!: string; // without, the proposael (..!) ia actual a lie
  // avatar = input(); // def param possib, also ts-way of .. what comes - input<string>(); GENERIC TYPE REVEAL
  // avatar=input.required(); -> NO DEF PARA, due to required


  // CUSTOM el
  // modern output -> select=output<string>()

  @Output() select=new EventEmitter(); //<> you could.. not needed

  // importante: read-only
  // avatar=input.required<string>();
  // name=input.required<string>();

  // imagePath = computed(()=> 'assets/users/'+ this.avatar());

  get imagePath() {
    // return 'assets/users/' + this.avatar;
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
    // this.select.emit(this.id);
  }
}
