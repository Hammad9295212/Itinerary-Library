import { Component, EventEmitter, Output } from "@angular/core";
import { Iicon } from "../../../../_interface/icon";
import { ICONS } from "../../../../_constants/constants";
import { IConditions } from "../../../../_interface/conditions";
import { IPresetRecord } from "../../../../_interface/presetRecord";

@Component({
  selector: 'lib-no-visual-map-filters',
  templateUrl: './no-visual-map-filters.component.html',
  styleUrl: './no-visual-map-filters.component.css'
})
export class NoVisualMapFiltersComponent {
  ICONS: Iicon = ICONS;
  selectedPresets: string[] = [];
  conditionsArray: IConditions[] = [];

  @Output() presetsChanged: EventEmitter<IPresetRecord[]> = new EventEmitter<IPresetRecord[]>();

  @Output() backButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  // Example preset filters
  presetFilters: Array<IPresetRecord> = [
    { name: 'Restaurants', field: 'type', condition: 'restaurant' },
    { name: 'Good Rating', field: 'rating', condition: '>=4' },
    { name: 'Open Now', field: 'open_now', condition: true },
  ];

  

  // Dynamic fields and their possible conditions
  filterFields: string[] = ['type', 'rating', 'open_now'];

  filterConditions: { [key: string]: any[] } = {
    type: ['restaurant', 'cafe', 'lodging', 'store'],
    rating: ['>=3', '>=4', '>=4.5'],
    open_now: ['true', 'false'],
  };

  selectedField: string = '';
  selectedCondition: string = '';
  selectedPreset: any = null;

  firstButtonClick() {
    this.backButtonClicked.emit();
  }

  applyPreset(preset: IPresetRecord) {
    if(this.selectedPresets.includes(preset.name)) {
      this.selectedPresets = this.selectedPresets.filter(name => name !== preset.name);
      this.conditionsArray = this.conditionsArray.filter(condition => condition.name !== preset.name);
    } else {
      this.selectedPresets.push(preset.name);
      this.conditionsArray.push({
        name: preset.name,
        field: preset.field,
        condition: preset.condition
      });
    }     
  }

  onFieldChange() {
    this.selectedCondition = ''; // Reset condition when field changes
  }

  removeCondition(i: number) {
    this.conditionsArray.splice(i, 1);
  }

  applyCustomFilter() {
    this.conditionsArray.push({
      name: '',
      field: this.selectedField,
      condition: this.selectedCondition
    });
    this.selectedField = '';
    this.selectedCondition = '';
  }

  applyFilter() {
    this.presetsChanged.emit(this.conditionsArray);
    this.backButtonClicked.emit();
  }

  applyGooglePlacesFilter(field: string, condition: any) {
    console.log(field, condition);
  }
}
