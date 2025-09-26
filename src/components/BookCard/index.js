import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";

function BookCard({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <Card
      sx={{
        border: `1px solid gray`,
      }}
    >
      {/* Keep square-like shape for consistent layout */}
      <Box sx={{ height: 200, display: "flex", justifyContent: "center" }}>
        <CardMedia
          component="img"
          image={coverUrl}
          alt={book.title}
          sx={{
            width: "auto",
            objectFit: "contain",
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" noWrap>
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {book.author_name?.join(", ") || "Unknown Author"}
        </Typography>
        <Typography variant="body2">
          Year: {book.first_publish_year || "N/A"}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">More Details</Button>
      </CardActions>
    </Card>
  );
}

export default BookCard;
