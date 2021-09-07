import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;
  // isShow!:boolean;
  // public khachhang: any;
  // public totalKhachHang = 0;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }
  onLogout() {
    this.authService.logout();
  }
}
