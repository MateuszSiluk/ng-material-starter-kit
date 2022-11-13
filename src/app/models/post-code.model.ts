export interface PostCodeModel {
  readonly 'post code': string;
  readonly country: string;
  readonly 'country abbreviation': string;
  readonly places: Places[];
}

interface Places {
  'place name': string;
  longitude: string;
  state: string;
  'state abbreviation': string;
  latitude: string;
}
