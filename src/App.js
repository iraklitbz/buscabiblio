import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Home';
import Table from './pages/Table/Table';

export default function App() {
  return (
    <div className="App">
       <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/sensor" element={<Table/>}/>
             </Routes>
        </Router>
    </div>
  );
}