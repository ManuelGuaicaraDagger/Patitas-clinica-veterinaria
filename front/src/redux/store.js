import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlices";

const store = configureStore({
  reducer: {
    actualUser: userSlice.reducer,
  },
});

export default store;
