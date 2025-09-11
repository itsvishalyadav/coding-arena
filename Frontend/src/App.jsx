import "./App.css";
import { Routes, Route} from "react-router-dom";
import Features from "./pages/Features.jsx";

function App() {

  return (
    <Routes>
      <Route path="/" element={<h1 className="text-xl">Home</h1>} />
      <Route path="/features" element={<Features />} />
    </Routes>
  );
}

export default App;  
