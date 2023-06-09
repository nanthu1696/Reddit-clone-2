import React, { useState } from "react";

const NewPost = (props) => {
  const { set, setpost, user, data } = props;
  const [title, setTitle] = useState("");
  const [description, setdescrip] = useState("");
  function addPost() {
    let obj = {
      postedBy: user,
      title: title,
      postText: description,
      upVotes: 0,
      downVotes: 0
    };
    setpost((prevArray) => {
      const newArray = [...prevArray, obj];
      localStorage.setItem("posts", JSON.stringify(newArray));
      return newArray;
    });
    set(false);
  }
  return (
    <div className="popup">
      <div id="newpostcontainer">
        <span className="close" onClick={() => set(false)}>
          <box-icon type="solid" name="x-square" size="3.4em"></box-icon>
        </span>
        <form id="postform" action="#">
          <h2>Add new post:</h2>
          <div className="inputbox">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <label htmlFor="title">Title</label>
          </div>
          <div className="textbox">
            <label htmlFor="description">Description:</label>
            <textarea
              id="myTextArea"
              value={description}
              onChange={(e) => setdescrip(e.target.value)}
              required
            ></textarea>
          </div>
          <div id="buttonbox">
            <button onClick={() => set(false)}>Close</button>
            <button onClick={addPost}>Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
