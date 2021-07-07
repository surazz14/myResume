import { types } from "mobx-state-tree";
const RainEntity = types.model("Rain", {
  "3h": types.optional(types.number, 0),
});

export default RainEntity;
