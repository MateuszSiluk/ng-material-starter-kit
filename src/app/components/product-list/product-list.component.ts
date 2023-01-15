import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  combineLatest,
  combineLatestWith,
  map,
  Observable,
  of,
  shareReplay,
  startWith,
  take,
  tap,
} from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  styleUrls: ['./product-list.component.scss'],
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements AfterViewInit {
  disableButton: number = 5;

  limit = new FormControl();
  public toggleButtons$: Observable<string[]> = of(['5', '10', '15']);
  readonly currentPage$: Observable<Params> = this._activatedRoute.queryParams;
  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this.currentPage$,
  ]).pipe(map(([product, params]) => product.slice(0, +params['limit'])));

  constructor(
    private _productsService: ProductsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngAfterViewInit(): void {
    this.limit.valueChanges
      .pipe(
        tap((form) =>
          this._router.navigate([], { queryParams: { limit: form } })
        ),
        shareReplay(1)
      )
      .subscribe();

    this.currentPage$
      .pipe(
        map((params) => {
          if (!params.hasOwnProperty('limit')) {
            this._router.navigate([], {
              queryParams: { limit: 5 },
            });
          }
          this.disableButton = +params['limit'];
        })
      )
      .subscribe();
  }

  onItemClicked(value: string): void {
    this.limit.setValue(value);
  }
}
