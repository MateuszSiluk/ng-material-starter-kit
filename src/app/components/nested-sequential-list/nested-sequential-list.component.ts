import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { concatMap, forkJoin, from, map, Observable, switchMap } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-nested-sequential-list',
  templateUrl: './nested-sequential-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NestedSequentialListComponent {
  readonly products$: Observable<ProductModel[]> =
    this._productsService.getAll();

  //jesli jeden element do wyewmitowania to concatMap albo switchMap
  //forkJoin czeka na wszystko, przyjmuje tablice pamieta o tablicach pamieta index
//combineLatest
  readonly productsWithChips$: Observable<any> = this._productsService
    .getAll()
    .pipe(
      switchMap((products) =>
        forkJoin(
          // forkJoin zwraca tablice czeka na wszystko az sie skonczy concatMap() - jesli wartosc emituje
          products.map((product) =>
            this._productsService.getOther(product.category).pipe(
              map((productsByCategory) => ({
                product: product,
                data: productsByCategory,
              }))
            )
          )
        )
      )
    );

  readonly productsWithChips2$: Observable<any> = this._productsService
    .getAll()
    .pipe(
      switchMap((products) =>
        from(products).pipe(
          switchMap((product) =>
            this._productsService.getOther(product.category).pipe(
              map((productsByCategory) => ({
                product: product,
                data: productsByCategory,
              }))
            )
          )
        )
      )
    );

  readonly productsWithChips23$: Observable<any> = this._productsService
    .getAll()
    .pipe(
      switchMap((products) =>
        from(products).pipe(
          // forkJoin czeka na wszystko az sie skonczy concatMap() - jesli wartosc emituj
          concatMap((product) =>
            this._productsService.getOther(product.category).pipe(
              map((productsByCategory) => ({
                product: product,
                data: productsByCategory,
              }))
            )
          )
        )
      )
    );

  constructor(private _productsService: ProductsService) {}
}
