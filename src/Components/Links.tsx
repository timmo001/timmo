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
  markdown?: boolean;
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
      },
      {
        name: 'Home Panel Hass.io Add-on',
        description: 'Community Hass.io Add-on for Home Assistant',
        link: 'https://github.com/hassio-addons/addon-home-panel',
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
        banner: homeAssistantBanner,
        markdown: true
      },
      {
        name: 'Matrix Hass.io Add-on',
        description: 'Community Hass.io Add-on for Home Assistant',
        link: 'https://github.com/hassio-addons/addon-matrix',
        banner: ''
      },
      {
        name: 'The Lounge Hass.io Add-on',
        description: 'Community Hass.io Add-on for Home Assistant',
        link: 'https://github.com/hassio-addons/addon-thelounge',
        banner: ''
      }
    ]
  },
  {
    name: 'Links',
    links: [
      {
        name: 'GitHub',
        description: '',
        link: 'https://github.com/timmo001',
        banner: ''
      },
      {
        name: 'GitLab',
        description: '',
        link: 'https://gitlab.com/timmo',
        banner: ''
      },
      {
        name: 'Android Developer Page',
        description: '',
        link: 'https://play.google.com/store/apps/dev?id=5292588541115872750',
        banner: ''
      },
      {
        name: 'Stack Overflow',
        description: '',
        link: 'https://stackoverflow.com/users/1888770/timmo',
        banner: ''
      }
    ]
  },
  {
    name: 'Social',
    links: [
      {
        name: 'Twitter',
        description: '',
        link: 'https://twitter.com/timmo001',
        banner: ''
      }
    ]
  }
];
