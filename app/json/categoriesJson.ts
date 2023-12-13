import { images } from "../constants/images";

const platformSample = [
  {
    id: '1',
    name: 'Alt Balaji',
    starting_price: 199,
    image: images.altBalaji,
    status: '',
  },
  {
    id: '2',
    name: 'Ducobay',
    starting_price: 129,
    image: images.ducobay,
    status: '',
  },
  {
    id: '3',
    name: 'Klikk',
    starting_price: 149,
    image: images.klikk,
    status: '',
  },
  {
    id: '4',
    name: 'Aha',
    starting_price: 49,
    image: images.aha,
    status: '',
  },
  {
    id: '5',
    name: 'Hotstar',
    starting_price: 199,
    image: images.hotstar,
    status: '',
  },
  {
    id: '6',
    name: 'Netflix',
    starting_price: 239,
    image: images.netflix,
    status: '',
  },
];

export const categoriesJson = [
  {
    id: '1',
    name: 'ott',
    platforms: platformSample,
  },
  {
    id: '2',
    name: 'music',
    platforms: platformSample,
  },
  {
    id: '3',
    name: 'health',
    platforms: platformSample,
  },
  {
    id: '4',
    name: 'learnings',
    platforms: platformSample,
  },
  {
    id: '5',
    name: 'productivity',
    platforms: platformSample,
  },
  {
    id: '6',
    name: 'antivirus',
    platforms: platformSample,
  },
  {
    id: '7',
    name: 'news',
    platforms: platformSample,
  },
  {
    id: '8',
    name: 'lifestyle',
    platforms: platformSample,
  },
  {
    id: '9',
    name: 'free trail',
    platforms: platformSample,
  },
];

export const planDetailJson = [
  {
    id: '1',
    title: 'Monthly',
    duration: '1 month',
    price: '179',
    details: [
      'unlimited movies and tv shows',
      'download and watch anytime',
      'supports5 devices at the same time',
    ],
    isRecommended: false,
  },
  {
    id: '2',
    title: 'Quarterly',
    duration: '3 months',
    price: '179',
    details: [
      'unlimited movies and tv shows',
      'download and watch anytime',
      'supports5 devices at the same time',
    ],
    isRecommended: false,
  },
  {
    id: '3',
    title: 'Half Yearly',
    duration: '6 months',
    price: '179',
    details: [
      'unlimited movies and tv shows',
      'download and watch anytime',
      'supports5 devices at the same time',
    ],
    isRecommended: false,
  },
  {
    id: '4',
    title: 'Yearly',
    duration: '12 months',
    price: '179',
    details: [
      'unlimited movies and tv shows',
      'download and watch anytime',
      'supports5 devices at the same time',
    ],
    isRecommended: false,
  },
];

export const mySubscriptionsJson = [
  {
    id: '1',
    name: 'Alt Balaji',
    starting_price: 199,
    image: images.altBalaji,
    status: 'active',
    expiry_date: '24 Oct, 2024',
  },
  {
    id: '2',
    name: 'Ducobay',
    starting_price: 129,
    image: images.ducobay,
    status: 'expired',
    expiry_date: '24 Sep, 2023',
  },
  {
    id: '3',
    name: 'Klikk',
    starting_price: 149,
    image: images.klikk,
    status: 'expired',
    expiry_date: '12 Oct, 2021',
  },
  {
    id: '4',
    name: 'Aha',
    starting_price: 49,
    image: images.aha,
    status: 'expired',
    expiry_date: '24 Oct, 2023',
  },
  {
    id: '5',
    name: 'Hotstar',
    starting_price: 199,
    image: images.hotstar,
    status: 'active',
    expiry_date: '17 Jan, 2024',
  },
  {
    id: '6',
    name: 'Netflix',
    starting_price: 239,
    image: images.netflix,
    status: 'active',
    expiry_date: '29 Dec, 2023',
  },
];
