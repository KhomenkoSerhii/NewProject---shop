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
import Drawer from "@material-ui/core/Drawer";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ClearIcon from "@material-ui/icons/Clear";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  leftSideMenu: {
    width: "260px",
  },
  iconBlock: {
    justifyContent: "flex-end",
  },
  closeBtn: {
    padding: "10px",
    cursor: "pointer",
  },
}));

export default function LeftSideMenu({ open, handlerClose }) {
  const classes = useStyles();

  return (
    <>
      <div>
        <Drawer variant="persistent" open={open}>
          <ListItemIcon
            style={{ minWidth: "unset" }}
            className={classes.iconBlock}
          >
            <ClearIcon onClick={handlerClose} className={classes.closeBtn} />
          </ListItemIcon>
          <Accordion className={classes.leftSideMenu}>
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
                  <ListItemText primary="Männer" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Frauen" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Kinder & Babys" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Accessoires" />
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
        </Drawer>
      </div>
    </>
  );
}
