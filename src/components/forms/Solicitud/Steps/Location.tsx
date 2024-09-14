import React, {useState} from "react";
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


export const Location: FC = () => {
  const { user, setUser } = useSolicitudState();
  const mapStyles = {
    height: '300px', // Define a fixed height for the map
    width: '100%', // Ensure the map takes the full width of its container
    marginBottom: '5rem',

  };
  const styles = {
    mapLabel: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      margin: '1rem 0',
    },
  };
  const [position, setPosition] = useState<[number, number]>([18.467514,-69.3092629]);
  const [map, setMap] = useState<any>(null);

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

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const newPosition: [number, number] = [position.coords.latitude, position.coords.longitude];
        setPosition(newPosition);
        if (map) {
          map.setView(newPosition, 13);
        }
      });
    }
  };

  const fetchAddress = async (position: [number, number]) => {
    const [lat, lng] = position;
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
    const data = await response.json();
    if (data && data.display_name) {
      setUser({ ...user, direccion_principal: data.display_name });
    }
  };


  const MapClickHandler = () => {
    useMapEvents({
      click: (e) => {
        const newPosition: [number, number] = [e.latlng.lat, e.latlng.lng];
        setPosition(newPosition);
        if (map) {
          map.setView(newPosition, 13);
        }
        fetchAddress(newPosition);
      },
    });
    return null;
  };

  const CenterMap = ({ position }: { position: [number, number] }) => {
    const map = useMap();
    map.setView(position);
    return null;
  };
  return (
    <Grid sx={{display:'flex',  flexDirection:'column'}} container spacing={2}>
      
      <Grid size={{
        xs: 12,
        md: 12,
      }}>
        <div style={mapStyles}>
          <Typography sx={styles.mapLabel} textAlign={'center'}>
            ¿Donde quieres instalar este plan?
          </Typography>
         
          
          <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={mapStyles}>
            <TileLayer
              attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              className={'cursor-crosshair'}
            />
            {puntosFibra.map((punto: FibraLocation) => (
              <Marker
                icon={fibraPin}
                key={punto.id}
              position={[punto.lat, punto.lng]}>
                <Popup>
                  {punto.name}
                </Popup>
              </Marker>
            ))}
            <Marker icon={mePin} position={position}>
              <Popup>
                Aquí será mi instalación.
              </Popup>
            </Marker>
            <CenterMap position={position} />
            <MapClickHandler />
            <Box sx={{zIndex:9999, position:'absolute', right:0, bottom:0}}>
          <Button sx={{minWidth:250}} variant="contained" onClick={handleGetLocation}>
            <MapPin/> Obtener mi Ubicación
          </Button>
          </Box>
          </MapContainer>
        </div>
        <Grid size={{
        xs: 12,
        md: 12,
      }}>
        <FormControl fullWidth>
          <TextField
            label="Dirección"
            value={user.direccion_principal}
            onChange={(e) =>
              setUser({ ...user, direccion_principal: e.target.value })
            }
          />
        </FormControl>
      </Grid>
      </Grid>
    </Grid>
  );
};
