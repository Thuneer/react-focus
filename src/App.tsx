import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { FrontPage } from "./pages/FrontPage/FrontPage";
import { ThemePage } from "./pages/ThemePage/ThemePage";
import { ChildOnePage } from "./pages/ChildOnePage/ChildOnePage";
import { ChildTwoPage } from "./pages/ChildTwoPage/ChildTwoPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { DashboardPage } from "./pages/DashboardPage/DashboardPage";
import { Bar } from "./components/Bar/Bar";

function App() {
  return (
    <div className="App">
      <Bar />
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage />}></Route>
        <Route path="/theme" element={<ThemePage />}></Route>
        <Route path="/theme/one" element={<ChildOnePage />}></Route>
        <Route path="/theme/two" element={<ChildTwoPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
