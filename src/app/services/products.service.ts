import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../pages/store/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http!: HttpClient;

  uri = 'https://fakestoreapi.com/products';

  constructor(http: HttpClient) {
    this.http = http;
  }

  getProducts() {
    return this.http.get<Product[]>(`${this.uri}`);
  }

  getProduct({ id }: { id: number }) {
    return this.http.get<Product>(`${this.uri}/${id}`);
  }
}
