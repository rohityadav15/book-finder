import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from "@mui/material";
import BookMap from "../BookMap";

const BookDetailsDialog = ({ book, open, onClose, userLocation }) => {
  if (!book) return null;

  // Dummy nearby libraries
  const libraries = [
    { name: "Central Library", lat: userLocation.lat + 0.01, lng: userLocation.lng + 0.01 },
    { name: "Campus Library", lat: userLocation.lat - 0.01, lng: userLocation.lng - 0.01 },
  ];

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>{book.title}</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <img
              src={
                book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                  : "/placeholder.jpg"
              }
              alt={book.title}
              width="100%"
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h6">
              Author: {book.author_name?.[0] || "Unknown"}
            </Typography>
            <Typography>
              First Published: {book.first_publish_year || "N/A"}
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Subjects: {book.subject?.slice(0, 5).join(", ") || "N/A"}
            </Typography>
          </Grid>
        </Grid>
        <BookMap userLocation={userLocation} libraries={libraries} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
export default BookDetailsDialog;