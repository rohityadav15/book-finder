import { CircularProgress, Box } from "@mui/material";

function Loader() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
      <CircularProgress />
    </Box>
  );
}

export default Loader;
