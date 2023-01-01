export interface ProductModel {
  readonly id: number;
  readonly title: string;
  readonly price: number;
  readonly description: number;
  readonly category: number;
  readonly image: number;
  readonly rating: Rating;
}

interface Rating {
  readonly rate: number;
  readonly count: number;
}
