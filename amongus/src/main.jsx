import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../routes/Layout";
import Gallery from "../routes/Gallery";
import Create from "../routes/Create";
import Edit from "../routes/Edit"
// import DetailView from '../routes/DetailView';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<App />} />
          <Route index={false} path="/CrewmateGallery/" element={<Gallery />} />
          <Route index={false} path="/CreateCrewmate/" element={<Create />} />
          <Route index={false} path="/EditCrewmate/:id" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
)
