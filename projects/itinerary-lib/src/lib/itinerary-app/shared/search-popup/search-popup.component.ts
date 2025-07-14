import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';   
import { ICONS } from '../../_constants/constants';
import { Iicon } from '../../_interface/icon';
import { AssetsService } from '../../_services/assets.service';
import { ModalService } from '../../_services/modal.service';

@Component({
  selector: 'app-search-popup',
  templateUrl: './search-popup.component.html',
  styleUrls: ['./search-popup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPopupComponent {
  ICONS: Iicon = ICONS;
  searchTerm: string = '';
  i18nTranslation!: any;
  loading: boolean = false;

  constructor( 
    private router: Router,
    private modalService: ModalService,
    private assetService: AssetsService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.assetService.getTranslation('en').subscribe((res) => {
      this.i18nTranslation = res;
      this.cdr.detectChanges();
    });
    this.loading = false;
  }


  handleSearchStringChange(_$event: any) {
  throw new Error('Method not implemented.');
}
  clear(): void {
    this.searchTerm = '';
  }

  //NAVIGATIONS
  navigate(url: string) {
    this.modalService.toggleGlobalSearch = false;
    this.cdr.detectChanges();
    setTimeout(() => {
      this.router.navigate([url]);
    }, 0);
  }
}
