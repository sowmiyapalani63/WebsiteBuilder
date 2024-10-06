
import { configureStore } from '@reduxjs/toolkit';
import websiteReducer from './websiteSlice'; 
import userReducer from './userSlice'; 

const store = configureStore({
  reducer: {
    website: websiteReducer,
    user: userReducer,       
  },
});

export default store;
