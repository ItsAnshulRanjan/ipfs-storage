import "./App.css";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import Navbar  from "./utils/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
