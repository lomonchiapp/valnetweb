import { Grid2, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../../../theme';
import {useTheme} from '@mui/material/styles';

export const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const styles = {
    nav: {
      top: 0,
      width: '100%',
      backgroundColor: 'white',
      zIndex: 1000,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    topBar: {
      justifyContent: 'center',
      gap: '1rem',
      px:10,
      mb:1,
      a: {
        textDecoration: 'none',
        borderBottom: '2px solid transparent',
        mr: 3,
        pb:1,
        color: 'black',
        fontSize: '14px',
        fontWeight: 600,
        '&:hover': {
          borderBottom: `2px solid ${colors.orangeAccent[500]}`,
        },
      },
    },
  };

  return (
    <nav style={styles.nav}>
      <Grid2 container>
        <Grid2 item xs={12}>
          <Box sx={styles.topBar} mt={2}>
            <Link to="/">Personas</Link>
            <Link to="/about">Negocios</Link>
            <Link to="/contact">Socio Valnet</Link>
          </Box>
        </Grid2>
      </Grid2>
    </nav>
    
  );
};