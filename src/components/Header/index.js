import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import SearchBar from "../SearchBar";

const Header = ({ query, setQuery, onSearch }) => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          📚 Book Finder
        </Typography>
        <Box width="400px">
          <SearchBar query={query} setQuery={setQuery} onSearch={onSearch} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
