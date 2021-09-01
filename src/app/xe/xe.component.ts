import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-xe',
  templateUrl: './xe.component.html',
  styleUrls: ['./xe.component.css']
})
export class XeComponent implements OnInit {

  public id:string = "";
  public tenxe: string = "";
  public hang:string = "";
  public loaixe:string = "";
  public mau:string = "";
  public purchDate:string = "";
  public tinhtrang:string = "*";
  public price_per_day:string = "";
  public xe: any[] = [];
  public totalXe = 0;
  public curPage: number = 0;
  public pageSize: number = 0;

  constructor(
    private serverHttp: ProductService,
    private router: Router,
    private common: CommonService
  ) { }

  ngOnInit(): void {
    this.loadData();
    this.serverHttp.getTotalXe().subscribe((data) => {
      this.totalXe = data.length
    });
    this.serverHttp.getJSON().subscribe(response => {
      this.xe = response.items;
    });
    this.curPage = 1;
   this.pageSize = 5;
  }
  numberOfPages() {
    return Math.ceil(this.xe.length / this.pageSize);
  };
  private loadData() {
    this.serverHttp.getXe().subscribe((data) => {
      console.log('xe', data);
      this.xe = data;
      this.xe.map((e) => {
        e.tinhtrang == "true" ? e.tinhtrang = true : e.tinhtrang = false
      })
    });
  }
  public AddXe() {
    this.router.navigate(['add-xe']);
  }

  public delXe(xeId: any) {
    console.log('xe', xeId);
    this.serverHttp.delXe(xeId).subscribe((data) => {
      console.log('delete', data);
      this.loadData();
    });
  }
  public editXe(xeId: any) {
    this.router.navigate(['edit-xe', xeId]);
  }
}
