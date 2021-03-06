import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ClearIcon from "@material-ui/icons/Clear";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CreateIcon from "@material-ui/icons/Create";
import { Accordion, Button } from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import clsx from "clsx";
import { setActiveRightMenu } from "../../actions/setActive";

const drawerWidth = 450;

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  numSpan: {
    backgroundColor: "rgb(236,243,214)",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    color: "#A2C536",
    display: "flex",
    alignItems: "center",
  },
  customInput: {
    width: 150,
  },
  headerPanelItems: {
    display: "flex",
    justifyContent: "flex-start",
    minWidth: 100,
    alignItems: "center",
  },
  wrapperButton: {
    backgroundColor: "#A0C432",
    color: "white",
    "&:hover": {
      backgroundColor: "#A0C432",
    },
  },
}));

const RightSideMenu = ({ dataItems, active, setActiveRightMenu }) => {
  const classes = useStyles();
  const [stateValue, setStateValue] = useState({
    breite: "",
    tiefe: "",
    breite2: "",
    tiefe2: "",
  });

  const handleChange = (e) => {
    setStateValue({
      ...stateValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Drawer
        variant="persistent"
        anchor="right"
        open={active}
        className={clsx(classes.drawerPaper, {
          [classes.drawerPaperActive]: active,
        })}
      >
        {dataItems.length > 0 && (
          <div className={classes.drawerHeader}>
            {dataItems[0].post.post_title}
          </div>
        )}
        <Divider />
        <List>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <div className={classes.headerPanelItems}>
                  <div className={classes.numSpan}>
                    <span>1</span>
                  </div>
                  <Typography style={{ paddingLeft: 10 }}>Material</Typography>
                </div>

                <ListItemIcon style={{ minWidth: "unset" }}>
                  <CreateIcon />
                </ListItemIcon>
              </Grid>
            </AccordionSummary>
            <AccordionDetails style={{ padding: "0 16px 0" }}>
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                style={{ width: "100%" }}
              >
                <ListItem button style={{ justifyContent: "space-between" }}>
                  <FormControl
                    variant="outlined"
                    className={classes.customInput}
                  >
                    <InputLabel htmlFor="breite">Breite</InputLabel>
                    <OutlinedInput
                      style={{ height: 50 }}
                      name="breite"
                      id="breite"
                      value={stateValue.breite}
                      onChange={handleChange}
                      label="Breite"
                    />
                  </FormControl>
                  <ListItemIcon style={{ minWidth: "unset" }}>
                    <ClearIcon />
                  </ListItemIcon>
                  <FormControl
                    variant="outlined"
                    className={classes.customInput}
                  >
                    <InputLabel htmlFor="tiefe">Tiefe</InputLabel>
                    <OutlinedInput
                      style={{ height: 50 }}
                      name="tiefe"
                      id="tiefe"
                      value={stateValue.tiefe}
                      onChange={handleChange}
                      label="Tiefe"
                    />
                  </FormControl>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <div className={classes.headerPanelItems}>
                  <span className={classes.numSpan}>2</span>
                  <Typography style={{ paddingLeft: 10 }}>
                    Format: {stateValue.breite2 + " " + stateValue.tiefe2}cm
                  </Typography>
                </div>

                <ListItemIcon style={{ minWidth: "unset" }}>
                  <CreateIcon />
                </ListItemIcon>
              </Grid>
            </AccordionSummary>
            <AccordionDetails style={{ padding: "0 16px 0" }}>
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                style={{ width: "100%" }}
              >
                <ListItem button style={{ justifyContent: "space-between" }}>
                  <FormControl
                    variant="outlined"
                    className={classes.customInput}
                  >
                    <InputLabel htmlFor="breite2">Breite</InputLabel>
                    <OutlinedInput
                      style={{ height: 50 }}
                      name="breite2"
                      id="breite2"
                      value={stateValue.breite2}
                      onChange={handleChange}
                      label="Breite"
                    />
                  </FormControl>
                  <ListItemIcon style={{ minWidth: "unset" }}>
                    <ClearIcon />
                  </ListItemIcon>
                  <FormControl
                    variant="outlined"
                    className={classes.customInput}
                  >
                    <InputLabel htmlFor="tiefe2">Tiefe</InputLabel>
                    <OutlinedInput
                      style={{ height: 50 }}
                      name="tiefe2"
                      id="tiefe2"
                      value={stateValue.tiefe2}
                      onChange={handleChange}
                      label="Tiefe"
                    />
                  </FormControl>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </List>
        <Button
          variant="contained"
          className={classes.wrapperButton}
          onClick={() => setActiveRightMenu(false)}
        >
          Design now
        </Button>
      </Drawer>
    </>
  );
};

const mapDispatchToProps = {
  setActiveRightMenu,
};

export default connect(null, mapDispatchToProps)(RightSideMenu);
