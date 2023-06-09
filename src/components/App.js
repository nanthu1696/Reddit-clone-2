import React, { useState } from "react";
import "../styles/App.css";
import Navigation from "./Navigation";
import Posts from "./Posts";
const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [page, setPage] = useState(false);
  const [filpost, setFilPost] = useState([]);
  const [allposts, setAllPosts] = useState(
    JSON.parse(localStorage.getItem("posts")) || [
      {
        postedBy: "Kunal",
        title: "Random post",
        postText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        upVotes: 3,
        downVotes: 1
      },
      {
        postedBy: "Kunal",
        title: "Random post",
        postText:
          "Lorem Ipsum is simply dummy text of the printing and zxzjjy asdhbb asdbjhbajhbkubas khbkubasx typesetting industrydscbsjdbjsbcsdcbsdjcbkjbsdkj cnlskdcnlksdcnsdklnm.",
        upVotes: 3,
        downVotes: 1
      }
    ]
  );

  return (
    <div id="main">
      <Navigation
        log={isLogged}
        set={setIsLogged}
        setposts={setAllPosts}
        setfil={setFilPost}
        posts={allposts}
        page={page}
        setPage={setPage}
      />
      <Posts
        alldata={allposts}
        setall={setAllPosts}
        fildata={filpost}
        log={isLogged}
        setPage={setPage}
      />
    </div>
  );
};

export default App;
