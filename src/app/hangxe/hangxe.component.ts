import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { ProductService } from '../services/product.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-hangxe',
  templateUrl: './hangxe.component.html',
  styleUrls: ['./hangxe.component.css']
})
export class HangxeComponent implements OnInit {
  id:any;
  tenhang: string = "";
  public curPage: number = 0;
  public pageSize: number = 0;
  public hangxe:any[] = [];
  public totalHangXe = 0;
  constructor(
    private serverHttp: ProductService,
    private router: Router,
    private common: CommonService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loadData();
    this.serverHttp.getTotalHangXe().subscribe((data) => {
      this.totalHangXe = data.length;
    });
    this.serverHttp.getJSON().subscribe((response) => {
      this.hangxe = response.items;
    });
    this.curPage = 1;
    this.pageSize = 5;
  }
  numberOfPages() {
    return Math.ceil(this.hangxe.length / this.pageSize);
  }
  private loadData() {
    this.serverHttp.getHangXe().subscribe((data) => {
      console.log('hangxe', data);
      this.hangxe = data;
    })
  }
  public AddHangXe() {
    this.router.navigate(['add-hangxe']);
  }
  opensweetalert(hangxeId: number, tenhang: string) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: true,
    });
    swalWithBootstrapButtons
      .fire({
        title: 'Bạn có chắc muốn xóa hãng xe ' + tenhang + ' ?',
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
            'Hãng xe ' + tenhang + ' đã được xóa',
            'success'
          );
          this.serverHttp.delHangXe(hangxeId, tenhang).subscribe((data) => {
            console.log('delete', data);
            this.loadData();
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Đã hủy thao tác ',
            'Thông tin hãng xe an toàn',
            'error'
          );
        }
      });
  }
}
