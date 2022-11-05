import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent {
  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });

  constructor(private _productsService: ProductsService) {}

  onProductFormSubmitted(productForm: FormGroup): void {
    if (productForm.invalid) {
      return;
    }
    this._productsService
      .create({
        title: productForm.get('title')?.value,
        price: productForm.get('price')?.value,
        category: productForm.get('category')?.value,
        description: productForm.get('description')?.value,
        image: productForm.get('image')?.value,
      })
      .subscribe(() => {
        productForm.reset();
      });
  }
}
