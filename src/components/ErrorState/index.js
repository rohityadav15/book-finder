import { Alert } from "@mui/material";
import PropTypes from "prop-types";

const ErrorState = ({ message }) => (
  <Alert severity="error">{message}</Alert>
);

ErrorState.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorState;
