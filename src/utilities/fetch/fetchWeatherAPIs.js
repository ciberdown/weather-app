import axios from "axios";
import {
  setError,
  setData,
  setLoadingTrue,
} from "../../redux/reducers/weatherInfoReducer";

export const fetchWeather = async (url, dispatch) => {
  try {
    dispatch(setLoadingTrue());
    const res = await axios.get(url);
    dispatch(setData(res.data));
  } catch (err) {
    dispatch(setError(err));
  }
};
