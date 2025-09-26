import { Box, CircularProgress } from "@mui/material";

const Loader = () => (
  <Box display="flex" justifyContent="center" mt={4}>
    <CircularProgress />
  </Box>
);

export default Loader;
