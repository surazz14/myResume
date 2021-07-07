import React, { useState, useEffect } from "react";

function Chart(props) {
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  useEffect(() => {
    setLabels(props.labels);
    setHeight(props.height);
    setWidth(props.width);
    setData(props.data);
  }, [props.labels, props.data, props.height, props.width]);

  const chartdata = {
    labels: labels,
    datasets: [
      {
        data: data,
        // backgroundColor: "White",
        borderColor: "green",
        fontColor: "green",
      },
    ],
    options: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          fontColor: "red",
        },
      },
      defaultFontColor: "red",
    },
  };

  return (
    labels.length > 0 && (
      <props.type
        type="horizontalBar"
        data={chartdata}
        width={width}
        height={height}
        options={{
          legend: {
            display: false,
          },
        }}
      />
    )
  );
}

export default Chart;
