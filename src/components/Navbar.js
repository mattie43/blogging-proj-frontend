import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <img
        className="navbar-icon"
        src="./blog_pic.png"
        alt="Blog Icon"
        height={45}
      />
      <div className="navbar-center">
        <Link
          to="/"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Home
        </Link>
        <Link
          to="/posts"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Posts
        </Link>
      </div>
      <div className="navbar-right">
        {!props.currentUser ? (
          <button onClick={() => props.setSignModal(true)}>
            Start Blogging
          </button>
        ) : (
          <button onClick={() => props.setNewPostModal(true)}>
            Write New Blog
          </button>
        )}
      </div>
    </nav>
  );
}
