import axios from "axios";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import BookGrid from "../../components/BookGrid";
import BookDetailsDialog from "../../components/BookDetailsDialog";
import ErrorState from "../../components/ErrorState";
import Loader from "../../components/Loader";
import { Container } from "@mui/material";
import EmptyState from "../../components/EmptyState";

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [userLocation, setUserLocation] = useState({ lat: 51.505, lng: -0.09 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        }),
      () => console.log("Location not available")
    );
  }, []);

  const fetchBooks = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(
        `https://openlibrary.org/search.json?title={bookTitle}`
      );
      console.log("====>", res);

      setBooks(res.data.docs.slice(0, 20)); // take top 20
    } catch (err) {
      setError("Failed to fetch books. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header query={query} setQuery={setQuery} onSearch={fetchBooks} />
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
export default Dashboard;
