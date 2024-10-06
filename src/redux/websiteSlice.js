
import { createSlice } from '@reduxjs/toolkit';

const websiteSlice = createSlice({
  name: 'website',
  initialState: {
    title: '',
    category: '',
    subdomain: '',

    countryCode: '',
    phoneNumber: '',
    city: '',
    address: '',
    postalCode: '',
    showAddress: false,
    elements: [], 
  },
  reducers: {
    setWebsiteDetails: (state, action) => {
      return { ...state, ...action.payload }; 
    },
    addElement: (state, action) => {
      state.elements.push(action.payload); 
    },
    updateElementProperties: (state, action) => {
      const index = state.elements.findIndex(el => el.id === action.payload.id);
      if (index !== -1) {
        state.elements[index] = action.payload; 
      }
    },
    
  },
});

export const { setWebsiteDetails, addElement, updateElementProperties,  } = websiteSlice.actions;
export default websiteSlice.reducer;
