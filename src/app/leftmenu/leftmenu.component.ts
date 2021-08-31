import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {

  public khachhang: any;

  public totalKhachHang = 0;

  constructor(private serverHttp: ProductService,
              private router: Router,
              private common: CommonService) { }

  ngOnInit(): void {

  }

}
