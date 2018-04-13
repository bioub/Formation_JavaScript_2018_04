import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  public todos: Todo[] = [{
    id: 1,
    value: 'Déjeuner',
    done: true,
  }, {
    id: 2,
    value: 'Utiliser HttpClient',
    done: false,
  }];

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todosService.getAll().subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }

  handleAdd(newTodo: Todo) {
    this.todos.push(newTodo);
  }

  handleToggleAll(checked) {
    this.todos.forEach((todo) => {
      todo.done = checked;
    });
  }
}
