import { Pipe, PipeTransform } from '@angular/core';
import { debounce, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Pipe({
  name: 'filterKhachHang'
})
export class FilterKhachHangPipe implements PipeTransform {

  transform(khachhang:any[], hoten:string, id:string, solanthue:string):any {
    if(!hoten  && !id && !solanthue)
    {
      return khachhang;
    }
    else{
      if(hoten) {
        khachhang = khachhang.filter(x => {
          return x.hoten.toLowerCase().indexOf(hoten.toLowerCase()) != -1
        })
      }
      if(id){
        khachhang = khachhang.filter(x => {
          return x.id.toString().indexOf(id) != -1
        })
      }
      if(solanthue){
        khachhang = khachhang.filter(x => {
          return x.solanthue.toString().indexOf(solanthue) != -1
        })
      }

    }
    return khachhang
  }

}

