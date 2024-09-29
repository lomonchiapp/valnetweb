import { Box, Typography, Button } from "@mui/material";
import { ArrowDown, ArrowUp, CaretRight } from "@phosphor-icons/react";
import { tokens } from "../../../src/theme";
import { useTheme } from "@mui/material";
import React, { useState } from "react";
import { PlanInternet } from "@/types";
import { PlanSwiper } from "../PlanSwiper";
import { useSelectedPlan } from "@/contexts/global/useSelectedPlan";
import {AppDialog} from '@/components/AppDialog'
import {Solicitud} from '@/components/forms/Solicitud'
import { useSolicitudState } from "@/contexts/global/useSolicitudState";

interface PlanItemProps {
  plan: PlanInternet;
}

export const PlanItem: React.FC<PlanItemProps> = ({ plan }) => {
  const theme = useTheme();
  const { setSelectedPlan, selectedPlan, newSolicitud, setNewSolicitud } = useSolicitudState();

  const colors = tokens(theme.palette.mode);
  const styles = {
    itemContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 4,
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      backgroundColor: "#fff",
      p: 2,
      m: 2,
      transition: "all 0.3s",
      "&:hover": {
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        transform: "scale(1.02)",
      },
    },
    planName: {
      fontSize: 20,
      fontWeight: 400,
      color: "#333",
    },
    currency: {
      fontSize: 23,
      fontWeight: 600,
      color: "#333",
      mr: 1,
      mb: 2,
    },
    price: {
      fontSize: 28,
      fontWeight: 400,
      color: "#333",
      mb: 2,
    },
    uploadBox: {
      display: "flex",
      borderRadius: 2,
      alignItems: "center",
      flexDirection: "row",
      border: `2px solid ${plan.uploadColor}`,
      justifyContent: "center",
      pr: 1,
      pb: 1,
    },
    downloadBox: {
      display: "flex",
      borderRadius: 2,
      alignItems: "center",
      flexDirection: "row",
      border: `2px solid ${plan.downloadColor}`,
      justifyContent: "center",
      pr: 0.5,
      pb: 1,
    },
    mbps: {
      fontSize: 30,
      fontWeight: 600,
      color: "#333",
    },
    mbpsLabel: {
      fontSize: 10,
      marginTop: -1,
      fontWeight: 600,
      color: "#333",
      backgroundColor: "#EDEDED",
      borderRadius: 1,
      px: 0.5,
    },
    speedContainer: {
      display: "flex",
      flexDirection: "row",
      gap: 2,
    },
    description: {
      fontSize: 12,
      fontWeight: 400,
      color: "lightgrey",
      mb: 1,
    },
  };

  const handleSolicitud = (plan: PlanInternet) => {
    setNewSolicitud(true);
    setSelectedPlan(plan);
  };

  return (
    <Box sx={styles.itemContainer}>
      <Typography sx={styles.planName}>{plan.name}</Typography>
      <Typography sx={styles.description}>{plan.description}</Typography>

      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Typography sx={styles.currency}>RD$</Typography>
        <Typography sx={styles.price}>{plan.price}</Typography>
      </Box>
      <Box sx={styles.speedContainer}>
        <Box sx={styles.downloadBox}>
          <ArrowDown size={30} color={plan.downloadColor} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={styles.mbps}>{plan.download}</Typography>
            <Typography sx={styles.mbpsLabel}>Mbps</Typography>
          </Box>
        </Box>

        <Box sx={styles.uploadBox}>
          <ArrowUp size={30} color={plan.uploadColor} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={styles.mbps}>{plan.upload}</Typography>
            <Typography sx={styles.mbpsLabel}>Mbps</Typography>
          </Box>
        </Box>
      </Box>
      <Button
        variant="outlined"
        onClick={() => handleSolicitud(plan)}
        sx={{
          color: colors.blueAccent[400],
          borderRadius: 2,
          fontSize: 14,
          fontWeight: 600,
          mt: 2,
        }}
      >
        Contratar
      </Button>
      {newSolicitud && (
        <AppDialog
          title={`Nueva Solicitud - Plan ${selectedPlan?.name}`}
          open={newSolicitud}
          onClose={() => setNewSolicitud(false)}
        >
          <Solicitud/>
        </AppDialog>
      )}
    </Box>
  );
};
