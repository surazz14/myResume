import React from "react";
import NavBar from "./NavBar/navBar";
import Content from "./Content/content";
import Footer from "./Footer/footer";
import Loading from "common/Component/loading/loading";
import { inject, observer } from "mobx-react";

function Profile() {
  const [loading, setLoading] = React.useState(true);

  const [progress, setProgress] = React.useState(0);
  const [value, setValue] = React.useState(1996);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress > 100 ? 0 : prevProgress + 4
      );
      setValue((prevValue) => prevValue + 1);
    }, 100);

    if (progress > 100) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  React.useEffect(() => {
    if (progress >= 100) {
      setLoading(false);
    }
  }, [progress]);

  if (loading)
    return (
      <Loading loading={loading} size={100} value={value} progress={progress} />
    );

  return (
    <>
      <NavBar />
      <Content />
      <Footer />
    </>
  );
}

export default inject("color")(observer(Profile));
