type labelType = {
  title: string;
  image: string;
  vehicleSpecification: string[];
};

export type vehicleType = {
  name: string;
  image: string;
  labels?: labelType[];
} | null;

export type stateType = {
  vehicle: vehicleType;
};
