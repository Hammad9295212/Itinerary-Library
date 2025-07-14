import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public toggleModal: boolean = false;
  public bottomToggleModal: boolean = false;
  public toggleGlobalSearch: boolean = false;

  constructor() { }
}
