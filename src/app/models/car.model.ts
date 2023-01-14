export interface CarModel {
  readonly model: string;
  readonly descriptions: string;
  readonly brandId: string;
  readonly comfortFeatureIds: string[];
  readonly securityFeatureId: string[];
  readonly id: string;
}
