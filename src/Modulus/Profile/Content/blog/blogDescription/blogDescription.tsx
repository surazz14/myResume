import React from "react";
import { motion } from "framer-motion";
import { inject, observer } from "mobx-react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DateRangeSharpIcon from "@material-ui/icons/DateRangeSharp";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Link from "@material-ui/core/Link";
import { pxToRem } from "theme";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  image: {
    height: "auto",
    maxWidth: "100%",
  },
  listIcon: {
    minWidth: theme.typography.pxToRem(30),
  },
  icon: {
    fontSize: theme.typography.pxToRem(10),
  },
  list: {
    paddingLeft: 0,
  },
  date: {
    margin: "0 8%",
    [theme.breakpoints.up("md")]: {
      margin: 0,
      display: "flex",
      transform: "rotate(-90deg)",
      marginTop: pxToRem(60),
    },
  },
  infoBottom: {
    borderBottom: "solid 1px #e9e3e2",
    borderTop: "solid 1px #e9e3e2",
    image:
      "https://mycareer.qodeinteractive.com/sarah/wp-content/uploads/2019/12/blog-list-img-1.jpg",
    padding: `${theme.typography.pxToRem(20)} 0`,
    display: "flex",
    marginBottom: theme.typography.pxToRem(56),
    [theme.breakpoints.up("md")]: {
      padding: theme.typography.pxToRem(20),
      justifyContent: "space-between",
    },
  },
  infoRight: {
    margin: "0 8%",
    [theme.breakpoints.up("md")]: {
      marginRight: "32%",
      marginBottom: theme.typography.pxToRem(48),
    },
  },
}));

function BlogDescription({ blogs, match }: any) {
  const classes = useStyles();
  const biographyContent = {
    title: "THE MOST IMPRESSIVE COPYWRITING RESULTS",
    date: "Dec 9,2019",
    subDescription: "Lorem ipsum dolor sit amete, consectet uer adipiscing ets elit. Aenean commod ligula eget dolor aenean massa cum sociis Theme natoque.",
    description:
      // eslint-disable-next-line no-multi-str
      "Lorem ipsum dolor sit amnsectetur adpisici do eiusmod tempor\
    incidt ut labore et dolore gna aliquat enim ad minim veniam quis\
    nosexercitation ullamco laboris nisi ut aliquip ex ea commodo\
    consequat. Duis aute irure dolor in reprehenderit in voluptate\
    velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum\
    dolore congit summ. Et petentium aliquando conclusionemque qui.\
    Oportere conceptam mei",
    image:
      "https://mycareer.qodeinteractive.com/sarah/wp-content/uploads/2019/12/blog-list-img-1.jpg",
    personalInfo: {
      header: "I Love To Write",
      description:
        "Lorem ipsum dolor sit amete, consectet uer adipiscing ets elit. Aenean commod ligula eget dolor aenean massa cum sociis Theme natoque.",
    },
  };

  const myInfos = [
    {
      text: "Facebook",
      link: "https://www.facebook.com/suraj.dhakal.98",
    },
    {
      text: "Linkedin",
      link: "https://www.linkedin.com/in/suraj-dhakal-715139154/",
    },
  ];
  const {image, personalInfo } = biographyContent;
  const blog = blogs.getBlogById(match?.params.id);
  console.log(match,"this is blog----")
  return (
    <Box m={`${pxToRem(100)} 5%`}>
      <Grid container>
        <Grid md={1} xs={12} item>
          <Typography color="textSecondary">
            <Box className={classes.date}>
              <DateRangeSharpIcon color="secondary" fontSize="small" />
              { moment(blog?.createdAt).format('ll')}
            </Box>
          </Typography>
        </Grid>
        <Grid md={7} xs={12}>
          <Box margin="0 8%">
            <Box marginBottom={pxToRem(48)}>
              <Typography variant="h1" paragraph>
                {blog?.title}
              </Typography>{" "}
              <Box mb={pxToRem(48)} width="100%" height="auto">
                <img src={image} className={classes.image} alt="img" />
              </Box>
              <Typography variant="subtitle1" color="textSecondary" paragraph>
                {blog.subDescription}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph>
                {blog.description}
              </Typography>
            </Box>

            <Box className={classes.infoBottom}>
              <Typography color="textSecondary">
                <Box display="flex">
                  <FavoriteIcon color="secondary" fontSize="small" />
                  &nbsp; 11&nbsp;Likes &nbsp;
                </Box>
              </Typography>
              <Typography color="textSecondary">
                Share &nbsp;
                <FaFacebookF size={pxToRem(14)} />
                &nbsp;
                <FaTwitter size={pxToRem(14)} />
                &nbsp;
                <FaLinkedinIn size={pxToRem(14)} />
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid md={4} xs={12}>
          <Box className={classes.infoRight}>
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
          </Box>

          <Box className={classes.infoRight}>
            <Typography variant="h5" paragraph>
              WHERE TO FIND ME
            </Typography>
            {myInfos.map((info) => (
              <Link href={info.link}>
                <ListItem className={classes.list}>
                  <ListItemIcon className={classes.listIcon}>
                    <FiberManualRecordIcon className={classes.icon} />
                  </ListItemIcon>
                  <Typography variant="subtitle1" color="textSecondary">
                    {info.text}
                  </Typography>
                </ListItem>
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default inject("blogs")(observer(BlogDescription));
