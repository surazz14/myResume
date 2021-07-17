import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { pxToRem } from "theme";

function Testimonies() {
  return (
    <Box>
      <Box borderBottom="solid 1px #e9e3e2">
        <Box lineHeight={pxToRem(30)}>
          <Typography variant="h2">Testimonies</Typography>
        </Box>
      </Box>
      <Box width="88%"></Box>
    </Box>
  );
}

export default Testimonies
