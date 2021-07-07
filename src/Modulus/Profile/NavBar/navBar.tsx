import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, AppBar } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import classNames from "classnames";
import { pxToRem } from "theme";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `0 ${theme.typography.pxToRem(40)}`,
    maxHeight: theme.typography.pxToRem(95),
    borderBottom: `solid 1px ${theme.palette.divider}`,
  },
  img: {
    maxWidth: theme.typography.pxToRem(214),
    width: "50%",
  },
  info: {
    letterSpacing: ".1em",
    padding: ` 0 ${theme.typography.pxToRem(26)}`,
    cursor: "pointer",
    "&.active, &:hover, &:focus, &:active": {
      color: theme.palette.secondary.main,
      textDecoration: "underline",
    },
  },
  appBar: {
    boxShadow: "none",
  },
  moveToTop: {
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: theme.typography.pxToRem(40),
    width: theme.typography.pxToRem(40),
    color: theme.palette.primary.light,
    right: theme.typography.pxToRem(25),
    bottom: theme.typography.pxToRem(25),
    backgroundColor: theme.palette.secondary.main,
    cursor: "pointer",
  },
  drawerPaper: {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
  },
}));

function NavBar() {
  const classes = useStyles();
  const [activeNav, setActiveNav] = useState("biography");
  const [show, setShow] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const biographyClassName = classNames({
    [classes.info]: true,
    active: activeNav === "biography",
  });
  const educationClassName = classNames({
    [classes.info]: true,
    active: activeNav === "education",
  });
  const experienceClassName = classNames({
    [classes.info]: true,
    active: activeNav === "experience",
  });
  const contactClassName = classNames({
    [classes.info]: true,
    active: activeNav === "contact",
  });
  const scrollToTop = (divId: any) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollTo = (divId: any) => {
    const targetDiv: any = document.getElementById(divId);
    console.log(targetDiv, "this is target div");
    if (targetDiv) {
      targetDiv.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
      targetDiv.scrollTop -= 100;
    }
  };
  const scrollDetect = () => {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollTop > 600) {
      setShow(true);
    } else {
      setShow(false);
    }
    if (scrollTop > 300 && scrollTop < 900) {
      setActiveNav("experience");
    } else if (scrollTop > 900 && scrollTop < 1800) {
      setActiveNav("education");
    } else if (scrollTop < 300) {
      setActiveNav("biography");
    } else if (scrollTop > 1800) {
      setActiveNav("contact");
    }
  };
  window.onscroll = function () {
    scrollDetect();
  };

  return (
    <>
      <Hidden smDown>
        <AppBar className={classes.appBar} position="sticky">
          <Box className={classes.root}>
            <Box>
              <Box
                padding={pxToRem(30)}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box width="50%">
                  <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeOut", delay: 0.2, duration: 1 }}
                  >
                    <Typography variant="h1">Suraj</Typography>
                  </motion.div>
                </Box>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  padding={pxToRem(2)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeOut", delay: 0.2, duration: 1 }}
                  >
                    <Typography
                      className={biographyClassName}
                      variant="h5"
                      onClick={() => scrollTo("resume-biography")}
                    >
                      BIOGRAPHY
                    </Typography>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeOut", delay: 0.2, duration: 1 }}
                  >
                    <Typography
                      className={experienceClassName}
                      onClick={() => scrollTo("resume-experience")}
                      variant="h5"
                    >
                      EXPERIENCE
                    </Typography>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeOut", delay: 0.2, duration: 1 }}
                  >
                    <Typography
                      className={educationClassName}
                      onClick={() => scrollTo("resume-education")}
                      variant="h5"
                    >
                      EDUCATION
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeOut", delay: 0.2, duration: 1 }}
                  >
                    <Typography
                      className={contactClassName}
                      onClick={() => scrollTo("resume-contact")}
                      variant="h5"
                    >
                      GET IN TOUCH
                    </Typography>
                  </motion.div>
                </Box>
              </Box>
            </Box>
            {/* <hr /> */}
          </Box>
        </AppBar>
      </Hidden>
      <Hidden mdUp>
        <AppBar className={classes.appBar} position="sticky">
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography variant="h1">Suraj</Typography>
            </Box>
            <Box>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => {
                  setOpen(true);
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </AppBar>
      </Hidden>
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
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>
        <List>
          <ListItem button>
            <Typography
              className={biographyClassName}
              variant="h3"
              onClick={() => {
                setOpen(false);
                scrollTo("resume-biography");
              }}
            >
              BIOGRAPHY
            </Typography>
          </ListItem>
          <ListItem button>
            <motion.div
              whileHover={{
                color: "red",
                textDecoration: "underline",
                transition: {
                  duration: 5,
                  ease: "easeIn",
                },
              }}
            >
              <Typography
                className={experienceClassName}
                onClick={() => {
                  setOpen(false);
                  scrollTo("resume-experience");
                }}
                variant="h3"
              >
                EXPERIENCE
              </Typography>
            </motion.div>
          </ListItem>
          <ListItem button>
            <Typography
              className={educationClassName}
              onClick={() => {
                setOpen(false);
                scrollTo("resume-education");
              }}
              variant="h3"
            >
              EDUCATION
            </Typography>
          </ListItem>

          <ListItem button>
            <Typography
              className={contactClassName}
              onClick={() => {
                setOpen(false);
                scrollTo("resume-contact");
              }}
              variant="h3"
            >
              GET IN TOUCH
            </Typography>
          </ListItem>
        </List>
      </Drawer>

      {show && (
        <Box className={classes.moveToTop} onClick={scrollToTop}>
          <ExpandLessIcon />
        </Box>
      )}
    </>
  );
}
export default NavBar;
