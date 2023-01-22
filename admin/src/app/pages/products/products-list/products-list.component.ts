import { Component, OnInit } from '@angular/core';
import { Product, ProductsServices } from 'products/src';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-products-list',
  templateUrl: './products-list.component.html',
  styles: [
  ]
})
export class ProductsListComponent implements OnInit{

  'products': Product[];
  router: any;

  constructor(
    private productsService : ProductsServices
  ) { }
  ngOnInit(): void {
    this._getProducts();
  }
  private _getProducts() {
    this.productsService.getProducts().subscribe(products =>{
      this.products = products;
    });
  }
  updateProduct(productId: string){
    this.router.navigateByUrl(`products/products-form/${productId}`)
  }
  

  
  // deleteCategory(categoriesId : string) {

  //   this.confirmationService.confirm({
  //     message: 'Are you sure to delete this category?',
  //     header: 'Delete category',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.productsService.deleteCategory(categoriesId).subscribe
  //       (Response =>{
  //         this._getCategories()
  //         this.messageService.add({severity:'success', summary:'success', detail:'Category deleted succesfuly'});
  //       },
  //       (error)=>
  //       {
  //         this.messageService.add({severity:'error', summary:'error', detail:'Category not deleted'});
  //       });
  //     },
    }