import { CircularProgress } from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import getLocationInfo from "../../utilities/uses/getLocationInfo";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../utilities/fetch/fetchWeatherAPIs";
import { getWeatherUrlByLocation } from "../../utilities/fetch/getWeatherUrl";
import { useQuery } from "react-query";
import { setLoadingTrue } from "../../redux/reducers/weatherInfoReducer";
import { useEffect } from "react";
import { setLocalLocation } from "../../utilities/uses/handleLocalstorage.";
import "./textInput.scss";

export default function TextInput({ city, setCity, isLoading }) {
  useEffect(() => {
    weatherInfo && clickLocationHandle();
  }, []);
  const dispatch = useDispatch();
  const { location, weatherInfo } = useSelector((state) => state);
  useQuery(
    city + location.longitude,
    () =>
      fetchWeather(
        getWeatherUrlByLocation(location.longitude, location.latitude),
        dispatch
      ),
    {
      enabled: location.longitude !== null,
      onUnmount: (data) => {
        // Cancel the ongoing query if it's still active
        if (data.cancel) {
          data.cancel();
        }
      },
    }
  );
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      dispatch(setLoadingTrue());
      setCity(event.target.value);
      setLocalLocation(event.target.value);
      event.target.value = "";
    }
  };

  const clickLocationHandle = () => {
    dispatch(setLoadingTrue());
    getLocationInfo(dispatch);
    setCity("");
  };

  return (
    <div className="header-container">
      <input
        id="textInput"
        onKeyDown={handleKeyDown}
        style={{
          fontFamily: "Raleway",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(20px)",
          borderRadius: "10px",
          margin: 2,
          fontSize: "22px",
          border: 0,
          padding: "10px",
          color: "white",
          width: "100%",
        }}
        placeholder="Enter Location"
      />
      <MyLocationIcon
        onClick={clickLocationHandle}
        sx={{
          color: "white",
          position: "absolute",
          right: "-.8rem",
          top: ".9rem",
          cursor: "pointer",
        }}
      />
      {isLoading && (
        <CircularProgress
          size={35}
          thickness={4}
          sx={{
            position: "absolute",
            right: "1rem",
            top: "7px",
            color: "white",
            zIndex: 10,
          }}
        />
      )}
    </div>
  );
}
