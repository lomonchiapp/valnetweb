import React, { useState, useEffect, useRef } from "react";
import { TextField, FormControl, Typography, Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
// Global State IMport
import { useSolicitudState } from "../../../../contexts/global/useSolicitudState";
import { FC } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FibraLocation } from "@/types";
import { puntosFibra } from "@/data/puntosFibra";
import L from "leaflet";
import { User } from "@/types";
import { useNewUserState } from "@/contexts/global/useNewUserState";
import { set } from "zod";

const fibraPin = L.icon({
  iconUrl: "/location/fibraPin.svg",
  iconSize: [38, 38], // size of the icon
  iconAnchor: [19, 38], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -38], // point from which the popup should open relative to the iconAnchor
});

const mePin = L.icon({
  iconUrl: "/location/me2.svg",
  iconSize: [38, 38], // size of the icon
  iconAnchor: [19, 38], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -38], // point from which the popup should open relative to the iconAnchor
});

interface LocationProps {
  user: User;
  setUser: (user: User) => void;
}

export const Location: FC = () => {
  const { position, setPosition, direccion_principal, setDireccion_principal } =
    useNewUserState();
  const initialPosition: [number, number] = [18.467514, -69.3092629];
  const [showMap, setShowMap] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const mapStyles = {
    height: "300px", // Define a fixed height for the map
    width: "100%", // Ensure the map takes the full width of its container
  };

  const handleGetLocation = () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const newPosition: [number, number] = [
          position.coords.latitude,
          position.coords.longitude,
        ];
        setPosition(newPosition);
        setLoading(false);
        setShowMap(true);
      });
    } else {
      setLoading(false);
    }
  };

    const reverseGeocode = async (lat: number, lng: number) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
      );
      const data = await response.json();
      console.log(data);
      if (data.address && data.address.road && data.address.city) {
        const address = data.address;
        const direccion = `${address.road}, ${address.city}`;
        console.log(direccion);
        setDireccion_principal(direccion);
      } else {
        setDireccion_principal("Lugar no disponible, arregle ubicación.");
      }
    } catch (error) {
      console.error(error);
      setDireccion_principal("Lugar no disponible, arregle ubicación.");
    } finally {
      setLoading(false);
    }
  };
  interface DraggableMarkerProps {
    position: [number, number];
    setPosition: (position: [number, number]) => void;
    reverseGeocode: (lat: number, lng: number) => void;
    mePin: L.Icon;
  }

  const DraggableMarker: React.FC<DraggableMarkerProps> = ({
    position,
    setPosition,
    reverseGeocode,
    mePin,
  }) => {
    const markerRef = useRef<L.Marker>(null);

    const updatePosition = () => {
      const marker = markerRef.current;
      if (marker) {
        const { lat, lng } = marker.getLatLng();
        setPosition([lat, lng]);
        reverseGeocode(lat, lng);
      }
    };

    useMapEvents({
      dragend: updatePosition,
    });

    return (
      <Marker
        draggable
        position={position}
        ref={markerRef}
        icon={mePin}
        eventHandlers={{
          dragend: updatePosition,
        }}
      />
    );
  };

  return (
    <div>
      <Typography sx={styles.title} textAlign={"center"}>
        ¿Donde será instalado este servicio?
      </Typography>
      <Box sx={styles.boxMap}>
        {!showMap && (
          <Box
            component={"button"}
            color="primary"
            onClick={handleGetLocation}
            disabled={loading}
            sx={styles.loadLocationBtn}
          >
            {loading ? "Cargando..." : "Obtener mi ubicación"}
          </Box>
        )}
        {showMap && (
          <MapContainer center={initialPosition} zoom={15} style={mapStyles}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <DraggableMarker
              position={position}
              setPosition={setPosition}
              reverseGeocode={reverseGeocode}
              mePin={mePin}
            />
            {puntosFibra.map((location: FibraLocation) => (
              <Marker
                key={location.name}
                position={[location.lat, location.lng]}
                icon={fibraPin}
              >
                <Popup>{location.name}</Popup>
              </Marker>
            ))}
            {showMap && (
              <Box sx={styles.mapHelper}>
                <Box>
                  <Typography>¿No es esta tu ubicación?</Typography>
                </Box>
                <Box>
                  <Box
                    component={"button"}
                    sx={styles.reGetLocationBtn}
                    color="primary"
                    onClick={handleGetLocation}
                  >
                    Volver a Obtener mi Ubicación
                  </Box>
                </Box>
              </Box>
            )}
          </MapContainer>
        )}
      </Box>
      <FormControl fullWidth>
        <TextField
          label="Dirección Principal"
          value={loading? 'Cargando dirección...' : direccion_principal}
          onChange={(e) => setDireccion_principal(e.target.value)}
        />
      </FormControl>
      {position[0]} - {position[1]} - {direccion_principal}
    </div>
  );
};

const styles = {
  title: {
    fontSize: 20,
    fontWeight: 600,
  },
  mapHelper: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 1,
    zIndex: 9999,
    padding: "0.5rem",
    paddingRight: "1rem",
    bottom: 0,
    right: 0,
    borderTopLeftRadius: "5px",
    backgroundColor: "rgba(255,255,255,1)",
  },
  reGetLocationBtn: {
    backgroundColor: "#005BAA",
    color: "white",
    padding: 1,
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: 12,
  },
  loadLocationBtn: {
    backgroundColor: "#005BAA",
    color: "white",
    padding: "1rem",
    borderRadius: "5px",
    marginTop: "1rem",
    cursor: "pointer",
    fontSize: "1rem",
  },
  boxMap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "300px",
    border: "1px solid #ccc",
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
};
