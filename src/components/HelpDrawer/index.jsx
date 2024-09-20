import React, {useEffect} from 'react'
import { Drawer, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import {useThemeState} from '../../contexts/global/useThemeState'
import { ContactForm } from '../forms/ContactForm'
import { CaretRight, WhatsappLogo } from '@phosphor-icons/react'

export const HelpDrawer = () => {
  const {needHelp, setNeedHelp} = useThemeState()

  useEffect(() => {
    (function(d, t) {
      var BASE_URL = "https://cw.preuba03.site";
      var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g, s);
      g.onload = function() {
        window.chatwootSDK.run({
          websiteToken: 'by3MeRk42ESw9bS3pM5EutPg',
          baseUrl: BASE_URL
        });
      };
    })(document, "script");
  }, []);
  return (

    <Drawer
      anchor="right"
      open={needHelp}
      onClose={() => setNeedHelp(false)}
      sx={{
        '& .MuiDrawer-paper': {
          width: 400,
        },
      }}
    >
      <Typography sx={
        {
          p: 2,
          fontSize: 24,
          fontWeight: 700,
          textAlign: 'center',
          borderBottom: '1px solid #e0e0e0',
        }
      }>
        Hola, ¿en qué podemos ayudarte?
      </Typography>
      <ContactForm />
      <Box>
        <Typography sx={
          {
            p: 2,
            fontSize: 16,
            fontWeight: 700,
            textAlign: 'center',
            borderBottom: '1px solid #e0e0e0',
            backgroundColor: '#f0f0f0',
            mt:2
          }
        }>
          O si prefieres, llámanos al (809) 339-0164
        </Typography>
      </Box>
      <Link to="https://wa.me/8093390164" target='_blank' rel="noopener noreferrer">

      <Box sx={styles.wsBox}>
        <Box>
          <WhatsappLogo size={32} />
        </Box>
        <Box>
        <Typography sx={{fontSize: 16, fontWeight: 700}}>Escríbenos por WhatsApp</Typography>
        <Typography sx={{fontSize: 14, fontWeight: 400}}>Click para abrir WhatsApp</Typography>
        </Box>
        <Box>
          <CaretRight size={32} />
        </Box>
        
      </Box>
      </Link>

    </Drawer>
  )
}

const styles = {
  wsBox: {
    mx: 2,
    mt:3,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    p: 2,
    border: '1px solid #0fa609',
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: '#0fa609',
      color: 'white',
    }
  }
}