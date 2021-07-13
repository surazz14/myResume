import React from "react";
import classNames from "classnames";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { BsLink45Deg } from "react-icons/bs";
import { pxToRem } from "theme";

const useStyles = makeStyles((theme) => ({
  item: {
    minHeight: theme.typography.pxToRem(150),
  },
  connector: {
    backgroundColor: theme.palette.divider,
    opacity: "0.8",
    width: "1px",
  },
  contentLeft: {
    paddingRight: theme.typography.pxToRem(60),
    // paddingRight: theme.typography.pxToRem(60),
  },
  contentRight: {
    paddingLeft: theme.typography.pxToRem(60),
  },
  link: {
    color: theme.palette.secondary.main,
    fontStyle: "italic",
  },
  dot: {
    backgroundColor: theme.palette.divider,
  },
  icon: {
    paddingRight: theme.typography.pxToRem(5),
    color: theme.palette.secondary.main,
  },
}));

const infos = [
  {
    left: {
      name: "Zegal",
      period: "2020 sep - current",
    },
    right: {
      level: "Frontend Developer",
      courses: "React js, Redux, Mobx",
      link: { text: "https://zegal.com/", url: "https://zegal.com/" },
    },
  },
  {
    right: {
      name: "Tekkon Technology",
      period: "2019 sep - 2020 sep",
    },
    left: {
      level: "Full Stack Developer",
      courses: "React js, Node js, Python, Redux, GraphQl",
      link: {
        text: "https://tekkon.com.np/",
        url: "https://tekkon.com.np/",
      },
    },
  },

  {
    left: {
      name: "Paaila Technology",
      period: "2018 sep - 2019 sep",
    },
    right: {
      level: "Full Stack Developer",
      courses: "React js, Nodejs, python",
      link: {
        text: "https://paailatechnology.com/",
        url: "https://paailatechnology.com/",
      },
    },
  },
  {
    right: {
      name: "Prixa Technology",
      period: "2018 jun- 2018 sep",
    },
    left: {
      level: "Intern",
      courses: "React js, Python",
      link: {
        text: "https://prixa.net/",
        url: "https://prixa.net/",
      },
    },
  },
];
function Education() {
  const classes = useStyles();

  return (
    <Box>
      <Box borderBottom="solid 1px #e9e3e2">
        <Box lineHeight={pxToRem(30)}>
          <Typography variant="h2">Experience</Typography>
        </Box>
      </Box>
      <Box width="88%">
      <Hidden smDown>
        <Timeline align="alternate">
          {infos.map((data: any, index: any) => {
            const leftClassName = classNames({
              [classes.contentRight]: true,
              [classes.contentLeft]: false,
            });
            const rightClassName = classNames({
              [classes.contentRight]: true,
              [classes.contentLeft]: false,
            });
            const dotClassName = classNames({
              [classes.dot]: index === 0,
            });
            return (
              <TimelineItem className={classes.item}>
                <TimelineOppositeContent className={leftClassName}>
                  {data?.left?.name && (
                    <Typography variant="h5" paragraph>
                      {data.left.name}
                    </Typography>
                  )}
                  {data?.left?.period && (
                    <Typography color="textSecondary">
                      {data.left.period}
                    </Typography>
                  )}
                  {data?.left?.level && (
                    <Typography variant="h4" paragraph>
                      <b>{data?.left?.level}</b>
                    </Typography>
                  )}
                  {data?.left?.courses && (
                    <Typography color="textSecondary">
                      {data?.left?.courses}
                    </Typography>
                  )}
                  {data?.left?.link && (
                    <Box display="flex" alignItems="center" mt={pxToRem(21)}>
                      <BsLink45Deg
                        size={pxToRem(24)}
                        className={classes.icon}
                      />
                      <Link
                        className={classes.link}
                        href={data?.left?.link?.url}
                      >
                        {data?.left?.link?.text}
                      </Link>
                    </Box>
                  )}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot className={dotClassName} />
                  {index !== infos.length - 1 && (
                    <TimelineConnector className={classes.connector} />
                  )}
                </TimelineSeparator>
                <TimelineContent className={rightClassName}>
                  {data?.right?.name && (
                    <Typography variant="h5" paragraph>
                      {data.right.name}
                    </Typography>
                  )}
                  {data?.right?.period && (
                    <Typography color="textSecondary">
                      {data.right.period}
                    </Typography>
                  )}
                  {data?.right?.level && (
                    <Typography variant="h4" paragraph>
                      <b>{data?.right?.level}</b>
                    </Typography>
                  )}
                  {data?.right?.courses && (
                    <Typography color="textSecondary">
                      {data?.right?.courses}
                    </Typography>
                  )}
                  {data?.right?.link && (
                    <Box display="flex" alignItems="center" mt={pxToRem(21)}>
                      <BsLink45Deg
                        size={pxToRem(24)}
                        className={classes.icon}
                      />
                      <Link
                        className={classes.link}
                        href={data?.right?.link?.url}
                      >
                        {data?.right?.link?.text}
                      </Link>
                    </Box>
                  )}
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
        </Hidden>
        <Hidden mdUp>
          {infos.map((info) => (
            <Box mt={pxToRem(16)}>
              <Typography variant="h6">
                {info?.left.name || info?.right?.name}
              </Typography>
              <Typography color="textSecondary">
                {info?.left?.period || info?.right?.period}
              </Typography>
              <Typography color="textSecondary">
                <b>{info?.left?.level || info?.right?.level}</b>
              </Typography>
              <Typography color="textSecondary">
                {info?.left?.courses || info?.right?.courses}
              </Typography>
              <Box display="flex" alignItems="center" >
                <BsLink45Deg size={pxToRem(24)} className={classes.icon} />
                <Link
                  className={classes.link}
                  href={info?.left?.link?.url || info?.right?.link?.url}
                >
                  {info?.left?.link?.text || info?.right?.link?.text}
                </Link>
              </Box>
              <br />
            </Box>
          ))}
        </Hidden>
      </Box>
    </Box>
  );
}
export default Education;
