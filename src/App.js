import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Events from "./components/events/Events.jsx";
import Event from "./components/events/Event.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<Event />} />
      </Routes>
      <div className="h-10 bg-red-800"></div>
    </div>
  );
}

export default App;
