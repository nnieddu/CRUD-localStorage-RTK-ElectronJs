import { createSlice } from '@reduxjs/toolkit'

/// -----------------------------------------------
import database from "../../dbLocal.json";
var users = localStorage.getItem("users");
if (users === null)
  localStorage.setItem("users", JSON.stringify(database.users));
users = JSON.parse(localStorage.getItem("users"));
/// -----------------------------------------------

const initialState = {
	users,
}

export const UserSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    addUserLike: (state, action) => {
			const user = state.users.find((u) => u.id === action.payload.id);
      user.likes += 1;
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    removeUserLike: (state, action) => {
			const user = state.users.find((u) => u.id === action.payload.authorID);
      user.likes -= action.payload.likes;
      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
})

export const { addUserLike, removeUserLike } = UserSlice.actions

export default UserSlice.reducer