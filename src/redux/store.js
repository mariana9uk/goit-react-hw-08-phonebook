import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer';
import { authReducer } from './authSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

export const store = configureStore({
  reducer: { contacts: contactsReducer, filters: filtersReducer, auth: persistReducer(authPersistConfig, authReducer), },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
 });

 export const persistor = persistStore(store)