import React from 'react';
import { useTheme, createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

// import logo from './img/logo.svg';
// import './css/app.css';

import GardenFlowerBreedingPage from './pages/gardenFlowerBreedingPage';
import GardenFooter from './components/gardenFooter';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    fontFamily: ['Cabin'].join(','),
  },
});

const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: 10,
  }
});

export default function App() {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <ThemeProvider theme={theme}>
        <GardenFlowerBreedingPage />
        <GardenFooter />
      </ThemeProvider>
    </div>
  );
}
