import React from "react";
import Box from "@material-ui/core/Box";
import Education from "./Education/education";
import Experience from "./Experience/experience";
import Biography from "./Biography/biography";
import Contact from "./Contact/contact";
import { pxToRem } from "theme";

function Content() {
  return (
    <Box m={`${pxToRem(20)} 5%`}>
      <div id="resume-biography">
        <Biography />
      </div>
      <div id="resume-experience">
        <Experience />
      </div>
      <div id="resume-education">
        <Education />
      </div>
      <div id="resume-contact">
        <Contact />
      </div>
    </Box>
  );
}

export default Content;
