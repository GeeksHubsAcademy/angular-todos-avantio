import { Component } from "@angular/core";

import { Todo } from "../interfaces/todo.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  todos: Todo[] = [
    {
      id: "1",
      text: "aprender ts",
      createdAt: new Date(),
      completed: true,
      updatedAt: new Date()
    }
  ];
  textNewTodo: string = "";
  onKeyUpHandler(event: any) {
    if (event.keyCode === 13) {
      this.addTodo(event.target.value);
      this.textNewTodo = "";
    }
  }
  toggleCompleted(id: string) {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }
  addTodo(text: string): void {
    console.log(text);

    const now = new Date();
    const newTodo = {
      id: `todo-${Date.now()}-${Math.random().toFixed(4)}`,
      text,
      createdAt: now,
      completed: false,
      updatedAt: now
    };
    this.todos.push(newTodo);
  }
}
