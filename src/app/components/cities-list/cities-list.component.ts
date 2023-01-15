import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {  MatSelectionListChange } from '@angular/material/list';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  combineLatest,
  combineLatestWith,
  map,
  Observable,
  of,
  shareReplay,
} from 'rxjs';
import { CityModel } from '../../models/city.model';
import { CitiesService } from '../../services/cities.service';

@Component({
  selector: 'app-cities-list',
  styleUrls: ['./cities-list.component.scss'],
  templateUrl: './cities-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesListComponent {
  public itemsPerPage$: Observable<string[]> = of(['5', '10', '15']);
  readonly cities$: Observable<CityModel[]> = this._citiesService.getAll();
  readonly paginatorData$: Observable<{
    pageSize: string;
    pageNumber: string;
  }> = this._activatedRoute.queryParams.pipe(
    map((params) => {
      return {
        pageSize: params['pageSize'] ? params['pageSize'] : 5,
        pageNumber: params['pageNumber'] ? params['pageNumber'] : 1,
      };
    }),
    shareReplay(1)
  );

  readonly paginatorPageNumber$: Observable<string[]> = combineLatest([
    this.cities$,
    this.paginatorData$,
  ]).pipe(
    map(([cities, params]) => {
      const calculatedPageNumber = Math.min(
        Math.ceil(cities.length / +params.pageSize)
      );
      return [...Array(calculatedPageNumber).keys()].map((x) =>
        (x + 1).toString()
      );
    })
  );

  readonly slicedCities$: Observable<CityModel[]> = combineLatest([
    this.paginatorData$,
    this.cities$,
  ]).pipe(
    map(([params, cities]) => {
      return cities.slice(
        +params.pageSize * (+params.pageNumber - 1),
        +params.pageSize * +params.pageNumber
      );
    })
  );

  constructor(
    private _citiesService: CitiesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  onItemPerPageClicked(event: MatSelectionListChange): void {
    this.paginatorData$
      .pipe(
        combineLatestWith(this.paginatorPageNumber$),
        map(([params, pageNumber]) => {
          return this._router.navigate([], {
            queryParams: {
              pageSize: event.options[0].value,
              pageNumber:
                pageNumber.length < +params.pageNumber
                  ? pageNumber.length
                  : params.pageNumber,
            },
            queryParamsHandling: 'merge',
          });
        })
      )
      .subscribe();
  }
  onPageNumberClicked(event: MatSelectionListChange): void {
    this.paginatorData$
      .pipe(
        map((params) => {
          this._router.navigate([], {
            queryParams: {
              pageNumber: event.options[0].value,
            },
            queryParamsHandling: 'merge',
          });
        })
      )
      .subscribe();
  }
}
