import React, {useEffect, useState} from "react";
import Grid from "@mui/material/Grid2";
import { PlanItem } from "./PlanItem";
import { Typography, Box } from "@mui/material";
import {tokens} from "../../../theme";
import { useTheme } from "@mui/material";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import { planesInternet } from "../../../data/planesInternet";
import { useThemeState } from "../../../contexts/global/useThemeState";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const Planes = () => {
    const theme = useTheme();
    const { internetPlanSlider, setInternetPlanSlider } = useThemeState();
    const colors = tokens(theme.palette.mode);
    const [randomSortedPlans, setRandomSortedPlans] = useState([]);

    useEffect(() => {
      const shuffledPlans = shuffleArray([...planesInternet]);
      const selectedPlans = shuffledPlans.slice(0, 3);
      const sortedPlans = selectedPlans.sort((a, b) => a.price - b.price);
      setRandomSortedPlans(sortedPlans);
    }, []);

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
          backgroundColor: colors.blueAccent[500],
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
          {randomSortedPlans.map((plan, index) => (
            <PlanItem
              plan={plan}
              key={index}
            />
          ))}
        </Grid>
        <Grid item sx={styles.btnContainer}>
        <Box component="button"
        sx={styles.morePlans}
        onClick={() => setInternetPlanSlider(true)}
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
