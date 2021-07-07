import { types, flow } from "mobx-state-tree";
import generalAction from "../generalActions";
import WeatherData from "../weatherData/weatherData";

const collection = types
  .model("User", {
    data: types.optional(types.array(WeatherData), []),
  })
  .actions(generalAction)
  .actions((self) => ({
    getWeather: flow(function* (value) {
      const weatherData = yield self.getRequest(
        `/data/2.5/forecast?q=${value}&APPID=f80cd5a2787b43bbf850e9820a9ebede&cnt=40`
      )();
      self.data = weatherData.list;
    }),
  }))
  .views((self) => ({
    getFiveDaysWeather() {
      let day1 = new Date();
      let day2 = new Date();
      day2.setDate(day2.getDate() + 1);
      let day3 = new Date();
      day3.setDate(day3.getDate() + 2);
      let day4 = new Date();
      day4.setDate(day4.getDate() + 3);
      let day5 = new Date();
      day5.setDate(day5.getDate() + 4);
      const firstDay = self.data.filter(
        (data) => data.dt_txt.slice(0, 10) === day1.toISOString().slice(0, 10)
      );
      const secondDay = self.data.filter(
        (data) => data.dt_txt.slice(0, 10) === day2.toISOString().slice(0, 10)
      );
      const thirdDay = self.data.filter(
        (data) => data.dt_txt.slice(0, 10) === day3.toISOString().slice(0, 10)
      );
      const fourthDay = self.data.filter(
        (data) => data.dt_txt.slice(0, 10) === day4.toISOString().slice(0, 10)
      );
      const fifthDay = self.data.filter(
        (data) => data.dt_txt.slice(0, 10) === day5.toISOString().slice(0, 10)
      );

      const data = [firstDay, secondDay, thirdDay, fourthDay, fifthDay];
      return data;
    },
    getAverageTemperture(weather) {
      const averageTemperture = weather.reduce(
        (a, b) => a + b.main.temp / weather.length,
        0
      );
      return averageTemperture;
    },
    getAverageVisibility(weather) {
      const averageVisibility = weather.reduce(
        (a, b) => a + b.visibility / weather.length,
        0
      );
      return averageVisibility;
    },
    toCelcius(temp) {
      return (temp - 273.15).toFixed(2);
    },
    toFahrenheit(temp) {
      return ((temp - 273.15) * 1.8 + 32).toFixed(2);
    },
  }));

export default collection;
