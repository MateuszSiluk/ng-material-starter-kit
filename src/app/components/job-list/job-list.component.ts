import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, ReplaySubject, combineLatest, of, map } from 'rxjs';
import { JobPostModel } from '../../models/job-post.model';
import { JobPostsService } from '../../services/job-posts.service';
type TitleDesc = 'title' | 'description';
@Component({
  selector: 'app-job-list',
  styleUrls: ['./job-list.component.scss'],
  templateUrl: './job-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobListComponent {
  public ordersByTitleDescription$: Observable<string[]> = of([
    'title',
    'description',
  ]);
  public ordersByAscDesc$: Observable<string[]> = of(['asc', 'desc']);

  readonly jobPostsForm: FormGroup = new FormGroup({
    orderByTitleDescription: new FormControl(),
    orderByAscDesc: new FormControl(),
  });
  private _sortAscDescSubject: ReplaySubject<string> =
    new ReplaySubject<string>();
  public sortAscDesc$: Observable<string> =
    this._sortAscDescSubject.asObservable();
  private _sortTitleDescriptionSubject: ReplaySubject<TitleDesc> =
    new ReplaySubject<TitleDesc>();
  public sortTitleDescription$: Observable<TitleDesc> =
    this._sortTitleDescriptionSubject.asObservable();
  readonly jobPosts$: Observable<JobPostModel[]> = combineLatest([
    this._jobPostsService.getAll(),
    this.sortAscDesc$,
    this.sortTitleDescription$,
  ]).pipe(
    map(([products, sortAscDesc, sortTitleDescription]) => {
      return products.sort((a, b) => {
        const valueA =
          sortTitleDescription === 'title' ? a.title : a.description;
        const valueB =
          sortTitleDescription === 'title' ? b.title : b.description;
        if (valueA > valueB) return sortAscDesc === 'asc' ? 1 : -1;
        if (valueA < valueB) return sortAscDesc === 'asc' ? -1 : 1;
        return 0;
      });
    })
  );

  constructor(private _jobPostsService: JobPostsService) {
    this.jobPostsForm
      .get('orderByTitleDescription')
      ?.valueChanges.subscribe((value) =>
        this._sortTitleDescriptionSubject.next(value)
      );
    this.jobPostsForm
      .get('orderByAscDesc')
      ?.valueChanges.subscribe((value) => this._sortAscDescSubject.next(value));
  }
}
