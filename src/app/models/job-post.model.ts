export interface JobPostModel {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly jobTagIds: number[];
}
