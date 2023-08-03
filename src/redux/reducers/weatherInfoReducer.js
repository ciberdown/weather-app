import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isLoading: false,
  isError: false,
  error: null,
};
const reducers = {
  setData: (state, action) => {
    state.data = action.payload;
    state.isLoading = false;
    state.error = null;
    state.isError = false;
  },
  setLoadingTrue: (state, action) => {
    state.isLoading = true;
    state.error = null;
    state.isError = false;
  },
  setError: (state, action) => {
    state.error = action.payload;
    state.data = null;
    state.isLoading = false;
    state.isError = true;
  },
};

export const weatherSlice = createSlice({
  name: "weatherInfo",
  initialState,
  reducers,
});

export const { setData, setLoadingTrue, setError } = weatherSlice.actions;
export default weatherSlice.reducer;
