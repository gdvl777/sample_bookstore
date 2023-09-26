import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  categories: [], // Initialize the 'categories' state as an empty array
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      // Update the 'categories' state based on the action payload
      state.categories = action.payload === 'Under construction' ? ['Under construction'] : [];
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
