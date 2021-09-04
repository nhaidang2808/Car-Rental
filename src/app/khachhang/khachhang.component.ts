import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { ProductService } from '../services/product.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-khachhang',
  templateUrl: './khachhang.component.html',
  styleUrls: ['./khachhang.component.css'],
})
export class KhachhangComponent implements OnInit {
  hoten:string = '';
  ngaysinh:string= "";
  solanthue: string = "";
  id:any;
  sdt:string = '';
  tinhtrang:string = '*';
  diachi:string = "";
  public curPage: number = 0;
  public pageSize: number = 0;
  public khachhang: any[] = [];
  public hopdong:any[] = [];
  public totalKhachHang = 0;
  constructor(
    private serverHttp: ProductService,
    private router: Router,
    private common: CommonService
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.serverHttp.getTotalKhachHang().subscribe((data) => {
      this.totalKhachHang = data.length
    });
    this.serverHttp.getJSON().subscribe(response => {
      this.khachhang = response.items;
    });
    this.curPage = 1;
   this.pageSize = 5;
  }
  numberOfPages() {
    return Math.ceil(this.khachhang.length / this.pageSize);
  };
  private loadData() {
    this.serverHttp.getKhachHang().subscribe((data) => {
      console.log('khachhang', data);
      this.khachhang = data;
      this.khachhang.map((e) => {
        e.tinhtrang == "true" ? e.tinhtrang = true : e.tinhtrang = false
      })
    });
  }


  public AddKhachHang() {
    this.router.navigate(['add-khachhang']);
  }

  // public delKhachHang(khachhangId: any) {
  //   console.log('khachhang', khachhangId);
  //   this.serverHttp.delKhachHang(khachhangId).subscribe((data) => {
  //     console.log('delete', data);
  //     this.loadData();
  //   });
  // }

  public editKhachHang(khachhangId: any) {
    this.router.navigate(['edit-khachhang', khachhangId]);
  }


  opensweetalert(khachhangId: number, hoten:string) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    })

    swalWithBootstrapButtons.fire({
      title: 'Bạn có chắc muốn xóa thông tin của khách hàng ' + hoten + ' ?',
      text: "Thao tác này không thể hoàn tác",
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Xác nhận xóa',
      confirmButtonColor: '#7b2d2d',
      cancelButtonColor: '#2b5443',
      cancelButtonText: 'Hủy thao tác',

      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Đã xóa!',
          'Thông tin của khách hàng ' + hoten +  ' đã được xóa',
          'success'
        )
        this.serverHttp.delKhachHang(khachhangId, hoten).subscribe((data) => {
          console.log('delete', data);
          this.loadData();
        });
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Đã hủy thao tác ',
          'Thông tin khách hàng an toàn',
          'error'
        )
      }
    })
  }
}
