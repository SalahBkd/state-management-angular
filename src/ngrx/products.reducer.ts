import {Product} from '../app/models/product.model';
import {ProductsActions, ProductsActionsTypes} from './products.actions';

export enum ProductsStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
}

export interface ProductsState {
  products: Product[],
  errorMessage: string,
  dataState: ProductsStateEnum
}

const initialState: ProductsState = {
  products: [],
  errorMessage: '',
  dataState: ProductsStateEnum.INITIAL
}

export function productsReducer(state: ProductsState = initialState, action: ProductsActions): ProductsState {
  switch (action.type) {
    // GET PRODUCTS
    case ProductsActionsTypes.GET_ALL_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING}
    case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: action.payload}
    case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: action.payload}

    // GET SELECTED PRODUCTS
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING}
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: action.payload}
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: action.payload}
    default: return {...state};
  }
}
