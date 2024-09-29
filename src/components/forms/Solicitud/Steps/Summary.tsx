import React, { useState, useEffect } from "react";
import { Box, Typography, Button, IconButton, Divider, minor } from "@mui/material";
import Grid from "@mui/material/Grid2";
import L from "leaflet";

// Import Global State
import { useSolicitudState } from "../../../../contexts/global/useSolicitudState";
import { useSelectedPlan } from "../../../../contexts/global/useSelectedPlan";
import { FC } from "react";
import { useNewUserState } from "@/contexts/global/useNewUserState";
import {MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  ArrowDown,
  ArrowUp,
  Eye,
  EyeClosed,
  Eyes,
} from "@phosphor-icons/react";

const mePin = L.icon({
  iconUrl: "/location/me2.svg",
  iconSize: [38, 38], // size of the icon
  iconAnchor: [19, 38], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -38], // point from which the popup should open relative to the iconAnchor
});

export const Summary: FC = () => {
  const {
    nombre,
    correo,
    telefono,
    movil,
    password,
    direccion_principal,
    position,
  } = useNewUserState();
  const { selectedPlan } = useSolicitudState();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <Typography variant="h4">Resumen de la solicitud</Typography>
      </Grid>
      <Grid
        sx={{ display: "flex", gap: 3 }}
        size={{
          xs: 12,
          md: 12,
          lg: 12,
        }}
      >
        {/* Plan a contratar */}
        <Grid size={{ xs: 12, md: 6, lg: 3 }} sx={styles.planBox}>
          <Typography sx={styles.planTitle}>Plan a contratar</Typography>
          <Divider />
          <Typography sx={styles.planName}>
            Plan {selectedPlan?.name}
          </Typography>
          <Box sx={styles.priceBox}>
            <Typography sx={styles.price}>${selectedPlan?.price}.00</Typography>
            <Typography
              mt={-1}
              fontSize={12}
              color={"grey"}
              textAlign={"center"}
            >
              Mensual
            </Typography>
          </Box>

          <Box sx={styles.speedBox}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ArrowUp size={15} />
              <Typography variant="body1">
                {selectedPlan?.download} Mbps
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ArrowDown size={15} />
              <Typography variant="body1">
                {selectedPlan?.upload} Mbps
              </Typography>
            </Box>
          </Box>
        </Grid>
        {/* Información del Cliente */}
        <Grid sx={styles.infoBox} size={{xs:12, md:8,}}>
          <Typography sx={styles.title}>Información del Cliente</Typography>
          <Box sx={styles.info}>
            <Typography sx={styles.label}>Nombre:</Typography>
            <Typography sx={styles.textValue}>{nombre}</Typography>
          </Box>
          <Box sx={styles.info}>
            <Typography sx={styles.label}>Correo:</Typography>
            <Typography sx={styles.textValue}>{correo}</Typography>
          </Box>
          <Box  sx={styles.info}>
            <Typography sx={styles.label}>Telefono:</Typography>
            <Typography sx={styles.textValue}>{telefono}</Typography>
          </Box>
          <Box  sx={styles.info}>
            <Typography sx={styles.label}>Movil:</Typography>
            <Typography sx={styles.textValue}>{movil}</Typography>
          </Box>
          <Box  sx={styles.infoCodigo}>
            <Typography sx={styles.label}>Mi Código:</Typography>
            <Box display="flex" alignItems="center">
            <Typography sx={styles.codigo}>
              {showPassword ? password : "********"}
            </Typography>
            <IconButton onClick={handleTogglePassword}>
              {showPassword ? <EyeClosed /> : <Eye />}
            </IconButton>
          </Box>
          </Box>
          
        </Grid>

        {/* Ubicación */}
        <Grid sx={styles.mapBox} size={"grow"}>
          <Typography sx={styles.title}>Ubicación de instalación</Typography>
          <MapContainer
            
            center={[position[0], position[1]]}
            zoom={16}
            style={styles.mapStyles}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker icon={mePin} position={[position[0], position[1]]}>
              <Popup>
                <Typography fontSize={8}>{direccion_principal}</Typography>
              </Popup>
            </Marker>
            <Box sx={styles.mapHelper}>
            <Typography fontSize={8}>{direccion_principal}</Typography>
          </Box>
          </MapContainer>
          
        </Grid>
      </Grid>
    </Grid>
  );
};

const styles = {
  // Plan Styles
  planTitle: {
    fontSize: 12,
    fontWeight: 600,
    mb: 0.3,
  },
  planName: {
    fontSize: 18,
    fontWeight: 600,
    color: "#005BAA",
    mb: 1,
  },
  speedBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    border: "1px solid #ccc",
    mb: 1,
    borderRadius: "5px",
    padding: "0.5rem",
    backgroundColor: "white",
    gap: 0.5,
  },
  price: {
    fontSize: 25,
    fontWeight: 600,
  },
  priceBox: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "5px",
    marginBottom: "1rem",
    backgroundColor: "white",
    justifyContent: "center",
    padding: "0.5rem",
    border: "1px solid #ccc",
  },
  planBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "5px",
    maxHeight:220,
    minHeight:220,
    px: "2rem",
    py: "1rem",
    mb: 2,
    backgroundColor: "#f9f9f9",
  },
  // Client Info Box
  infoBox: {
    display:'flex',
    flexDirection: "column",
    border: "1px solid #ccc",
    padding: 2,
    borderRadius: "5px",
    overflow: "auto",
    wordWrap: "break-word",
    maxHeight:220,
    minHeight:220,
  },
  textValue: {
    fontSize: 12,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 0.4,
    mb:1,
  },
  infoCodigo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    mb:1,
    mt:0.5,
    border: "1px solid #F37021",
    backgroundColor: "#f0d4c2",
    borderRadius: "10px",
    justifyContent: "center",
    gap:1,
  },
  codigo:{
    fontFamily:'monospace',
    textDecoration:'underline',
  },
  label: {
    fontSize: 12,
    fontWeight: 600,
  },
  title: {
    fontSize: 12,
    fontWeight: 600,
    mb: 1,
  },
  // Map Styles
  mapStyles: {
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #9b0000",
  },
  mapBox: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #ccc",
    padding: 2,
    borderRadius: "5px",
    overflow: "auto",
    wordWrap: "break-word",
    maxHeight:220,
    minHeight:220,
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
  }
};
