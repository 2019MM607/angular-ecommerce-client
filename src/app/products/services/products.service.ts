import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public products!: Product[];

  constructor(private http: HttpClient) {}

  public getProducts() {
    this.http
      .get<Product[]>('http://localhost:8080/api/products')
      .subscribe((products) => {
        this.products = products.filter((product) => product?.stock > 0);
      });
  }
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8080/api/products/${id}`);
  }

  getProductsByName(name: string) {
    this.http
      .get<Product[]>(`http://localhost:8080/api/products/search/${name}`)
      .subscribe((products) => {
        this.products = products;
      });
  }

  order(payload: any) {
    return this.http.post('http://localhost:8080/api/orders', payload);
  }

  orderDetails(payload: any) {
    return this.http.post('http://localhost:8080/api/details', payload);
  }
}
