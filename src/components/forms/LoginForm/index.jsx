import React, {useState} from 'react'
import { Box, Button, Divider, Grid2, Typography, TextField } from '@mui/material'
import {FIREBASE_AUTH} from '../../../firebase'
import {Link} from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'

const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/invalid-email':
        return 'Oops, al parecer el email no es válido.';
      case 'auth/user-disabled':
        return 'El usuario ha sido deshabilitado.';
      case 'auth/user-not-found':
        return 'No se encontró el usuario.';
      case 'auth/wrong-password':
        return 'La contraseña es incorrecta.';
      default:
        return 'Ocurrió un error al intentar acceder, contacte soporte.';
    }
  };

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = async (event) => {
      event.preventDefault();
      setError('');
  
      if (!email || !password) {
        setError('Please fill in all fields.');
        return;
      }
  
      try {
        await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
        // Redirect or perform other actions on successful login
      } catch (error) {
        setError(getErrorMessage(error.code));
      }
    };
    
    const styles = {
        header: {
            fontSize: 24,
            fontWeight: 700,

            textAlign: 'center',
        },
        };
    return (
      <Box>
        <Typography sx={styles.header}>
          Accede a tu cuenta
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            ACCEDER
          </Button>
          <Divider sx={{ my: 2 }}>O</Divider>
          <Typography align="center">
            No tienes cuenta? <Link to="/signup">Regístrate</Link>
            </Typography>

        </form>
      </Box>
    );
  };