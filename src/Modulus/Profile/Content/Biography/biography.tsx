import React from "react";
import { pxToRem } from "theme";
import { motion } from "framer-motion";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  listIcon: {
    minWidth: theme.typography.pxToRem(30),
  },
  icon: {
    fontSize: theme.typography.pxToRem(10),
  },
  list: {
    paddingLeft: 0,
  },
  image: {
    height: "auto",
    maxWidth: "100%",
  },
}));

const biographyContent = {
  title: "Biography",
  mainSkills: {
    header1: "MAIN SKILLS",
    header2: "Values",
    skills: [
      {
        skill: "Can create web app frontend with React js.",
      },
      {
        skill: "Can create web app backend with Node js and python.",
      },
      {
        skill: "Can create api with emerging technology like graphql.",
      },
      {
        skill: "Can Write test code to make app bug free.",
      },
      {
        skill: "Can Write performance efficient code. ",
      },
    ],
    values: [
      { value: "There is always something" },
      { value: "Learn and be curious" },
      { value: "Focus on the key inputs" },
      { value: "Keep it simple" },
    ],
  },

  image1:
    "https://mycareer.qodeinteractive.com/sarah/wp-content/uploads/2019/12/h1-img-3.jpg",
  image2:
    "https://mycareer.qodeinteractive.com/sarah/wp-content/uploads/2019/12/h1-img-4.jpg",
  personalInfo: {
    header: "PERSONAL INFO",
    description:
      "Hello I am Suraj Dhakal.I am a full-stack web developer with the more than 3 year of experience.",
    name: "Suraj Dhakal",
    phoneNumber: "977 9862155911",
    email: "surajdhakal427@gmail.com",
    linkedin: "https://www.linkedin.com/in/suraj-dhakal-715139154/",
    location: "biratnagar, Nepal",
  },
  description:
    "Gain visibility and authority with a unique mix of design and engineering. I seek to understand your customers and the problems they need to solve. Then I use persuasion science and engineering strategy to create web app that fullfil your business requirement.",
  subDescription:
    "Creating responsive websites, web app according to business requirement, dashboard for companies, backend apis with new technology.",
};

function Bigrophy() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const {
    title,
    mainSkills: { header1, header2, skills, values },
    image1,
    image2,
    personalInfo,
    description,
    subDescription,
  } = biographyContent;
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
      <Box margin="0 5%">
        <Grid container spacing={4}>
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
              <Typography color="textSecondary">
                {personalInfo.phoneNumber}
              </Typography>
              <Typography color="textSecondary">
                {personalInfo.email}
              </Typography>

              <Typography color="textSecondary"></Typography>
              <Typography color="textSecondary">
                {personalInfo.location}
              </Typography>
            </motion.div>
          </Grid>
          <Grid md={9} xs={12} item>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", delay: 0.2, duration: 1 }}
            >
              <Typography variant="subtitle1" color="textSecondary">
                {description}
              </Typography>
              <br />
              <Typography variant="subtitle1" color="textSecondary">
                {subDescription}
              </Typography>
              <br />
              <Grid container spacing={isMobile ? 2 : 10}>
                <Grid md={6} xs={12} item>
                  <img src={image1} className={classes.image} alt="img" />
                </Grid>
                <Grid md={6} xs={12} item>
                  <img src={image2} className={classes.image} alt="img" />
                </Grid>
              </Grid>
              <Grid container spacing={10}>
                <Grid md={6} xs={12} item>
                  <List component="nav" aria-label="contacts">
                    <Typography variant="h5" paragraph>
                      {header1}
                    </Typography>
                    {skills.map((skill) => (
                      <ListItem className={classes.list}>
                        <ListItemIcon className={classes.listIcon}>
                          <FiberManualRecordIcon className={classes.icon} />
                        </ListItemIcon>
                        <Typography variant="subtitle1" color="textSecondary">
                          {skill.skill}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid md={6} xs={12} item>
                  <List component="nav" aria-label="contacts">
                    <Typography variant="h5" paragraph>
                      {header2}
                    </Typography>
                    {values.map((value) => (
                      <ListItem className={classes.list}>
                        <ListItemIcon className={classes.listIcon}>
                          <FiberManualRecordIcon className={classes.icon} />
                        </ListItemIcon>
                        <Typography variant="subtitle1" color="textSecondary">
                          {value.value}
                        </Typography>{" "}
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Bigrophy;
