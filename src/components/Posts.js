import { useState, useEffect } from "react";

export default function Posts() {
  const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((resp) => resp.json())
      .then((data) => setAllPosts(data));
  }, []);

  function displayPosts() {
    return allPosts.map((post) => {
      const d = Date(post.date).toString().substring(0, 16);
      return (
        <div className="post-card" key={post._id}>
          <h1>{post.title}</h1>
          <p className="post-card-body">{post.body}</p>
          <div className="post-card-date">{d}</div>
        </div>
      );
    });
  }
  return <div className="post-container">{allPosts && displayPosts()}</div>;
}
