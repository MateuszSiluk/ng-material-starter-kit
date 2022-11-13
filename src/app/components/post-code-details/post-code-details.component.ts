import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PostCodeModel } from '../../models/post-code.model';
import { PostCodesService } from '../../services/post-codes.service';

@Component({
  selector: 'app-post-code-details',
  templateUrl: './post-code-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCodeDetailsComponent {
  readonly postCodeData$: Observable<PostCodeModel> =
    this._activatedRoute.params.pipe(
      switchMap((data) => this._postCodesService.getOne(data['postCode']))
    );

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _postCodesService: PostCodesService
  ) {}
}
