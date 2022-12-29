export interface CartModel {
  readonly id: number;
  readonly userId: number;
  readonly date: string;
  readonly products: Product[];
}

interface Product {
  readonly productId: number;
  readonly quantity: number;
}
