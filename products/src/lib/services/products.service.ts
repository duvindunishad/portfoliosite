import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
//import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsServices {
  
    constructor(private http: HttpClient) {}
  
    getProducts(categoriesFilter?:string[]): Observable<Product[]>{
    let params = new HttpParams();
    if(categoriesFilter){
      params = params.append('categories', categoriesFilter.join(','))
    }
      return this.http.get<Product[]>('http://localhost:3000/api/v1/products', {params:params})
  }
  getProduct(productsId : string): Observable<Product>{
    return this.http.get<Product>(`http://localhost:3000/api/v1/products/${productsId}`);
  }
  createProduct(productData: FormData): Observable<Product> {
    return this.http.post<Product>('http://localhost:3000/api/v1/products', productData)
  }
  deleteproduct(productsId: string): Observable<Product> {
    return this.http.delete<Product>(`http://localhost:3000/api/v1/products/${productsId}`)
  }
  updateproduct(product: Product): Observable<Product[]> {
    return this.http.put<Product[]>('http://localhost:3000/api/v1/products/:'+ product['id'], product);
  }
  getFeaturedProducts(count:number): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/api/v1/products/get/featured/:count')
 
  }
}
