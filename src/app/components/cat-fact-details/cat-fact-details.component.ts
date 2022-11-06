import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { CatFactModel } from '../../models/cat-fact.model';
import { CatFactService } from '../../services/cat-fact.service';

@Component({
  selector: 'app-cat-fact-details-details',
  styleUrls: ['./cat-fact-details.component.scss'],
  templateUrl: './cat-fact-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatFactDetailsComponent {
  readonly catFactData$: Observable<CatFactModel> =
    this._catFactService.getOne();

  constructor(private _catFactService: CatFactService) {}
}
