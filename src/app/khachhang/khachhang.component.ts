import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { ProductService } from '../services/product.service';
import Swal from 'sweetalert2';
import { identity } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-khachhang',
  templateUrl: './khachhang.component.html',
  styleUrls: ['./khachhang.component.css'],
})
export class KhachhangComponent implements OnInit {
  hoten: string = '';
  ngaysinh: string = '';
  cccd:string = "";
  solanthue: string = '';
  id: any;
  sdt: string = '';
  tinhtrang: string = '*';
  diachi: string = '';
  public curPage: number = 0;
  public pageSize: number = 0;
  public khachhang: any[] = [];
  public hopdong: any[] = [];
  public totalKhachHang = 0;
  public arrayHopDong: any[] = [];
  public arrayKhachHang: any[] = [];
  constructor(
    private serverHttp: ProductService,
    private router: Router,
    private common: CommonService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {

    this.loadData();
    this.serverHttp.getTotalKhachHang().subscribe((data) => {
      this.totalKhachHang = data.length;
    });
    this.serverHttp.getJSON().subscribe((response) => {
      this.khachhang = response.items;
    });
    this.curPage = 1;
    this.pageSize = 5;

  }
  numberOfPages() {
    return Math.ceil(this.khachhang.length / this.pageSize);
  }
  private loadData() {
    this.serverHttp.getKhachHang().subscribe((data) => {
      console.log('khachhang', data);
      this.khachhang = data;
      this.khachhang.map((e) => {
        e.tinhtrang == 'true' ? (e.tinhtrang = true) : (e.tinhtrang = false);
        console.log(e.tinhtrang)
      });
    })
    this.serverHttp.getKhachHang().subscribe((a) => {
      for(let i = 0; i < a.length; i ++){
        this.serverHttp.getHopDong().subscribe((b) =>{
          for(let j = 0; j < b.length; j++) {
            if(a[i].cccd == b[j].cccd) {
              const body = {tinhtrang: "true"};
              this.http.patch('http://localhost:3000/khachhang/' + a[i].id,{"tinhtrang": "true"}).subscribe(data => {
                console.log("PUT request is successful", data);
              },
              error => {
                console.log("error", error)
              })
            }
            else{
              console.log("234")
            }
          }
        })
      }
    })
  }
  public AddKhachHang() {
    this.router.navigate(['add-khachhang']);
  }
  public editKhachHang(khachhangId: any) {
    this.router.navigate(['edit-khachhang', khachhangId]);
  }
  opensweetalert(khachhangId: number, hoten: string) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: true,
    });
    swalWithBootstrapButtons
      .fire({
        title: 'Bạn có chắc muốn xóa thông tin của khách hàng ' + hoten + ' ?',
        text: 'Thao tác này không thể hoàn tác',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Xác nhận xóa',
        confirmButtonColor: '#7b2d2d',
        cancelButtonColor: '#2b5443',
        cancelButtonText: 'Hủy thao tác',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Đã xóa!',
            'Thông tin của khách hàng ' + hoten + ' đã được xóa',
            'success'
          );
          this.serverHttp.delKhachHang(khachhangId, hoten).subscribe((data) => {
            console.log('delete', data);
            this.loadData();
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Đã hủy thao tác ',
            'Thông tin khách hàng an toàn',
            'error'
          );
        }
      });
  }
}
