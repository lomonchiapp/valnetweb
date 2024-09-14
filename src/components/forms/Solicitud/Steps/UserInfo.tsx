import React from "react";
//Material UI Components
import { TextField, FormControl, TextFieldProps } from "@mui/material";
import Grid from "@mui/material/Grid2";
// Global State IMport
import { useSolicitudState } from "../../../../contexts/global/useSolicitudState";
//Component Type
import { FC } from "react";
//Mask
import  InputMask  from "react-input-mask";


//props



export const CustomerInfo = () => {
  const { user, setUser } = useSolicitudState();

  return (
    <Grid container spacing={2}>
      <Grid
        size={{
          xs: 12,
          md: 6,
        }}
      >
        <FormControl fullWidth>
          <TextField
            label="Nombre"
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
            label="Correo"
            value={user.correo}
            onChange={(e) =>
              setUser({ ...user, correo: e.target.value })
            }
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
  <InputMask mask="999-999-9999" value={user.telefono} onChange={(e) => setUser({ ...user, telefono: e.target.value })}>
    {(inputProps: any) => <TextField {...inputProps} label="Teléfono" />}
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
      <TextField
        label="Password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
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
        <InputMask mask="999-9999999-9" value={user.cedula} onChange={(e) => setUser({ ...user, cedula: e.target.value })}>
    {(inputProps: any) => <TextField {...inputProps} label="Teléfono" />}
  </InputMask>
        </FormControl>
      </Grid>
    </Grid>
  );
};
