import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { JobTagModel } from '../../models/job-tag.model';
import { JobPostsService } from '../../services/job-posts.service';
import { JobTagsService } from '../../services/job-tags.service';
import { MatCheckboxChange } from '@angular/material/checkbox';

let jobTagsArrayValues: number[] = [];
@Component({
  selector: 'app-job-form',
  styleUrls: ['./job-form.component.scss'],
  templateUrl: './job-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobFormComponent {
  readonly jobForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    jobTagIds: new FormControl(),
  });
  readonly jobTags$: Observable<JobTagModel[]> = this._jobTagsService.getAll();

  constructor(
    private _jobPostsService: JobPostsService,
    private _jobTagsService: JobTagsService
  ) {}

  onJobFormSubmitted(jobForm: FormGroup): void {
    this._jobPostsService
      .create({
        title: jobForm.get('title')?.value,
        description: jobForm.get('description')?.value,
        jobTagIds: jobTagsArrayValues,
      })
      .subscribe();
  }

  onChange(event: MatCheckboxChange) {
    event.checked
      ? jobTagsArrayValues.push(+event.source.value)
      : (jobTagsArrayValues = jobTagsArrayValues.filter(
          (item) => item !== +event.source.value
        ));
  }
}
