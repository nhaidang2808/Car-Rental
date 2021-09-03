import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tinhtrangPipe'
})
export class TinhtrangPipe implements PipeTransform {

  transform(tinhtrang: any): any {
    if(tinhtrang)
      return "Đang thuê"
    return "chưa thuê"
  }

}
