import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tinhtrangxepPipe'
})
export class TinhtrangxePipe implements PipeTransform {

  transform(tinhtrang:any):any {
    if(tinhtrang)
      return "Rãnh"
    return "Được thuê"
  }

}
