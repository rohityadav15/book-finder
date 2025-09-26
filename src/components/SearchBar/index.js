import { Box, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ query, setQuery, onSearch }) => {
  return(
  <Box display="flex" alignItems="center" gap={1}>
    <TextField
      variant="outlined"
      placeholder="Search by title, author, or subject"
      size="small"
      fullWidth
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && onSearch()}
    />
    <IconButton color="primary" onClick={onSearch}>
      <SearchIcon />
    </IconButton>
  </Box>
);
};
export default SearchBar;
