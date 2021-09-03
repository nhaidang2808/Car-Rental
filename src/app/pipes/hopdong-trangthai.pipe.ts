import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hdTrangthaiPipe'
})
export class HopdongTrangthaiPipe implements PipeTransform {

  transform(trangthai:any):any {
    if(trangthai)
      return "Đã thanh toán"
    return "Chưa thanh toán"
  }

}
