import { LocationModel } from 'nextsapien-component-lib';
import { ItineraryLocation } from './itinerary-location';
import { ItineraryStats } from './Itinerary-stats';
import { AppUser } from './app-user';

export interface Itinerary {
  id: string;
  name: string;
  description?: string;
  distance?: string;
  distanceValue?: string;
  startLocation?: LocationModel;
  endLocation?: LocationModel;
  routeTypes?: string[];
  routeRadius?: number;
  createdAt: string;
  visitingPlaces?: ItineraryLocation[];
  isCompleted: boolean;
  stats?: ItineraryStats;
  statsId?: string;
  user?: AppUser;
  isDraft?: boolean;
  image?:  string;
}
