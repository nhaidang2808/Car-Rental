import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { ProductService } from '../services/product.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Xe } from '../class/xe.model';
@Component({
  selector: 'app-xe',
  templateUrl: './xe.component.html',
  styleUrls: ['./xe.component.css']
})
export class XeComponent implements OnInit {
  public bienkiemsoat:string = "";
  public id:string = "";
  public tenxe: string = "";
  public hang:string = "";
  public loaixe:string = "";
  public mau:string = "";
  public purchDate:string = "";
  public tinhtrang:string = "*";
  public price_per_day:string = "";
  public xe: any[] = [];
  public totalXe = 0;
  public curPage: number = 0;
  public pageSize: number = 0;
  constructor(
    private serverHttp: ProductService,
    private router: Router,
    private common: CommonService,
    private httpClient: HttpClient,
  ) { }
    // test del button


  ngOnInit(): void {
    this.loadData();
    this.serverHttp.getTotalXe().subscribe((data) => {
      this.totalXe = data.length
    });
    this.serverHttp.getJSON().subscribe(response => {
      this.xe = response.items;
    });
    this.curPage = 1;
   this.pageSize = 5;
  }
  numberOfPages() {
    return Math.ceil(this.xe.length / this.pageSize);
  };
  private loadData() {
    this.serverHttp.getXe().subscribe((data) => {
      console.log('xe', data);
      this.xe = data;
      this.xe.map((e) => {
        e.tinhtrang == "true" ? (e.tinhtrang = true) : (e.tinhtrang = false);
      });
    })
    this.serverHttp.getXe().subscribe((a) => {
      for(let i = 0; i < a.length; i ++){
        this.serverHttp.getHopDong().subscribe((b) =>{
          for(let j = 0; j < b.length; j++) {
            if(a[i].bienkiemsoat == b[j].bks_xethue) {
              this.httpClient.patch('http://localhost:3000/xe/' + a[i].id,{"tinhtrang": "false"}).subscribe(data => {
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
  public AddXe() {
    this.router.navigate(['add-xe']);
  }
  public editXe(xeId: any) {
    this.router.navigate(['edit-xe', xeId]);
  }
  opensweetalert(xeId: number, tenxe:string) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    })
    swalWithBootstrapButtons.fire({
      title: 'Bạn có chắc muốn xóa thông tin của xe ' + tenxe + ' ?',
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
          'Thông tin xe ' + tenxe +  ' đã được xóa',
          'success'
        )
        this.serverHttp.delXe(xeId, tenxe).subscribe((data) => {
          console.log('delete', data);
          this.loadData();
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Đã hủy thao tác ',
          'Thông tin an toàn',
          'error'
        )
      }
    })
  }
}
