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
  todosFiltered: Todo[] = this.todos;
  query: string = "";
  textNewTodo: string = "";
  onSearch() {
    this.todosFiltered = this.todos.filter(todo =>
      JSON.stringify(todo)
        .toLowerCase()
        .includes(this.query.trim().toLowerCase())
    );
  }
  onKeyUpHandler(event: any) {
    if (event.keyCode === 13) {
      this.addTodo(event.target.value);
      this.textNewTodo = "";
    }
  }
  editTodo(todo: Todo) {
    this.todos = this.todos
    .map(_todo => (_todo.id === todo.id ? todo : _todo));
    this.onSearch();
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
  //   this.onSearch();
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
  //   this.onSearch();

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
    this.todos.push(newTodo);
    this.onSearch();
  }
  deleteTodo(id: string) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.onSearch();
  }
}
