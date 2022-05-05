import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* AppBody */}
      <div className="app_body">
        <Sidebar />
        <Feed />
        <Sidebar />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
