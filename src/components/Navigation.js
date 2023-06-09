import React, { useState } from "react";
import Login from "./Login";
import NewPost from "./NewPost";

const Navigation = (props) => {
  const { log, set, setposts, posts, page, setPage, setfil } = props;
  const [newPost, setNewPost] = useState(false);
  const [loggeduser, setloggeduser] = useState("");
  const [search, setSearch] = useState("");

  function searchText(e) {
    e.preventDefault();
    let filteredData = posts.filter(
      (post) => post.title.includes(search) || post.postText.includes(search)
    );
    setfil(filteredData);
  }
  return (
    <>
      <div id="navigationbar">
        <h1>Reddit</h1>
        <div id="searchBar">
          <input
            placeholder="Search here"
            value={search}
            onChange={(e) => {
              if (e.target.value === "") {
                setfil([]);
                setSearch(e.target.value);
              } else setSearch(e.target.value);
            }}
          />
          <button onClick={searchText}>
            <box-icon name="search"></box-icon>
          </button>
        </div>
        {log ? (
          <div>
            <button onClick={() => setNewPost(true)}>Add new post</button>
            <button onClick={() => set(false)}>Log out</button>
          </div>
        ) : (
          <button onClick={() => setPage(true)}>Log in</button>
        )}
      </div>
      {page && <Login set={setPage} setlog={set} setUser={setloggeduser} />}
      {newPost && (
        <NewPost
          set={setNewPost}
          setpost={setposts}
          user={loggeduser}
          data={posts}
        />
      )}
    </>
  );
};

export default Navigation;
