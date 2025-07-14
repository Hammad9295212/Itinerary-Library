import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router'; 
import { ItinerariesRoutesEnum } from '../../../../../../_enums/ItenariesRoutes.enum';
import { Itinerary } from '../../../../../../_models/Itinerary';
import { ItineraryService } from '../../../../../../_services/itinerary.service';

@Component({
  selector: 'app-create-itinerary',
  templateUrl: './create-itinerary.component.html',
  styleUrl: './create-itinerary.component.css',
})
export class CreateItineraryComponent implements OnInit {
  form!: FormGroup;
  settings: boolean = true;

  constructor(
    private location: Location,
    private router: Router,
    private itineraryService: ItineraryService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [crypto.randomUUID()],
      name: ['', [Validators.required]],
      fullMatch: [false, [Validators.required]],
      anotherSettings: [false, [Validators.required]],
    });
  }

  //UI LOGIC
  get id(): FormControl {
    return this.form.get('id') as FormControl;
  }

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get fullMatch(): FormControl {
    return this.form.get('fullMatch') as FormControl;
  }

  get anotherSettings(): FormControl {
    return this.form.get('anotherSettings') as FormControl;
  }

  create(): void {
    const itinerary: Itinerary = {
      id: this.id.value,
      name: this.name.value.message,
      isCompleted: false,
      description: '',
      distance: '',
      distanceValue: '',
      startLocation: undefined,
      endLocation: undefined,
      routeTypes: [],
      routeRadius: 0,
      visitingPlaces: [],
      createdAt: new Date().toISOString(),
    };
    this.itineraryService.createOrUpdate(itinerary);
    this.navToStartLocation();
  }

  //NAVIGATIONS
  back(): void {
    this.location.back();
  }

  navToStartLocation(): void {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.CREATE_ITINERARY_ORIGIN,
      this.id.value,
    ]);
  }

  navToMemberSearch(): void {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.CREATE_ITINERARY_USER_SEARCH,
      1,
    ]);
  }
}
