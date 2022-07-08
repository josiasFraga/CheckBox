import React from 'react';
import type {Node} from 'react';
import {
  StatusBar
} from 'react-native';

import _COLORS from '@constants/colors';
import Routes from '@constants/routes';

import { Provider, useSelector } from 'react-redux';
import store from './store';

import DropdownAlert from 'react-native-dropdownalert';
import AlertHelper from '@components/Alert/AlertHelper';

const App: () => Node = () => {

  return (
    <Provider store={store}>
        <Routes />
        <DropdownAlert
          defaultContainer={{
            padding: 8,
            paddingTop: StatusBar.currentHeight,
            flexDirection: 'row',
          }}
          ref={ref => AlertHelper.setDropDown(ref)}
          onClose={() => AlertHelper.invokeOnClose()}
          StatusBar={{translucent: true}}
          translucent={true}
          inactiveStatusBarBackgroundColor={'transparent'}
          //inactiveStatusBarStyle={'dark-content'}
        />
    </Provider>
  );
};

export default App;
