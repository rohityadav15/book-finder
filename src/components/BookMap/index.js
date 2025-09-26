import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const BookMap = ({ userLocation, libraries }) => (
  <Box sx={{ height: 300, mt: 2 }}>
    <MapContainer
      center={[userLocation.lat, userLocation.lng]}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      {/* User Location Marker */}
      <Marker position={[userLocation.lat, userLocation.lng]}>
        <Popup>Your Location</Popup>
      </Marker>

      {/* Nearby Libraries */}
      {libraries.map((lib, index) => (
        <Marker key={index} position={[lib.lat, lib.lng]}>
          <Popup>{lib.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  </Box>
);

BookMap.propTypes = {
  userLocation: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  libraries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default BookMap;
