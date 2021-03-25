import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {
  GetAllProductsAction,
  GetAllProductsErrorAction,
  GetAllProductsSuccessAction, GetSelectedProductsErrorAction,
  GetSelectedProductsSuccessAction,
  ProductsActionsTypes
} from './products.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {ProductsService} from '../app/services/products.service';

@Injectable({providedIn: 'root'})
export class ProductsEffects {

  constructor(private effectsActions: Actions, private productsService: ProductsService) {
  }

  getAllProductsEffect: Observable<Action> = createEffect(
    () => this.effectsActions.pipe(
      ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
      mergeMap(action => {
        return this.productsService.getAllProducts()
          .pipe(
            map(products => new GetAllProductsSuccessAction(products)))
            catchError((err) => of(new GetAllProductsErrorAction(err.message))
          )
      })
    )
  )

  getSelectedProductsEffect: Observable<Action> = createEffect(
    () => this.effectsActions.pipe(
      ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS),
      mergeMap(action => {
        return this.productsService.getSelectedProducts()
          .pipe(
            map(products => new GetSelectedProductsSuccessAction(products)))
        catchError((err) => of(new GetSelectedProductsErrorAction(err.message))
        )
      })
    )
  )
}
