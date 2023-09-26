import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  books: [], // Initialize the 'books' state as an empty array
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      // Use the correct syntax to update the 'books' array in the state
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      // Use the correct syntax to filter and update the 'books' array in the state
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
