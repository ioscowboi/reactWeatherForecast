import { combineReducers } from 'redux';
// pass the weatherreducer into this 'global' reducer file before its export:
import WeatherReducer from './reducer_weather';


const rootReducer = combineReducers({
  // state: (state = {}) => state
  // keep track of the state of weather:
  weather: WeatherReducer
});

export default rootReducer;
