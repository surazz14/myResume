import React from "react";
import { inject, observer } from "mobx-react";
import { useQuery } from "@apollo/client";
import ColorSwitch from "modulus/colorSwitcher/colorSwitcher";
import Loading from "common/component/loading/loading";
import { GET_ALL_BLOGS } from "common/utility/graphql/query";
import Path from "./route/route";
import ReactGA from "react-ga";

function initializeAnalytics() {
  const trackingId = "UA-177748145-1"; // Replace with your Google Analytics tracking ID
  ReactGA.initialize(trackingId);
  ReactGA.pageview("/");
}

function App({ blogs }) {
  const [loading, setLoading] = React.useState(true);
  const { data } = useQuery(GET_ALL_BLOGS);

  React.useEffect(() => {
    if (data) {
      blogs.setBlogs(data?.blogs?.blogs);
    }
  }, [data, blogs]);

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
  initializeAnalytics();
  return (
    <>
      <Path />
      <ColorSwitch />
    </>
  );
}

export default inject("blogs")(observer(App));
