import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe implements PipeTransform {

  transform(array: any[], query: string): any[] {

    return array.filter(todo =>
      JSON.stringify(todo)
        .toLowerCase()
        .includes(query.trim().toLowerCase())
    );;
  }

}
