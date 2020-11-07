
import { Container } from "@material-ui/core";
import { connect } from "react-redux";
import MainBlockComponent from "./pages/MainBlock";
import LeftSideMenu from "./components/LeftSideMenu";
import Header from "./components/Header";
import RightSideMenu from './components/RightSideMenu'
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./App.css";

const useStyles = makeStyles(() => ({
  drawerPaperActive: {
    width: `calc(100% - ${450}px)`,
  },
}))

function App({ active, dataItems }) {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Grid
        container
        direction="row"
        wrap="nowrap"
        className="main-layout-block"
      >
        <LeftSideMenu />
        <Container
          className={clsx(classes.drawerPaper, {
            [classes.drawerPaperActive]: active,
          })}
        >
          <MainBlockComponent />
        </Container>

        <RightSideMenu active={active}
          dataItems={dataItems}
        />
      </Grid>
    </>
  );
}

const mapStateToProps = (store) => ({
  active: store.getDataItem.active,
  dataItems: store.getDataItem.dataItems,
})

export default connect(mapStateToProps, null)(App);

