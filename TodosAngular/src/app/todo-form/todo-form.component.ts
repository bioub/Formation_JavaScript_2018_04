import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output()
  public add = new EventEmitter<Todo>();

  @Output()
  public toggleAll = new EventEmitter<boolean>();

  public newTodo = new Todo();
  public toggle = false;

  constructor() { }

  ngOnInit() {
  }

  handleSubmit() {
    /* ES6
    const clonedTodo = Object.assign({}, this.newTodo);
    */

    /* ES9 */
    const clonedTodo = {...this.newTodo};
    this.add.emit(clonedTodo);
  }

  handleChange() {
    this.toggleAll.emit(this.toggle);
  }
}
