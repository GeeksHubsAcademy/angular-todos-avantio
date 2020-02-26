import { Component, Input, Output, EventEmitter, OnChanges,OnInit, OnDestroy } from "@angular/core";
import { Todo } from 'src/interfaces/todo.interface';

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent implements OnChanges, OnInit, OnDestroy {
  @Input() data: Todo;
  @Output() delete = new EventEmitter<string>();
  @Output() edit = new EventEmitter<Todo>();

  handleDelete() {
    this.delete.emit(this.data.id);
  }
  ngOnInit(){

    console.log('on init', this.data.id);
  }
  ngOnChanges(){
    console.log("on changes", this.data.id);

  }
  ngOnDestroy(){
    console.log("on destroy", this.data.id);

  }
  handleColor(color: string) {
    const newTodo = {
      ...this.data,
      color,
      updatedAt: new Date()
    };
    this.edit.emit(newTodo);
  }
  handleComplete() {
    const newTodo = {
      ...this.data,
      completed: !this.data.completed,
      updatedAt: new Date()
    };
    this.edit.emit(newTodo);
  }
}
