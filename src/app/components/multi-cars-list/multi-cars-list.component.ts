import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  Observable,
  Subject,
  shareReplay,
  startWith,
  combineLatest,
  map,
} from 'rxjs';
import { CarModel } from '../../models/car.model';
import { SecurityModel } from '../../models/security.model';
import { ComfortModel } from '../../models/comfort.model';
import { BrandModel } from '../../models/brand.model';
import { CarsService } from '../../services/cars.service';
import { SecuritiesService } from '../../services/securities.service';
import { ComfortsService } from '../../services/comforts.service';
import { BrandsService } from '../../services/brands.service';

@Component({
  selector: 'app-multi-cars-list',
  styleUrls: ['./multi-cars-list.component.scss'],
  templateUrl: './multi-cars-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiCarsListComponent {
  readonly securities$: Observable<SecurityModel[]> =
    this._securitiesService.getAll();
  readonly comforts$: Observable<ComfortModel[]> =
    this._comfortsService.getAll();
  readonly brands$: Observable<BrandModel[]> = this._brandsService.getAll();

  readonly searchForm: FormGroup = new FormGroup({
    brand: new FormControl(),
    security: new FormControl(),
    comfort: new FormControl(),
  });

  readonly searchFormValueChanges$ = this.searchForm.valueChanges.pipe(
    startWith({
      brand: '',
      security: '',
      comfort: '',
    }),
    shareReplay(1)
  );

  readonly filteredBrands$: Observable<BrandModel[]> = combineLatest([
    this.searchFormValueChanges$,
    this._brandsService.getAll(),
  ]).pipe(
    map(([searchForm, brands]) =>
      brands.filter((brand) =>
        brand.name
          .toLowerCase()
          .includes(searchForm.brand ? searchForm.brand.toLowerCase() : '')
      )
    )
  );

  readonly filteredSecurity$: Observable<SecurityModel[]> = combineLatest([
    this.searchFormValueChanges$,
    this._securitiesService.getAll(),
  ]).pipe(
    map(([searchForm, security]) =>
      security.filter((s) =>
        s.name
          .toLowerCase()
          .includes(
            searchForm.security ? searchForm.security.toLowerCase() : ''
          )
      )
    )
  );

  readonly filteredComforts$: Observable<ComfortModel[]> = combineLatest([
    this.searchFormValueChanges$,
    this._comfortsService.getAll(),
  ]).pipe(
    map(([searchForm, comforts]) =>
      comforts.filter((comfort) =>
        comfort.name
          .toLowerCase()
          .includes(searchForm.name ? searchForm.name.toLowerCase() : '')
      )
    )
  );

  readonly cars$: Observable<
    {
      brand: string;
      model: string;
      comfortFeatures: string[];
      securityFeatures: string[];
    }[]
  > = combineLatest([
    this._carsService.getAll(),
    this.brands$,
    this.comforts$,
    this.securities$,
    this.searchFormValueChanges$,
  ]).pipe(
    map(([cars, brands, comforts, securities, searchForm]) => {
      const brandMap = brands.reduce((a, c) => {
        return { ...a, [c.id]: c };
      }, {}) as Record<string, BrandModel>;
      const comfortMap = comforts.reduce((a, c) => {
        return { ...a, [c.id]: c };
      }, {}) as Record<string, ComfortModel>;
      const securityMap = securities.reduce((a, c) => {
        return { ...a, [c.id]: c };
      }, {}) as Record<string, SecurityModel>;

      return cars
        .filter(
          (car) =>
            (!searchForm.brand ||
              searchForm.brand?.trim().length === 0 ||
              brandMap[car.brandId]?.name === searchForm.brand) &&
            (!searchForm.comfort ||
              searchForm.comfort?.trim().length === 0 ||
              car.comfortFeatureIds
                .map((cf) => comfortMap[cf]?.name)
                .includes(searchForm.comfort)) &&
            (!searchForm.security ||
              searchForm.security?.trim().length === 0 ||
              car.securityFeatureIds
                .map((sec) => securityMap[sec]?.name)
                .includes(searchForm.security))
        )
        .map((car) => {
          return {
            brand: brandMap[car.brandId].name,
            model: car.model,
            comfortFeatures: (car.comfortFeatureIds ?? []).map(
              (cf) => comfortMap[cf].name
            ),
            securityFeatures: (car.securityFeatureIds ?? []).map(
              (sec) => securityMap[sec].name
            ),
          };
        });
    })
  );

  constructor(
    private _carsService: CarsService,
    private _securitiesService: SecuritiesService,
    private _comfortsService: ComfortsService,
    private _brandsService: BrandsService
  ) {}

  onSearchFormSubmitted(searchForm: FormGroup): void {}
}
