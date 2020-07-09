import React from 'react';
import { useTheme, createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

// import logo from './img/logo.svg';
// import './css/app.css';

import GardenFlowerBreedingPage from './pages/gardenFlowerBreedingPage';
import GardenFooter from './components/gardenFooter';

import GardenCookies from './backend/gardenCookies';

const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: 0,
  }
});

const darkModeEnabled = () => {
  const darkModeCookie = GardenCookies.getCookie('garden_dark_mode');
  if (!darkModeCookie || darkModeCookie === 'false') {
    return false;
  }

  return true;
}

const setDarkModeEnabled = (flag) => {
  GardenCookies.setCookie('garden_dark_mode', flag === true ? 'true' : 'false');
}

export default function App() {
  const classes = useStyles();

  const [darkMode, setDarkMode] = React.useState(darkModeEnabled());
  const theme = createMuiTheme({
    palette: {
      type: darkMode === true ? 'dark' : 'light',
      primary: {
        main: darkMode === true ? '#272922' : '#fff',
      },
      secondary: {
        main: darkMode === true ? 'rgba(0,0,0,0.3)' : '#eaedef',
        contrastText: darkMode === true ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'
      }
    },
    typography: {
      fontFamily: ['Cabin'].join(','),
    },
  });

  const handleDarkModeToggle = () => {
    setDarkModeEnabled(!darkMode);
    setDarkMode(!darkMode);
  }

  return (
    <div className={ classes.root }>
      <ThemeProvider theme={theme}>
        <GardenFlowerBreedingPage
          onDarkModeToggle={handleDarkModeToggle}
        />
        <GardenFooter />
      </ThemeProvider>
    </div>
  );
}
