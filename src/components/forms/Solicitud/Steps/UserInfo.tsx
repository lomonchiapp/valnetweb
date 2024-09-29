import React, { useEffect } from "react";
//Material UI Components
import {
  TextField,
  FormControl,
  TextFieldProps,
  FormHelperText,
  Box,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
// Global State IMport
import { useSolicitudState } from "../../../../contexts/global/useSolicitudState";
//Component Type
import { FC } from "react";
//Mask
import InputMask from "react-input-mask";
import { useNewUserState } from "@/contexts/global/useNewUserState";

//props

export const CustomerInfo = () => {
  const {
    correo,
    setCorreo,
    movil,
    nombre,
    setNombre,
    cedula,
    telefono,
    setTelefono,
    setMovil,
  } = useNewUserState();
  const [confirmedPassword, setConfirmedPassword] = React.useState<
    string | null
  >(null);

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <Grid container spacing={2}>
      <Grid
        size={{
          xs: 12,
          md: 12,
        }}
      >
        <Box sx={styles.cedulaBox}>
          <Typography sx={styles.cedulaLabel}>Cédula Verificada</Typography>
          <Typography sx={styles.cedulaText}>{cedula}</Typography>
        </Box>
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 6,
        }}
      >
        <FormControl fullWidth>
          <TextField
            label="Nombre Completo"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </FormControl>
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 6,
        }}
      >
        <FormControl fullWidth>
          <TextField
            label="Correo Electrónico / Email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </FormControl>
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 6,
        }}
      >
        <FormControl fullWidth>
          <InputMask
            mask="999-999-9999"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          >
            {(inputProps: any) => (
              <TextField {...inputProps} label="Teléfono" />
            )}
          </InputMask>
        </FormControl>
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 6,
        }}
      >
        <FormControl fullWidth>
          <InputMask
            mask="999-999-9999"
            value={movil}
            onChange={(e) => setMovil(e.target.value)}
          >
            {(inputProps: any) => (
              <TextField {...inputProps} label="Movil / WhatsApp" />
            )}
          </InputMask>
        </FormControl>
      </Grid>
      <FormHelperText
        sx={{
          backgroundColor: "#efefef",
          padding: "0.2rem",
          borderRadius: "5px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Los Campos con (*) son obligatorios para avanzar.
      </FormHelperText>
    </Grid>
  );
};

const styles = {
  cedulaLabel: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#06a706",
  },
  cedulaBox: {
    display: "flex",
    backgroundColor: "#e6ffe5",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    border: "1px solid #e0e0e0",
    borderRadius: "5px",
  },
  cedulaText: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
  },
};
