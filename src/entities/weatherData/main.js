import { types } from "mobx-state-tree";
const MainEntity = types.model("Main", {
  feels_like: types.optional(types.number, 0),
  grnd_level: types.optional(types.number, 0),
  humidity: types.optional(types.number, 0),
  pressure: types.optional(types.number, 0),
  sea_level: types.optional(types.number, 0),
  temp: types.optional(types.number, 0),
  temp_kf: types.optional(types.number, 0),
  temp_max: types.optional(types.number, 0),
  temp_min: types.optional(types.number, 0),
});

export default MainEntity;
