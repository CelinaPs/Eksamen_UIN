//import stilfilen for appen.
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import EventPage from "./components/EventPage";
import CategoryPage from "./components/Dashboard";

//Definer hovedkomponenten App
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
