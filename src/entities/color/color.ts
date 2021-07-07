import { types } from "mobx-state-tree";
import generalAction from "../generalActions";

export enum themeEnum {
  purple = "purple",
  skyBlue = "skyBlue",
  orange = "orange",
  yellow = "yellow",
  color1 = "color1",
  color2 = "color2",
  color3="color3",
  color4= "color4",
  color5= "color5",
  color6= "color6"

}

const collection = types
  .model("Color", {
    themes: types.frozen([
      // themeEnum.purple,
      // themeEnum.skyBlue,
      themeEnum.orange,
      // themeEnum.yellow,
      themeEnum.color1,
      themeEnum.color2,
      themeEnum.color3,
      themeEnum.color4,
      themeEnum.color5,
      themeEnum.color6

    ]),
    selectedTheme: themeEnum.orange,
  })
  .actions(generalAction)
  .actions((self) => ({
    switchTheme(theme: string) {
      self.selectedTheme = theme;
    },
  }))
  .views((self) => ({}));

export default collection;
