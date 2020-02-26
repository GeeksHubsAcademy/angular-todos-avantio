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
      updatedAt: new Date(),
      color: "#FF0000"
    }
  ];
  query: string = "";
  textNewTodo: string = "";
  onKeyUpHandler(event: any) {
    if (event.keyCode === 13) {
      this.addTodo(event.target.value);
      this.textNewTodo = "";
    }
  }
  trackByFn(index, item) {
    return item.id;
  }
  editTodo(todo: Todo) {
    this.todos = this.todos.map(_todo => (_todo.id === todo.id ? todo : _todo));
  }
  // toggleCompleted(id: string) {
  //   this.todos = this.todos.map(todo => {
  //     if (todo.id === id) {
  //       todo.completed = !todo.completed;
  //       const now = new Date();
  //       todo.updatedAt = now;
  //     }
  //     return todo;
  //   });
  // }
  // changeColor(id: string, color: string) {
  //   this.todos = this.todos.map(todo => {
  //     if (todo.id === id) {
  //       todo.color = color;
  //       const now = new Date();
  //       todo.updatedAt = now;
  //     }
  //     return todo;
  //   });

  // }
  addTodo(text: string): void {
    const now = new Date();
    const newTodo = {
      id: `todo-${Date.now()}-${Math.random().toFixed(4)}`,
      text,
      createdAt: now,
      completed: false,
      updatedAt: now,
      color: "#555"
    };
    this.todos = [newTodo, ...this.todos];
  }
  deleteTodo(id: string) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
