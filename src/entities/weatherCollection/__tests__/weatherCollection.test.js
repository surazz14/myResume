import WeatherCollection from "../weatherCollection";
import firstDayMockData from "../../../__mockdata__/firstDayMockData";

describe("WeatherCollection", () => {
  it("should create entity", () => {
    const weatherCollection = WeatherCollection.create({});
    expect(weatherCollection.data);
  });

  it("getFiveDaysWeather should give five days weather", () => {
    const weatherCollection = WeatherCollection.create({});
    const getFiveDaysWeather = weatherCollection.getFiveDaysWeather();
    expect(getFiveDaysWeather.length).toBe(5);
  });

  it("getAverageTemperture give correct average temperture", () => {
    const weatherCollection = WeatherCollection.create({});
    const getAverageTemperture = weatherCollection.getAverageTemperture(
      firstDayMockData
    );
    expect(getAverageTemperture).toBe(293.09375);
  });

  it("getAverageVisibility give correct average visibility", () => {
    const weatherCollection = WeatherCollection.create({});
    const getAverageVisibility = weatherCollection.getAverageVisibility(
      firstDayMockData
    );
    expect(getAverageVisibility).toBe(7161.625);
  });

  it("toFahrenheit should convert to correct fahrenheit temperature", () => {
    const weatherCollection = WeatherCollection.create({});
    const fahrenheitTemp = weatherCollection.toFahrenheit(276);
    expect(fahrenheitTemp).toBe(String(37.13));
  });

  it("toCelcius should convert to correct celcius temperature", () => {
    const weatherCollection = WeatherCollection.create({});
    const celciusTemp = weatherCollection.toCelcius(276);
    expect(celciusTemp).toBe(String(2.85));
  });
});
