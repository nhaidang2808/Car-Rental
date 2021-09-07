import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-hopdong',
  templateUrl: './hopdong.component.html',
  styleUrls: ['./hopdong.component.css'],
})
export class HopdongComponent implements OnInit {
  id: string = '';
  nguoithue: string = '';
  songaythue: string = '';
  ngaygiaoxe: string = '';
  ngaytraxe: string = '';
  gia: string = '';
  trangthai: string = '*';
  trehan: string = '*';
  phitrehan: string = '';
  cccd:string = "";
  bks_xethue:string = "";
  public hopdong: any[] = [];
  public totalHopDong = 0;
  public curPage: number = 0;
  public pageSize: number = 0;
  constructor(
    private serverHttp: ProductService,
    private router: Router,
    private common: CommonService
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.serverHttp.getTotalHopDong().subscribe((data) => {
      this.totalHopDong = data.length;
    });
    this.serverHttp.getJSON().subscribe((response) => {
      this.hopdong = response.items;
    });
    this.curPage = 1;
    this.pageSize = 5;
  }

  numberOfPages() {
    return Math.ceil(this.hopdong.length / this.pageSize);
  }
  private loadData() {
    this.serverHttp.getHopDong().subscribe((data) => {
      console.log('hopdong', data);
      this.hopdong = data;
      this.hopdong.map((e) => {
        e.trangthai == "true" ? e.trangthai = true : e.trangthai = false
      });
      this.hopdong.map((e) => {
        e.trehan == "true" ? e.trehan = true : e.trehan = false
      })
    });
  }

  public AddHopDong() {
    this.router.navigate(['add-hopdong']);
  }
  public editHopDong(hopdongId: any) {
    this.router.navigate(['edit-hopdong', hopdongId]);
  }
}
