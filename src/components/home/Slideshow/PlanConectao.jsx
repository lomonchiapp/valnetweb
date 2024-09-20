import React, { useState } from "react";
import { Box, Button, Divider, Grid2, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { Drawer } from "@mui/material";
import { PlanSwiper } from "../../PlanSwiper";
import { planesInternet } from "../../../data/planesInternet";

export const PlanConectao = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const styles = {
    slide: {
      backgroundImage: "url('/slideshow/planConectao/bg.jpg')",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-end",
      height: 600,
      pt: 15,
      backgroundSize: "cover",
      backgroundPosition: "top-center",
      display: "flex",
    },
    header: {
      zIndex: 30,
      paddingRight: 20,
      display: "flex",
      flexDirection: "column",
    },
    title: {
      color: 'white',
      fontSize: 30,
      fontWeight: 700,
      zIndex: 30,
      textShadow: "0 0 10px rgba(0,0,0,0.5)",
      textAlign: "center",
    },
    btnContainer: {
      mt: 6.5,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      zIndex: 30,
    },
    familia: {
      color: 'white',
      fontSize: 85,
      maxWidth: 500,
      textAlign: "center",
      lineHeight: 1,
      fontWeight: 900,
      zIndex: 30,
      textShadow:
        "0 0 10px #8bbbff, 0 0 20px #8bbbff, 0 0 30px rgba(0, 0, 255, 0.4)", // Glowing effect
    },
    text: {
      color: 'white',
      fontSize: 18,
      fontWeight: 800,
      zIndex: 30,
      mt: 1,
      textAlign: "center",
      textShadow: "0 0 10px rgba(0,0,0,0.5)",
      span: {
        color: "white",
        backgroundColor: colors.blueAccent[500],
        p: 1,
        borderRadius: 3,
        ml: 1,
      },
    },


    helperText: {
      color: 'white',
      fontSize: 13,
      fontWeight: 500,
      zIndex: 30,
      mt: 0.5,
      textAlign: "center",
      textShadow: "0 0 10px rgba(0,0,0,0.5)",
    },
    btnSecondary: {
      backgroundColor: colors.blueAccent[500],
      padding: "0.5rem 2rem",
      color: "white",
      borderRadius: 5,
      border: "none",
      display: "inline-block",
      fontSize: 18,
      fontWeight: 700,
      cursor: "pointer",
      textShadow: "0 0 10px rgba(0,0,0,0.5)",
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    },
  };

  const floatingAnimation = {
    y: [1, -2, 1],
    x: [2, -3, 2],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "loop",
    },
  };

  const floatingAnimation2 = {
    y: [0.5, -1, 0.5],
    x: [1, -2, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
    },
  };

  return (
    <Grid2 container sx={styles.slide}>
      <Grid2 sx={styles.header}>
        <Typography sx={styles.title}>La tecnología es</Typography>
        <motion.div animate={floatingAnimation} style={{ display: "flex" }}>
          <Typography sx={{ ...styles.familia, mb: 1 }}>
            Para Todos
          </Typography>
        </motion.div>
        <Typography sx={styles.text}>
          Descubre nuestro plan<span>Conectao'</span>{" "}
        </Typography>
        <Box sx={styles.btnContainer}>
          <Button onClick={() => toggleDrawer()} sx={styles.btnSecondary}>
            Ver Planes
          </Button>
          <Typography sx={styles.helperText}>Impuestos Incluidos.</Typography>
        </Box>
      </Grid2>
      <Drawer sx={styles.drawer} open={isDrawerOpen} onClose={toggleDrawer} anchor="bottom">
        <Grid2 container sx={{ p: 2, backgroundColor:'lightgrey' }}>
          <Grid2 item size={12}>
            <PlanSwiper plans={planesInternet} />
          </Grid2>
        </Grid2>
      </Drawer>
    </Grid2>
  );
};
