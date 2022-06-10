import { useEffect } from "react";

export default function Posts(props) {
  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((resp) => resp.json())
      .then((data) => props.setAllPosts(data))
      .catch((err) => console.log(err));
  }, [props]);

  function displayPosts() {
    return props.allPosts.map((post) => {
      const d = new Date(parseInt(post.date)).toString().substring(0, 21);
      return (
        <div className="post-card" key={post._id}>
          <h1>{post.title}</h1>
          <p className="post-card-body">{post.body}</p>
          <div className="post-card-date">{d}</div>
        </div>
      );
    });
  }
  return (
    <div className="post-container">{props.allPosts && displayPosts()}</div>
  );
}
