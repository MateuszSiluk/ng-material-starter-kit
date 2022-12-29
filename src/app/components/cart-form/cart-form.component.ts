import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { CartsService } from '../../services/carts.service';
import { ProductsService } from '../../services/products.service';
import { MatCheckboxChange } from '@angular/material/checkbox';

type Product = { productId: number; quantity: number };
let productIdsValues: Product[] = [];

@Component({
  selector: 'app-cart-form',
  styleUrls: ['./cart-form.component.scss'],
  templateUrl: './cart-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartFormComponent {
  readonly productForm: FormGroup = new FormGroup({
    userId: new FormControl(),
    products: new FormControl(),
    date: new FormControl(),
  });
  readonly productsData$: Observable<ProductModel[]> =
    this._productsService.getAll();

  constructor(
    private _cartsService: CartsService,
    private _activatedRoute: ActivatedRoute,
    private _productsService: ProductsService
  ) {}

  onProductFormSubmitted(productForm: FormGroup): void {
    const date = new Date(productForm.get('date')?.value);
    this._activatedRoute.params
      .pipe(
        switchMap((params) =>
          this._cartsService.create({
            date: date.toLocaleDateString(),
            products: productIdsValues,
            userId: params['id'],
          })
        )
      )
      .subscribe();
  }

  onChange(event: MatCheckboxChange) {
    event.checked
      ? productIdsValues.push({ productId: +event.source.value, quantity: 1 })
      : (productIdsValues = productIdsValues.filter(
          (item) => item.productId !== +event.source.value
        ));
  }
}
