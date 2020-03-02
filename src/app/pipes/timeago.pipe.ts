import { Pipe, PipeTransform } from '@angular/core';
import { TimeFormatterService } from '../time-formater.service';

@Pipe({
  name: "timeago",

})
export class TimeagoPipe implements PipeTransform {
  constructor(private timeFormater: TimeFormatterService) {
  }
  transform(from: Date, to : Date): unknown {
    if (from) {
      return this.timeFormater.timeSince(from, to);
    } else {
      return 0;
    }
  }

}
