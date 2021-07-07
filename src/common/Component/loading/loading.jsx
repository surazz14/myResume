import React from "react";
import Box from "@material-ui/core/Box";
import Backdrop from "@material-ui/core/Backdrop";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    backdrop: {
      // zIndex: theme.zIndex.drawer + 1,
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.main,
    },
  })
);

function Loading({ loading, progress, size, value }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Backdrop className={classes.backdrop} open={loading}>
        <Box position="relative" display="inline-flex">
          <CircularProgress
            color="inherit"
            variant="determinate"
            size={size}
            value={progress}
          />
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="caption" component="div" color="textSecondary">
              {value}
            </Typography>
          </Box>
        </Box>
      </Backdrop>
    </React.Fragment>
  );
}

export default Loading;
