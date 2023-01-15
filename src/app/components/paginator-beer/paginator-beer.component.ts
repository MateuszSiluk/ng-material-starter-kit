import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { BeerModel } from '../../models/beer.model';
import { BeersService } from '../../services/beers.service';

@Component({
  selector: 'app-paginator-beer',
  styleUrls: ['./paginator-beer.component.scss'],
  templateUrl: './paginator-beer.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorBeerComponent implements AfterViewInit {
  readonly paginatorData$: Observable<{
    pageNumber: number;
    pageSize: number;
    pageSizeOptions: number[];
  }> = this._activatedRoute.queryParams.pipe(
    map((params) => {
      return {
        pageNumber: params['page_index'] ? +params['page_index'] : 1,
        pageSize: params['page_size'] ? +params['page_size'] : 5,
        pageSizeOptions: [5, 10, 15],
      };
    }),
    shareReplay(1)
  );
  readonly beers$: Observable<BeerModel[]> = this.paginatorData$.pipe(
    switchMap((data) =>
      this._beersService.getAll(
        data.pageSize.toString(),
        data.pageNumber.toString()
      )
    ),
    shareReplay(1)
  );

  constructor(
    private _beersService: BeersService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}
  ngAfterViewInit(): void {}

  onPageChange(event: any) {
    this._router.navigate([], {
      queryParams: {
        page_size: event.pageSize,
        page_index: event.pageIndex,
      },
      queryParamsHandling: 'merge',
    });
  }
}
