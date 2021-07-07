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

const info = [
  {
    left: {
      name: "KATHMANDU UNIVERSITY",
      period: "2014 - 2018",
    },
    right: {
      level: "BACHELOR IN COMPUTER SCIENCE AND ENGINEERING",
      courses:
        "Courses: C, C++, Data Structure and Algorithm , Database,Compiler Design, Cloud Computing, Principle of ProgramingLanguage",
      link: { text: "https://ku.edu.np/", url: "https://ku.edu.np/" },
    },
  },
  {
    right: {
      name: "ORCHID HIGHER SECONDARY SCHOOL",
      period: "2012 - 2014",
    },
    left: {
      level: "HIGHER SECONDARY, SCIENCE",
      courses: "Courses: Physic, Math, Chemistry, Computer, English, Nepali",
      link: {
        text: "http://orchidcollege.edu.np/",
        url: "http://orchidcollege.edu.np/",
      },
    },
  },

  {
    left: {
      name: "MODERN ERA HIGHER SECONDARY SCHOOL",
      period: "2014 - 2018",
    },
    right: {
      level: "SCHOOL LEVEL",
      courses:
        "Courses: Nepali, English, Science, Social, Math, Enviroment,Grammer",
      link: {
        text: "https://www.mehss.edu.np/",
        url: "https://www.mehss.edu.np/",
      },
    },
  },
  {
    right: {
      name: "SUNSHINE Boarding English SCHOOL",
      period: "2007 - 2010",
    },
    left: {
      level: "PRIMARY LEVEL",
      courses:
        "Courses: Nepali, English, Science, Social, Math, Enviroment,Grammer",
      link: {
        text: "https://edusanjal.com/school/sunshine-secondary-english-school/",
        url: "https://sunshineschool.com.np/",
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
          <Typography variant="h2">Education</Typography>
        </Box>
      </Box>
      <Box width="88%">
        <Timeline align="alternate">
          {info.map((data: any, index: any) => {
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
                    <Typography variant="h5" paragraph >
                    {data.left.name}
                    </Typography>
                  )}
                  {data?.left?.period && (
                    <Typography color="textSecondary">
                      {data.left.period}
                    </Typography>
                  )}
                  {data?.left?.level && (
                    <Typography variant="h5" paragraph>
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
                      <BsLink45Deg size={pxToRem(24)} className={classes.icon} />
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
                  {index !== info.length - 1 && (
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
                    <Typography variant="h5" paragraph>
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
                      <BsLink45Deg size={pxToRem(24)} className={classes.icon} />
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
      </Box>
    </Box>
  );
}
export default Education;
