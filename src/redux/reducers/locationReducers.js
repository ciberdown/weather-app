import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  longitude: null,
  latitude: null,
  error: null,
};

const reducers = {
  setLongitude: (state, action) => {
    state.longitude = action.payload;
  },
  setLatitude: (state, action) => {
    state.latitude = action.payload;
  },
  setError: (state, action) => {
    state.error = action.payload;
  },
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers,
});

export const { setLatitude, setLongitude, setError } = locationSlice.actions;
export default locationSlice.reducer;
