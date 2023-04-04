export type categoriesType = {
  title: string;
  image: string;
  x: number;
  y: number;
  id: string;
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
