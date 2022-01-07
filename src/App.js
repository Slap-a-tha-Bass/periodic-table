import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ElementView from "./views/ElementView";
import TableView from "./views/TableView";

const App = () => {
  console.log(
    "%c Used all styled components for this project...hope you like it!",
    "border: 1px solid white; padding: 10px; border-radius: 5px; color: white; background: -webkit-linear-gradient(left, green, purple); font-size: 20px; font-family: monospace"
  );
  console.log(
    "%c corey@deloach.dev",
    "border: 1px solid white; padding: 10px; border-radius: 5px; color: white; background: -webkit-linear-gradient(left, green, purple); font-size: 20px; font-family: monospace"
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<TableView />} />
        <Route path=":id" element={<ElementView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
