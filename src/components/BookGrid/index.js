import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import PropTypes from "prop-types";

const BookGrid = ({ book, onSelectBook }) => {
  return (
    <Card
      sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      onClick={() => onSelectBook(book)}
    >
      <CardActionArea>
        {/* Book Cover */}
        <CardMedia
          component="img"
          height="180"
          image={
            book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
              : "/placeholder.jpg"
          }
          alt={book.title}
        />

        {/* Book Info */}
        <CardContent>
          <Typography variant="subtitle1" gutterBottom noWrap>
            {book.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {book.author_name?.[0] || "Unknown Author"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

// BookCard.propTypes = {
//   book: PropTypes.object.isRequired,
//   onSelectBook: PropTypes.func.isRequired,
// };

export default BookGrid;
