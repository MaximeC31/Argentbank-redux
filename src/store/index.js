import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice';
import userReducer from './userSlice';

const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
	blacklist: ['_persist'],
};

const userPersistConfig = {
	key: 'user',
	storage,
	whitelist: ['firstName', 'lastName'],
	blacklist: ['_persist'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

export const store = configureStore({
	reducer: {
		auth: persistedAuthReducer,
		user: persistedUserReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);
