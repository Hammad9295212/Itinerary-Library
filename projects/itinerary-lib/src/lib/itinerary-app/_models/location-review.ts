import { Place } from 'nextsapien-component-lib';

export interface LocationReview {
  id: string;
  review: string;
  rating: number;
  placeId: string;
  place?: Place;
}
