import { types } from "mobx-state-tree";
import Clouds from "./clouds";
import Main from "./main";
import Rain from "./rain";
import Sys from "./sys";
import Wind from "./wind";
const WeatherDataEntity = types.model("WeatherData", {
  dt: types.optional(types.number, 0),
  dt_txt: "",
  pop: types.optional(types.number, 0),
  visibility: types.optional(types.number, 0),
  clouds: types.maybeNull(types.optional(Clouds, {})),
  main: types.maybeNull(types.optional(Main, {})),
  rain: types.maybeNull(types.optional(Rain, {})),
  sys: types.maybeNull(types.optional(Sys, {})),
  wind: types.maybeNull(types.optional(Wind, {})),
});

export default WeatherDataEntity;
