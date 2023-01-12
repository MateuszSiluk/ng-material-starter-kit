import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-single-products-list',
  styleUrls: ['./single-products-list.component.scss'],
  templateUrl: './single-products-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleProductsListComponent {
  public orderAscDesc$: Observable<string[]> = of(['asc', 'desc']);
  readonly currentPage$: Observable<Params> = this._activatedRoute.queryParams;

  onItemClicked(event: string) {
    this.currentPage$
      .pipe(
        take(1),
        tap(() => this._router.navigate([], { queryParams: { sort: event } }))
      )
      .subscribe();
  }

  readonly products$: Observable<ProductModel[]> = this.currentPage$.pipe(
    map((params) => (params['sort'] ? params['sort'] : [])),
    switchMap((data) => this._productsService.getAll(data))
  );

  constructor(
    private _productsService: ProductsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}
}
