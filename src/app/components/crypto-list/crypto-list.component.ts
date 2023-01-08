import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Observable, combineLatest, map, startWith } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CryptoService } from '../../services/crypto.service';
import { CryptoModel } from '../../models/crypto.model';

@Component({
  selector: 'app-crypto-list',
  styleUrls: ['./crypto-list.component.scss'],
  templateUrl: './crypto-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoListComponent {
  readonly cryptoForm: FormGroup = new FormGroup({
    name: new FormControl(),
    chips: new FormArray([]),
  });

  constructor(private _cryptoService: CryptoService) {}

  readonly filteredCryptoList$: Observable<CryptoModel[]> = combineLatest([
    this.cryptoForm.valueChanges.pipe(startWith({ name: '' })),
    this._cryptoService.getAll(),
  ]).pipe(
    map(([search, crypto]) =>
      crypto.filter((c) =>
        c.symbol
          .toLowerCase()
          .startsWith(search.name ? search.name.toLowerCase() : '')
      )
    )
  );
  get selectedChips(): FormArray {
    return this.cryptoForm.controls['chips'] as FormArray;
  }

  addChips(chip: CryptoModel): void {
    this.selectedChips.push(new FormControl(chip.symbol));
  }
}
