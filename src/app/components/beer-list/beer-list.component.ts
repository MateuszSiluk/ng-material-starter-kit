import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { BeerModel } from '../../models/beer.model';
import { BeersService } from '../../services/beers.service';
import { PageEvent } from '@angular/material/paginator';

interface Pagination {
  index: number;
  size: number;
}

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeerListComponent {
  private readonly _initialValues = { index: 1, size: 5 };

  private _paginationSubject: BehaviorSubject<Pagination> =
    new BehaviorSubject<Pagination>(this._initialValues);
  public pagination$: Observable<Pagination> =
    this._paginationSubject.asObservable();

  readonly beers$: Observable<BeerModel[]> = this.pagination$.pipe(
    switchMap((paginationValue) =>
      this._beersService.getAll(paginationValue.index, paginationValue.size)
    )
  );
  handlePageEvent(event: PageEvent) {
    this._paginationSubject.next({
      index: event.pageIndex + 1,
      size: event.pageSize,
    });
  }

  constructor(private _beersService: BeersService) {}
}
