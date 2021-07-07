import { types } from "mobx-state-tree";
const WindsEntity = types.model("Winds", {
  speed: types.optional(types.number, 0),
  deg: types.optional(types.number, 0),
});

export default WindsEntity;
