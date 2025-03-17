import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "./LibrarySlice"; // Import the librarian (reducer)

export const store = configureStore({
  reducer: {
    library: libraryReducer, // Assign the librarian to manage books
  },
});

// We created a library (Redux store) that will store all the books.
// We need a librarian (reducer) to manage book operations.