import { useEffect } from "react";
import avatar from "../images/avatar.svg";

export default function Posts(props) {
  const backgroundColors = ["#BC382E", "#FF8000", "#388D80", "#4583AA"];
  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((resp) => resp.json())
      .then((data) => props.setAllPosts(data))
      .catch((err) => console.log(err));
  }, [props]);

  function displayPosts() {
    let count = 0;
    return props.allPosts.map((post) => {
      const d = new Date(parseInt(post.date)).toString().substring(0, 21);
      count++;
      if (count > 3) count = 0;
      return (
        <div
          className="post-card"
          key={post._id}
          style={{ backgroundColor: backgroundColors[count] }}
        >
          <h1>{post.title}</h1>
          <p className="post-card-body">{post.body}</p>
          <div className="card-footer">
            <div className="avatar-container">
              <img src={avatar} alt="Avatar" />
              <div>{post.user.username}</div>
            </div>
            <div>{d}</div>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="post-container">{props.allPosts && displayPosts()}</div>
  );
}
