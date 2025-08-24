import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState, //initialState: initialState
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },
});

//exporting while destructuring
export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
