import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", gap: 2, justifyContent: "center" }}
    >
      <TextField
        label="Search by Title"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit" variant="contained">
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;
