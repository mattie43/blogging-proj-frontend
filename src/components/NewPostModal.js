import { useState } from "react";

export default function NewPostModal(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleChange(e) {
    if (e.target.type === "text") {
      setTitle(e.target.value);
    } else {
      setBody(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const init = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: props.currentUser._id, title, body }),
    };
    fetch("http://localhost:5000/posts", init)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message) {
          console.log(data);
        } else {
          props.setAllPosts([...props.allPosts, data]);
          props.setNewPostModal(false);
        }
      });
  }

  return (
    <>
      <div
        className="sign-modal-background"
        onClick={() => props.setNewPostModal(false)}
      />
      <div className="sign-modal">
        <div>Write your new post</div>
        <br />
        <form>
          <label>
            Title:
            <br />
            <input type="text" value={title} onChange={handleChange} />
          </label>
          <br />
          <label>
            <br />
            Body:
            <br />
            <textarea type="textarea" value={body} onChange={handleChange} />
          </label>
          <br />
          <br />
          <div className="sign-modal-btn-container">
            <button onClick={handleSubmit}>Create Post</button>
          </div>
        </form>
      </div>
    </>
  );
}
