import React from "react";
import Content from "./content";
import { inject, observer } from "mobx-react";

function Profile() {

  return (
    <>
      <Content />
    </>
  );
}

export default inject("color")(observer(Profile));
