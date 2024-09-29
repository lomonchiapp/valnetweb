import React, { useState, useEffect } from "react";
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
import { MapPin, X } from "@phosphor-icons/react/dist/ssr";
import { confirmCedula } from "@/api/cedula/confirmCedula";
import ReactInputMask from "react-input-mask";
import { text } from "stream/consumers";
import { Check } from "@phosphor-icons/react";



type ConfirmCedulaProps = {
  setIsValid: (value: boolean | null) => void;
  isValid: boolean | null;
};

export const ConfirmCedula: FC<ConfirmCedulaProps> = ({ setIsValid, isValid }) => {
  const { user, setUser } = useSolicitudState();
  const [cleanCedula, setCleanCedula] = useState<string>("");
  const isCedulaEmpty = (cedula) => {
    // Check if the cedula contains only mask characters
    return !cedula || cedula.replace(/[^0-9]/g, '').length === 0;
  };


  useEffect(() => {
    const cleaned = user.cedula.replace(/[^0-9]/g, '');
    setCleanCedula(cleaned);

    if (cleaned.length === 11) {
      validateCedula(cleaned);
    } else {
      setIsValid(null);
    }
  }, [user.cedula]);

  const validateCedula = async (cedula: string) => {
    const response = await confirmCedula(cedula);
    setIsValid(response);
  };

  
  return (
    <Grid
      sx={{ display: "flex", flexDirection: "column" }}
      container
      spacing={2}
    >
      <Grid
        size={{
          xs: 12,
          md: 12,
        }}
      >
        <Typography sx={styles.title}>
          Primero, confirmemos tu cédula...
        </Typography>

        <FormControl fullWidth>
        <ReactInputMask
      mask="999-9999999-9"
      value={user.cedula}
      onChange={(e) => setUser({ ...user, cedula: e.target.value })}
    >
      {(inputProps) => (
        <div style={styles.inputContainer}>
          <input
            placeholder="Escriba su cedula aqui"
            style={styles.input}
            {...inputProps}
            required
            label="Cédula"
          />
          {!isCedulaEmpty(user.cedula) && cleanCedula.length === 11 ? (
                  isValid  ? (
                    <Box sx={styles.validBox}>
                      <Check size={20} />
                      <Typography color={"success"}>Cédula válida</Typography>
                    </Box>
                  ) : (
                    <Box sx={styles.invalidBox}>
                      <X size={20} />
                      <Typography color={"error"}>Cédula inválida</Typography>
                    </Box>
                  )
                ) : null}
        </div>
      )}
    </ReactInputMask>
          
        </FormControl>
      </Grid>
    </Grid>
  );
};

const styles = {
  inputContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",

  },
  input: {
    border: "2px dashed #ccc",
    backgroundColor: "#f9f9f9",
    display:"flex",
    width: "100%",
    textAlign: "center",
    padding: "10px",
    fontSize: "26px",
    fontFamily: "monospace",
    marginTop: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    color: "#333",
  },
  validBox: {
    position: 'absolute',
    right: '10px',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid green',
    borderRadius: '5px',
    padding: '5px',
    backgroundColor: 'rgba(0, 255, 0, 0.1)',
    color: 'green',
  },
  invalidBox: {
    position: 'absolute',
    right: '10px',
    display: 'flex',
    border: '1px solid red',
    borderRadius: '5px',
    padding: '5px',
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
    alignItems: 'center',
    color: 'red',
  },
};