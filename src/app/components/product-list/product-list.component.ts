import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  styleUrls: ['./product-list.component.scss'],
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  readonly productSearch: FormGroup = new FormGroup({
    title: new FormControl(),
  });
  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this.productSearch.valueChanges.pipe(startWith({ title: '' })),
  ]).pipe(
    map(([products, search]) =>
      !!search.title
        ? products.filter(
            (product) =>
              product.title
                .toLowerCase()
                .includes(search.title.toLowerCase()) ||
              product.price.toString().startsWith(search.title)
          )
        : []
    )
  );

  constructor(private _productsService: ProductsService) {}
}
