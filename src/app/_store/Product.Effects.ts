import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "../service/product.service";
import { catchError, exhaustMap, map, of } from "rxjs";
import { loadProductFailure, loadProducts, loadProductSuccess } from "./Product.Action";

@Injectable()

export class ProductEffect {
    constructor(private actions$: Actions, private productService: ProductService) {
        console.log('ProductEffect constructor');
    }

    _loadproduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadProducts),
            exhaustMap(() => {
                return this.productService.GetAll().pipe(
                    map((data) => { return loadProductSuccess({ list: data }) }),
                    catchError((err) => of(loadProductFailure({ errormessage: err })))
                )
            })
        )
    )
}