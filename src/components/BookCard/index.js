const BookCard = ({ book, onSelectBook }) => {
    return(
  <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
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
    <CardContent>
      <Typography variant="subtitle1" noWrap>
        {book.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {book.author_name?.[0] || "Unknown Author"}
      </Typography>
      <Typography variant="caption">
        {book.first_publish_year || "N/A"}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={() => onSelectBook(book)}>
        View Details
      </Button>
    </CardActions>
  </Card>
});
default export BookCard