import { Page } from './pages';

export interface ISearchPopup {
  key: string;
  pages: Page[];
  childerns: ISearchPopup[];
}
