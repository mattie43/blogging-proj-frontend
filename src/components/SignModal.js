import { useState } from "react";

export default function SignModal(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(e) {
    if (e.target.type === "text") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const init = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, type: e.target.dataset.type }),
    };
    fetch("http://localhost:5000/users", init)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message) {
          console.log(data);
        } else {
          props.setCurrentUser(data);
          props.setSignModal(false);
        }
      });
  }

  return (
    <>
      <div
        className="sign-modal-background"
        onClick={() => props.setSignModal(false)}
      />
      <div className="sign-modal">
        <div>Sign Up or Sign In</div>
        <br />
        <form>
          <label>
            Username:{" "}
            <input type="text" value={username} onChange={handleChange} />
          </label>
          <br />
          <label>
            Password:{" "}
            <input type="password" value={password} onChange={handleChange} />
          </label>
          <br />
          <br />
          <div className="sign-modal-btn-container">
            <button data-type="signup" onClick={handleSubmit}>
              Sign Up
            </button>
            <button data-type="login" onClick={handleSubmit}>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
