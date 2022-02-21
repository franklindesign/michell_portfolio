import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";

import About from "./pages/About";
import Slides from "./pages/Work";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Header></Header>
          <Routes>
            <Route exact element={<Slides />} path="/"></Route>

            <Route exact element={<About />} path="/about"></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
