import { Component, OnInit } from '@angular/core';
import { ProductsServices, Product } from 'products/src';

@Component({
  selector: 'admin-products-list',
  templateUrl: './products-list.component.html',
  styles: [
  ]
})
export class ProductsListComponent implements OnInit{

  products: Product[] = [];

  constructor(
    private productService: ProductsServices
  ) { }
  ngOnInit(): void {
    this._getproducts();
  }
  private _getproducts() {
    this.productService.getproducts().subscribe((products) =>{
      this.products = products;
    });
  }
  
}
