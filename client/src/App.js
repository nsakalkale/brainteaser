import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/essentials/Navbar";
import Dashboard from "./components/Dashboard";
import Quiz from "./components/Quiz";
import Auth from "./components/Auth";

export default function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Routing />
      </div>
    </BrowserRouter>
  );
}

function Routing() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" ? <Navbar /> : ""}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
      </Routes>
    </>
  );
}
