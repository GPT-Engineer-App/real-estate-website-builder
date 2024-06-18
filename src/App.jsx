import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PropertyForm from "./pages/PropertyForm.jsx"; // Import the new PropertyForm component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/post-property" element={<PropertyForm />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
