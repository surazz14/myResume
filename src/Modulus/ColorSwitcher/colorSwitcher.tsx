import React from "react";
import { inject, observer } from "mobx-react";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import PaletteIcon from "@material-ui/icons/Palette";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import { Grid, Typography } from "@material-ui/core";
import { pxToRem, themes as themesColor } from "theme";

const useStyles = makeStyles((theme) => ({
  switcher: {
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: theme.typography.pxToRem(40),
    width: theme.typography.pxToRem(40),
    color: theme.palette.primary.light,
    right: 0,
    top: "50%",
    backgroundColor: theme.palette.secondary.main,
    cursor: "pointer",
  },
  drawerPaper: {
    width: "20%",
    // backgroundColor: theme.palette.primary.main,
  },
}));

function ColorSwitcher(props: any) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const {
    color: { themes, switchTheme },
  } = props;
  return (
    <>
      <Box className={classes.switcher}>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={() => {
            setOpen(true);
          }}
        >
          <PaletteIcon fontSize="large" />
        </IconButton>
      </Box>

      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <Box display="flex" justifyContent="flex-end">
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box display="flex" justifyContent="center" color="ef2853">
          <Typography variant="h3">Theme</Typography>
        </Box>
        <Box m={pxToRem(16)}>
          <Grid spacing={4} container>
            {themes?.map((theme: string, i: number) => (
              <Grid xs={6} item>
                <motion.div
                  whileHover={{
                    scale: 1.3,
                    // rotate: [0, 0, 270, 270, 0],
                    // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                  }}
                >
                  <Box
                    // @ts-ignore
                    bgcolor={themesColor[theme].palette.primary.main}
                    minHeight={pxToRem(50)}
                    key={i}
                    onClick={() => {
                      switchTheme(theme);
                    }}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Drawer>
    </>
  );
}

export default inject("color")(observer(ColorSwitcher));
