import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';   

export const EmailSubscribe: React.FC = () => {
    const [email, setEmail] = useState('');
  
    const handleSubscribe = () => {
      // Handle the subscription logic here
      console.log(`Subscribed with email: ${email}`);
    };
  
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <TextField
          label="Escribe tu correo electronico..." 
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: '1rem', width: '100%' }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubscribe}
          sx={{ width: '100%', backgroundColor: '#F37021', color: 'white' }}
        >
          ¡Anótame y Avísame!
        </Button>
      </Box>
    );
  };