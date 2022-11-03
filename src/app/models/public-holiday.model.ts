export interface PublicHolidayModel {
  readonly date: string;
  readonly localName: string;
  readonly name: string;
  readonly countryCode: string;
  readonly fixed: boolean;
  readonly global: boolean;
  readonly counties: string[];
  readonly launchYear: number;
  readonly type: string;
}
