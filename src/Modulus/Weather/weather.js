import React, { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import { Bar, Line } from "react-chartjs-2";
import Box from "@material-ui/core/Box";
import {Button} from '@material-ui/core'
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../../common/Component/Card/card";
import Loading from "../../common/Component/loading/loading";
import Chart from "../../common/Component/Chart/chart";
import Location from "../../common/utility/constant";

function Weather(props) {
  const [value, setValue] = React.useState("fahrenheit");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("kathmandu");

  const handleChange = (event) => {
    console.log('I am clicked----------------------------')
    setValue('celcius');
  };

  const onClickCard = (data) => {
    setData(data);
  };

  const {
    weatherCollection: {
      getWeather,
      getFiveDaysWeather,
      getAverageTemperture,
      getAverageVisibility,
      toCelcius,
      toFahrenheit,
    },
  } = props;

  const getWeatherData = async (e, value) => {
    setData([]);
    setLoading(true);
    setLocation(value);
    await getWeather(value);
    setLoading(false);
  };

  useEffect(() => {
    console.log(Location[0]);
    getWeatherData("test", location);
  }, [getWeather]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const changeData =()=>{
    console.log('I am on the way---------------------------------------------')
    setValue('celcius')
  }

  // if (loading) {
  //   return <Loading loading={loading} />;
  // }
  return (
    <>
      <Box ml="15%" mr="15%" mt="2%">
        <Autocomplete
          options={Location}
          value={location}
          id="location"
          onChange={getWeatherData}
          autoSelect={true}
          disableClearable={true}
          size={"small"}
          renderInput={(params) => (
            <TextField {...params} label="Location" margin="normal" />
          )}
        />
        <Box display="flex" justifyContent="center">
          <RadioGroup
            aria-label="temperture"
            className="test"
            name=""
            value={value}
            row={true}
            onChange={handleChange}
          >
            <FormControlLabel
              value="celcius"
              control={<Radio color="primary" />}
              label="Celcius"
            /> 
            <FormControlLabel
              value="fahrenheit"
              control={<Radio color="primary" />}
              label="Fahrenheit"
            />
          </RadioGroup>
        </Box>

        <Carousel responsive={responsive}>
          {getFiveDaysWeather()?.map((data, i) => (
            <Card
              key={i}
              date={data[0]?.dt_txt.slice(0, 10)}
              onClick={() => onClickCard(data)}
              avgTemp={
                value === "fahrenheit"
                  ? toFahrenheit(getAverageTemperture(data)) + "°F"
                  : toCelcius(getAverageTemperture(data)) + "°C"
              }
              avgVisibililty={getAverageVisibility(data)}
            />
          ))}
        </Carousel>
        <Box mt="5%">
        {/* <Typography align="center" variant="h5" component="h2">
            {data.length > 0
              ? `Weather forecast Chart of ${data[0]?.dt_txt.slice(
                  0,
                  10
                )} in ${value}`
              : "Select Card to see daily weather forecast chart"}
          </Typography> */}
          <br />
          {data.length > 0 && (
            <Chart
              type={Line}
              labels={data.map((data) => data.dt_txt.slice(11))}
              data={data.map((data) =>
                value === "fahrenheit"
                  ? toFahrenheit(data?.main?.temp)
                  : toCelcius(data?.main?.temp)
              )}
              height={30}
              width={80}
            />
          )}
          <input type ='text' className='in' onChange={handleChange}/>
          <Button onClick ={changeData} className="check">test</Button>

              <Typography>{value}</Typography>
        </Box>
      </Box>
    </>
  );
}

export default inject("weatherCollection")(observer(Weather));
