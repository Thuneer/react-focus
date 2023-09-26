import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { FrontPage } from "./pages/FrontPage/FrontPage";
import { ThemePage } from "./pages/ThemePage/ThemePage";
import { ChildOnePage } from "./pages/ChildOnePage/ChildOnePage";
import { ChildTwoPage } from "./pages/ChildTwoPage/ChildTwoPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage />}></Route>
        <Route path="/theme" element={<ThemePage />}></Route>
        <Route path="/theme/one" element={<ChildOnePage />}></Route>
        <Route path="/theme/two" element={<ChildTwoPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
