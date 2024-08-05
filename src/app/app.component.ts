import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

// like decorator
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!; 
    // without ! -> ts show the correct possib - ts might not find anything.. then what..
    // -> runtime error, when 'accesing' name feature.. which is empty/undefined
  }

  onSelectUser(id: string) {
    console.log('SelectedUSer with id: '+id);
    this.selectedUserId = id;
  }
} 