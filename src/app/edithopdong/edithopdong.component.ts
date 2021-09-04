import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Hopdong } from '../class/hopdong.model';
import { CommonService } from '../services/common.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edithopdong',
  templateUrl: './edithopdong.component.html',
  styleUrls: ['./edithopdong.component.css']
})
export class EdithopdongComponent implements OnInit {
  public songaythue:any;
  usAmount: any;
  usAmountPhiTreHan: any;
  public id = 0;
  public HopDongForm = new FormGroup({
    id: new FormControl(''),
    nguoithue: new FormControl(''),
    songaythue: new FormControl(''),
    ngaygiaoxe: new FormControl(''),
    ngaytraxe: new FormControl(''),
    gia: new FormControl(''),
    trangthai: new FormControl(''),
    trehan: new FormControl(''),
    phitrehan: new FormControl(''),
  })

  constructor(
    private serverHttp: ProductService,
    private router: Router,
    private common: CommonService,
    private route: ActivatedRoute
  ) { }
  updateUSAmount(event:any) { this.usAmount = event.target.value; }

  updateUSAmountPhiTreHan(eventPhiTreHan:any) { this.usAmountPhiTreHan = eventPhiTreHan.target.value; }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id > 0) {
      this.loadData(this.id);
    }
  }

  private loadData(id: any) {
    console.log('load data', id);
    this.serverHttp.get1HopDong(id).subscribe((data) => {
      console.log('get 1 hop dong', data);
      for (const controlHopDong in this.HopDongForm.controls) {
        if (controlHopDong) {
          this.HopDongForm.controls[controlHopDong].setValue(
            data[controlHopDong]
          );

        }
      }
    });
  }

  private createNewData() {
    const newHopDong: any = {};
    for (const controlHopDong in this.HopDongForm.controls) {
      if (controlHopDong) {
        newHopDong[controlHopDong] =
          this.HopDongForm.controls[controlHopDong].value;

      }
    }
    return newHopDong as Hopdong;
  }


  public saveAndGoList() {
    if (this.id > 0) {
      this.serverHttp
        .modifyHopDong(this.id, this.createNewData())
        .subscribe((data) => {
          this.router.navigate(['hopdong']);
        });
    }
  }
}
