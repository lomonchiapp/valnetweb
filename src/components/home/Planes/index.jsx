import React from "react";
import Grid from "@mui/material/Grid2";
import { PlanInternet } from "./PlanInternet";
import { Typography, Box } from "@mui/material";
import { style } from "framer-motion/client";
import { PlanInternetPromo } from "./PlanInternetPromo";
import {tokens} from "../../../theme"
import { useTheme } from "@mui/material";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";

export const Planes = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const styles = {
        header: {
          pb: 5,
          pt:3,
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
        container: {
            borderRadius:20,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
        planesContainer: {

          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 5,
        },
        btnContainer: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 5,
        },
        morePlans: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          backgroundColor: colors.blueAccent[400],
          color: "white",
          borderRadius: 5,
          px:5,
          border:'none',
          fontSize: 18,
          fontWeight: 600,
          cursor: "pointer",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: colors.blueAccent[600],
            transition: "all 0.2s ease-in-out",
          },
        },
        morePlansText: {
          fontSize: 18,
          fontWeight: 600,
          mr: 2,
        },
      };
  
  return (
    <Grid sx={styles.section} container>
      <Grid sx={styles.header} item size={12}>
        <Typography sx={styles.title}>
          Tenemos el plan perfecto para tí.
        </Typography>
      </Grid>
      <Grid sx={styles.container} item size={12}>
        <Grid sx={styles.planesContainer} item size={12}>
        <PlanInternet title="Básico" price="995" subida="10" bajada="100" />
        <PlanInternetPromo title="Premium" price="1,995" subida="20" bajada="200" />
        <PlanInternet title="Plan 3" price="300" subida="30" bajada="300" />
        </Grid>
        <Grid item sx={styles.btnContainer}>
        <Box component="button"
        sx={styles.morePlans}
        >
          <Typography sx={styles.morePlansText}>
            Ver todos los planes 
            </Typography><CaretRight size={20} color={colors.orangeAccent[500]} />
        </Box>
        </Grid>
      </Grid>
      <Grid>
        
      </Grid>
    </Grid>
  );
};
