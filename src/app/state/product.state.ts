export enum ProductActionsTypes {
  GET_ALL_PRODUCTS = '[Product] Get All products',
  GET_SELECTED_PRODUCTS = '[Product] Get Selected products',
  GET_AVAILABLE_PRODUCTS = '[Product] Get Available products',
  SEARCH_PRODUCTS = '[Product] Search products',
  NEW_PRODUCT = '[Product] New products',
  SELECT_PRODUCT = '[Product] Select product',
  DELETE_PRODUCT = '[Product] Delete product',
  UPDATE_PRODUCT = '[Product] Update product',
}

export interface ActionEvent {
  type: ProductActionsTypes,
  payload?: any,
  // error: string: you can add it to catch invalid action events.
}

export enum DataStateEnum {
  LOADING,
  LOADED,
  ERROR,
}

export interface AppDataState<T> {
  dataState?: DataStateEnum,
  data?: T,
  errorMessage?: string
}
