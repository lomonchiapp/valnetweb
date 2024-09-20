import React from 'react';
import { Box, Typography, Link, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FacebookLogo, InstagramLogo, LinkedinLogo, MapPin, WhatsappLogo, XLogo } from '@phosphor-icons/react';
import { planesInternet } from '../../../data/planesInternet';

export const Footer = () => {
    const half = Math.ceil(planesInternet.length / 2);
  const firstHalf = planesInternet.slice(0, half);
  const secondHalf = planesInternet.slice(half);
  return (
    <Box sx={styles.footer}>
      <Grid container spacing={4}>
        <Grid size={{
            xs:12,
            sm:2
        }}>
          <Box sx={styles.logoContainer}>
            <img style={styles.logo} src="/logo-white.png" alt="logo" />
            <Box sx={styles.ws}>
            <WhatsappLogo/>
            <Typography fontWeight={"bold"}>
            (809) 339-0164
            </Typography>
            
            </Box>
            

            <Typography sx={{ml:1}}>
                SRL: 1-31-12345-6
            </Typography>
            <Button sx={{mt:1}} variant="contained" color="primary">
               <MapPin size={15}/> <Typography sx={{ml:1}}>Ver Oficinas</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid size={{
            xs:12,
            sm:2
        }}>
          <Typography variant="h6" sx={styles.title}>
            Planes de Internet
          </Typography>
          {firstHalf.map((plan, index) => (
          <Link key={index} href="#" color="inherit" sx={styles.link}>
            {plan.name}
          </Link>
        ))}
        </Grid>
        <Grid size={{
            xs:12,
            sm:2
        }} sx={{mt:5}}>
          
          {secondHalf.map((plan, index) => (
          <Link key={index} href="#" color="inherit" sx={styles.link}>
            {plan.name}
          </Link>
        ))}
        </Grid>
        <Grid size={{
            xs:12,
            sm:2
        }}>
          <Typography variant="h6" sx={styles.title}>
            Valnet
          </Typography>
          <Link href="#" color="inherit" sx={styles.link}>
            Nosotros
          </Link>
          <Link href="#" color="inherit" sx={styles.link}>
            Empleos
          </Link>
          <Link href="#" color="inherit" sx={styles.link}>
            Habla con nosotros
          </Link>
        </Grid>
        
        
        <Grid size={{
            xs:12,
            sm:2
        }}>
          <Typography variant="h6" sx={styles.title}>
            Síguenos
          </Typography>
          <Box sx={styles.socialIcons}>
            <Link href="#" color="inherit" sx={styles.icon}>
              <FacebookLogo />
            </Link>
            <Link href="#" color="inherit" sx={styles.icon}>
              <XLogo />
            </Link>
            <Link href="#" color="inherit" sx={styles.icon}>
              <InstagramLogo />
            </Link>
            <Link href="#" color="inherit" sx={styles.icon}>
              <LinkedinLogo />
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Box sx={styles.copyright}>
        <Typography sx={styles.cpText}>
          &copy; {new Date().getFullYear()} Valnet Dominicana. Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
};

const styles = {
    footer: {
      backgroundColor: '#333',
      color: 'white',
      padding: '40px 20px',
      marginTop: 'auto',
    },
    logoContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#454545',
        borderRadius: 5,
        p: 2,
    },
    title: {
        fontWeight: 700,
      marginBottom: '20px',
    },
    link: {
      display: 'block',
      marginBottom: '10px',
      textDecoration: 'none',
      color: 'inherit',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    logo:{
        width: '150px',
    },
    socialIcons: {
      display: 'flex',
      gap: '10px',
    },
    icon: {
      color: 'inherit',
      '&:hover': {
        color: '#f66437',
      },
    },
    copyright: {
      marginTop: '20px',
      textAlign: 'center',
    },
    cpText:{
        fontSize: 12,
        color: '#999',
    },
    ws:{
        display:'flex',
        flexDirection:'row',
        gap:1,
        alignItems: 'center',
        mt:1,
        ml:1,
    }
  };