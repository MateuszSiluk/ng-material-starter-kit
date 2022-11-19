import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest, map, Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-filtered-products-list',
  styleUrls: ['./filtered-product-list.component.scss'],
  templateUrl: './filtered-product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilteredProductListComponent {
  readonly categories$: Observable<string[]> = this._categoriesService.getAll();
  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this._activatedRoute.params,
  ]).pipe(
    map(([products, params]: [ProductModel[], Params]) => {
      return products.filter(
        (product: ProductModel) => product.category === params['category']
      );
    })
  );

  constructor(
    private _categoriesService: CategoriesService,
    private _productsService: ProductsService,
    private _activatedRoute: ActivatedRoute
  ) {}
}
