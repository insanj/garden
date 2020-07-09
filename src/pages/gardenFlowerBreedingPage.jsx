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

import whiteHyacinth from '../img/HW.png';

import whiteCosmo from '../img/CW.png';

import whitePansy from '../img/PW.png';

import whiteWindflower from '../img/WW.png';

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
  flowerIcon: {
    width: 52,
    height: 52,
    marginTop: 2,
    marginRight: 5,
  },
  flowerPercent: {
    opacity: 0.6,
    marginLeft: 5,
    marginRight: 5,
  },
  flowerCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    display: 'inline-block',
    margin: 5
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
  },
  table: {
    marginLeft: 'auto',
    marginRight: 'auto',
    tableLayout: 'fixed',
    textAlign: 'center',
    itemAlign: 'center',

    borderCollapse: 'collapse',
    // border: '2px solid rgba(255,255,255,0.7)',
    // borderRadius: '14px',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
    padding: 0,

    lineHeight: 0,

    '& tr:not(:last-child)': {
      borderBottom: '2px solid rgba(255,255,255,0.5)',
    },
    '& td': {
      padding: 10,
    },

    // '& td:first-child': {
    //   borderRight: '2px solid rgba(255,255,255,0.5)'
    // },

    // '& td:last-child': {
    //   borderLeft: '2px solid rgba(255,255,255,0.5)'
    // },


    '& td:nth-child(2)': {
      borderLeft: '2px solid rgba(255,255,255,0.5)',
      borderRight: '2px solid rgba(255,255,255,0.5)',
    },
  }
}));

export default function GardenFlowerBreedingPage() {
  const classes = useStyles();

  const [rootExpanded, setRootExpanded] = React.useState(true);
  const [tulipsExpanded, setTulipsExpanded] = React.useState(false);
  const [liliesExpanded, setLiliesExpanded] = React.useState(false);
  const [hyacinthsExpanded, setHyacinthsExpanded] = React.useState(false);
  const [cosmosExpanded, setCosmosExpanded] = React.useState(false);
  const [pansysExpanded, setPansysExpanded] = React.useState(false);
  const [windflowersExpanded, setWindflowersExpanded] = React.useState(false);

  const generateAccordionCell = (item) => {
    return (
      <tr>
        <td>
          <img className={classes.flowerIcon} src={item.left.image} />
        </td>

        <td>
          <img className={classes.flowerIcon} src={item.right.image} />
        </td>

        <td>
        {
          item.result.map((r, i) => {
            return (
              <span>
                <div title={r.percent} className={classes.flowerCircle} style={{background: r.color}}/>
              </span>
            );
          })
        }
        </td>
      </tr>
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
  {
    left: {
      image: yellowTulip,
      text: 'yellow',
      color: 'yellow',
    },
    right: {
      image: redTulip,
      text: 'red',
      color: 'red',
    },
    result: [{
      image: orangeTulip,
      text: 'orange',
      color: 'orange',
      percent: '50%'
    }]
  },
  {
    left: {
      image: redTulip,
      text: 'red',
      color: 'red',
    },
    right: {
      image: redTulip,
      text: 'red',
      color: 'red',
    },
    result: [{
      image: blackTulip,
      text: 'black',
      color: 'black',
      percent: '25%'
    }]
  },
  {
    left: {
      image: orangeTulip,
      text: 'orange',
      color: 'orange',
    },
    right: {
      image: orangeTulip,
      text: 'orange',
      color: 'orange',
    },
    result: [{
      image: orangeTulip,
      text: 'orange',
      color: 'orange',
      percent: '25%'
    },
    {
      image: orangeTulip,
      text: 'Orange (Nook Mile)',
      color: 'orange',
      percent: '12.5%'
    },
    {
      image: blackTulip,
      text: 'Black',
      color: 'black',
      percent: '6.25%'
    },
    {
      image: blackTulip,
      text: 'Black (Nook Mile)',
      color: 'black',
      percent: '12.5%'
    },
    {
      image: purpleTulip,
      text: 'purple',
      color: 'purple',
      percent: '6.25%'
    }]
  },
  {
    left: {
      image: orangeTulip,
      text: 'orange',
      color: 'orange',
    },
    right: {
      image: orangeTulip,
      text: 'orange',
      color: 'orange'
    },
    result: [{
      image: orangeTulip,
      text: 'Orange',
      color: 'orange',
      percent: '25%'
    },
    {
      image: orangeTulip,
      text: 'Orange (Nook Mile)',
      color: 'orange',
      percent: '25%'
    },
    {
      image: blackTulip,
      text: 'Black (Nook Mile)',
      color: 'black',
      percent: '12.5%'
    },
    {
      image: purpleTulip,
      text: 'Purple',
      color: 'purple',
      percent: '12.5%'
    }]
  },
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
        <Typography className={classes.heading}>
          <div>
            <img src={whiteTulip} width="30" height="30" />
          </div>
          Tulips
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
          
        <table className={classes.table}>
          <tbody>
            { tulipSectionItems.map(i => generateAccordionCell(i)) }
          </tbody>
        </table>

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
        <Typography className={classes.heading}>
        <div>
          <img src={whiteLily} width="30" height="30" />
        </div>
        Lilies
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={classes.body}>
          

          
        </Typography>
      </AccordionDetails>
    </Accordion>
  );

  const hyacinthSection = (
    <Accordion
      className={classes.accordion}
      expanded={hyacinthsExpanded}
      onChange={() => setHyacinthsExpanded(!hyacinthsExpanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography className={classes.heading}>
        <div>
          <img src={whiteHyacinth} width="30" height="30" />
        </div>
        Hyacinths
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={classes.body}>
          

          
        </Typography>
      </AccordionDetails>
    </Accordion>
  );

   const cosmoSection = (
    <Accordion
      className={classes.accordion}
      expanded={cosmosExpanded}
      onChange={() => setCosmosExpanded(!cosmosExpanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography className={classes.heading}>
        <div>
          <img src={whiteCosmo} width="30" height="30" />
        </div>
        Cosmos
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={classes.body}>
          

          
        </Typography>
      </AccordionDetails>
    </Accordion>
  );

  const pansySection = (
    <Accordion
      className={classes.accordion}
      expanded={pansysExpanded}
      onChange={() => setPansysExpanded(!pansysExpanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography className={classes.heading}>
        <div>
          <img src={whitePansy} width="30" height="30" />
        </div>
        Pansys
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={classes.body}>
          

          
        </Typography>
      </AccordionDetails>
    </Accordion>
  );

  const windflowerSection = (
    <Accordion
      className={classes.accordion}
      expanded={windflowersExpanded}
      onChange={() => setWindflowersExpanded(!windflowersExpanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography className={classes.heading}>
        <div>
          <img src={whiteWindflower} width="30" height="30" />
        </div>
        Windflowers
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={classes.body}>
          

          
        </Typography>
      </AccordionDetails>
    </Accordion>
  );


  const flowerBreedingAccordionSections = [tulipSection, lilySection, hyacinthSection, cosmoSection, pansySection, windflowerSection];

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