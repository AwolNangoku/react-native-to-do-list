import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './services/appState';

const storeConfiguration = () => {
  let store = configureStore({reducer: rootReducer});

  return {store};
};

export {storeConfiguration};
