// @flow
import homeAssistantBanner from '../resources/home-assistant/banner.svg';
import homePanelBanner from '../resources/home-panel/banner.svg';

export interface Section {
  name: string;
  links: Link[];
}

export interface Link {
  name: string;
  description: string;
  link: string;
  banner: string;
}

export default [
  {
    name: 'My Projects',
    links: [
      {
        name: 'Home Panel',
        description:
          'A web frontend for controlling the home. Integrates with Home Assistant as an additional frontend',
        link: '/home-panel',
        banner: homePanelBanner
      }
    ]
  },
  {
    name: 'Projects I contribute to',
    links: [
      {
        name: 'Home Assistant',
        description:
          ':house_with_garden: Open source home automation that puts local control and privacy first',
        link: 'https://www.home-assistant.io/',
        banner: homeAssistantBanner
      }
    ]
  }
];
