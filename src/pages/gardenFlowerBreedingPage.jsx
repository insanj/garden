import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { PieChart } from 'react-minimal-pie-chart';

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
import redHyacinth from '../img/HR.png';
import blueHyacinth from '../img/HB.png';
import pinkHyacinth from '../img/HP.png';
import orangeHyacinth from '../img/HO.png';
import purpleHyacinth from '../img/HU.png';
import yellowHyacinth from '../img/HY.png';

import whiteCosmo from '../img/CW.png';
import redCosmo from '../img/CR.png';
import pinkCosmo from '../img/CP.png';
import orangeCosmo from '../img/CO.png';
import blackCosmo from '../img/CK.png';
import yellowCosmo from '../img/CY.png';

import whitePansy from '../img/PW.png';
import bluePansy from '../img/PB.png';
import orangePansy from '../img/PO.png';
import redPansy from '../img/PR.png';
import purplePansy from '../img/PU.png';

import whiteWindflower from '../img/WW.png';
import blueWindflower from '../img/WB.png';
import orangeWindflower from '../img/WO.png';
import redWindflower from '../img/WR.png';
import pinkWindflower from '../img/WP.png';
import purpleWindflower from '../img/WU.png';

import whiteMum from '../img/MW.png';
import purpleMum from '../img/MU.png';
import pinkMum from '../img/MP.png';
import redMum from '../img/MR.png';
import yellowMum from '../img/MY.png';
import greenMum from '../img/MG.png';

