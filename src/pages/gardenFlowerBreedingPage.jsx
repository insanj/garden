import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AddIcon from '@material-ui/icons/Add';

import book from '../img/Book.png';

import whiteLily from '../img/LW.png';
import redLily from '../img/LR.png';
import pinkLily from '../img/LP.png';
import yellowLily from '../img/LY.png';
import orangeLily from '../img/LO.png';
import blackLily from '../img/LK.png';

import whiteTulip from '../img/TW.png';
import redTulip from '../img/TR.png';
import pinkTulip from '../img/TP.png';
import yellowTulip from '../img/TY.png';
import orangeTulip from '../img/TO.png';
import blackTulip from '../img/TK.png';
import purpleTulip from '../img/TU.png';

import equalsSign from '../img/noun_Equal_1887594.svg';

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
    color: '#fff'
  },
  headingAuthor: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 500,
  },
  accordionTypography: {
    width: '100%'
  },
  flowerEquation: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '140px',
  },
  flowerIcon: {
    width: 22,
    height: 22,
    marginTop: 2,
    marginRight: 5,
  },
  flowerPercent: {
    opacity: 0.6,
    marginLeft: 5,
    marginRight: 5,
  },
  flowerCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    display: 'inline-block'
  },
  flowerEquals: {
    width: 12,
    height: 12,
    marginBottom: 6,
  },
  accordion: {
    background: 'rgba(50,50,50,1)',
    color: "#fff"
  },
  body: {
    width: '100%',
    fontSize: theme.typography.pxToRem(19),
  }
}));

export default function GardenFlowerBreedingPage() {
  const classes = useStyles();

  const [rootExpanded, setRootExpanded] = React.useState(true);
  const [tulipsExpanded, setTulipsExpanded] = React.useState(true);
  const [liliesExpanded, setLiliesExpanded] = React.useState(true);

  const generateAccordionCell = (item) => {
    return (
      <div className={classes.flowerEquation}>
        <div className={classes.flowerCircle} style={{background: item.left.color}}/> 
        <span style={{margin: 5}}>
          <AddIcon/>
        </span>
        <div className={classes.flowerCircle} style={{background: item.right.color}}/> 
        <span style={{margin: 10}}>
          <img src={equalsSign} className={classes.flowerEquals} />
        </span>

        {
          item.result.map((r, i) => {
            return (
              <span>
                <div title={r.percent} className={classes.flowerCircle} style={{background: r.color}}/>
              </span>
            );
          })
        }

      </div>
    );
  }

  const tulipSectionItems = [
  {
    left: {
      image: whiteTulip,
      text: 'white',
      color: 'white',
    },
    right: {
      image: redTulip,
      text: 'red',
      color: 'red'
    },
    result: [{
      image: pinkTulip,
      text: 'pink',
      color: 'pink',
      percent: '50%'
    }]
  },
  // {
  //   imageOne: yellowTulip,
  //   textOne: 'Yellow',
  //   imageTwo: redTulip,
  //   textTwo: 'Red',
  //   result: [{
  //     image: orangeTulip,
  //     text: 'Orange',
  //     percent: '50%'
  //   }]
  // },
  // {
  //   imageOne: redTulip,
  //   textOne: 'Red',
  //   imageTwo: redTulip,
  //   textTwo: 'Red',
  //   result: [{
  //     image: blackTulip,
  //     text: 'Black',
  //     percent: '25%'
  //   }]
  // },
  // {
  //   imageOne: orangeTulip,
  //   textOne: 'Orange',
  //   imageTwo: orangeTulip,
  //   textTwo: 'Orange',
  //   result: [{
  //     image: orangeTulip,
  //     text: 'Orange',
  //     percent: '25%'
  //   },
  //   {
  //     image: orangeTulip,
  //     text: 'Orange (Nook Mile)',
  //     percent: '12.5%'
  //   },
  //   {
  //     image: blackTulip,
  //     text: 'Black',
  //     percent: '6.25%'
  //   },
  //   {
  //     image: blackTulip,
  //     text: 'Black (Nook Mile)',
  //     percent: '12.5%'
  //   },
  //   {
  //     image: purpleTulip,
  //     text: 'Purple',
  //     percent: '6.25%'
  //   }]
  // },
  //   {
  //   imageOne: orangeTulip,
  //   textOne: 'Orange',
  //   imageTwo: orangeTulip,
  //   textTwo: 'Orange',
  //   result: [{
  //     image: orangeTulip,
  //     text: 'Orange',
  //     percent: '25%'
  //   },
  //   {
  //     image: orangeTulip,
  //     text: 'Orange (Nook Mile)',
  //     percent: '25%'
  //   },
  //   {
  //     image: blackTulip,
  //     text: 'Black (Nook Mile)',
  //     percent: '12.5%'
  //   },
  //   {
  //     image: purpleTulip,
  //     text: 'Purple',
  //     percent: '12.5%'
  //   }]
  // },
  ];

  const tulipSection = (
    <Accordion
      className={classes.accordion}
      expanded={tulipsExpanded}
      onChange={() => setTulipsExpanded(!tulipsExpanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography className={classes.heading}>Tulips</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={classes.body}>
          
          { tulipSectionItems.map(i => generateAccordionCell(i)) }

        </Typography>
      </AccordionDetails>
    </Accordion>
  );

  const lilySection = (
    <Accordion
      className={classes.accordion}
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
          

          
        </Typography>
      </AccordionDetails>
    </Accordion>
  );

  const flowerBreedingAccordionSections = [tulipSection];

  const flowerBreedingAccordion = (
    <div>
      { flowerBreedingAccordionSections }
    </div>
  );

  const rootAccordion = (
    <Accordion
      style={{background: 'rgba(0,0,0,0.3)', borderRadius: 20, boxShadow: '0px 2px 2px rgba(0,0,0,0.2)'}}
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