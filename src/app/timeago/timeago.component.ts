import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-timeago",
  templateUrl: "./timeago.component.html",
  styleUrls: ["./timeago.component.scss"]
})
export class TimeagoComponent implements OnInit {
  @Input() date: Date;
  @Input() label: string;
  now: Date;
  constructor() {}

  ngOnInit(): void {
    setInterval(() => this.updateNow(), 1000);
  }
  updateNow() {

    this.now = new Date() ;
  }
}
