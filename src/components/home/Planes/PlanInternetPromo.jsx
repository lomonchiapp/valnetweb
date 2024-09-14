import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PropTypes from "prop-types";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import { CaretRight } from "@phosphor-icons/react";

export const PlanInternetPromo = ({ title, price, subida, bajada }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const styles = {
    plan: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: colors.blueAccent[400],
      p: 2,
      justifyContent: "center",
      borderRadius: 5,
      border: "1px solid #ccc",
    },
    title: {
      textAlign: "center",
      fontSize: 30,
      fontWeight: 400,
      mb: 0.5,
    },
    price: {
      fontSize: 23,
      fontWeight: 600,
    },
    pricePrefix: {
      fontSize: 18,
      fontWeight: 400,
    },
    priceContainer: {
      display: "flex",
      mb:0.5,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    sbContainer: {
      display: "flex",
      borderRadius: 2,
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: colors.orangeAccent[500],
      justifyContent: "center",
      px: 5,
      py: 0.3,
      mb:2,
    },
    subida: {
      fontSize: 15,
      fontWeight: 600,
      color: "#fff",
      px: 0.4,
    },
    bajada: {
      fontSize: 15,
      fontWeight: 600,
      color: "#fff",
      px: 0.4,
    },
    btnContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    favoriteText:{
      fontSize:15,
      fontWeight:600,
      color:colors.orangeAccent[700],
    },
    button: {
      border: "2px solid white",
      padding: "0.5rem 2rem",
      color: colors.blueAccent[400],
      borderRadius: 5,
      display: "flex",
      justifyContent: "center",
      fontWeight: 700,
      cursor: "pointer",
      backgroundColor: 'transparent',
      alignItems: "center",
      gap:1,
      mt:1,
    },
    btnText: {
      fontSize: 18,
      color: 'white',
    },
    divider:{
      my:1,
      height:1,
      backgroundColor:colors.orangeAccent[400],
      width:'20%',
    }
  };

  return (
    <Grid item size={3}>
      <Box sx={styles.plan}>
        <Box>
          <Typography sx={styles.favoriteText}>El Favorito</Typography>
        </Box>
        <Divider sx={styles.divider}/>
        <Box>
          <Typography sx={styles.title}>{title}</Typography>
          <Box sx={styles.priceContainer}>
            <Typography sx={styles.pricePrefix}>RD$</Typography>
            <Typography sx={styles.price}>{price}</Typography>
          </Box>

          <Box sx={styles.sbContainer}>
            <Typography sx={styles.subida}>{subida}Mbps</Typography> |{" "}
            <Typography sx={styles.bajada}>{bajada}Mbps</Typography>
          </Box>
          <Box sx={styles.btnContainer}>
            <Box
              component={"button"}
              sx={styles.button}
              onClick={() => alert("Comprar")}
            >
              <Typography sx={styles.btnText}>Solicitar</Typography>
              <CaretRight size={20} color={colors.orangeAccent[400]} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

PlanInternetPromo.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  subida: PropTypes.string.isRequired,
  bajada: PropTypes.string.isRequired,
};
