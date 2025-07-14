import { MapMarkerModel } from 'nextsapien-component-lib';
import { PositionModel } from '../_models/position-model';

export interface ItineraryMap {
  initialLocation: PositionModel;
  markers: MapMarkerModel[];
}
