import React, {useState, useEffect} from "react";
import { TextField, FormControl, Typography, Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
// Global State IMport
import { useSolicitudState } from "../../../../contexts/global/useSolicitudState";
import { FC } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { FibraLocation } from "@/types";
import { puntosFibra} from "@/data/puntosFibra";
import L from 'leaflet'
import { MapPin } from "@phosphor-icons/react/dist/ssr";



const fibraPin = L.icon({
  iconUrl: '/location/fibraPin.svg',
  iconSize: [38, 38], // size of the icon
  iconAnchor: [19, 38], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -38] // point from which the popup should open relative to the iconAnchor
});

const mePin = L.icon({
  iconUrl: '/location/me2.svg',
  iconSize: [38, 38], // size of the icon
  iconAnchor: [19, 38], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -38] // point from which the popup should open relative to the iconAnchor
});

export const Location: FC = () => {
  const { user, setUser } = useSolicitudState();
  const mapStyles = {
    height: '300px', // Define a fixed height for the map
    width: '100%', // Ensure the map takes the full width of its container
    marginBottom: '5rem',
  };


  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const newPosition = { lat: position.coords.latitude, lng: position.coords.longitude };
        setUser({ ...user, ...newPosition });
      });
    }
  };

  const DraggableMarker = () => {
    const [position, setPosition] = useState<[number, number]>([user.lat ?? 18.467514, user.lng ?? -69.3092629]);

    const map = useMapEvents({
      dragend() {
        const marker = L.marker(position, { icon: mePin, draggable: true });
        marker.on('dragend', (event) => {
          const newPosition = event.target.getLatLng();
          setPosition([newPosition.lat, newPosition.lng]);
          setUser({ ...user, lat: newPosition.lat, lng: newPosition.lng });
          reverseGeocode(newPosition.lat, newPosition.lng);
        });
      },
    });

    const reverseGeocode = async (lat: number, lng: number) => {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
        const data = await response.json();
        if (data && data.display_name) {
          setUser({ ...user, direccion_principal: data.display_name });
        }
      } catch (error) {
        console.error("Error fetching address:", error);
      }
    };
  

    return (
      <Marker position={position} icon={mePin} draggable={true}>
        <Popup>Tu ubicación</Popup>
      </Marker>
    );
  };

  return (
    <div>
      <Typography variant="h6">Ubicación</Typography>
      <Button variant="contained" color="primary" onClick={handleGetLocation}>
        Obtener mi ubicación
      </Button>
      <MapContainer center={[user.lat ?? 18.467514, user.lng ?? -69.3092629]} zoom={13} style={mapStyles}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <DraggableMarker />
        {puntosFibra.map((location: FibraLocation) => (
          <Marker key={location.name} position={[location.lat, location.lng]} icon={fibraPin}>
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Dirección Principal"
          value={user.direccion_principal}
          onChange={(e) => setUser({ ...user, direccion_principal: e.target.value })}
        />
      </FormControl>
    </div>
  );
};