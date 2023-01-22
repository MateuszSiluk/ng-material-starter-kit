import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { map, Observable, combineLatest } from 'rxjs';
import { JobModel } from '../../models/job.model';
import { JobTagModel } from '../../models/job-tag.model';
import { JobsService } from '../../services/jobs.service';
import { JobTagsService } from '../../services/job-tags.service';

@Component({
  selector: 'app-array-single-jobs',
  templateUrl: './array-single-jobs.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArraySingleJobsComponent {
  readonly jobsPost$: Observable<JobModel[]> = this._jobsService.getAll();
  readonly jobTags$: Observable<JobTagModel[]> = this._jobTagsService.getAll();

  constructor(
    private _jobsService: JobsService,
    private _jobTagsService: JobTagsService
  ) {}

  readonly jobsWithTags$: Observable<{ name: string; tags: string[] }[]> =
    combineLatest([this.jobsPost$, this.jobTags$]).pipe(
      map(([jobs, tags]) => {
        const tagsMap: Record<number, JobTagModel> = tags.reduce((a, c) => {
          return { ...a, [+c.id]: c };
        }, {}) as Record<number, JobTagModel>;
        return jobs.map((job) => ({
          name: job.title,
          tags: job.jobTagsIds.map((tagId) => tagsMap[tagId].name),
        }));
      })
    );
}
