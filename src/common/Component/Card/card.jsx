import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    marginLeft: "3%",
  },
});

export default function InfoCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={props.onClick}>
      <CardContent>
        <Box display="flex" justifyContent="center">
          <Typography variant="h6" paragraph={true} component="h6">
            Date :{props.date}
            <br />
            Avg Temperture:{props.avgTemp}
            <br />
            Avg Visibility:{props.avgVisibililty}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
