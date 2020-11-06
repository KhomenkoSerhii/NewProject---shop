import React from "react";
import LeftSideMenu from "../../components/LeftSideMenu";
import Header from "../../components/Header";

import Grid from "@material-ui/core/Grid";

const MainLayuot = ({ children }) => {
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
        {children}
      </Grid>
    </>
  );
};
export default MainLayuot;
