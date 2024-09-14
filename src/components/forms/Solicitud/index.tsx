import React, { useState, useEffect, FC } from "react";
import { useSelectedPlan } from "../../../contexts/global/useSelectedPlan";
import { User, PlanInternet } from "../../../types";
import Grid from "@mui/material/Grid2";
import {
  FormControl,
  TextField,
  FormControlLabel,
  Button,
  Box, Step, StepLabel, Stepper,
  Container
} from "@mui/material";

//Form Steps
import {CustomerInfo} from './Steps/UserInfo'
import {Location} from './Steps/Location'
import {Summary} from './Steps/Summary'

//Global State
import {useSolicitudState} from '../../../contexts/global/useSolicitudState'
//Hook
import {newSolicitud } from '@/hooks/Solicitud/newSolicitud'
import {newUser} from '@/hooks/users/newUser'
import { newUsuario } from "@/api/users/newUsuario";
const steps = ['Datos del cliente', 'Ubicación', 'Resumen']

export const Solicitud = () => {
  const { selectedPlan } = useSelectedPlan();
  const { user, setUser } = useSolicitudState();

    const styles = {
        btnContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            mt: 2
        }
    }
    
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
    const handleReset = () => {
        setActiveStep(0);
    }
    const handleFinish = async () => {
        const data = {
            token: import.meta.env.VITE_API_TOKEN,
            nombre: user.nombre,
            cedula: user.cedula,
            correo: user.correo,
            direccion_principal: user.direccion_principal,
            telefono: user.telefono,
            movil: user.telefono,
            notas: "Hola estoy interesando en el servicio ..", // Example note
            fecha_instalacion: new Date().toISOString(),
          };
          
        await newUsuario(data);
        handleReset();
    }

    const getStepContent = (stepIndex: number) => {
        switch (stepIndex) {
            case 0:
                return <CustomerInfo />;
            case 1:
                return <Location />;
            case 2:
                return <Summary />;
            default:
                return 'Unknown stepIndex';
        }
    }


  return (
    <Grid sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }} container>
    <Container>
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
            <Step key={label}>
                <StepLabel>{label}</StepLabel>
            </Step>
            ))}
        </Stepper>

        <Box sx={{ mt: 3 }}>
            {getStepContent(activeStep)}
        </Box>

    </Container>
    <Box sx={{ display: 'flex', flexDirection:'row', justifyContent: 'center' }}>
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
            {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
            </Button>
        </Box>
            </Grid>
  );
};
