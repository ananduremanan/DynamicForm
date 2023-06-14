import { useState } from "react";
import "./App.css";
import DynamicForm from "./components/DynamicForm";
import formData from "./data/data.json";

function App() {
  return (
    <div className="App">
      <DynamicForm formData={formData} />
    </div>
  );
}

export default App;
