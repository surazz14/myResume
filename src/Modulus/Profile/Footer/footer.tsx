import React from "react";
import Box from "@material-ui/core/Box";
import { pxToRem } from "theme";

function Footer() {
  return (
    <>
      <Box
        m={` ${pxToRem(70)} ${pxToRem(84)} ${pxToRem(35)} 0`}
        display="flex"
        justifyContent="flex-end"
      >
        © 2021 Qode Interactive, All Rights Reserved
      </Box>
    </>
  );
}

export default Footer;
