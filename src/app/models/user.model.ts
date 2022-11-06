export interface UserModel {
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly name: Name;
  readonly address: Address;
  readonly phone: string;
}

interface Name {
  readonly firstname: string;
  readonly lastname: string;
}
interface Address {
  readonly city: string;
  readonly street: string;
  readonly number: number;
  readonly zipcode: string;
  readonly geolocation?: { lat: string; long: string };
}
