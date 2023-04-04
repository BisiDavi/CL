export type categoriesType = {
  title: string;
  image: string;
  x: number;
  y: number;
  id: string;
  categoryList: string[];
};

export type vehicleType = {
  name: string;
  image: string;
  categories?: categoriesType[];
} | null;

export type stateType = {
  vehicle: vehicleType;
};
