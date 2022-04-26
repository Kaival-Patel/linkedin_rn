import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* AppBody */}
      <div className="app_body">
        <Sidebar />
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
