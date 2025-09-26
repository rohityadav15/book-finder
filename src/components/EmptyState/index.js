import { Box, Typography } from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import PropTypes from "prop-types";

const EmptyState = ({ query }) => (
  <Box textAlign="center" mt={4}>
    <SearchOffIcon sx={{ fontSize: 50, color: "text.secondary" }} />
    <Typography variant="h6">
      No results for "{query}"
    </Typography>
  </Box>
);

EmptyState.propTypes = {
  query: PropTypes.string.isRequired,
};

export default EmptyState;
