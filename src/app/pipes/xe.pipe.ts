import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xePipe',
})
export class XePipe implements PipeTransform {
  transform(
    xe: any[],
    id: string,
    tenxe: string,
    hang: string,
    loaixe: string,
    mau: string,
    purchDate: string,
    price_per_day: string,
    tinhtrang: any,
    bienkiemsoat:string
  ): any {
    if (
      !id &&
      !tenxe &&
      !hang &&
      !loaixe &&
      !mau &&
      !purchDate &&
      !price_per_day &&
      !tinhtrang &&
      !bienkiemsoat
    ) {
      return xe;
    } else {
      if (id) {
        xe = xe.filter((x) => {
          return x.id.toString().indexOf(id) != -1;
        })
      }
      if (tenxe) {
        xe = xe.filter((x) => {
          return x.tenxe.toLowerCase().indexOf(tenxe.toLowerCase()) != -1;
        });
      }
      if (hang) {
        xe = xe.filter((x) => {
          return x.hang.toLowerCase().indexOf(hang.toLowerCase()) != -1;
        });
      }
      if (loaixe) {
        xe = xe.filter((x) => {
          return x.loaixe.toLowerCase().indexOf(loaixe.toLowerCase()) != -1;
        });
      }
      if (mau) {
        xe = xe.filter((x) => {
          return x.mau.toLowerCase().indexOf(mau.toLowerCase()) != -1;
        });
      }
      if (price_per_day) {
        xe = xe.filter((x) => {
          return x.price_per_day.toString().indexOf(price_per_day) != -1;
        })
      }
      if(purchDate) {
        xe = xe.filter((x) => {
          return x.purchDate.toString().indexOf(purchDate) != -1;
        })
      }
      if(bienkiemsoat) {
        xe = xe.filter((x) => {
          return x.bienkiemsoat.toLowerCase().indexOf(bienkiemsoat.toLowerCase()) != -1;
        });
      }
      if (tinhtrang) {
        if (tinhtrang === '*')
          xe = xe.filter((x) => {
            return true;
          });
        else
          xe = xe.filter((x) => {
            return x.tinhtrang.toString().indexOf(tinhtrang) != -1;
          });
      }
    }
    return xe;
  }
}
