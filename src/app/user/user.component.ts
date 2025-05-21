import {Component, EventEmitter, Input, Output} from '@angular/core';
import {type User} from './user.model';
//import {signal,computed} from '@angular/core';
//import {DUMMY_USERS} from "../dummy-users";


//const randomIndex =Math.floor(Math.random() * DUMMY_USERS.length);


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  /*selectedUser =signal( DUMMY_USERS[randomIndex]);
  imagePath = computed(() => './assets/users/' + this.selectedUser().avatar);

  get imagePath(){
    return './assets/users/' + this.selectedUser.avatar;
  }*/
  @Input({required: true}) select!: boolean;
  @Input({required: true}) user!: User;

  @Output() selected = new EventEmitter<string>();
  //avatar = input.required<string>();
  //name = input.required<string>();
  //imagePath = computed(() => {
  //return 'assets/users/' + this.avatar();
  //});
  //selected = output<string>();
  get imagePath() {
    return './assets/users/' + this.user.avatar;
  }


  onSelectedUser() {
    /*const randomIndex =Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]); */
    this.selected.emit(this.user.id);
  }


}
