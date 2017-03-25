import { Component, OnInit, Input, Output, OnChanges, EventEmitter, trigger, state, style, animate, transition } from '@angular/core';
import { User } from '../../classes/user/user.class';
import { ModalObject } from '../../classes/modalObject.class';

import { UserService } from '../../services/common/userService.service';

@Component({
  selector: 'userSelector',
  templateUrl: '../app/views/common/userSelector.html',
  styleUrls: ['../app/styles/common/selector.css'],
  providers: [UserService]
})
export class UserSelectorComponent{
  private modal:boolean;
  private selectedUser:User;
  private users:Array<User>;
  private title : String = "USERMODAL";
  private columns: Array<ModalObject>;
  private user: User;

  constructor(private userService:UserService) { 
    this.users = this.userService.getUsers();
    this.columns = new Array<ModalObject>();
    this.columns.push(new ModalObject('name','NAME'));
    this.user = new User();
  }

  openModal(){
    this.modal=true;
  }

  getEmitedUser(user : Object){
    this.user = <User>user;
  }

}