export interface CartModel {
  readonly id: number;
  readonly userId: number;
  date: string;
  products: { productId: number; quantity: number }[];
}
