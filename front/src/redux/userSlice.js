import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  userAppointments: [],
};

export const userSlice = createSlice({
  name: "actualUser",
  initialState,
  reducers: {
    setUserData: (actualUser, action) => {
      actualUser.userData = action.payload;
    },
    setUserAppointments: (actualUser, action) => {
      actualUser.userAppointments = action.payload;
    },
    setLogout: (actualUser, action) => {
      actualUser.userData = action.payload;
    },
  },
});

export const { setLogout, setUserAppointments, setUserData } =
  userSlice.actions;
export default userSlice.reducer;
