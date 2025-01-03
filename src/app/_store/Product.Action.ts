import { createAction, props } from "@ngrx/store";
import { Products } from "../model/Productmodel";

export const LOAD_PRODUCTS = '[Product] Load Products';
export const LOAD_PRODUCTS_SUCCESS = '[Product] Load Products Success';
export const LOAD_PRODUCTS_FAILURE = '[Product] Load Products Failure';

export const loadProducts = createAction(LOAD_PRODUCTS);
export const loadProductSuccess = createAction(LOAD_PRODUCTS_SUCCESS, props<{list:Products[]}>());
export const loadProductFailure = createAction(LOAD_PRODUCTS_FAILURE, props<{errormessage:string}>());