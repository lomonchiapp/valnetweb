import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import { User } from "@phosphor-icons/react";

export const MiValnet = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const styles = {
    miValnet: {
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
      gap:2,
      padding: "0.5rem 1rem",
      borderRadius: "5px",
      backgroundColor: colors.orangeAccent[500],

      color: theme.palette.text.primary,
      border: "none",
      cursor: "pointer",
      fontWeight: 600,
      fontFamily: "Montserrat, sans-serif",
      "&:hover": {
        backgroundColor: colors.orangeAccent[500],
      },
    },
  };
  return (
    <Box component="button" sx={styles.miValnet}>
       Mi Valnet
    </Box>
  );
};
