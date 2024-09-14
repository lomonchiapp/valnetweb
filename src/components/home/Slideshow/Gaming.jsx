import React from 'react'
import { Box, Button, Divider, Grid2, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { style, text, title } from 'framer-motion/client';
import { useTheme } from '@mui/material';
import { tokens } from '../../../theme'
import { color } from 'framer-motion';

export const Gaming = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const styles = {
      slide: {
        backgroundImage: "url('/slideshow/gaming/bg.jpg')",
        zIndex: 10,
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
        height:650,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',

      },
      header: {
        zIndex: 30,
        display: 'flex',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 40,
      },
      footer:{
        zIndex: 100,
        display: 'flex',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom:100,
      },
      title: {
        fontVariant: 'small-caps',
        color: colors.white,
        fontSize: 26,
        fontWeight: 700,
        zIndex: 30,
        textShadow: '0 0 10px rgba(0,0,0,0.5)',
      },
        gamingContainer: {
            position: 'absolute',
            top:130,
            left: 50,
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
        },
        opticaContainer: {
            position: 'absolute',
            top: 140,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
      gaming: {
        width: 650,
        zIndex: 11,
      },
      gameOver: {
        width: 750,
        zIndex: 40,
      },
      lvlUp:{
        width: 750,
        zIndex: 40,
      },
      subtitle: {
        color: colors.white,
        fontSize: 30,
        fontWeight: 700,
        fontVariant: 'small-caps',
        zIndex: 30,
        textShadow: '0 0 10px rgba(0,0,0,0.5)',
        bottom: 90,
        background: 'rgba(0,0,0,0.5)',
        px:3, py:1,
      },
      btnContainer: {
        position: 'absolute',
        display: 'flex',
        left:'17%',
        justifyContent: 'start',
        bottom: 150,
        zIndex: 30,
      },
      btnPrimary: {
        border: '2px solid white',
        padding: '0.5rem 2rem',
        color: 'white',
        borderRadius: 5,
        fontSize: 18,
        justifyContent: 'start',
        fontWeight: 700,
        cursor: 'pointer',
        textShadow: '0 0 10px rgba(0,0,0,0.5)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      },
      btnSecondary: {
        backgroundColor: colors.orangeAccent[500],
        padding: '0.5rem 2rem',
        color: 'white',
        borderRadius: 5,
        border: 'none',
        fontSize: 18,
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 700,
        cursor: 'pointer',
        textShadow: '0 0 10px rgba(0,0,0,0.5)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      },
    };

    const floatingAnimation = {
      y: [1, -2, 1],
      x: [2, -3, 2],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: 'loop',
      },
    };

    const floatingAnimation2 = {
      y: [0.5, -1, 0.5],
      x: [1, -2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop',
      },
    };
  
    return (
      <Grid2 container sx={styles.slide}>

        <Grid2 item size={12} sx={styles.gamingContainer}>
        <motion.img
          style={styles.gaming}
          src="slideshow/gaming/gaming.png"
          alt="Fibra"
          animate={floatingAnimation2}
        />
          </Grid2>

        <Box sx={styles.btnContainer}>
        <Button sx={styles.btnSecondary}>Ver Planes Gaming</Button>
          </Box>
      </Grid2>
    );
  };
