import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import HourDetailsPage from "./pages/hourDetails";
import { useState } from "react";
import DaysForecast from "./pages/daysForecast";

function App() {
  const [input, setInput] = useState();
  const getInput = (value) => {
    setInput(value);
  };
  return (
    <Routes>
      <Route path="/" element={<Home getInput={getInput} input={input} />} />
      <Route path=":id" element={<HourDetailsPage input={input} />} />
      <Route path="daysforecast" element={<DaysForecast input={input} />} />
    </Routes>
  );
}

export default App;
