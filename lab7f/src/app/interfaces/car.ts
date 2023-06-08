import { CarsLinks } from './rest.interfaces/cars_links';

export interface Car {
  id: number;
  img: string;
  name: string;
  price: number;
  _links?: CarsLinks;
}
