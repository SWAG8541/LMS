import { useDispatch, useSelector } from "react-redux";
import { addBook, removeBook, resetLibrary } from "./LibrarySlice";
import { useState } from "react";

export default function Library() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.library.books); // Get book list

  const [bookName, setBookName] = useState("");

  const handleAddBook = () => {
    if (bookName.trim() !== "") {
      dispatch(addBook({ id: Date.now(), name: bookName })); // Add new book
      setBookName(""); // Reset input field
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>📚 Library</h1>
      
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter book name"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAddBook} style={styles.addButton}>
          Add Book
        </button>
      </div>

      <button onClick={() => dispatch(resetLibrary())} style={styles.resetButton}>
        Reset Library
      </button>

      <ul style={styles.list}>
        {books.map((book) => (
          <li key={book.id} style={styles.listItem}>
            <span style={styles.bookName}>{book.name}</span>
            <button
              onClick={() => dispatch(removeBook(book.id))}
              style={styles.removeButton}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#f7f9fc",  // Very light grey-blue background
    padding: "20px",
    borderRadius: "8px",
    width: "80%",
    margin: "0 auto",
    maxWidth: "600px", // Limit width for a neater look
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)", // Subtle shadow
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    color: "#4a4e69",  // Deep muted purple for a classy look
    fontSize: "2rem",
    marginBottom: "20px",
    background: "linear-gradient(45deg, #6a5acd, #8a2be2)", // Gradient from slate blue to blue violet
    WebkitBackgroundClip: "text", // Make text color gradient
    color: "transparent", // Make text itself transparent to show gradient
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  input: {
    padding: "12px",
    fontSize: "1rem",
    border: "1px solid #d3d3d3",
    borderRadius: "8px",
    marginRight: "10px",
    width: "70%", // Slightly wider for better visibility
    outline: "none",
    transition: "border-color 0.3s",
  },
  addButton: {
    padding: "12px 24px",
    background: "linear-gradient(135deg, #6a1b9a, #9c27b0)", // Gradient from deep purple to pink
    color: "#fff",
    fontSize: "1rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
  resetButton: {
    display: "block",
    width: "100%",
    padding: "12px",
    background: "linear-gradient(135deg, #f44336, #ff8a65)", // Soft red gradient for reset
    color: "#fff",
    fontSize: "1rem",
    border: "none",
    borderRadius: "8px",
    marginTop: "30px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px",
    marginBottom: "12px",
    backgroundColor: "#fff", // White background for each item
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.03)", // Light shadow for depth
    fontSize: "1rem",
    color: "#4a4e69", // Dark muted purple for the text
  },
  bookName: {
    fontSize: "1.1rem",
    color: "#9b59b6", // Light purple text for book names
  },
  removeButton: {
    background: "linear-gradient(135deg, #f39c12, #e67e22)", // Warm orange gradient
    color: "#fff",
    fontSize: "1rem",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    padding: "6px 10px",
    transition: "background 0.3s ease",
  },
};
