import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<any> {
    let apiUrl = environment.apiUrl;
    return this.http.get(apiUrl + '/products');
  }

  getSelectedProducts(): Observable<any> {
    let apiUrl = environment.apiUrl;
    return this.http.get(apiUrl + '/products?selected=true');
  }

  getAvailableProducts(): Observable<any> {
    let apiUrl = environment.apiUrl;
    return this.http.get(apiUrl + '/products?available=true');
  }

  searchProducts(keyword: string): Observable<any> {
    let apiUrl = environment.apiUrl;
    return this.http.get(apiUrl + '/products?name_like=' + keyword);
  }

  selectProduct(product: Product): Observable<any> {
    let apiUrl = environment.apiUrl;
    product.selected = !product.selected;
    return this.http.put<any>(apiUrl + '/products/' + product.id, product);
  }

  deleteProduct(product: Product): Observable<any> {
    let apiUrl = environment.apiUrl;
    return this.http.delete<any>(apiUrl + '/products/' + product.id);
  }

  addProduct(product: Product): Observable<any> {
    let apiUrl = environment.apiUrl;
    return this.http.post<any>(apiUrl + '/products', product);
  }

  getProduct(productId: number): Observable<any> {
    let apiUrl = environment.apiUrl;
    return this.http.get<any>(apiUrl + '/products/' + productId);
  }

  updateProduct(product: Product): Observable<any> {
    let apiUrl = environment.apiUrl;
    return this.http.put<any>(apiUrl + '/products/' + product.id, product);
  }

}
