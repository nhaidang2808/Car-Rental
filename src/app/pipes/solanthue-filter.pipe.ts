import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'solanthueFilter',
})
export class SolanthueFilterPipe implements PipeTransform {
  transform(solanthue: any): any {
    // if(solanthue)
    // {
    //   // khachhang = khachhang.filter(x => {
    //   //   return x.solanthue.toString().indexOf(solanthue) != -1
    //   // })
    //   khachhang = khachhang.filter(it => {
    //     return it.solanthue.toString().include(solanthue < 10);
    //   })
    // }
    if(solanthue) {
      return solanthue > 10
    }
    else{
      return solanthue < 10
    }
  }
}
