import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-add-khach-hang',
  templateUrl: './add-khach-hang.component.html',
  styleUrls: ['./add-khach-hang.component.css']
})
export class AddKhachHangComponent implements OnInit {
  public KhachHangForm = new FormGroup({
    hoten: new FormControl(''),
    solanthue: new FormControl(''),
    id: new FormControl(''),
    sdt: new FormControl(''),
    diachi: new FormControl(''),
    tinhtrang: new FormControl(),
    ngaysinh: new FormControl(''),
    cccd:new FormControl(''),
  })
  constructor(
    private serverHttp: ProductService,
    private router: Router,) { }
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
    this.serverHttp.postKhachHang(newKhachHang).subscribe(data => {
      console.log(data)
      this.router.navigate(['khachhang'])
    })
  }
}
