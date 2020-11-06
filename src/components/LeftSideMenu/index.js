import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function LeftSideMenu() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handlerOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Kategorien</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
          >
            <ListItem button>
              <ListItemText primary="Sent mail" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Inbox" />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Produkte</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
          ></List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Farben</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
          ></List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Großen</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
          ></List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
