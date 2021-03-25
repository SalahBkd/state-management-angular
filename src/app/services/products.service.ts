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

}
