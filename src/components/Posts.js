import React, { useEffect, useState } from "react";
import Post from "./Post";
const Posts = (props) => {
  const { alldata, setall, log, setPage, fildata } = props;
  const [data, setData] = useState(alldata);
  useEffect(() => {
    setData(fildata.length !== 0 ? fildata : alldata);
  }, [fildata]);
  useEffect(() => {
    setData(alldata);
  }, [alldata]);
  return (
    <div id="outContainer">
      <div id="inContainer">
        {data.length !== 0 ? (
          data.map((post, index) => (
            <Post
              key={index}
              index={index}
              data={post}
              log={log}
              setPage={setPage}
              set={setall}
            />
          ))
        ) : (
          <p id="notfound">No Post found!!</p>
        )}
      </div>
    </div>
  );
};

export default Posts;
