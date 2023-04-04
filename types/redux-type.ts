type categoriesType = {
  title: string;
  image: string;
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
