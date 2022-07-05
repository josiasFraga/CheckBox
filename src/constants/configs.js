import {Dimensions, Platform, StatusBar} from 'react-native';

export default {
  dimensions: Dimensions.get('window'),
  platform: Platform.OS,
  baseUrl: 'https://api.buzke.com.br',
  url: 'https://api.buzke.com.br',
  //baseUrl: 'http://192.168.1.105/buzke/app/webroot/api',
  //url: 'http://192.168.1.105/buzke/app/webroot/api',
  googleUrl: 'https://maps.googleapis.com/maps/api/',
  googleKey: 'AIzaSyBioeO6fXInXQGFfUdIJEFR9pGxbZT8sYU',
  defaultToken: '9oeUG4w8p}%k3$',
  timeBounceSearch: 1500,
  STATUSBAR_HEIGHT: Platform.OS === 'ios' ? 25 : StatusBar.currentHeight,
  ORIGINAL_HEADER_HEIGHT:
    Platform.OS === 'ios' ? 70 + 20 : 70 - 24 + StatusBar.currentHeight,
  ORIGINAL_HEADER_HEIGHT_WITHOUT_STATUS_BAR:
    Platform.OS === 'ios' ? 70 : 70 - 24,
};
