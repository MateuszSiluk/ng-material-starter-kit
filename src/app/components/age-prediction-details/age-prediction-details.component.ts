import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AgePredictionModel } from '../../models/age-prediction.model';
import { AgePredictionService } from '../../services/age-prediction.service';

@Component({
  selector: 'app-age-prediction-details',
  styleUrls: ['./age-prediction-details.component.scss'],
  templateUrl: './age-prediction-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgePredictionDetailsComponent {
  readonly agePredictionDetails$: Observable<AgePredictionModel> =
    this._activatedRoute.params.pipe(
      switchMap((data) => this._agePredictionService.getOne(data['name']))
    );

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _agePredictionService: AgePredictionService
  ) {}
}
