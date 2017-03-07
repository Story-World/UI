import { Component, OnInit, Input, Output, OnChanges, EventEmitter, trigger, state, style, animate, transition } from '@angular/core';
import { User } from '../../classes/user/user.class';

import { UserService } from '../../services/common/userService.service';

@Component({
  selector: 'userModal',
  templateUrl: '../app/views/modal/user.modal.html',
  styleUrls: ['../app/styles/modal.css'],
  providers: [UserService],
  animations: [
    trigger('modal', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class UserModalComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  user:User;
  private users:Array<User>;

  constructor(private userService:UserService) { 
    this.users = this.userService.getUsers();
    console.log(this.userService.getUsers());
  }

  ngOnInit() { }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}