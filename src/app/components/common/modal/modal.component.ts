import { Component, OnInit, Input, Output, OnChanges, EventEmitter, trigger, state, style, animate, transition } from '@angular/core';
import { User } from '../../../classes/user/user.class';
import { ModalObject } from '../../../classes/modalObject.class';

@Component({
  selector: 'modal',
  templateUrl: '../app/views/common/modal/modal.html',
  styleUrls: ['../app/styles/common/modal.css'],
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
export class ModalComponent {
  @Input() visible: boolean;
  @Input() title: String;
  @Input() objects: Array<Object>;
  @Input() columns:Array<ModalObject>;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() selected: EventEmitter<Object> = new EventEmitter<Object>();
  private object : Object;

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
    this.selected.emit(this.object);
  }
}