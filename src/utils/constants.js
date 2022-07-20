import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
];

export const footerLinks = [
  {
    id: 1,
    text: 'Home',
    url: '/',
  },
  {
    id: 2,
    text: 'About',
    url: '/about',
  },
  {
    id: 3,
    text: 'Products',
    url: '/products',
  },
  {
    id: 4,
    text: 'Contact',
    url: '/contact',
  },
  {
    id: 5,
    text: 'Orders',
    url: '/orders',
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'Our mission is to provide our customers the best in class products and services at a very reasonable price.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'Our vision is to take RabatWear to greater heights, by providing our customers best in class service.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: `RabatWear was started in Jully'22 with an initial aim to provide the best in class services to our customers.`,
  },
];

const domain = process.env.REACT_APP_BACKEND_HOST;
export const products_url = `${domain}/api/products`;
export const single_product_url = `${domain}/api/products/`;
export const create_order_url = `${domain}/api/orders/new`;
export const get_order_url = `${domain}/api/orders`;
export const payment_url = `${domain}/api/payment/create-payment-intent`;
export const upload_url = `${domain}/api/upload/`;
export const default_profile_image =
  'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg';
