//imports
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//local imports
import Navbar from "../components/Navbar";
import SignModal from "../components/SignModal";
import NewPostModal from "../components/NewPostModal";
import Home from "../components/Home";
import Posts from "../components/Posts";
//stylesheets
import "./App.css";

function App() {
  const [signModal, setSignModal] = useState(false);
  const [newPostModal, setNewPostModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [allPosts, setAllPosts] = useState(null);

  return (
    <BrowserRouter>
      <Navbar
        currentUser={currentUser}
        setSignModal={setSignModal}
        setNewPostModal={setNewPostModal}
      />
      {signModal && (
        <SignModal
          setCurrentUser={setCurrentUser}
          setSignModal={setSignModal}
        />
      )}
      {newPostModal && (
        <NewPostModal
          setNewPostModal={setNewPostModal}
          currentUser={currentUser}
          allPosts={allPosts}
          setAllPosts={setAllPosts}
        />
      )}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/posts"
          element={<Posts allPosts={allPosts} setAllPosts={setAllPosts} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
