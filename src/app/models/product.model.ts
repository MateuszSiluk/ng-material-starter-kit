export interface ProductModel {
  readonly id: number;
  readonly title: string;
  readonly price: string;
  readonly description: string;
  readonly category: string;
  readonly image: string;
  readonly rating: Rating;
}

interface Rating {
  readonly rate: string;
  readonly count: string;
}
