import React from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useTheme } from "@material-ui/core/styles";
import { pxToRem } from "theme";

const useStyles = makeStyles((theme) => ({
  listIcon: {
    minWidth: theme.typography.pxToRem(30),
  },
  icon: {
    fontSize: theme.typography.pxToRem(24),
    color: theme.palette.secondary.main,
  },
  list: {
    paddingLeft: 0,
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "none",
    },
  },
  image: {
    height: "auto",
    maxWidth: "100%",
  },
}));

const biographyContent = {
  id: 1,
  title: "From my blog",
  personalInfo: {
    header: "I Love To Write",
    description:
      "Lorem ipsum dolor sit amete, consectet uer adipiscing ets elit. Aenean commod ligula eget dolor aenean massa cum sociis Theme natoque.",
  },
};

function Blog({ blogs }: any) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { id, title, personalInfo } = biographyContent;
  console.log("blogs---------", blogs);
  return (
    <>
      <Box borderBottom="solid 1px #e9e3e2" marginBottom={pxToRem(56)}>
        <Box lineHeight={pxToRem(30)}>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", delay: 0.2, duration: 1 }}
          >
            <Typography variant="h2">{title}</Typography>
          </motion.div>
        </Box>
      </Box>
      <Box>
        <Grid container spacing={isMobile ? 4 : 8}>
          <Grid md={3} xs={12} item>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", delay: 0.2, duration: 1 }}
            >
              <Typography variant="h5" paragraph>
                <BorderColorIcon color="secondary" fontSize="small" />{" "}
                {personalInfo?.header}
              </Typography>
              <Typography color="textSecondary" paragraph>
                {personalInfo?.description}
              </Typography>
            </motion.div>
          </Grid>
          <Grid md={9} xs={12} item>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", delay: 0.2, duration: 1 }}
            >
              <Grid container spacing={8}>
                {blogs.blogs.map((blog: any) => (
                  <Grid md={6} xs={12} item>
                    <Box mb={pxToRem(48)}>
                      <img
                        src="https://mycareer.qodeinteractive.com/sarah/wp-content/uploads/2019/12/blog-list-img-1.jpg"
                        className={classes.image}
                        alt="img"
                      />
                    </Box>

                    <Box>
                      <Typography variant="h5" paragraph>
                        {blog?.title}
                      </Typography>
                      <Typography color="textSecondary" paragraph>
                        {blog?.subDescription}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <ArrowRightAltIcon
                        // size={pxToRem(24)}
                        className={classes.icon}
                      />
                      &nbsp;
                      <Link to={`/suraj/${blog._id}`} className={classes.link}>
                        {" "}
                        READ MORE
                      </Link>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
      <br />
    </>
  );
}

export default inject("blogs")(observer(Blog));
