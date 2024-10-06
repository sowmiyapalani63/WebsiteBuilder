

import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null, 
  },
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload; 
    },
    registerUser: (state, action) => {
      state.userInfo = action.payload; 
    },
  },
});

export const { setUser, registerUser } = userSlice.actions;
export default userSlice.reducer;
