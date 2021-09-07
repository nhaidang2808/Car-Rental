import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-addnhanvien',
  templateUrl: './addnhanvien.component.html',
  styleUrls: ['./addnhanvien.component.css']
})
export class AddnhanvienComponent implements OnInit {
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
  ) { }
  ngOnInit(): void {}
  public onSubmit() {
    console.log('onsubmit');
    const newKhachHang: any = {};
    for(const controlHoten in this.KhachHangForm.controls) {
      if(controlHoten) {
        newKhachHang[controlHoten] = this.KhachHangForm.controls[controlHoten].value;
      }
    }
    console.log(newKhachHang)
    this.serverHttp.postNhanVien(newKhachHang).subscribe(data => {
      console.log(data)
      this.router.navigate(['nhanvien'])
    })
  }
}
