import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, startWith, switchMap, tap } from 'rxjs/operators';
import { UniversityModel } from '../../models/university.model';
import { UniversitiesService } from '../../services/universities.service';

@Component({
  selector: 'app-university-list',
  styleUrls: ['./university-list.component.scss'],
  templateUrl: './university-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniversityListComponent {
  readonly uniForm: FormControl = new FormControl('');

  public universityLists$: Observable<UniversityModel[]> =
    this.uniForm.valueChanges.pipe(
      startWith(''),
      debounceTime(1000),
      switchMap((countryForm) =>
        !!countryForm ? this._universitiesService.getAll(countryForm) : of([])
      )
    );

  constructor(private _universitiesService: UniversitiesService) {}
}
