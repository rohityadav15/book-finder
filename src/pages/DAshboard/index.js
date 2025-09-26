import PropTypes from "prop-types";
import { Container } from "@mui/material";
import BookGrid from "../components/BookGrid";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import EmptyState from "../components/EmptyState";

const Dashboard = ({ query, books, loading, error, setSelectedBook }) => {
  return (
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
  );
};

Dashboard.propTypes = {
  query: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  setSelectedBook: PropTypes.func.isRequired,
};

export default Dashboard;
