import React, { useState } from "react";
import "boxicons";

const Post = (props) => {
  let { data, log, setPage, set, index } = props;
  const [clicks, setClicks] = useState({
    no: 0,
    by: ""
  });
  function upVote() {
    if (log) {
      if (clicks.no === 0) {
        setClicks({ by: "upvote", no: 1 });
        set((prevArray) => {
          const newArray = [...prevArray];
          newArray[index] = {
            ...newArray[index],
            upVotes: newArray[index].upVotes + 1
          };
          localStorage.setItem("posts", JSON.stringify(newArray));
          return newArray;
        });
      } else if (clicks.no === 1) {
        if (clicks.by === "downvote") {
          setClicks({ by: "upvote", no: 1 });
          set((prevArray) => {
            const newArray = [...prevArray];
            newArray[index] = {
              ...newArray[index],
              upVotes: newArray[index].upVotes + 1,
              downVotes: newArray[index].downVotes - 1
            };
            localStorage.setItem("posts", JSON.stringify(newArray));
            return newArray;
          });
        }
      }
    } else {
      setPage(true);
    }
  }
  function downVote() {
    if (log) {
      if (clicks.no === 0) {
        setClicks({ by: "downvote", no: 1 });
        set((prevArray) => {
          const newArray = [...prevArray];
          newArray[index] = {
            ...newArray[index],
            downVotes: newArray[index].downVotes + 1
          };
          localStorage.setItem("posts", JSON.stringify(newArray));
          return newArray;
        });
      } else if (clicks.no === 1) {
        if (clicks.by === "upvote") {
          setClicks({ by: "downvote", no: 1 });
          set((prevArray) => {
            const newArray = [...prevArray];
            newArray[index] = {
              ...newArray[index],
              downVotes: newArray[index].downVotes + 1,
              upVotes: newArray[index].upVotes - 1
            };
            localStorage.setItem("posts", JSON.stringify(newArray));
            return newArray;
          });
        }
      }
    } else {
      setPage(true);
    }
  }
  return (
    <div className="singlepost">
      <div className="voteContainer">
        <div className="buttonContainer">
          <button onClick={upVote}>
            <box-icon type="solid" name="up-arrow"></box-icon>
          </button>
          <span>{data.upVotes}</span>
        </div>
        <div className="buttonContainer">
          <button onClick={downVote}>
            <box-icon type="solid" name="down-arrow"></box-icon>
          </button>
          <span>{data.downVotes}</span>
        </div>
      </div>
      <div className="postText">
        <h3>{data.title}</h3>
        <p>{data.postText}</p>
      </div>
    </div>
  );
};

export default Post;
