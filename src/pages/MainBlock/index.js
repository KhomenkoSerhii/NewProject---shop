import React from "react";
import CardComponent from "../../components/Card";
import Grid from "@material-ui/core/Grid";
import CardActionArea from '@material-ui/core/CardActionArea';
import { connect } from "react-redux";
import { setDataItems } from '../../actions/setDataItems'
import { setActiveRightMenu } from '../../actions/setActive'

import data from "../../data/product.json";

const MainBlockComponent = ({ setActiveRightMenu, setDataItems }) => {

  return (
    <>
      <Grid container direction="row" alignItems="center" justify='center'>
        {data.map((items, index) => (
          <CardActionArea onClick={() => {
            setDataItems(items)
            setActiveRightMenu(true)
          }}
            key={index}
            style={{ width: 'unset' }}
          >
            <CardComponent
              image={items.image}
              post={items.post}
              metaData={items.metaData}
            />
          </CardActionArea>
        ))}
      </Grid>
    </>
  );
};

const mapDispatchToProps = {
  setActiveRightMenu,
  setDataItems
}

export default connect(null, mapDispatchToProps)(MainBlockComponent);
