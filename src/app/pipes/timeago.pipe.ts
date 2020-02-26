import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "timeago"
})
export class TimeagoPipe implements PipeTransform {
  transform(from: Date, to : Date): unknown {
    if (from) {
      return this.prettyTime(from,to);
    }
  }
  prettyTime = function timeSince(date, to) {
    var seconds = Math.floor((to - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  };
}
