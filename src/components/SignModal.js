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
    console.log(username, password);
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
        <form onSubmit={handleSubmit}>
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
            <button>Sign Up</button>
            <button>Sign In</button>
          </div>
        </form>
      </div>
    </>
  );
}
