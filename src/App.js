import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Items from "./components/Dashboard/Items";
import Categories from "./components/Dashboard/Categories";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Home />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/items" element={<Items/>} />
          <Route path="/categories" element={<Categories/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
