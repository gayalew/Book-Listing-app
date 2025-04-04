import React from "react";
import Navbar from "./components/Navbar.jsx";
import BookContextProvider from "./contexts/BookContext";
import BookList from "./components/BookList.jsx";
import NewBookForm from "./components/BookForm.jsx";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
