import React from "react";
import Routes from "./Routes";
import NavBar from "./components/NavBar/index"
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>

      <Router>
        <NavBar></NavBar>
        <Routes />
      </Router>
    </>

  );
}

export default App;
