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
      sx={{ display: "flex", gap: 2, justifyContent: "center"}}
    >
      <TextField
        label="Search by Title"
        variant="outlined"
        value={query}
        size="small"
        onChange={(e) => setQuery(e.target.value)}
        style={{backgroundColor:"white"}}
      />
      <Button type="submit" variant="contained" size="small" >
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;
