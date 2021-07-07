import WeatherCollection from './weatherCollection/weatherCollection'
import Color from './color/color'
const store = {
  weatherCollection: WeatherCollection.create({}),
  color: Color.create({})
};

window.app = store;

export default store;
