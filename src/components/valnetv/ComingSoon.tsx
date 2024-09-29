import React, { FC } from "react";
import { Box, Typography, Dialog, DialogContent, Divider, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useThemeState } from "@/contexts/global/useThemeState";
import { EmailSubscribe } from "../EmailSubscribe";
import { X } from "@phosphor-icons/react";

export const ComingSoon: FC = () => {
  const { valneTV, setValneTV } = useThemeState();
  return (
    <Dialog
      open={valneTV}
      onClose={() => setValneTV(false)}
      maxWidth="md"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          position: "relative",
          width: 800, // Adjust the width to cover most of the screen
          height: 400, // Adjust the height to cover most of the screen
          borderRadius: 10,
          boxShadow: 24,
          display: "flex",
          overflow: "hidden",
          backgroundColor: "#1A1A1A",
        },
      }}
    >
      <DialogContent sx={{ padding: 0 }}>
        <Grid
          container
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            flexDirection: "row",
            color: "white",
          }}
        >
          <IconButton
            onClick={() => setValneTV(false)}
            sx={{ position: "absolute", top: 10, right: 10, color: "white", cursor: "pointer", zIndex: 999 }}
          >
            <X />
          </IconButton>
          <Grid
            size={{ xs: 12, sm: 5 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              pl: 10,
            }}
          >
            <Box>
              <Typography sx={styles.title}>
                Valne<span style={styles.tv}>TV</span>
              </Typography>
            </Box>

            <Typography sx={styles.subtitle} color="white">
              Pronto habrá algo especial{" "}
              <span style={styles.accent}>para tí</span> ...
            </Typography>
            <EmailSubscribe />
          </Grid>

          <Grid sx={{ postion: "relative" }} size={{ xs: 12, sm: 7 }}>
            <img
              src="/valnetv/cel.png"
              alt="Valnetv"
              style={{
                width: 600,
                position: "absolute",
                top: -100,
                right: -80,
                zIndex: 2,
              }}
            />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

const styles = {
  title: {
    textAlign: "center",
    textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    fontSize: "3.5rem",
    fontWeight: 700,
    color: "white",
  },
  tv: {
    bacgroundColor: "white",
    color: "#F37021",
  },
  subtitle: {
    pb: "1rem",
    textAlign: "center",
    px: "1rem",
    fontSize: "1.5rem",
    color: "white",
  },
  accent: {
    color: "#F37021",
    backgroundColor: "white",
    borderRadius: 5,
    padding: "0.2rem 0.5rem",
  },
};
