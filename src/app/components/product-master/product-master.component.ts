import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-master',
  styleUrls: ['./product-master.component.scss'],
  templateUrl: './product-master.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductMasterComponent {
  readonly products$: Observable<ProductModel[]> =
    this._productsService.getAll();
  private _selectedProductIdSubject: Subject<number> = new Subject<number>();
  public selectedProductId$: Observable<number> =
    this._selectedProductIdSubject.asObservable();
  readonly details$: Observable<ProductModel> = this.selectedProductId$.pipe(
    switchMap((data) => this._productsService.getOne(data))
  );

  constructor(private _productsService: ProductsService) { }

  selectProduct(id: number): void {
    this._selectedProductIdSubject.next(id);
  }
}
