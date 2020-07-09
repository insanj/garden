import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// import logo from './img/logo.svg';
// import './css/app.css';

import GardenFlowerBreedingPage from './pages/gardenFlowerBreedingPage';
import GardenFooter from './components/gardenFooter';

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
      <GardenFlowerBreedingPage />
      <GardenFooter />
    </div>
  );
}
