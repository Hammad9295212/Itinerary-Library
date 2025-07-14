import { Itinerary } from './Itinerary';

export interface ItineraryStats {
  id: string;
  itineraryId: string;
  itinerary?: Itinerary;
  upvotes: number;
  downvotes: number;
  shares: number;
  views: number;
}
