import React from "react";
import Box from "@material-ui/core/Box";
import Education from "./education/education";
import Experience from "./experience/experience";
import Biography from "./biography/biography";
import Blog from "./blog";
import Contact from "./contact/contact";
import { pxToRem } from "theme";

function Content() {
  return (
    <Box m={`${pxToRem(20)} 5%`}>
      <Box>
        <div id="resume-biography">
          <Biography />
        </div>
        <div id="resume-experience">
          <Experience />
        </div>
        <div id="resume-education">
          <Education />
        </div>
        <div id="resume-blog">
          <Blog />
        </div>
        <div id="resume-contact">
          <Contact />
        </div>
      </Box>
    </Box>
  );
}

export default Content;
