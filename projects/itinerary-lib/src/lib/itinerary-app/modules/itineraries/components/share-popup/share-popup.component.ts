import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICONS } from '../../../../_constants/constants';
import { Iicon } from '../../../../_interface/icon';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharePopupDataService } from '../../../../_services/share-popup-data';
import { Itinerary } from '../../../../_models/Itinerary';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { ItinerariesRoutesEnum } from '../../../../_enums/ItenariesRoutes.enum';


@Component({
  selector: 'lib-share-popup',
  templateUrl: './share-popup.component.html',
  styleUrl: './share-popup.component.scss'
})
export class SharePopupComponent implements OnInit {
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  ICONS: Iicon = ICONS;
  accessForm!: FormGroup;
  itinerary: Itinerary | null = null;

  accessType = 'Restricted';
  peopleWithAccess = [
    {
      name: 'M Ali (you)',
      email: 'mali@gmail.com',
      role: 'Owner',
      avatar: 'assets/images/image7.jpg' // Example avatar URL
    }
  ];

  constructor(
    private fb: FormBuilder,
    private sharePopupDataService: SharePopupDataService,
    private router: Router,
    private platformLocation: PlatformLocation
  ) {}

  copyButtonClicked(itineraryId: string) {
  const baseUrl = `${this.platformLocation.protocol}//${this.platformLocation.hostname}` +
                  (this.platformLocation.port ? `:${this.platformLocation.port}` : '');

  const urlTree = this.router.createUrlTree([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.ITINERARY_DETAIL,
      itineraryId
    ]);
    const relativeUrl = this.router.serializeUrl(urlTree);
    const fullUrl = baseUrl + relativeUrl;
    navigator.clipboard.writeText(fullUrl);
  }


  copyLink() {
    if(this.itinerary) {
      this.copyButtonClicked(this.itinerary.id);
    }
  }

  close() {
    this.closeModal.emit();
  }

  ngOnInit() {
    this.accessForm = this.fb.group({
      access: ['Restricted'] // default value
    });
    this.accessForm.get('access')?.valueChanges.subscribe(value => {
      this.performActionBasedOnAccess(value);
    });
    this.sharePopupDataService.popupData$.subscribe((data) => {
      this.itinerary = data;
    });
  }

  performActionBasedOnAccess(value: string) {
    this.accessType = value;
  }

}
