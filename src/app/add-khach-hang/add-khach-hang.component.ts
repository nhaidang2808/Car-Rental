import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { KhachHang } from '../class/khach-hang.model';

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
  })

  constructor(
    private serverHttp: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

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
    })
  }

}
