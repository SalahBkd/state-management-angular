import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../models/product.model';
import {Observable, of} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import {AppDataState, DataStateEnum} from '../../state/product.state';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$: Observable<AppDataState<Product[]>> | null = null;
  readonly dataStateEnum = DataStateEnum;

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    this.products$ = this.productsService.getAllProducts()
      .pipe(
        map(products => {
          return ({dataState: DataStateEnum.LOADED, data: products})
        }),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

  onGetSelectedProducts() {
    this.products$ = this.productsService.getSelectedProducts()
      .pipe(
        map(products => {
          return ({dataState: DataStateEnum.LOADED, data: products})
        }),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

  onGetAvailableProducts() {
    this.products$ = this.productsService.getAvailableProducts()
      .pipe(
        map(products => {
          return ({dataState: DataStateEnum.LOADED, data: products})
        }),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

  onSearchProducts(dataForm: any) {
    this.products$ = this.productsService.searchProducts(dataForm.keyword)
      .pipe(
        map(products => {
          return ({dataState: DataStateEnum.LOADED, data: products})
        }),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

  onProductSelect(product: Product) {
    this.productsService.selectProduct(product)
      .subscribe();
  }

  onProductDelete(product: Product) {
    this.productsService.deleteProduct(product)
      .subscribe(() => this.onGetAllProducts());
  }

  onAddProduct() {
    this.router.navigateByUrl('/newProduct');
  }

  onProductUpdate(product: Product) {
    this.router.navigateByUrl('/updateProduct/' + product.id);
  }
}
