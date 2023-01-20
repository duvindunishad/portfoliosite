import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Porduct } from '../models/product';
//import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsServices {
  
    constructor(private http: HttpClient) {}
  
  getproducts(): Observable<Porduct[]>{
    return this.http.get<Porduct[]>('http://localhost:3000/api/v1/products')
  }
  // getproduct(productsId : string): Observable<Porduct>{
  //   return this.http.get<Porduct>(`http://localhost:3000/api/v1/products/${productsId}`);
  // }
  // createproduct(product: Porduct): Observable<Porduct[]> {
  //   return this.http.post<Porduct[]>('http://localhost:3000/api/v1/products', product)
  // }
  // deleteproduct(productsId: string): Observable<any> {
  //   return this.http.delete<any>(`http://localhost:3000/api/v1/products/${productsId}`)
  // }
  // updateproduct(product: Porduct): Observable<Porduct[]> {
  //   return this.http.put<Porduct[]>('http://localhost:3000/api/v1/products/:'+ product['id'], product);
  // }
}
