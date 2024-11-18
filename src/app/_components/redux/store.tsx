import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // 기본 로컬 스토리지 사용
import { authReducer } from './reducer/auth';
import { modalReducer } from './reducer/modal';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    modals: modalReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
