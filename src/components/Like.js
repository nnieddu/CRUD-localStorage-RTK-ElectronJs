import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostLike } from "../app/features/posts/postSlice";
import { addUserLike } from"../app/features/user/userSlice";

const Like = ({ post }) => {
  const users = useSelector((state) => state.storeUsers.users);
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(addPostLike(post));

    if (post.authorID === users[0].id) {
      const userData = {
        pseudo: users[0].pseudo,
        id: users[0].id,
      };
      dispatch(addUserLike(userData));
    }
  };

  return (
    <div onClick={handleLike}>
      <img src="./icons/thumb.svg" className="thumb" alt="thumb up" />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
