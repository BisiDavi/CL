type categoriesType = {
  title: string;
  image: string;
  x: number;
  y: number;
  vehicleSpecification: string[];
};

export type vehicleType = {
  name: string;
  image: string;
  categories?: categoriesType[];
} | null;

export type stateType = {
  vehicle: vehicleType;
};
