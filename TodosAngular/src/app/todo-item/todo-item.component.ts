import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  public todo: Todo;

  @Output()
  public remove = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {

  }

  handleRemove() {
    this.remove.emit(this.todo);
  }

}
