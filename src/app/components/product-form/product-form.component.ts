import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from '../../services/categories.service';

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

  readonly categoriesList$: Observable<string[]> =
    this._categoriesService.getAll();

  constructor(
    private _productsService: ProductsService,
    private _categoriesService: CategoriesService
  ) {}

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
      .subscribe();
  }
}
