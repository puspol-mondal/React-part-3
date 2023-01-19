import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About/About";
import "./App.css";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Service from "./Service/Service";
import Shop from "./Shop/Shop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/service" element={<Service />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
