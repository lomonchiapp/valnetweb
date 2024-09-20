import AppRouter from './scenes/Router';
import './App.css';
import {tokens} from './theme';
import { useTheme } from "@mui/material";
import { Box } from '@mui/material';
import { Headset } from '@phosphor-icons/react';
import { useThemeState } from './contexts/global/useThemeState';
import { HelpDrawer } from './components/HelpDrawer';

function App() {
  const {setNeedHelp} = useThemeState();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const styles  = {
    supportButton: {
      position: 'fixed',
      display:'flex',
      alignItems: 'center',
      right: -88,
      zIndex: 1000,
      top: '50%',
      transform: 'translateY(-50%) rotate(-90deg)',
      backgroundColor: colors.orangeAccent[500],
      color: 'white',
      borderRadius: '15px 15px 0 0',
      padding: '10px 20px',
      fontSize: 18,
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      border: '2px solid white',
      "&:hover": {
        backgroundColor: colors.blueAccent[600],
        transition: "all 0.2s ease-in-out",
      },
    }
  }
  return (
    <>
    <AppRouter />
    <Box onClick={()=> setNeedHelp(true)} component={"button"} sx={styles.supportButton}>
      <Headset style={{marginRight: 5}} />
      Necesito Ayuda
      </Box>
      <HelpDrawer />
    </>
  );
}

export default App;