import whiteRose from '../img/RW.png';
import purpleRose from '../img/RU.png';
import pinkRose from '../img/RP.png';
import redRose from '../img/RR.png';
import yellowRose from '../img/RY.png';
import blueRose from '../img/RB.png';
import blackRose from '../img/RK.png';
import goldRose from '../img/RG.png';
import orangeRose from '../img/RO.png';

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
    width: 60,
    height: 60,
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
  // const [tulipsExpanded, setTulipsExpanded] = React.useState(false);
  // const [liliesExpanded, setLiliesExpanded] = React.useState(false);
  // const [hyacinthsExpanded, setHyacinthsExpanded] = React.useState(false);
  // const [cosmosExpanded, setCosmosExpanded] = React.useState(false);
  // const [pansysExpanded, setPansysExpanded] = React.useState(false);
  // const [windflowersExpanded, setWindflowersExpanded] = React.useState(false);
  // const [mumsExpanded, setMumsExpanded] = React.useState(false);
  // const [rosesExpanded, setRosesExpanded] = React.useState(false);
  const [expandedSection, setExpandedSection] = React.useState('');

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

          <PieChart
            style={{maxWidth: 100}}
            data={item.result.map((r, i) => {
              return {
                title: r.text,
                value: +r.percent.replace("%", ""),
                color: r.color,
              }
            })}
          />
        
        </td>
      </tr>
    );
  }

  const colors = {
    white: "#fff",
    red: "#f44336",
    pink: "#e91e63",
    purple: "#673ab7",
    blue: "#03a9f4",
    green: "#4caf50",
    yellow: "#ffeb3b",
    orange: "#ff9800",
    black: "#212121",
    deepRed: "#b71c1c"
  };

  const tulipSectionItems = [
  {
    left: {
      image: whiteTulip,
      text: 'white',
      color: colors.white,
    },
    right: {
      image: redTulip,
      text: 'red',
      color: colors.red
    },
    result: [{
      image: pinkTulip,
      text: 'pink',
      color: colors.pink,
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
      color: colors.red,
    },
    result: [{
      image: orangeTulip,
      text: 'orange',
      color: colors.orange,
      percent: '50%'
    }]
  },
  {
    left: {
      image: redTulip,
      text: 'red',
      color: colors.red,
    },
    right: {
      image: redTulip,
      text: 'red',
      color: colors.red,
    },
    result: [{
      image: blackTulip,
      text: 'black',
      color: colors.black,
      percent: '25%'
    }]
  },
  {
    left: {
      image: orangeTulip,
      text: 'orange',
      color: colors.orange,
    },
    right: {
      image: orangeTulip,
      text: 'orange',
      color: colors.orange,
    },
    result: [{
      image: orangeTulip,
      text: 'orange',
      color: colors.orange,
      percent: '25%'
    },
    // {
    //   image: orangeTulip,
    //   text: 'Orange (Nook Mile)',
    //   color: colors.orange,
    //   percent: '12.5%'
    // },
    {
      image: blackTulip,
      text: 'Black',
      color: colors.black,
      percent: '6.25%'
    },
    // {
    //   image: blackTulip,
    //   text: 'Black (Nook Mile)',
    //   color: colors.black,
    //   percent: '12.5%'
    // },
    {
      image: purpleTulip,
      text: 'purple',
      color: colors.purple,
      percent: '6.25%'
    }]
  },
  // {
  //   left: {
  //     image: orangeTulip,
  //     text: 'orange',
  //     color: colors.orange,
  //   },
  //   right: {
  //     image: orangeTulip,
  //     text: 'orange',
  //     color: colors.orange
  //   },
  //   result: [{
  //     image: orangeTulip,
  //     text: 'Orange',
  //     color: colors.orange,
  //     percent: '25%'
  //   },
  //   // {
  //   //   image: orangeTulip,
  //   //   text: 'Orange (Nook Mile)',
  //   //   color: colors.orange,
  //   //   percent: '25%'
  //   // },
  //   // // {
  //   //   image: blackTulip,
  //   //   text: 'Black (Nook Mile)',
  //   //   color: colors.black,
  //   //   percent: '12.5%'
  //   // },
  //   {
  //     image: purpleTulip,
  //     text: 'Purple',
  //     color: colors.purple,
  //     percent: '12.5%'
  //   }]
  // },
  ];

  const tulipSection = (
    <Accordion
      className={classes.accordion}
      expanded={expandedSection === 'tulips'}
      onChange={() => setExpandedSection(expandedSection === 'tulips' ? '' : 'tulips')}
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

  const lilySectionItems = [
  {
    left: {
      image: whiteLily,
      text: 'white',
      color: colors.white,
    },
    right: {
      image: redLily,
      text: 'red',
      color: colors.red,
    },
    result: [{
      image: pinkLily,
      text: 'pink',
      color: colors.pink,
      percent: '50%'
    }]
  },
  {
    left: {
      image: yellowLily,
      text: 'yellow',
      color: colors.yellow
    },
    right: {
      image: redLily,
      text: 'red',
      color: colors.red
    },
    result: [{
      image: orangeLily,
      text: 'orange',
      color: colors.orange,
      percent: '50%'
    }]
  },
  {
    left: {
      image: redLily,
      text: 'red',
      color: colors.red
    },
    right: {
      image: redLily,
      text: 'red',
      color: colors.red
    },
    result: [{
      image: blackLily,
      text: 'black',
      color: colors.black,
      percent: '25%',
    }, {
      image: pinkLily,
      text: 'pink',
      color: colors.pink,
      percent: '25%'
    }]
  }
  ];

  const lilySection = (
    <Accordion
      className={classes.accordion}
      expanded={expandedSection === 'lilies'}
      onChange={() => setExpandedSection(expandedSection === 'lilies' ? '' : 'lilies')}
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
        <table className={classes.table}>
          <tbody>
            { lilySectionItems.map(i => generateAccordionCell(i)) }
          </tbody>
        </table>
      </AccordionDetails>
    </Accordion>
  );

  const hyacinthSectionItems = [
  {
    left: {
      image: whiteHyacinth,
      text: 'white',
      color: colors.white
    },
    right: {
      image: whiteHyacinth,
      text: 'white',
      color: colors.white
    },
    result: [{
      image: blueHyacinth,
      text: 'blue',
      color: colors.blue,
      percent: '25%'
    }]
  },
  {
    left: {
      image: whiteHyacinth,
      text: 'white',
      color: colors.white
    },
    right: {
      image: redHyacinth,
      text: 'red',
      color: colors.red
    },
    result: [{
      image: pinkHyacinth,
      text: 'pink',
      color: colors.pink,
      percent: '50%'
    }]
  },
  {
    left: {
      image: yellowHyacinth,
      text: 'yellow',
      color: colors.yellow
    },
    right: {
      image: redHyacinth,
      text: 'red',
      color: colors.red
    },
    result: [{
      image: orangeHyacinth,
      text: 'orange',
      color: colors.orange,
      percent: '50%'
    }]
  },
  {
    left: {
      image: orangeHyacinth,
      text: 'orange',
      color: colors.orange
    },
    right: {
      image: orangeHyacinth,
      text: 'orange',
      color: colors.orange
    },
    result: [{
      image: orangeHyacinth,
      text: 'orange',
      color: colors.orange,
      percent: '25%'
    }, {
      image: blueHyacinth,
      text: 'blue',
      color: colors.blue,
      percent: '12.5%'
    }, {
      image: purpleHyacinth,
      text: 'purple',
      color: colors.purple,
      percent: '6.25%'
    }]
  },
  ];

  const hyacinthSection = (
    <Accordion
      className={classes.accordion}
      expanded={expandedSection === 'hyacinths'}
      onChange={() => setExpandedSection(expandedSection === 'hyacinths' ? '' : 'hyacinths')}
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
        <table className={classes.table}>
          <tbody>
            { hyacinthSectionItems.map(i => generateAccordionCell(i)) }
          </tbody>
        </table>
      </AccordionDetails>
    </Accordion>
  );

  const cosmoSectionItems = [
  {
    left: {
      image: whiteCosmo,
      text: 'white',
      color: colors.white
    },
    right: {
      image: redCosmo,
      text: 'red',
      color: colors.red
    },
    result: [{
      image: pinkCosmo,
      text: 'pink',
      color: colors.pink,
      percent: '50%'
    }]
  },
  {
    left: {
      image: yellowCosmo,
      text: 'yellow',
      color: colors.yellow
    },
    right: {
      image: redCosmo,
      text: 'red',
      color: colors.red
    },
    result: [{
      image: orangeCosmo,
      text: 'orange',
      color: colors.orange,
      percent: '50%'
    }]
  },
  {
    left: {
      image: orangeCosmo,
      text: 'orange',
      color: colors.orange
    },
    right: {
      image: orangeCosmo,
      text: 'orange',
      color: colors.orange
    },
    result: [{
      image: pinkCosmo,
      text: 'pink',
      color: colors.pink,
      percent: '15.625%'
    }, {
      image: blackCosmo,
      text: 'black',
      color: colors.black,
      percent: '5.47%'
    },]
  }
  ];

  const cosmoSection = (
    <Accordion
      className={classes.accordion}
      expanded={expandedSection === 'cosmos'}
      onChange={() => setExpandedSection(expandedSection === 'cosmos' ? '' : 'cosmos')}
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
        <table className={classes.table}>
          <tbody>
            { cosmoSectionItems.map(i => generateAccordionCell(i)) }
          </tbody>
        </table>
      </AccordionDetails>
    </Accordion>
  );

  const pansySectionItems = [
  {
    left: {
      image: whitePansy,
      text: 'white',
      color: colors.white
    },
    right: {
      image: whitePansy,
      text: 'white',
      color: colors.white
    },
    result: [{
      image: bluePansy,
      text: 'blue',
      color: colors.blue,
      percent: '25%'
    }]
  },
  {
    left: {
      image: yellowTulip,
      text: 'yellow',
      color: colors.yellow
    },
    right: {
      image: redPansy,
      text: 'red',
      color: colors.red
    },
    result: [{
      image: orangePansy,
      text: 'orange',
      color: colors.orange,
      percent: '100%'
    }]
  },
  {
    left: {
      image: bluePansy,
      text: 'blue',
      color: colors.blue
    },
    right: {
      image: redPansy,
      text: 'red',
      color: colors.red
    },
    result: [{
      image: redPansy,
      text: 'red',
      color: colors.deepRed,
      percent: '100%'
    }]
  },
  {
    left: {
      image: redPansy,
      text: 'red',
      color: colors.deepRed
    },
    right: {
      image: redPansy,
      text: 'red',
      color: colors.deepRed
    },
    result: [{
      image: purplePansy,
      text: 'purple',
      color: colors.purple,
      percent: '6.25%'
    }]
  },
  ];

  const pansySection = (
    <Accordion
      className={classes.accordion}
      expanded={expandedSection === 'pansys'}
      onChange={() => setExpandedSection(expandedSection === 'pansys' ? '' : 'pansys')}
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
        <table className={classes.table}>
          <tbody>
            { pansySectionItems.map(i => generateAccordionCell(i)) }
          </tbody>
        </table>
      </AccordionDetails>
    </Accordion>
  );

  const windflowerSectionItems = [
  {
    left: {
      image: whiteWindflower,
      text: 'white',
      color: colors.white
    },
    right: {
      image: whiteWindflower,
      text: 'white',
      color: colors.white
    },
    result: [{
      image: blueWindflower,
      text: 'blue',
      color: colors.blue,
      percent: '25%'
    }]
  },
  {
    left: {
      image: orangeWindflower,
      text: 'orange',
      color: colors.orange
    },
    right: {
      image: redWindflower,
      text: 'red',
      color: colors.red
    },
    result: [{
      image: pinkWindflower,
      text: 'pink',
      color: colors.pink,
      percent: '100%'
    }]
  },
  {
    left: {
      image: redWindflower,
      text: 'red',
      color: colors.red
    },
    right: {
      image: blueWindflower,
      text: 'blue',
      color: colors.blue
    },
    result: [{
      image: redWindflower,
      text: 'red',
      color: colors.deepRed,
      percent: '100%'
    }]
  },
  {
    left: {
      image: redWindflower,
      text: 'red',
      color: colors.deepRed
    },
    right: {
      image: redWindflower,
      text: 'red',
      color: colors.deepRed
    },
    result: [{
      image: purpleWindflower,
      text: 'purple',
      color: colors.purple,
      percent: '6.25%'
    }]
  },
  ];

  const windflowerSection = (
    <Accordion
      className={classes.accordion}
      expanded={expandedSection === 'windflowers'}
      onChange={() => setExpandedSection(expandedSection === 'windflowers' ? '' : 'windflowers')}
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
        <table className={classes.table}>
          <tbody>
            { windflowerSectionItems.map(i => generateAccordionCell(i)) }
          </tbody>
        </table>
      </AccordionDetails>
    </Accordion>
  );

  const mumSectionItems = [
  {
    left: {
      image: whiteMum,
      text: 'white',
      color: colors.white
    },
    right: {
      image: whiteMum,
      text: 'white',
      color: colors.white
    },
    result: [{
      image: purpleMum,
      text: 'purple',
      color: colors.purple,
      percent: '25%'
    }]
  },
  {
    left: {
      image: whiteMum,
      text: 'white',
      color: colors.white
    },
    right: {
      image: redMum,
      text: 'red',
      color: colors.red
    },
    result: [{
      image: pinkMum,
      text: 'pink',
      color: colors.pink,
      percent: '50%'
    }]
  },
  {
    left: {
      image: purpleMum,
      text: 'purple',
      color: colors.purple
    },
    right: {
      image: redMum,
      text: 'red',
      color: colors.red
    },
    result: [{
      image: pinkMum,
      text: 'pink',
      color: colors.pink,
      percent: '100%'
    }]
  },
  {
    left: {
      image: yellowMum,
      text: 'yellow',
      color: colors.yellow
    },
    right: {
      image: redMum,
      text: 'red',
      color: colors.red
    },
    result: [{
      image: yellowMum,
      text: 'yellow',
      color: colors.yellow,
      percent: '100%'
    }]
  },
  {
    left: {
      image: yellowMum,
      text: 'yellow',
      color: colors.yellow
    },
    right: {
      image: yellowMum,
      text: 'yellow',
      color: colors.yellow
    },
    result: [{
      image: purpleMum,
      text: 'purple',
      color: colors.purple,
      percent: '12.5%'
    }, {
      image: greenMum,
      text: 'green',
      color: colors.green,
      percent: '6.25%'
    }]
  },
  {
    left: {
      image: purpleMum,
      text: 'purple',
      color: colors.purple
    },
    right: {
      image: purpleMum,
      text: 'purple',
      color: colors.purple
    },
    result: [{
      image: purpleMum,
      text: 'purple',
      color: colors.purple,
      percent: '50%'
    }, {
      image: greenMum,
      text: 'green',
      color: colors.green,
      percent: '25%'
    }]
  }
  ];

  const mumSection = (
    <Accordion
      className={classes.accordion}
      expanded={expandedSection === 'mums'}
      onChange={() => setExpandedSection(expandedSection === 'mums' ? '' : 'mums')}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography className={classes.heading}>
        <div>
          <img src={whiteMum} width="30" height="30" />
        </div>
        Mums
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <table className={classes.table}>
          <tbody>
            { mumSectionItems.map(i => generateAccordionCell(i)) }
          </tbody>
        </table>
      </AccordionDetails>
    </Accordion>
  );

  const roseSectionItems = [
  {
    left: {
      image: whiteRose,
      text: 'white',
      color: colors.white
    },
    right: {
      image: whiteRose,
      text: 'white',
      color: colors.white
    },
    result: [{
      image: purpleRose,
      text: 'purple',
      color: colors.purple,
      percent: '25%'
    }]
  },
  {
    left: {
      image: whiteRose,
      text: 'white',
      color: colors.white
    },
    right: {
      image: redRose,
      text: 'red',
      color: colors.red
    },
    result: [{
      image: pinkRose,
      text: 'pink',
      color: colors.pink,
      percent: '25%'
    }]
  },
  {
    left: {
      image: yellowRose,
      text: 'yellow',
      color: colors.yellow
    },
    right: {
      image: redRose,
      text: 'red',
      color: colors.red
    },
    result: [{
      image: orangeRose,
      text: 'orange',
      color: colors.orange,
      percent: '50%'
    }]
  },
  {
    left: {
      image: redRose,
      text: 'red',
      color: colors.red
    },
    right: {
      image: redRose,
      text: 'red',
      color: colors.red
    },
    result: [{
      image: blackRose,
      text: 'black',
      color: colors.black,
      percent: '25%'
    }, {
      image: pinkRose,
      text: 'pink',
      color: colors.pink,
      percent: '25%'
    }]
  },
  {
    left: {
      image: purpleRose,
      text: 'purple',
      color: colors.purple
    },
    right: {
      image: redRose,
      text: 'red',
      color: colors.red
    },
    result: [{
      image: pinkRose,
      text: 'pink',
      color: colors.pink,
      percent: '50%'
    }]
  },
  {
    left: {
      image: pinkRose,
      text: 'pink',
      color: colors.pink
    },
    right: {
      image: yellowRose,
      text: 'yellow',
      color: colors.yellow
    },
    result: [{
      image: redRose,
      text: 'red',
      color: colors.deepRed,
      percent: '12.5%'
    }]
  },
  {
    left: {
      image: redRose,
      text: 'red',
      color: colors.deepRed
    },
    right: {
      image: redRose,
      text: 'red',
      color: colors.deepRed
    },
    result: [{
      image: blueRose,
      text: 'blue',
      color: colors.blue,
      percent: '1.56%'
    }]
  },
  ];

  const roseSection = (
    <Accordion
      className={classes.accordion}
      expanded={expandedSection === 'roses'}
      onChange={() => setExpandedSection(expandedSection === 'roses' ? '' : 'roses')}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography className={classes.heading}>
        <div>
          <img src={whiteRose} width="30" height="30" />
        </div>
        Roses
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <table className={classes.table}>
          <tbody>
            { roseSectionItems.map(i => generateAccordionCell(i)) }
          </tbody>
        </table>
      </AccordionDetails>
    </Accordion>
  );

  const flowerBreedingAccordionSections = [cosmoSection,hyacinthSection, lilySection, mumSection, pansySection, roseSection, tulipSection, windflowerSection];

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