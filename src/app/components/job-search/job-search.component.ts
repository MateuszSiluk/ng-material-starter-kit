import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
import { JobModel } from '../../models/job.model';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-job-search',
  styleUrls: ['./job-search.component.scss'],
  templateUrl: './job-search.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobSearchComponent {
  readonly searchForm: FormGroup = new FormGroup({
    description: new FormControl(),
  });
  readonly currentRoute$: Observable<Params> = this._activatedRoute.queryParams;
  readonly jobList$: Observable<JobModel[]> = this._jobsService.getAll();

  readonly filteredJobList$: Observable<JobModel[]> = combineLatest([
    this.currentRoute$,
    this.jobList$,
  ]).pipe(
    map(([params, jobList]) => {
      return jobList.filter((job) =>
        job.description.toLowerCase().includes(params['search'])
      );
    })
  );
  constructor(
    private _jobsService: JobsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  onSearchFormSubmitted(searchForm: FormGroup): void {
    const value = searchForm.get('description')?.value;

    this.currentRoute$
      .pipe(
        take(1),
        tap(() =>
          this._router.navigate([], {
            queryParams: { search: value.toLowerCase() },
          })
        )
      )
      .subscribe();
  }
}
