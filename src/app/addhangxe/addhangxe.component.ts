import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-addhangxe',
  templateUrl: './addhangxe.component.html',
  styleUrls: ['./addhangxe.component.css']
})
export class AddhangxeComponent implements OnInit {

  public KhachHangForm = new FormGroup({
    tenhang:new FormControl(''),
  })
  constructor(
    private serverHttp: ProductService,
    private router: Router,
  ) { }

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
    this.serverHttp.postHangXe(newKhachHang).subscribe(data => {
      console.log(data)
      this.router.navigate(['hangxe'])

    })
  }
}
