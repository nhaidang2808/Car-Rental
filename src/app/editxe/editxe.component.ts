import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../services/common.service';
import { ProductService } from '../services/product.service';
import { Xe } from '../class/xe.model'
@Component({
  selector: 'app-editxe',
  templateUrl: './editxe.component.html',
  styleUrls: ['./editxe.component.css']
})
export class EditxeComponent implements OnInit {
  public id = 0;
  public XeForm = new FormGroup({
    id: new FormControl(''),
    tenxe: new FormControl(''),
    hang: new FormControl(''),
    loaixe: new FormControl(''),
    mau: new FormControl(''),
    purchDate: new FormControl(''),
    tinhtrang: new FormControl(),
    price_per_day: new FormControl(''),
    bienkiemsoat: new FormControl(''),
  })
  usAmount: any;
  constructor(
    private serverHttp: ProductService,
    private router: Router,
    private common: CommonService,
    private route: ActivatedRoute
  ) { }
  updateUSAmount(event:any) { this.usAmount = event.target.value; }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id > 0) {
      this.loadData(this.id);
    }
  }

  private loadData(id: any) {
    console.log('load data', id);
    this.serverHttp.get1Xe(id).subscribe((data) => {
      console.log('get 1 xe', data);
      for (const controlXe in this.XeForm.controls) {
        if (controlXe) {
          this.XeForm.controls[controlXe].setValue(
            data[controlXe]
          );

        }
      }
    });
  }

  private createNewData() {
    const newXe: any = {};
    for (const controlXe in this.XeForm.controls) {
      if (controlXe) {
        newXe[controlXe] =
          this.XeForm.controls[controlXe].value;
      }
    }
    return newXe as Xe;
  }

  public saveAndGoList() {
    if (this.id > 0) {
      this.serverHttp
        .modifyXe(this.id, this.createNewData())
        .subscribe((data) => {
          this.router.navigate(['xe']);
        });
    }
  }

}
