import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hopdongPipe',
})
export class HopdongPipe implements PipeTransform {
  transform(
    hopdong: any[],
    id: string,
    nguoithue: string,
    songaythue: string,
    ngaygiaoxe: string,
    ngaytraxe: string,
    gia: string,
    trangthai: any,
    trehan: any,
    phitrehan: string,
    cccd: string,
    bks_xethue:string
  ): any {
    if (
      !id &&
      !nguoithue &&
      !songaythue &&
      !ngaygiaoxe &&
      !ngaytraxe &&
      !gia &&
      !trangthai &&
      !trehan &&
      !phitrehan &&
      !cccd &&
      !bks_xethue
    ) {
      return hopdong;
    } else {
      if (id) {
        hopdong = hopdong.filter((x) => {
          return x.id.toString().indexOf(id) != -1;
        });
      }
      if (songaythue) {
        hopdong = hopdong.filter((x) => {
          return (
            x.songaythue.toLowerCase().indexOf(songaythue.toLowerCase()) != -1
          );
        });
      }
      if (ngaygiaoxe) {
        hopdong = hopdong.filter((x) => {
          return x.ngaygiaoxe.toString().indexOf(ngaygiaoxe) != -1;
        });
      }
      if (ngaytraxe) {
        hopdong = hopdong.filter((x) => {
          return x.ngaytraxe.toString().indexOf(ngaytraxe) != -1;
        });
      }
      if (gia) {
        hopdong = hopdong.filter((x) => {
          return x.gia.toString().indexOf(gia) != -1;
        });
      }
      if (trehan) {
        if (trehan === "*")
          hopdong = hopdong.filter(x => {
            return true;
          })
        else
          hopdong = hopdong.filter(x => {
            return x.trehan.toString().indexOf(trehan) != -1;
          });
      }
      if (trangthai) {
        if (trangthai === '*')
          hopdong = hopdong.filter((x) => {
            return true;
          });
        else
          hopdong = hopdong.filter((x) => {
            return x.trangthai.toString().indexOf(trangthai) != -1;
          });
      }
      if (phitrehan) {
        hopdong = hopdong.filter((x) => {
          return x.phitrehan.toString().indexOf(phitrehan) != -1;
        });
      }
      if (nguoithue) {
        hopdong = hopdong.filter(x => {
          return x.nguoithue.toLowerCase().indexOf(nguoithue.toLowerCase()) != -1
        })
      }
      if(cccd) {
        hopdong = hopdong.filter((x) => {
          return x.cccd.toString().indexOf(cccd) != -1;
        });
      }
      if(bks_xethue) {
        hopdong = hopdong.filter(x => {
          return x.bks_xethue.toLowerCase().indexOf(bks_xethue.toLowerCase()) != -1
        })
      }
    }
    return hopdong;
  }
}
