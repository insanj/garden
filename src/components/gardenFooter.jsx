import React from 'react';
import preval from 'preval.macro';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
  footer: {
    width: '94%',
    textAlign: 'center',
    padding: 10,
    color: "rgba(255,255,255,0.1)",
    fontSize: '0.8em',
    fontFamily: 'monospace'
  },
});

export default function GardenFooter() {
  const classes = useStyles();
  let compileDateString = preval`module.exports = new Date().toLocaleString("en").toLowerCase();`;
  let gitTagVersionString = process.env.REACT_APP_GARDEN_TAG;

  return (
    <footer className={classes.footer}>
      v{ gitTagVersionString } ({ compileDateString })
      <br/>
      &copy; 2020 <a href="http://github.com/insanj" style={{color: 'inherit'}}>julian (insanj) weiss</a>
    </footer>
  );
}

