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

//props

export const CustomerInfo = () => {
  const { user, setUser } = useSolicitudState();
  const [confirmedPassword, setConfirmedPassword] = React.useState<
    string | null
  >(null);

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  useEffect(() => {
    if (user.correo) {
      if (!validateEmail(user.correo)) {
        setUser({ ...user, correo: "" });
      }
    }
  }, [user.correo]);

  return (
    <Grid container spacing={2}>
      <Grid
        size={{
          xs: 12,
          md: 12,
        }}>
          <Box sx={styles.cedulaBox}>
            <Typography sx={styles.cedulaLabel}>Cédula Verificada</Typography>
            <Typography sx={styles.cedulaText}>
              {user.cedula}
            </Typography>
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
            value={user.nombre}
            onChange={(e) => setUser({ ...user, nombre: e.target.value })}
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
            value={user.correo}
            onChange={(e) => setUser({ ...user, correo: e.target.value })}
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
            value={user.telefono}
            onChange={(e) => setUser({ ...user, telefono: e.target.value })}
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
            value={user.movil}
            onChange={(e) => setUser({ ...user, movil: e.target.value })}
          >
            {(inputProps: any) => (
              <TextField {...inputProps} label="Movil / WhatsApp" />
            )}
          </InputMask>
        </FormControl>
        
      </Grid>
      <FormHelperText sx={{

        backgroundColor: '#efefef',
        padding: '0.2rem',
        borderRadius: '5px',
        justifyContent: 'center',
        alignItems: 'center',
      
      }}>
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