import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux'
import { deletePost, editPost } from '../app/features/posts/postSlice'
import { removeUserLike } from '../app/features/user/userSlice'

import Like from "./Like";
import { isEmpty } from "./Utils";

const Post = ({ post }) => {
  const [editToggle, setEditToggle] = useState(false);
  const user = useSelector((state) => state.storeUsers.users);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    const postData = {
      img: post.img,
      title: e.target[0].value,
      author: user[0].pseudo,
      authorID: user[0].id,
      content: e.target[1].value,
      likes: post.likes,
      id: post.id,
    };
    dispatch(editPost(postData));
    setEditToggle(false);
  };

  useEffect(() => {
    if (editToggle) {
      const textarea = document.getElementsByClassName("mytextarea");
      textarea[1].style.height = `${textarea[1].scrollHeight}px`;
    }
  }, [editToggle]);

  return (
    <div className="post">
      {!isEmpty(user[0]) && user[0].pseudo === post.author && (
        <div className="edit-delete">
          <img
            onClick={() => setEditToggle(!editToggle)}
            src="./icons/edit.svg"
            alt="edit"
          />
          <img
            onClick={() => {
              dispatch(deletePost(post.id)) && dispatch(removeUserLike(post)) && setEditToggle(false);
            }}
            src="./icons/delete.svg"
            alt="delete"
          />
        </div>
      )}
      {editToggle ? (
        <form onSubmit={(e) => handleEdit(e)}>
          <textarea
            required
            maxLength="50"
            className="titleTxtArea"
            type="text"
            defaultValue={post.title}
          />
          <img src={post.img} className="post-img" alt="img-post" />
          <textarea
            required
            className="mytextarea"
            type="text"
            defaultValue={post.content}
          />
          <input type="submit" value="Valider modification" />
        </form>
      ) : (
        <>
          <h2 className="postTitle">{post.title}</h2>
          <img src={post.img} className="post-img" alt="img-post" />
					<div>
          	<p>{post.content}</p>
					</div>
				</>
      )}
      <div className="author">
        <h5>Auteur : {post.author} </h5>
        (
        <Like post={post} />)
      </div>
    </div>
  );
};

export default Post;
