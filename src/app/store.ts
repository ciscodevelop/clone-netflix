import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
 
import  authReducer  from '../components/featured/auth/authSlice';
import { persistReducer, persistStore } from 'redux-persist';
const rootReducer = combineReducers({
	auth:authReducer
})
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		})
})

export const persistor = persistStore(store)



 //installare libreria npm i redux-persist
 //cambiare authReduce con lo slide che si vuole utilizzare

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
