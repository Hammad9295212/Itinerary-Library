import { SelectOption } from 'nextsapien-component-lib';
import { IItineraryMember } from './itineraryMember';
import { LocationReview } from './location-review';
import { PositionModel } from './position-model';

export interface ItineraryLocation {
  id: string;
  title: string;
  description: string;
  type: string;
  review: LocationReview;
  position: PositionModel;
  interests: SelectOption<string>[]; 
  members: IItineraryMember[];
  numberOfPlaces: number;
  timeToSpend: string;
}
