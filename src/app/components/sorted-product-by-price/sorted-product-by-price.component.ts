import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-sorted-product-by-price',
  templateUrl: './sorted-product-by-price.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortedProductByPriceComponent {
  readonly products$: Observable<ProductModel[]> =
    this._productsService.getAll();

  private _price: BehaviorSubject<string> = new BehaviorSubject<string>(
    Sort.ASC
  );
  public price$: Observable<string> = this._price.asObservable();
  public prices$: Observable<string[]> = of([Sort.ASC, Sort.DESC]);

  readonly productPrice$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this.price$,
  ]).pipe(
    map(([products, price]: [ProductModel[], string]) =>
      products.sort((a, b) => {
        switch (price) {
          case Sort.ASC:
            return +b.price - +a.price;
          case Sort.DESC:
            return +a.price - +b.price;
          default:
            return 0;
        }
      })
    )
  );

  constructor(private _productsService: ProductsService) {}

  sortPrice(price: string): void {
    this._price.next(price);
  }
}

enum Sort {
  ASC = 'asc',
  DESC = 'desc',
}
