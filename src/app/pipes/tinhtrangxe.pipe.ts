import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tinhtrangxePipe',
})
export class TinhtrangxePipe implements PipeTransform {
  transform(tinhtrang: any): any {
    if (tinhtrang) return 'Rãnh';
    return 'Được thuê';
  }
}
