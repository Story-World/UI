import { Component, OnInit, Input, Output, OnChanges, EventEmitter, trigger, state, style, animate, transition } from '@angular/core';
import { User } from '../../../classes/user/user.class';
import { ModalObject } from '../../../classes/modalObject.class';

import { UserService } from '../../../services/common/userService.service';

@Component({
  selector: 'modal',
  templateUrl: '../app/views/common/modal/modal.html',
  styleUrls: ['../app/styles/common/modal.css'],
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
export class ModalComponent implements OnInit {
  @Input() visible: boolean;
  @Input() title: String;
  @Input() objects: Array<Object>;
  @Input() columns:Array<ModalObject>;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() selected: EventEmitter<Object> = new EventEmitter<Object>();
  private object : Object;

  constructor(private userService:UserService) {
  }

  ngOnInit() { }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
    this.selected.emit(this.object);
  }
}