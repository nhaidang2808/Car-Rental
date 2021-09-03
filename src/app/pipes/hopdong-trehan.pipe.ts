import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hdTrehanPipe',
})
export class HopdongTrehanPipe implements PipeTransform {
  transform(trehan: any): any {
    if (trehan) return 'Trễ hạn'
    return 'Đúng hạn'
  }
}
