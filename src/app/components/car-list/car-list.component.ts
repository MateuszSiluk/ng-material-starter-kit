import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, take, tap } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';
import { BrandModel } from '../../models/brand.model';
import { CarComfortFeatureModel } from '../../models/car-comfort-feature.model';
import { CarModel } from '../../models/car.model';
import { BrandsService } from '../../services/brands.service';
import { ComfortFeaturesService } from '../../services/comfort-features.service';
import { CarsService } from '../../services/cars.service';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-car-list',
  styleUrls: ['./car-list.component.scss'],
  templateUrl: './car-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarListComponent {
  readonly brandList$: Observable<BrandModel[]> = this._brandsService.getAll();
  readonly comfortFeatureList$: Observable<CarComfortFeatureModel[]> =
    this._comfortFeaturesService.getAll();
  readonly carList$: Observable<CarModel[]> = this._carsService.getAll();
  readonly currentPage$: Observable<Params> = this._activatedRoute.queryParams;
  readonly filteredCars$: Observable<CarModel[]> = combineLatest([
    this.carList$,
    this.currentPage$,
  ]).pipe(
    map(([cars, params]) => {
      const brandIds = params['brands'] ? params['brands'].split(',') : [];
      const comfortFeaturesIds = params['comfort-features']
        ? params['comfort-features'].split(',')
        : [];

      return cars.filter(
        (car) =>
          (brandIds?.length > 0 ? brandIds.includes(car.brandId) : []) &&
          (comfortFeaturesIds?.length > 0
            ? car.comfortFeatureIds.some((id) =>
                comfortFeaturesIds.includes(id)
              )
            : [])
      );
    })
  );
  constructor(
    private _brandsService: BrandsService,
    private _comfortFeaturesService: ComfortFeaturesService,
    private _carsService: CarsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  onComfortFeatureClicked(event: MatSelectionListChange) {
    const comfortFeatureIdsValues: string[] =
      event.source.selectedOptions.selected.map((a) => a.value.id);

    this.currentPage$
      .pipe(
        take(1),
        tap(() => {
          this._router.navigate([], {
            queryParams: {
              'comfort-features':
                comfortFeatureIdsValues.length > 0
                  ? comfortFeatureIdsValues.join(',')
                  : null,
            },
            queryParamsHandling: 'merge',
          });
        })
      )
      .subscribe();
  }
  onBrandClicked(event: MatSelectionListChange) {
    this._activatedRoute.queryParams.pipe(map((params) => params['brands']));
    const brandIdsValues: string[] = event.source.selectedOptions.selected.map(
      (a) => a.value.id
    );

    this.currentPage$
      .pipe(
        take(1),
        tap(() =>
          this._router.navigate([], {
            queryParams: {
              brands:
                brandIdsValues.length > 0 ? brandIdsValues.join(',') : null,
            },
            queryParamsHandling: 'merge',
          })
        )
      )
      .subscribe();
  }
}
