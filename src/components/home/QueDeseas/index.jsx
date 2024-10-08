import React from "react";
import Grid from "@mui/material/Grid2";
import { ActionItem } from "./ActionItem";
import { Dialog, Typography } from "@mui/material";
import { useThemeState } from "../../../contexts/global/useThemeState";
import { LoginForm } from "../../forms/LoginForm";
import { dialog } from "framer-motion/client";

export const QueDeseas = () => {
  const { setLogin, login } = useThemeState();

  const styles = {
    header: {
      pt: 5,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 26,
      fontWeight: 700,
      color: "#333",
    },
    section: {
      backgroundColor: "#f5f5f5",
    },
    itemsContainer: {
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      justifyContent: "center",
      padding: 5,
    },
    dialog: {
      '& .MuiDialog-paper': {
        borderRadius: 10,
        padding: 10,
    },
  }}
  return (
    <Grid sx={styles.section} container>
      <Grid item sx={styles.header} size={12}>
        <Typography sx={styles.title}>¿Qué deseas hacer hoy?</Typography>
      </Grid>
      <Grid sx={styles.itemsContainer} item size={12}>
        <ActionItem
          title="Paga tu factura"
          img="/queDeseas/paybill.png"
          text="Realiza tu pago desde la comodidad de tu hogar."
          action={setLogin}
          state={login}
        />
        <Dialog sx={styles.dialog} open={login} onClose={() => setLogin(false)}>
          <LoginForm />
        </Dialog>
        <ActionItem
          text="Solicita un nuevo servicio a tu cuenta Valnet."
          title="Nuevo Servicio"
          img="/queDeseas/report.png"
        />
        <ActionItem
          text="No es común, pero si suede, reporta aquí."
          title="Reportar avería"
          img="/queDeseas/newService.png"
        />
      </Grid>
    </Grid>
  );
};
