import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [], // 📚 The library starts empty
};

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload); // Add a new book
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload); // Remove a book by ID
    },
    resetLibrary: (state) => {
      state.books = []; // Reset the library
    },
  },
});

// Export actions so components can use them
export const { addBook, removeBook, resetLibrary } = librarySlice.actions;
export default librarySlice.reducer;

// addBook: Adds a book to the library.
// removeBook: Removes a book by ID.
// resetLibrary: Clears all books.