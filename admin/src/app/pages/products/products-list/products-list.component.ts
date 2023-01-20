import { Component, OnInit } from '@angular/core';
import { ProductsServices, Porduct } from 'products/src';

@Component({
  selector: 'admin-products-list',
  templateUrl: './products-list.component.html',
  styles: [
  ]
})
export class ProductsListComponent implements OnInit{

  products: Porduct[] = [];

  constructor(
    private productService: ProductsServices
  ) { }
  ngOnInit(): void {
    this._getProducts();
  }
  private _getProducts() {
    this.productService.getproducts().subscribe((products) =>{
      this.products = products;
    });
  }
}
