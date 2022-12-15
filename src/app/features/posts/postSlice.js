import { createSlice } from "@reduxjs/toolkit";
// import { current } from "@reduxjs/toolkit";

/// -----------------------------------------------
import database from "../../dbLocal.json";
var posts = localStorage.getItem("posts");
if (posts === null)
  localStorage.setItem("posts", JSON.stringify(database.posts));
posts = JSON.parse(localStorage.getItem("posts"));
/// -----------------------------------------------

const initialState = {
  posts,
};

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    addPost: (state, action) => {
      action.payload.id = state.posts.length;
      state.posts.push(action.payload);
      localStorage.setItem("posts", JSON.stringify(state.posts));
    },
    editPost: (state, action) => {
      const post = state.posts.find((p) => p.id === action.payload.id);
      post.title = action.payload.title;
      post.content = action.payload.content;
      localStorage.setItem("posts", JSON.stringify(state.posts));
    },
    deletePost: (state, action) => {
	      state.posts = state.posts.filter((post) => post.id !== action.payload);
      localStorage.setItem("posts", JSON.stringify(state.posts));
    },
    addPostLike: (state, post) => {
      state.posts[post.payload.id].likes += 1;
      localStorage.setItem("posts", JSON.stringify(state.posts));
    },
  },
});

export const { addPost, editPost, deletePost, addPostLike } = postSlice.actions;

export default postSlice.reducer;
