import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 340,
    margin: 10,
  },
});

const CardComponent = ({ image, post, metaData, handleDrawerOpen }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardMedia component="img" alt="img" height="140" src={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2"></Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.post_title}
        </Typography>

        {metaData._dpe_price_sqm.map((i) => (
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            key={i}
          >
            {i}€/m
            <sup>
              <i>2</i>
            </sup>
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default CardComponent;
