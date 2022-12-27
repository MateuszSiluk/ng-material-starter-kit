import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoCurrencyService } from '../../services/crypto-currency.service';

@Component({
  selector: 'app-crypto-master',
  styleUrls: ['./crypto-master.component.scss'],
  templateUrl: './crypto-master.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoMasterComponent {
  readonly cryptoCurrencies$: Observable<CryptoModel[]> = this._cryptoCurrencyService.getAll();
  private _selectedCurrencySubject: Subject<CryptoModel> = new Subject<CryptoModel>();
  public selectedCurrency$: Observable<CryptoModel> = this._selectedCurrencySubject.asObservable();
  readonly cryptoDetails$: Observable<CryptoModel> = this.selectedCurrency$;

  constructor(private _cryptoCurrencyService: CryptoCurrencyService) {
  }

  selectedCurrency(currency: CryptoModel): void {
    this._selectedCurrencySubject.next(currency);
  }
}
