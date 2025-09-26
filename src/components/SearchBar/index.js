import { Box, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";

const SearchBar = ({ query, setQuery, onSearch }) => (
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

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
