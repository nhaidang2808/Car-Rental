import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { ProductService } from '../services/product.service';
import { KhachHang } from '../class/khach-hang.model';
@Component({
  selector: 'app-edit-khach-hang',
  templateUrl: './edit-khach-hang.component.html',
  styleUrls: ['./edit-khach-hang.component.css'],
})
export class EditKhachHangComponent implements OnInit {
  public id = 0;
  public KhachHangForm = new FormGroup({
    hoten: new FormControl(''),
    solanthue: new FormControl(''),
    id: new FormControl(''),
  });
  constructor(
    private serverHttp: ProductService,
    private router: Router,
    private common: CommonService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id > 0) {
      this.loadData(this.id);
    }
  }

  private loadData(id: any) {
    console.log('load data', id);
    this.serverHttp.get1KhachHang(id).subscribe((data) => {
      console.log('get 1 khachhang', data);
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
        newKhachHang[controlHoten] =
          this.KhachHangForm.controls[controlHoten].value;
      }
    }
    return newKhachHang as KhachHang;
  }

  public saveAndGoList() {
    if (this.id > 0) {
      this.serverHttp
        .modifyKhachHang(this.id, this.createNewData())
        .subscribe((data) => {
          this.router.navigate(['khachhang']);
        });
    }
  }
}
