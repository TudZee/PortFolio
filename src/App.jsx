import { useState, useEffect, createContext } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import FooterCom from "./components/Footer";

export const DataContext = createContext();

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://gitconnected.com/v1/portfolio/tudzee")
      .then((res) => setData(res.data));
  }, []);

  return (
    <DataContext.Provider value={data}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <FooterCom />
    </DataContext.Provider>
  );
}

export default App;
