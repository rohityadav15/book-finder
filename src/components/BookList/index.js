import { Grid } from "@mui/material";
import BookCard from "../BookCard";

function BookList({ books }) {
  if (!books.length) return <p>No results found.</p>;

  return (
    <Grid
      container
      spacing={2}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {books.map((book, index) => (
        <Grid item key={index} sx={{ flex: "0 0 23%" }}>
          <BookCard book={book} />
        </Grid>
      ))}
    </Grid>
  );
}

export default BookList;
