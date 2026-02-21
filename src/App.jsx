import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddCompetitor from "./pages/AddCompetitor";
import History from "./pages/History";
import Status from "./pages/Status";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-primary">
        <Navbar />

        <div className="max-w-6xl mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add" element={<AddCompetitor />} />
            <Route path="/history/:id" element={<History />} />
            <Route path="/status" element={<Status />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;