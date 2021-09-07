import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../services/common.service';
import { ProductService } from '../services/product.service';
import { Nhanvien } from '../class/nhanvien.model'
@Component({
  selector: 'app-editnhanvien',
  templateUrl: './editnhanvien.component.html',
  styleUrls: ['./editnhanvien.component.css']
})
export class EditnhanvienComponent implements OnInit {
  public id = 0;
  public KhachHangForm = new FormGroup({
    hoten: new FormControl(''),
    sdt: new FormControl(''),
    diachi: new FormControl(''),
    ngaysinh: new FormControl(''),
    cccd: new FormControl(''),
    ngaynhanviec: new FormControl(''),
    chucvu: new FormControl(''),
  });
  constructor(
    private serverHttp: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id > 0) {
      this.loadData(this.id);
    }
  }
  private loadData(id: any) {
    console.log('load data', id);
    this.serverHttp.get1NhanVien(id).subscribe((data) => {
      console.log('get 1 nhanvien', data);
      for (const controlHoten in this.KhachHangForm.controls) {
        if (controlHoten) {
          this.KhachHangForm.controls[controlHoten].setValue(
            data[controlHoten]
          );
        }
      }
    });
  }
  private createNewData() {
    const newKhachHang: any = {};
    for (const controlHoten in this.KhachHangForm.controls) {
      if (controlHoten) {
        newKhachHang[controlHoten] = this.KhachHangForm.controls[controlHoten].value;
      }
    }
    return newKhachHang as Nhanvien;
  }
  public saveAndGoList() {
    if (this.id > 0) {
      this.serverHttp
        .modifyNhanVien(this.id, this.createNewData())
        .subscribe((data) => {
          this.router.navigate(['nhanvien']);
        });
    }
  }
}
