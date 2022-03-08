import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import Table from './pages/Table/Table';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sensor" element={<Table />} />
      </Routes>
    </div>
  );
}