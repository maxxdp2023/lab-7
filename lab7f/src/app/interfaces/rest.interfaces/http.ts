import { Car } from '../car';
import { Page } from './page';
import { RootLinks } from './root_links';

export interface Http {
  _embedded: {
    cars: Car[];
  };
  _links: RootLinks;
  page: Page;
}
