import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public title = '';
  public price = '';
  public id: any;
  public products: any;
  public employees: any;

  constructor(private serverHttp: ProductService) { }

  ngOnInit(): void {

  }
}
