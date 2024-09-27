// import { Component, computed, signal } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const randInd = Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css'
// })
// export class UserComponent {
//   // these variables can be accessed inside the HTML
//   // public property - use {{}} to reference it in html
//   selectedUser = signal(DUMMY_USERS[randInd]);
//   //imagePath = `assets/users/${this.selectedUser().avatar}`;
//   imagePath = computed(() => 'assets/users/'+this.selectedUser().avatar); // only if other end, html, is set up correct

//   // ZONE.js feature
//   // get imagePath() {
//   //   return `assets/users/${this.selectedUser.avatar}`;
//   // }

//   onSelectUser() {
//     const randInd = Math.floor(Math.random() * DUMMY_USERS.length);
//     // this.selectedUser = DUMMY_USERS[randInd];
//     this.selectedUser.set(DUMMY_USERS[randInd]);
//   }
// }
