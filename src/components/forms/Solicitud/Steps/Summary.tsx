import React from 'react'
import {Box, Typography, Button} from '@mui/material'
import Grid from '@mui/material/Grid2'

// Import Global State
import { useSolicitudState } from '../../../../contexts/global/useSolicitudState'
import { useSelectedPlan } from '../../../../contexts/global/useSelectedPlan'
import { FC } from 'react'


export const Summary: FC = () => {
    const { user } = useSolicitudState();
    const { selectedPlan } = useSelectedPlan();

  return (
    <Grid container spacing={2}>
        <Grid size={{xs: 12}}>
            <Typography variant='h4'>Resumen de la solicitud</Typography>
        </Grid>
        <Grid size={{xs: 12}}>
            <Typography variant='h6'>Cliente</Typography>
            <Typography variant='body1'>{user.nombre}</Typography>
            <Typography variant='body1'>{user.correo}</Typography>
            <Typography variant='body1'>{user.telefono}</Typography>
        </Grid>
    </Grid>
  )
}