import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsServices } from '../../services/products.service';
import { Product } from '../../models/product';
import { Subject, takeUntil } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'featured-products',
  templateUrl: './featured-products.component.html',
  styles: [
  ]
})
export class FeaturedProductsComponent implements OnInit, OnDestroy{

  featuredProducts: Product[] = [];
  endSubs$ : Subject<any> = new Subject();

  constructor(private prodService: ProductsServices){}
  ngOnInit(): void {
    this._getFeaturedProducts()
  }

  private _getFeaturedProducts(){
    this.prodService.getFeaturedProducts(4).pipe(takeUntil(this.endSubs$)).subscribe(products =>{
      this.featuredProducts = products;
    })
  }
  ngOnDestroy(): void {
      this.endSubs$.next(__values);
      this.endSubs$.complete();
  }
}
