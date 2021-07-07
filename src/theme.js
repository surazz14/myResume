import { createMuiTheme } from "@material-ui/core/styles";

const fontSize = 14;
const htmlFontSize = 16;
const coef = fontSize / 14;

export const pxToRem = (size) => {
  return `${(size / htmlFontSize) * coef}rem`;
};

const rm_purple = "#A0CADB";
const rm_skyBlue = "#a09de5";
const rm_orange = "#faf2f0";
const rm_yellow = "#F6D860";
const rm_light = "#FFFFFF";
const rm_dark = "#000000";
// const rm_pink = "#FDACB4";


const primaryColor1 = "#ff8a80"
const secondaryColor1 =  "#ff1744"

const primaryColor2 = "#e3f2fd"
const secondaryColor2 =  "#90caf9"

const primaryColor3 = "#f3e5f5"
const secondaryColor3 =  "#ce93d8"

const primaryColor4 = "#e0f2f1"
const secondaryColor4 =  "#80cbc4"

const primaryColor5 = "#f9fbe7"
const secondaryColor5 =  "#cddc39"


const primaryColor6 = "#ffe0b2"
const secondaryColor6 =  "#ffb74d"



const lightText = {
  primary: "rgb(17, 24, 39)",
  secondary: "rgb(107, 114, 128)",
  disabled: "rgb(149, 156, 169)",
};

const darkText = {
  primary: "rgb(255,255,255)",
  secondary: "rgb(229, 231, 235)",
  disabled: "rgb(156, 163, 175)",
};

export const themes= {
  purple: {
    palette: {
      background: {
        default: rm_purple,
      },
      primary: {
        main: rm_purple,
        light: rm_light,
        dark: rm_dark,
      },
      secondary: {
        main: "#ee7968",
        blue: "#87B6C1",
      },
      text: lightText,
      divider: "#e9e3e2",
    },
  },
  skyBlue: {
    palette: {
      background: {
        default: rm_skyBlue,
      },
      primary: {
        main: rm_skyBlue,
        light: rm_light,
        dark: rm_dark
      },
      secondary: {
        main: "#ee7968",
        blue: "#87B6C1",
      },
      text: darkText,
      divider: "#e9e3e2",
    },
  },
  orange: {
    palette: {
      background: {
        default: rm_orange,
      },
      primary: {
        main: rm_orange,
        light: "#FFFFFF",
        dark: "#000000",
      },
      secondary: {
        main: "#ee7968",
        blue: "#87B6C1",
      },
      text: lightText,
      divider: "#e9e3e2",
    },
  },
  yellow: {
    palette: {
      background: {
        default: rm_yellow,
      },
      primary: {
        main: rm_yellow,
        light: "#FFFFFF",
        dark: "#000000",
      },
      secondary: {
        main: "#ee7968",
        blue: "#87B6C1",
      },
      text: lightText,
      divider: "#e9e3e2",
    },
  },
  color1: {
    palette: {
      background: {
        default: primaryColor1,
      },
      primary: {
        main: primaryColor1,
        light: "#FFFFFF",
        dark: "#000000",
      },
      secondary: {
        main: secondaryColor1,
        blue: "#87B6C1",
      },
      text: lightText,
      divider: "#e9e3e2",
    },
  },
  color2: {
    palette: {
      background: {
        default: primaryColor2,
      },
      primary: {
        main: primaryColor2,
        light: "#FFFFFF",
        dark: "#000000",
      },
      secondary: {
        main: secondaryColor2,
        blue: "#87B6C1",
      },
      text: lightText,
      divider: "#e9e3e2",
    },
  },
  color3: {
    palette: {
      background: {
        default: primaryColor3,
      },
      primary: {
        main: primaryColor3,
        light: "#FFFFFF",
        dark: "#000000",
      },
      secondary: {
        main: secondaryColor3,
        blue: "#87B6C1",
      },
      text: lightText,
      divider: "#e9e3e2",
    },
  },
  color4: {
    palette: {
      background: {
        default: primaryColor4,
      },
      primary: {
        main: primaryColor4,
        light: "#FFFFFF",
        dark: "#000000",
      },
      secondary: {
        main: secondaryColor4,
        blue: "#87B6C1",
      },
      text: lightText,
      divider: "#e9e3e2",
    },
  },
  color5: {
    palette: {
      background: {
        default: primaryColor5,
      },
      primary: {
        main: primaryColor5,
        light: "#FFFFFF",
        dark: "#000000",
      },
      secondary: {
        main: secondaryColor5,
        blue: "#87B6C1",
      },
      text: lightText,
      divider: "#e9e3e2",
    },
  },
  color6: {
    palette: {
      background: {
        default: primaryColor6,
      },
      primary: {
        main: primaryColor6,
        light: "#FFFFFF",
        dark: "#000000",
      },
      secondary: {
        main: secondaryColor6,
        blue: "#87B6C1",
      },
      text: lightText,
      divider: "#e9e3e2",
    },
  },
};

const font = {
  light: 300,
  normal: 400,
  semiBold: 500,
  bold: 700,
};

const themeConfig = (value) =>
  createMuiTheme({
    ...themes[value],
    typography: {
      fontFamily: ["IBM Plex Mono", "monospace"].join(","),
      fontSize: 14,
      htmlFontSize: 16,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 400,
      fontWeightBold: 700,
      useNextVariants: true,

      h1: {
        fontSize: pxToRem(40),
        fontWeight: font.semiBold,
      },

      h2: {
        fontSize: pxToRem(40),
        fontWeight: font.normal,
        // fontFamily: '"Playfair Display",serif'
      },

      h3: {
        fontSize: pxToRem(30),
        fontWeight: font.normal,
      },

      h4: {
        fontSize: pxToRem(24),
        fontWeight: font.fontWeightMedium,
      },

      h5: {
        fontSize: pxToRem(22),
        fontWeight: font.fontWeightMedium,
      },

      h6: {
        fontSize: pxToRem(16),
        fontWeight: font.fontWeightMedium,
      },

      subtitle1: {
        fontSize: pxToRem(18),
        fontWeight: font.normal,
        lineHeight: 1.3,
      },

      subtitle2: {
        fontSize: pxToRem(14),
        fontWeight: font.normal,
      },

      body2: {
        fontSize: pxToRem(14),
        fontWeight: font.normal,
      },

      body1: {
        fontSize: pxToRem(16),
        fontWeight: font.normal,
      },

      caption: {
        fontSize: pxToRem(14),
        lineHeight: 1.3,
        fontWeight: font.normal,
      },
    },
  });

export default themeConfig
