import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";
import MainBlockComponent from "./pages/MainBlock";
import LeftSideMenu from "./components/LeftSideMenu";
import Header from "./components/Header";
import RightSideMenu from "./components/RightSideMenu";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import Box from "@material-ui/core/Box";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const useStyles = makeStyles(() => ({
  mainComponent: {
    padding: "0 50px",
  },
  mainBlock: {
    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
    minHeight: "100vh",
  },
  mainBlockActive: {
    marginRight: "400px",
  },
  mainBlockActiveLeft: {
    paddingLeft: "200px",
  },
  openBtn: {
    width: "40px",
    height: "200px",
    position: "absolute",
    top: "50%",
    left: 0,
    cursor: "pointer",
    backgroundColor: "rgb(160,196,50)",
    border: "none",
  },
  MuiSvgIcon: {
    color: "white",
    fontSize: "34px",
  },
}));

function App({ active, dataItems }) {
  const [open, setOpen] = useState(false);

  const handlerOpen = () => {
    setOpen(true);
  };
  const handlerClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <Box
      className={clsx(classes.mainBlock, {
        [classes.mainBlockActive]: active,
        [classes.mainBlockActiveLeft]: open,
      })}
    >
      <Header />
      <Grid
        container
        direction="row"
        wrap="nowrap"
        className={classes.mainComponent}
      >
        <button onClick={handlerOpen} className={classes.openBtn}>
          <ChevronLeftIcon className={classes.MuiSvgIcon} />
        </button>
        <LeftSideMenu open={open} handlerClose={handlerClose} />
        <Container>
          <MainBlockComponent />
        </Container>

        <RightSideMenu active={active} dataItems={dataItems} />
      </Grid>
    </Box>
  );
}

const mapStateToProps = (store) => ({
  active: store.getDataItem.active,
  dataItems: store.getDataItem.dataItems,
});

export default connect(mapStateToProps, null)(App);
