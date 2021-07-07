import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import InputAdornment from "@material-ui/core/InputAdornment";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import { pxToRem } from "theme";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
    "&:hover": {
      borderColor: "none",
    },
  },
  input: {
    padding: `${theme.typography.pxToRem(27)} ${theme.typography.pxToRem(17)}`,
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.light,
    padding: `${theme.typography.pxToRem(18)} ${theme.typography.pxToRem(50)}`,
    fontSize: theme.typography.pxToRem(18),
    fontWeight: 700,
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `solid 1px ${theme.palette.secondary.main}`,
    },
  },
  inputOnFocus: {
    // dont remove this object
    border: `solid 2px ${theme.palette.secondary.main}`,
  },
  label: {
    color: theme.palette.primary.dark,
    transform: "translate(14px, 30px)",
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: theme.palette.primary.dark,
    "&:hover": {
      borderColor: theme.palette.secondary.main,
    },
  },
  //Custom underline
  inputUnderline: {
    "&:before, &:after": {
      transition: "all .4s ease-in",
      borderBottomWidth: `${theme.typography.pxToRem(1)} !important`,
      opacity: 1,
    },

    "&:before": {
      borderBottomColor: theme.palette.divider + " !important",
    },

    "&:after": {
      borderBottomColor: theme.palette.primary.dark + " !important",
    },

    //For white input
    "&.--white": {
      //Forcely disabling mui default underline onHover
      "&:before, &:after": {
        borderBottomColor: "#fff !important",
        opacity: ".8",
      },

      "&:before": {
        opacity: ".8",
      },

      "&:after": {
        opacity: "1",
      },
    },

    //For white input
    "&.--error": {
      //Forcely disabling mui default underline onHover
      "&:before, &:after": {
        borderBottomColor: theme.palette.error.main + " !important",
      },
    },

    //hidden
    "&.--hidden": {
      "&:before, &:after": {
        transition: "opacity .2s ease-in",
        opacity: 0,
        borderBottom: "none",
      },
    },

    "&.--disabled": {
      "&:before": {
        borderBottomColor: "transparent !important",
      },
    },

    "&.--outlined": {
      border: `${theme.typography.pxToRem(1)} solid transparent`,
      borderColor: theme.palette.divider,
      borderRadius: theme.typography.pxToRem(3),
      padding: `0 ${theme.typography.pxToRem(4)} 0 ${theme.typography.pxToRem(
        8
      )}`,

      "&:hover": {
        borderColor: "black",
      },
    },

    "&$inputOnFocus": {
      "&.--outlined": {
        borderColor: theme.palette.primary.dark + " !important",
      },
    },
  },
}));

function Contact() {
  const classes = useStyles();

  return (
    <>
      <Box borderBottom="solid 1px #e9e3e2" marginBottom={pxToRem(56)}>
        <Box lineHeight={pxToRem(30)}>
          <Typography variant="h2">Get In touch</Typography>
        </Box>
      </Box>
      <Box>
        <Grid container spacing={10}>
          <Grid item xs={12} md={3}>
            <Typography variant="h5" paragraph>
              <BorderColorIcon color="secondary" fontSize="small" /> CONTACT ME
            </Typography>
            <Typography color="textSecondary" paragraph>
              Want to help your business grow & you feel that my expertise
              aligns with your business vision? Drop me a line! Or you can just
              say hi.{" "}
            </Typography>
            <Typography color="textSecondary">Suraj Dhakal</Typography>
            <Typography color="textSecondary">
              surajdhakal427@gmail.com
            </Typography>

            <Typography color="textSecondary">977 9862155911</Typography>
            <Typography color="textSecondary">biratnagar, Nepal</Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container spacing={4}>
              <Grid xs={12} md={6}  item>
                {/* @ts-ignore */}
                <TextField
                  className={classes.textField}
                  id="name"
                  size="medium"
                  variant="outlined"
                  label="Name"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PermIdentityIcon color="secondary" />
                      </InputAdornment>
                    ),
                    // className: classes.input,
                    classes: {
                      input: classes.input,
                      focused: classes.inputOnFocus,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  InputLabelProps={{
                    className: classes.label,
                    variant: 'outlined',
                  }}
                />
              </Grid>
              <Grid xs={12} md={6}  item>
                {/* @ts-ignore */}
                <TextField
                  className={classes.textField}
                  id="name"
                  margin="none"
                  variant="outlined"
                  label="Email"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <MailOutlineIcon color="secondary" />
                      </InputAdornment>
                    ),

                    classes: {
                      input: classes.input,
                      focused: classes.inputOnFocus,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  InputLabelProps={{
                    className: classes.label,
                  }}
                />
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={4}>
              <Grid xs={12} md={6} item>
                {/* @ts-ignore */}
                <TextField
                  className={classes.textField}
                  id="phone"
                  margin="none"
                  variant="outlined"
                  label="Phone"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PhoneOutlinedIcon color="secondary" />
                      </InputAdornment>
                    ),
                    // className: classes.input,
                    classes: {
                      input: classes.input,
                      focused: classes.inputOnFocus,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  InputLabelProps={{
                    className: classes.label,
                  }}
                />
              </Grid>
              <Grid xs={12} md={6}  item>
                {/* @ts-ignore */}
                <TextField
                  className={classes.textField}
                  id="Subject"
                  variant="outlined"
                  margin="none"
                  label="Subject"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmojiObjectsOutlinedIcon color="secondary" />
                      </InputAdornment>
                    ),
                    classes: {
                      input: classes.input,
                      focused: classes.inputOnFocus,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  InputLabelProps={{
                    className: classes.label,
                  }}
                />
              </Grid>
            </Grid>
            <br />
            <TextField
              className={classes.textField}
              id="Subject"
              variant="outlined"
              margin="none"
              rows="7"
              label="Your Messages..."
              multiline
              InputProps={{
                classes: {
                  input: classes.input,
                  focused: classes.inputOnFocus,
                  notchedOutline: classes.notchedOutline,
                },
              }}
              InputLabelProps={{
                className: classes.label,
              }}
            />
            <br />
            <br />
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Contact;
