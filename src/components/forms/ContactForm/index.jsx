import React, {useState, useEffect} from 'react'
import {Box, Button, Divider, Grid2, Typography, TextField} from '@mui/material'


export const ContactForm = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

  return (
    <Box
        sx={{
            width: '100%',
            px:5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 5
        }}
    >
        <TextField
            sx={{width: '100%', mb: 2}}
            label="Nombre"
            variant="outlined"
            value={data.name}
            onChange={(e) => setData({...data, name: e.target.value})}
        />
        <TextField
            sx={{width: '100%', mb: 2}}
            label="Email"
            variant="outlined"
            value={data.email}
            onChange={(e) => setData({...data, email: e.target.value})}
        />
        <TextField
            sx={{width: '100%', mb: 2}}
            label="Mensaje"
            multiline
            rows={4}
            variant="outlined"
            value={data.message}
            onChange={(e) => setData({...data, message: e.target.value})}
        />
        <Button
            variant="contained"
            color="primary"
            onClick={() => {
                if (data.name && data.email && data.message) {
                    setError(false)
                    setSuccess(true)
                } else {
                    setError(true)
                    setSuccess(false)
                }
            }}
        >
            Enviar
        </Button>
        {error && (
            <Typography
                sx={{color: 'red', mt: 2}}
            >
                Todos los campos son requeridos
            </Typography>
        )}
        {success && (
            <Typography
                sx={{color: 'green', mt: 2}}
            >
                Mensaje enviado correctamente
            </Typography>
        )}
    </Box>

  )
}
