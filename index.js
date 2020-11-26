import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {storeConfiguration} from './src/storeConfig';
import App from './src/App';
import {name as appName} from './app.json';

const {store} = storeConfiguration();

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppWrapper
);
