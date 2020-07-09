import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import book from '../img/Book.png';
import whiteLily from '../img/LW.png';
import redLily from '../img/LR.png';
import pinkLily from '../img/LP.png';
import yellowLily from '../img/LY.png';
import orangeLily from '../img/LO.png';
import blackLily from '../img/LK.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    textAlign: 'center',
    width: '100%',
    fontWeight: 600,
    lineHeight: 1.1,
  },
  headingAuthor: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 500,
  },
  accordionTypography: {
    width: '100%'
  },
  flowerIcon: {
    width: 18,
    height: 18,
  },
  body: {
    fontSize: theme.typography.pxToRem(19),
  }
}));

export default function GardenFlowerBreedingPage() {
  const classes = useStyles();

  const [rootExpanded, setRootExpanded] = React.useState(true);
  const [tulipsExpanded, setTulipsExpanded] = React.useState(true);
  const [liliesExpanded, setLiliesExpanded] = React.useState(true);


  const tulipSection = (
    <Accordion
      expanded={tulipsExpanded}
      onChange={() => setTulipsExpanded(!tulipsExpanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography className={classes.heading}>Tulips</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          
          Hello

        </Typography>
      </AccordionDetails>
    </Accordion>
  );

  const lilySection = (
    <Accordion
      expanded={liliesExpanded}
      onChange={() => setLiliesExpanded(!liliesExpanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography className={classes.heading}>Lilies</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={classes.body}>
          
          <div>
            <img src={ whiteLily } className={classes.flowerIcon} /> 
            White + 
            <img src={ redLily } className={classes.flowerIcon} /> 
            Red 
            = 
            <img src={ pinkLily } className={classes.flowerIcon} /> 
            Pink (50%)
          </div>
          
          <div>
            <img src={ yellowLily } className={classes.flowerIcon} /> 
            Yellow + 
            <img src={ redLily } className={classes.flowerIcon} /> 
            Red 
            = 
            <img src={ orangeLily } className={classes.flowerIcon} /> 
            Orange (50%)
          </div>

          <div>
            <img src={ redLily } className={classes.flowerIcon} /> 
            White + 
            <img src={ redLily } className={classes.flowerIcon} /> 
            Red 
            = 
            <img src={ blackLily } className={classes.flowerIcon} /> 
            Black (25%)

            or 

            <img src={ pinkLily } className={classes.flowerIcon} /> 
            Pink (25%)
          </div>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );

  const flowerBreedingAccordionSections = [lilySection, tulipSection];

  const flowerBreedingAccordion = (
    <div>
      { flowerBreedingAccordionSections }
    </div>
  );

  const rootAccordion = (
    <Accordion
      style={{background: 'rgba(255,255,255,0.8)'}}
      expanded={rootExpanded}
      onChange={() => setRootExpanded(!rootExpanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>
          <img src={ book } width='50' height='50' />
          <br/>
          Animal Crossin' New Horizons
          <br/>
          Flower Breeding Guide
          <br/>
          <span className={classes.headingAuthor}>
            from harsh &amp; julian
          </span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={classes.accordionTypography}>
          
          { flowerBreedingAccordion }

        </Typography>
      </AccordionDetails>
    </Accordion>
  );

  return (
    <div className={classes.root}>
      { rootAccordion }
    </div>
  );
}