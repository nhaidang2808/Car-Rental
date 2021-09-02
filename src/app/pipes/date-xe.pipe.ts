import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateXe'
})
export class DateXePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
