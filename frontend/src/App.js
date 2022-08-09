import "./App.css";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import Navbar from "./utils/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Verify from "./components/Verify";

const Default = () => {
  <div>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  </div>;
};
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <>
            <Route exact path="/" element={<Landing />} />
            <Route path="*" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/test" element={<Test />} />
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
