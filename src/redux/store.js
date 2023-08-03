import { configureStore } from "@reduxjs/toolkit";
import weatherInfoReducer from "./reducers/weatherInfoReducer";
import locationReducer from "./reducers/locationReducers";

const reducer = {
  weatherInfo: weatherInfoReducer,
  location: locationReducer,
};

const store = configureStore({
  reducer,
});

export default store;
