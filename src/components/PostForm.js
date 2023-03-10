import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, setEditToggle } from "../app/features/posts/postSlice";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const user = useSelector((state) => state.storeUsers.users);
  const dispatch = useDispatch();

	function changeTxtAreaSize(isPost) {
		const textarea = document.getElementsByClassName("mytextarea");
		textarea[0].style.height = `${textarea[0].scrollHeight}px`;
		if (isPost)
			textarea[0].style.height = "80px";
	}

  function handleForm(e) {
    e.preventDefault();

    if (title && content) {
      const data =  {
        img : "https://picsum.photos/seed/" +  + Math.round(Math.random() * 200) + "/1500/400",
        title,
        content,
        author: user[0].pseudo,
        authorID: user[0].id,
        likes: 0,
      };
			dispatch(addPost(data));
      setTitle("");
      setContent("");
			changeTxtAreaSize(true) // reput normal size area
			dispatch(setEditToggle(false));
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={(e) => handleForm(e)}>
        <textarea
					required
					maxLength="50"
					className="titleTxtArea"
          type="text"
          placeholder="Titre du poste"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
					required
					className="mytextarea"
          placeholder="Message"
          onChange={(e) => {setContent(e.target.value); changeTxtAreaSize()}}
          value={content}
        ></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
