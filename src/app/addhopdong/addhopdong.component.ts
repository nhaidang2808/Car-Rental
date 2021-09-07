import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-addhopdong',
  templateUrl: './addhopdong.component.html',
  styleUrls: ['./addhopdong.component.css']
})
export class AddhopdongComponent implements OnInit {
  public HopDongForm = new FormGroup({
    id: new FormControl(''),
    nguoithue: new FormControl(''),
    songaythue: new FormControl(''),
    ngaygiaoxe: new FormControl(''),
    ngaytraxe: new FormControl(''),
    gia: new FormControl(''),
    trehan: new FormControl(''),
    phitrehan: new FormControl(''),
    trangthai: new FormControl(''),
  })
  usAmount: any;
  usAmountPhiTreHan: any;
  id: any;
  constructor(
    private serverHttp: ProductService,
    private router: Router,
    private http: HttpClient,
  ) { }
  updateUSAmount(event:any) { this.usAmount = event.target.value; }
  updateUSAmountPhiTreHan(eventPhiTreHan:any) { this.usAmountPhiTreHan = eventPhiTreHan.target.value; }

  ngOnInit(): void {

  }
  public onSubmit() {
    const newHopDong: any = {};
    for(const controlHD in this.HopDongForm.controls) {
      if(controlHD) {
        newHopDong[controlHD] = this.HopDongForm.controls[controlHD].value;
      }
    }
    console.log(newHopDong)
    this.serverHttp.postHopDong(newHopDong).subscribe(data => {
      console.log(data)
      this.router.navigate(['hopdong'])
    })

  }

}
