import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import Home from "./Pages/HomePage/Home";
import Trade from "./Pages/Trade/Trade";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/Trade/*"} element={<Trade />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
