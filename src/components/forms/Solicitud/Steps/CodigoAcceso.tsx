import React, { FC, useState, useEffect } from "react";
import { useSolicitudState } from "../../../../contexts/global/useSolicitudState";
import { Typography, FormControl, TextField, Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { z } from "zod";
import { X } from "@phosphor-icons/react";
import { useNewUserState } from "@/contexts/global/useNewUserState";

// Define password validation schema using zod
const passwordSchema = z
  .string()
  .min(6, "El codigo de acceso debe tener al menos 6 caracteres");
type CodigoAccesoProps = {
  confirmedPassword: string | null;
  setConfirmedPassword: (value: string) => void;
};  

export const CodigoAcceso: FC<CodigoAccesoProps> = ({confirmedPassword, setConfirmedPassword}) => {
  const { password, setPassword} = useNewUserState();
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmedPassword, setShowConfirmedPassword] =
    useState<boolean>(false);
  const [showHelper, setShowHelper] = useState<boolean>(false);

  const validatePassword = (password: string) => {
    try {
      passwordSchema.parse(password);
      setPasswordError(null);
      return true;
    } catch (e) {
      if (e instanceof z.ZodError) {
        setPasswordError(e.errors[0].message);
      }
      return false;
    }
  };

  useEffect(() => {
    if (password) {
      validatePassword(password);
    }
  }, [password]);

  return (
    <Grid sx={{ display: "flex" }} container spacing={2}>
      <Grid
        size={{
          xs: 12,
          md: 12,
        }}
      >
        <Typography sx={styles.title} textAlign={"center"}>
          Crea tu código de acceso...
        </Typography>
      </Grid>

      <Grid
        size={{
          xs: 12,
          md: 6,
        }}
      >
        <FormControl fullWidth>
          <TextField
            type="password"
            label="Código de Acceso"
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
            error={!!passwordError}
            helperText={passwordError}
            required
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
            type="password"
            label="Confirmar Código de Acceso"
            value={confirmedPassword || ""}
            onChange={(e) => setConfirmedPassword(e.target.value)}
            error={confirmedPassword !== password}
            helperText={
              confirmedPassword !== password && !!password
                ? "Los códigos no coinciden."
                : ""
            }
            required
          />
        </FormControl>
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 12,
        }}
      >
        <Box onClick={() => setShowHelper(!showHelper)} sx={styles.helperBox}>
          <X
            size={20}
            color={"#333"}
            style={{
              position: "absolute",
              display: showHelper ? "block" : "none",
              top: 5,
              right: 5,
              cursor: "pointer",
            }}
            onClick={() => setShowHelper(!showHelper)}
          />
          <Typography
            sx={styles.helperTitle}
            textAlign={"center"}
          >
            ¿Para qué necesito un Código de Acceso?
          </Typography>
          {showHelper && (
            <Typography sx={styles.helperDescription} textAlign={"center"}>
              El código de acceso es una contraseña que te permitirá acceder a
              tu cuenta de usuario donde podrás ver el estado de tu solicitud,
              tus facturas y mucho más. Este código debe tener al menos 6
              caracteres y es privado, por lo que no debes compartirlo con
              nadie.
            </Typography>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

const styles = {
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    mb: 2,
  },
  helperBox: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    backgroundColor: "#e7e7e7",
    border: "1px solid grey",
    cursor: "pointer",
    p: 2,
    alignItems: "center",
    gap: 2,
    mb: 2,
    transition: "background-color 0.3s",
    '&:hover': {
      backgroundColor: "#ffd9b0",
    }
  },
  helperTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#333",
  },
  helperDescription: {
    fontSize: 12,
    fontWeight: 400,
    color: "#333",
  },
};
