import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/users";

const store = configureStore({
  reducer: {
    //state
    userInfo: usersReducer,
  },
});

export default store;
