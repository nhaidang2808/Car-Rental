import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonService } from '../services/common.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-nhanvien',
  templateUrl: './nhanvien.component.html',
  styleUrls: ['./nhanvien.component.css']
})
export class NhanvienComponent implements OnInit {
  id:string = '';
  hoten:string = '';
  cccd:string = '';
  diachi:string = '';
  ngaysinh:string = '';
  sdt:string = '';
  chucvu:string = '';
  ngaynhanvien:string = '';
  public curPage: number = 0;
  public pageSize: number = 0;
  public nhanvien:any[] = [];
  public totalNhanVien = 0;
  constructor(
    private serverHttp: ProductService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loadData();
    this.serverHttp.getTotalNhanVien().subscribe((data) => {
      this.totalNhanVien = data.length;
    });
    this.serverHttp.getJSON().subscribe((response) => {
      this.nhanvien = response.items;
    });
    this.curPage = 1;
    this.pageSize = 5;
  }
  numberOfPages() {
    return Math.ceil(this.nhanvien.length / this.pageSize);
  }
  private loadData() {
    this.serverHttp.getNhanVien().subscribe((data) => {
      console.log('nhanvien', data);
      this.nhanvien = data;
      // this.nhanvien.map((e) => {
      //   e.tinhtrang == 'true' ? (e.tinhtrang = true) : (e.tinhtrang = false);
      //   console.log(e.tinhtrang)
      // });
    })
  }
  public AddNhanVien() {
    this.router.navigate(['add-nhanvien']);
  }
  public editNhanVien(nhanvienId: any) {
    this.router.navigate(['edit-nhanvien', nhanvienId]);
  }


  opensweetalert(nhanvienId: number, hoten: string) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: true,
    });
    swalWithBootstrapButtons
      .fire({
        title: 'B???n c?? ch???c mu???n x??a nh??n vi??n ' + hoten + ' ?',
        text: 'Thao t??c n??y kh??ng th??? ho??n t??c',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'X??c nh???n x??a',
        confirmButtonColor: '#7b2d2d',
        cancelButtonColor: '#2b5443',
        cancelButtonText: 'H???y thao t??c',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            '???? x??a!',
            'Th??ng tin c???a nh??n vi??n ' + hoten + ' ???? ???????c x??a',
            'success'
          );
          this.serverHttp.delNhanVien(nhanvienId, hoten).subscribe((data) => {
            console.log('delete', data);
            this.loadData();
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            '???? h???y thao t??c ',
            'Th??ng tin nh??n vi??n an to??n',
            'error'
          );
        }
      });
  }
}
