import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filterReducer, entities, isLoading, error} from './contacts/contactsReducer'
// import { getDefaultMiddleware } from '@reduxjs/toolkit';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import  authSlice  from './auth/authSlise'

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}
    const persistAuthReduser = persistReducer(authPersistConfig, authSlice.reducer)

const rootReducer = {
    contacts: combineReducers({
        entities,
        filter: filterReducer,
        isLoading
    }),
     auth: persistAuthReduser,
    error,
};

export const store = configureStore({
  reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
         }),
  
});

export const persistor = persistStore(store);