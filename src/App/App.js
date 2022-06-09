//imports
import { useState } from "react";
//personal imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import SignModal from "../components/SignModal";
import Home from "../components/Home";
import Posts from "../components/Posts";
//stylesheets
import "./App.css";

function App() {
  const [signModal, setSignModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <BrowserRouter>
      {signModal && <SignModal setSignModal={setSignModal} />}
      <Navbar currentUser={currentUser} setSignModal={setSignModal} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
