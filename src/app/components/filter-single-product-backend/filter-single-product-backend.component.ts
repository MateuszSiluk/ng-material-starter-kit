import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounce, filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { Products2Service } from '../../services/products2.service';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-filter-single-product-backend',
  styleUrls: ['./filter-single-product-backend.component.scss'],
  templateUrl: './filter-single-product-backend.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterSingleProductBackendComponent {
  readonly categories$: Observable<string[]> = this._categoriesService.getAll();
  readonly products$: Observable<ProductModel[]> =
    this._productsService.getAll();
  readonly productList$: Observable<ProductModel[]> =
    this._activatedRoute.params.pipe(
      
      switchMap((data) => this._productsService.getAll()),
      withLatestFrom(this._activatedRoute.params),
      map(([products, params]) =>
        products.filter((p) => p.category.includes(params['category']))
      )
    );

  constructor(
    private _productsService: Products2Service,
    private _categoriesService: CategoriesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}
}
