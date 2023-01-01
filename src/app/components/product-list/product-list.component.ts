import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest, map, Observable, of, ReplaySubject } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

type Order = 'asc' | 'desc';
@Component({
  selector: 'app-product-list',
  styleUrls: ['./product-list.component.scss'],
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  readonly productForm: FormGroup = new FormGroup({
    orders: new FormControl(),
  });

  public orders$: Observable<Order[]> = of(['asc', 'desc']);
  private _sortSubject: ReplaySubject<Order> = new ReplaySubject<Order>();

  public sort$: Observable<Order> = this._sortSubject.asObservable();
  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this.sort$,
  ]).pipe(
    map(([product, sort]: [ProductModel[], Order]) => {
      return product.sort((a, b) => {
        if (a.title > b.title) return sort === 'asc' ? 1 : -1;
        if (a.title < b.title) return sort === 'asc' ? -1 : 1;
        return 0;
      });
    })
  );

  constructor(private _productsService: ProductsService) {
    this.productForm
      .get('orders')
      ?.valueChanges.subscribe((value) => this._sortSubject.next(value));
  }
}
