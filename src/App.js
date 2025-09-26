import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

// Components
import Header from "./components/Header";
import BookGrid from "./components/BookGrid";
import Loader from "./components/Loader";
import ErrorState from "./components/ErrorState";
import EmptyState from "./components/EmptyState";
import BookDetailsDialog from "./components/BookDetailsDialog";
import Footer from "./components/Footer";

const App = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [userLocation, setUserLocation] = useState({ lat: 51.505, lng: -0.09 });

  // 📍 Get User Location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        }),
      () => console.warn("Location not available")
    );
  }, []);

  // 🔍 Fetch Books
  const fetchBooks = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get(
        `https://openlibrary.org/search.json?title=${query}`
      );
      setBooks(res.data.docs.slice(0, 20)); // Take top 20 books
    } catch (err) {
      setError("Failed to fetch books. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 🔎 Search Header */}
      <Header query={query} setQuery={setQuery} onSearch={fetchBooks} />

      {/* 📚 Main Content */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {loading && <Loader />}
        {error && <ErrorState message={error} />}
        {!loading && !error && books.length === 0 && query && (
          <EmptyState query={query} />
        )}
        {!loading && !error && books.length > 0 && (
          <BookGrid books={books} onSelectBook={setSelectedBook} />
        )}
      </Container>

      {/* 📖 Book Details Modal */}
      <BookDetailsDialog
        book={selectedBook}
        open={Boolean(selectedBook)}
        onClose={() => setSelectedBook(null)}
        userLocation={userLocation}
      />
      <Footer />
    </>
  );
};

export default App;
