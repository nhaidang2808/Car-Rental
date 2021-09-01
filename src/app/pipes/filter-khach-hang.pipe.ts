import { Pipe, PipeTransform } from '@angular/core';
import { debounce, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Pipe({
  name: 'filterKhachHang'
})
export class FilterKhachHangPipe implements PipeTransform {

  transform(khachhang:any[], hoten:string, id:string, solanthue:string, sdt: string, tinhtrang: string, diachi:string):any {
    if(!hoten  && !id && !solanthue && !sdt && !tinhtrang && !diachi)
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
      if(sdt) {
        khachhang = khachhang.filter(x => {
          return x.sdt.toString().indexOf(sdt) != -1
        })
      }
      if(tinhtrang) {
        if(tinhtrang === "*")
          khachhang = khachhang.filter(x => {
            return true;
          })
        else
          khachhang = khachhang.filter(x => {
            return x.tinhtrang.toString().indexOf(tinhtrang) != -1;
          })
      }
      if(diachi) {
        khachhang = khachhang.filter(x => {
          return x.diachi.toLowerCase().indexOf(diachi.toLowerCase()) != -1
        })
      }
    }
    return khachhang
  }

}

