import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  headerBar: {
    boxShadow: "none",
    paddingLeft: "60px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" className={classes.headerBar}>
        <Toolbar variant="dense">
          <Typography variant="h3">Wähle dein Produkt!</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
