// @flow
export interface ItemsProps {
  name: string;
  link: string;
  icon: string;
  menuItems?: MenuItemsProps[];
}

export interface MenuItemsProps {
  name: string;
  link: string;
  icon: string;
}

export default [
  {
    name: 'Home',
    link: '/home',
    icon: 'mdi-home'
  }
];
