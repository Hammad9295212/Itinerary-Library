import { ItinerariesRoutesEnum } from '../_enums/ItenariesRoutes.enum';
import { PathwayRoutesEnum } from '../_enums/PathwayRoutes.enum';
import { UserRoutes } from '../_enums/userRoutes.enum';
import { ISearchPopup } from '../_interface/search-popup';

export const I18nRoutes: ISearchPopup[] = [
  {
    key: 'COMMON_KEYS',
    pages: [],
    childerns: [],
  },
  {
    key: 'SNACKBAR',
    pages: [],
    childerns: [],
  },
  {
    key: 'PHONE_NUM_ERROR',
    pages: [],
    childerns: [],
  },
  {
    key: 'GALLERY',
    pages: [],
    childerns: [],
  },
  {
    key: 'ADMIN',
    pages: [],
    childerns: [
      {
        key: 'CONTACT_QUERIES',
        pages: [],
        childerns: [],
      },
      {
        key: 'NOTIFICATION_MESSAGE',
        pages: [],
        childerns: [],
      },
      {
        key: 'ORDER_STATUS',
        pages: [],
        childerns: [],
      },
      {
        key: 'ORDERS',
        pages: [],
        childerns: [],
      },
      {
        key: 'PRODUCTS',
        pages: [],
        childerns: [],
      },
      {
        key: 'ROLE',
        pages: [],
        childerns: [],
      },
      {
        key: 'USERS',
        pages: [],
        childerns: [],
      },
      {
        key: 'GRID',
        pages: [],
        childerns: [],
      },
      {
        key: 'CMS',
        pages: [],
        childerns: [
          {
            key: 'FORM_FIELDS',
            pages: [],
            childerns: [],
          },
          {
            key: 'SNACKBAR',
            pages: [],
            childerns: [],
          },
        ],
      },
    ],
  },
  {
    key: 'USER',
    pages: [],
    childerns: [
      {
        key: 'CART',
        pages: [],
        childerns: [],
      },
      {
        key: 'CHECKOUT',
        pages: [],
        childerns: [
          {
            key: 'ADDRESS',
            pages: [],
            childerns: [],
          },
          {
            key: 'CONGRATULATIONS',
            pages: [],
            childerns: [],
          },
        ],
      },
      {
        key: 'CONTACT_US',
        pages: [],
        childerns: [
          {
            key: 'QUERY_FORM',
            pages: [],
            childerns: [],
          },
        ],
      },
      {
        key: 'HOME',
        pages: [],
        childerns: [],
      },
      {
        key: 'LIST',
        pages: [],
        childerns: [],
      },
      {
        key: 'PRODUCT',
        pages: [],
        childerns: [
          {
            key: 'RELATED_ITEM',
            pages: [],
            childerns: [],
          },
        ],
      },
      {
        key: 'MENU',
        pages: [],
        childerns: [],
      },
    ],
  },
  {
    key: 'COMMON',
    pages: [],
    childerns: [
      {
        key: 'MENU',
        pages: [],
        childerns: [],
      },
    ],
  },
  {
    key: 'LIB',
    pages: [],
    childerns: [
      {
        key: 'AUTH',
        pages: [],
        childerns: [],
      },
      {
        key: 'GRID',
        pages: [],
        childerns: [],
      },
      {
        key: 'FOOTER',
        pages: [],
        childerns: [],
      },
    ],
  },
  {
    key: 'COOKIE',
    pages: [],
    childerns: [],
  },
  {
    key: 'NG_GRID',
    pages: [
      {
        url: `${ItinerariesRoutesEnum.ITINERARY}/${ItinerariesRoutesEnum.EXPLORE}`,
        breadCrumb: 'Itinerary > Explore',
      },
    ],
    childerns: [],
  },
  {
    key: 'POPUP',
    pages: [],
    childerns: [],
  },
  {
    key: 'IMAGE_CROPPER',
    pages: [
      {
        url: `pathway/${PathwayRoutesEnum.DefaultDestination}`,
        breadCrumb: 'Pathway > Default Destination',
      },
      {
        url: `pathway/${PathwayRoutesEnum.NonVisualMapFilter}`,
        breadCrumb: 'Pathway > Non Visual Map Filter',
      },
    ],
    childerns: [],
  },
  {
    key: 'TOGGLE',
    pages: [],
    childerns: [],
  },
  {
    key: 'PROGRESSBAR',
    pages: [],
    childerns: [],
  },
  {
    key: 'MAP',
    pages: [],
    childerns: [],
  },
  {
    key: 'DASHBOARD',
    pages: [],
    childerns: [],
  },
  {
    key: 'MAIN_ARCHIVES',
    pages: [
      {
        url: `archives/archives`,
        breadCrumb: 'Archives',
      },
    ],
    childerns: [],
  },
  {
    key: 'NAVBAR',
    pages: [],
    childerns: [],
  },
  {
    key: 'SIDEBAR',
    pages: [],
    childerns: [],
  },
  {
    key: 'MAP_HEADER',
    pages: [
      {
        url: `pathway/${PathwayRoutesEnum.DefaultDestination}`,
        breadCrumb: 'Pathway > Default Destination',
      },
    ],
    childerns: [],
  },
  {
    key: 'ITINERARY',
    pages: [
      {
        url: `pathway/${PathwayRoutesEnum.DefaultDestination}`,
        breadCrumb: 'Pathway > Default Destination',
      },
    ],
    childerns: [],
  },
  {
    key: 'FAVORITES',
    pages: [
      {
        url: `${ItinerariesRoutesEnum.ITINERARY}/${ItinerariesRoutesEnum.FAVORITES}`,
        breadCrumb: 'Itinerary > Favorites',
      },
    ],
    childerns: [],
  },
  {
    key: 'BRANCHED',
    pages: [
      {
        url: `${ItinerariesRoutesEnum.ITINERARY}/${ItinerariesRoutesEnum.BRANCHED_ITINERARIES}`,
        breadCrumb: 'Itinerary > Forked',
      },
    ],
    childerns: [],
  },
  {
    key: 'PROFILE',
    pages: [
      {
        url: `${UserRoutes.profile}`,
        breadCrumb: 'User > Profile',
      },
    ],
    childerns: [],
  },
  {
    key: 'ITINERARY_DETAIL',
    pages: [
      {
        url: `${ItinerariesRoutesEnum.ITINERARY}/${ItinerariesRoutesEnum.ITINERARY_DETAIL}/${ItinerariesRoutesEnum.ITINERARY_MORE_DETAIL}`,
        breadCrumb: 'Itinerary > Detail > More',
      },
    ],
    childerns: [],
  },
  {
    key: 'ITINERARY_SUMMARY',
    pages: [
      {
        url: `${ItinerariesRoutesEnum.ITINERARY}/${ItinerariesRoutesEnum.ITINERARY_DETAIL}/${ItinerariesRoutesEnum.ITINERARY_SUMMARY}`,
        breadCrumb: 'Itinerary > Detail > Summary',
      },
    ],
    childerns: [],
  },
  {
    key: 'DATE_TIME',
    pages: [],
    childerns: [],
  },
];
