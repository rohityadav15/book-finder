// App.js
import { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import { SearchBar, BookList, Loader, ErrorMessage } from "../../components";
import { searchBooks } from "../../services/api";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchBooks(query);
      setBooks(data.docs || []);
    } catch (err) {
      setError("Failed to fetch books. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container sx={{ py: 4}}>
      <Typography variant="h4" gutterBottom align="center">
        📚 Book Finder
      </Typography>

      <SearchBar onSearch={handleSearch} style={{size:"small"}} />

      <Box sx={{ mt: 4 }}>
        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && <BookList books={books} />}
      </Box>
    </Container>
  );
}

export default App;
