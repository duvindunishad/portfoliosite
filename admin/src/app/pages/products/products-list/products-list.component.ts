import { Product, ProductsServices } from 'products/src';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'admin-products-list',
  templateUrl: './products-list.component.html',
  styles: [
  ]
})
export class ProductsListComponent implements OnInit{

  'products': Product[];
  // router: any;
  endsubs$: Subject<any> = new Subject();

  constructor(
    private productsService : ProductsServices,
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
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
  

  
  deleteProduct(productId: string) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this Product?',
      header: 'Delete Product',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productsService
          .deleteproduct(productId)
          .pipe(takeUntil(this.endsubs$))
          .subscribe(
            () => {
              this._getProducts();
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Product is deleted!'
              });
            },
            () => {
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Product is not deleted!'
              });
            }
          );
      }
    });
  }
    }