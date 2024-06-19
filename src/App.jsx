import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CreateTransaction from "./pages/CreateTransaction.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/create-transaction" element={<CreateTransaction />} />
      </Routes>
    </Router>
  );
}

export default App;