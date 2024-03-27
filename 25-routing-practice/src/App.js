import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import StudentDetailPage from "./pages/StudentDetailPage";
import "./styles/Common.scss";

function App() {
  const students = [{ name: "allie" }, { name: "codingon" }, { name: "jisoo" }];
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/student/:name" element={<StudentDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
