import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import  { Xe } from '../class/xe.model'
@Component({
  selector: 'app-add-xe',
  templateUrl: './add-xe.component.html',
  styleUrls: ['./add-xe.component.css']
})
export class AddXeComponent implements OnInit {

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
    private route: ActivatedRoute
  ) { }
  updateUSAmount(event:any) { this.usAmount = event.target.value; }
  ngOnInit(): void {
  }
  public onSubmit() {
    const newXe: any = {};
    for(const controlXe in this.XeForm.controls) {
      if(controlXe) {
        newXe[controlXe] = this.XeForm.controls[controlXe].value;
      }
    }
    console.log(newXe)
    this.serverHttp.postXe(newXe).subscribe(data => {
      console.log(data)
      this.router.navigate(['xe'])
    })
  }
}
