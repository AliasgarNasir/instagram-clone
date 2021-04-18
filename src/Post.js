import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="alinasir"
          src="C:\Users\nasir\Desktop\ali\reactjs_course\instagram-clone\src\static\images\avatar\1.JPG"
        />
        <h3>{username}</h3>
      </div>

      {/* header -> avatar + username*/}

      <img className="post__image" src={imageUrl} />

      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
    </div>
  );
}

export default Post;
