import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CreateTransaction from "./pages/CreateTransaction.jsx";
import Pricing from "./pages/Pricing.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/create-transaction" element={<CreateTransaction />} />
        <Route exact path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;