import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductModel } from "../model/ProductStatemodel";

const getProductstate = createFeatureSelector<ProductModel>('product');
export const getProductList = createSelector(getProductstate, (state: ProductModel) => {
    return state.list;
});