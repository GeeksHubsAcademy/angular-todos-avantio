import { Component } from '@angular/core';

import {Todo} from '../interfaces/todo.interface';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  todos: Todo[] = [];
  textNewTodo: string = "";
  // constructor() {
  //   setTimeout(() => {
  //     this.textNewTodo = "hola!";
  //   }, 3000);
  // }
  onKeyUpHandler(event: any  ) {

    if (event.keyCode === 13) {
      this.addTodo(event.target.value);
      this.textNewTodo = "";
    }
  }
  addTodo(text: string): void {
    console.log(text);

    const now = new Date();
    const newTodo = {
      text,
      createdAt: now,
      completed: false,
      updatedAt: now
    };
    this.todos.push(newTodo);
  }
}
