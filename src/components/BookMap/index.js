import { Box } from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const BookMap = ({ userLocation, libraries }) => {
  return (
    <Box sx={{ height: 300, mt: 2 }}>
      <MapContainer
        center={[userLocation.lat, userLocation.lng]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[userLocation.lat, userLocation.lng]}>
          <Popup>Your Location</Popup>
        </Marker>
        {libraries.map((lib, index) => (
          <Marker key={index} position={[lib.lat, lib.lng]}>
            <Popup>{lib.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};
export default BookMap;
