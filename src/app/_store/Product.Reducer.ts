import { createReducer, on } from "@ngrx/store";
import { productState } from "./Product.state";
import { loadProductFailure, loadProductSuccess } from './Product.Action';

const _productReducer = createReducer(productState,
    on(loadProductSuccess, (state, action) => {
        return {
            ...state,
            list: action.list,
            errorMessage: ""
        }
    }),
    on(loadProductFailure, (state, action) => {
        return {
            ...state,
            list: [],
            errorMessage: action.errormessage
        }
    })
)

export function ProductReducer(state : any, action : any) {
    return _productReducer(state, action);
}