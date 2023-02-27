import "./App.css";
import Home from "./pages/Home";
import DetailsPage from "./pages/DetailsPage";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<DetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
