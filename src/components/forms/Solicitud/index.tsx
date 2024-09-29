import React, { useState, useEffect, FC } from "react";
import { useSelectedPlan } from "../../../contexts/global/useSelectedPlan";
import { User, PlanInternet } from "../../../types";
import Grid from "@mui/material/Grid2";
import {
  FormControl,
  TextField,
  FormControlLabel,
  Button,
  Box,
  Step,
  StepLabel,
  Stepper,
  Container,
} from "@mui/material";

//Form Steps
import { CustomerInfo } from "./Steps/UserInfo";
import { Location } from "./Steps/Location";
import { Summary } from "./Steps/Summary";

//Global State
import { useSolicitudState } from "../../../contexts/global/useSolicitudState";
//Hook
import { newSolicitud } from "@/hooks/Solicitud/newSolicitud";
import { newUser } from "@/hooks/users/newUser";
import { newUsuario } from "@/api/users/newUsuario";
import { ConfirmCedula } from "./Steps/ConfirmCedula";
import { CodigoAcceso } from "./Steps/CodigoAcceso";
import { useNewUserState } from "@/contexts/global/useNewUserState";
const steps = [
  "Confirme su identidad",
  "Información Personal",
  "Código de Acceso",
  "Ubicación",
  "Resumen",
];

export const Solicitud = () => {
  const { 
    cedula, correo, nombre, telefono, movil, password, direccion_principal, position, 
   } = useNewUserState();

  const [activeStep, setActiveStep] = useState(0);
  const [cedulaIsValid, setCedulaIsValid] = useState<boolean | null>(false);
  const [confirmedPassword, setConfirmedPassword] = useState<string | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleNext = () => {
    const digitCount = cedula.replace(/[^0-9]/g, "").length;

    if (activeStep === 0 && digitCount === 11 && cedulaIsValid) {
      setErrorMessage(null);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (
      activeStep === 1 &&
      nombre &&
      (telefono || movil)
    ) {
      setErrorMessage(null);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (
      activeStep === 2 &&
      password &&
      password === confirmedPassword
    ) {
      setErrorMessage(null);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (
      activeStep === 2 &&
      (!password || password !== confirmedPassword)
    ) {
      setErrorMessage(
        "Favor asegúrese de que el código de acceso esté lleno y coincida."
      );
    } else if (
      activeStep === 3 &&
      position &&
      direccion_principal
    ) {
      setErrorMessage(null);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (
      activeStep === 3 &&
      (!position || !direccion_principal)
    ) {
      setErrorMessage(
        "Recuerda que necesitamos una ubicación para poder continuar."
      );
    } else if (
      activeStep !== 0 &&
      activeStep !== 1 &&
      activeStep !== 2 &&
      activeStep !== 3
    ) {
      setErrorMessage(null);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      setErrorMessage("Favor llene los campos requeridos para poder avanzar.");
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  const handleFinish = async () => {
    const data = {
      token: import.meta.env.VITE_API_TOKEN,
      nombre: nombre,
      cedula: cedula,
      correo: correo,
      direccion_principal: direccion_principal,
      telefono: telefono,
      movil: movil,
      notas: "Hola estoy interesando en el servicio ..", // Example note
      fecha_instalacion: new Date().toISOString(),
    };

    await newUsuario(data);
    handleReset();
  };

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return (
          <ConfirmCedula
            isValid={cedulaIsValid}
            setIsValid={setCedulaIsValid}
          />
        );
      case 1:
        return <CustomerInfo />;
      case 2:
        return (
          <CodigoAcceso
            setConfirmedPassword={setConfirmedPassword}
            confirmedPassword={confirmedPassword}
          />
        );
      case 3:
        return <Location />;
      case 4:
        return <Summary />;
      default:
        return "Unknown stepIndex";
    }
  };

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      container
    >
      <Container>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {errorMessage && (
        <Box mt={2} mb={2} p={2} bgcolor="error.main" color="white">
          {errorMessage}
        </Box>
      )}

        <Box sx={{ mt: 3 }}>{getStepContent(activeStep)}</Box>
      </Container>
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mt: 3, ml: 1 }}
        >
          Atrás
        </Button>
        <Button
          variant="contained"
          onClick={activeStep === steps.length - 1 ? handleFinish : handleNext}
          sx={{ mt: 3, ml: 1 }}
        >
          {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
        </Button>
      </Box>
    </Grid>
  );
};
