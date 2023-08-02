import { configureStore } from "@reduxjs/toolkit";
import weatherInfoReducer from './reducers/weatherInfoReducer'

const reducer = {
 weatherInfo: weatherInfoReducer 
};

const store = configureStore({
  reducer,
});

export default store;