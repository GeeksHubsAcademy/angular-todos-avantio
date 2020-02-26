import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { TodoComponent } from './todo/todo.component';
import { TimeagoComponent } from './timeago/timeago.component';
import { TimeagoPipe } from './pipes/timeago.pipe';
import { FilterArrayPipe } from './pipes/filter-array.pipe';

@NgModule({
  declarations: [AppComponent, TodoComponent, TimeagoComponent, TimeagoPipe, FilterArrayPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
