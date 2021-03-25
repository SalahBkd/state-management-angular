import {Action} from '@ngrx/store';
import {Product} from '../app/models/product.model';

export enum ProductsActionsTypes {
  // GET PRODUCTS
  GET_ALL_PRODUCTS = '[Products] get all products',
  GET_ALL_PRODUCTS_SUCCESS = '[Products] get all products success',
  GET_ALL_PRODUCTS_ERROR = '[Products] get all products error',

  // GET SELECTED PRODUCTS
  GET_SELECTED_PRODUCTS = '[Products] get selected products',
  GET_SELECTED_PRODUCTS_SUCESS = '[Products] get selected products success',
  GET_SELECTED_PRODUCTS_ERROR = '[Products] get selected products error',
}

export class GetAllProductsAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS;
  constructor(public payload: any) {
  }
}

export class GetAllProductsSuccessAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {
  }
}

export class GetAllProductsErrorAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload: string) {
  }
}

// GET SELECTED PRODUCTS
export class GetSelectedProductsAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS;
  constructor(public payload: any) {
  }
}

export class GetSelectedProductsSuccessAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCESS;
  constructor(public payload: Product[]) {
  }
}

export class GetSelectedProductsErrorAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
  constructor(public payload: string) {
  }
}

export type ProductsActions =
  GetAllProductsAction | GetAllProductsSuccessAction | GetAllProductsErrorAction |
  GetSelectedProductsAction | GetSelectedProductsSuccessAction | GetSelectedProductsErrorAction;
