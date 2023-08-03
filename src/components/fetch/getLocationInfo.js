import {
  setLongitude,
  setLatitude,
  setError,
} from "../../redux/reducers/locationReducers";

function getLocationInfo(dispatch) {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch(setLatitude(position.coords.latitude));
        dispatch(setLongitude(position.coords.longitude));
      },
      (error) => {
        dispatch(
          setError({ message: "Error getting location:" + error.message })
        );
      }
    );
  } else {
    dispatch(
      setError({ message: "Geolocation is not available in this browser." })
    );
  }
}

export default getLocationInfo;
