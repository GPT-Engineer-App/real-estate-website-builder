import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index.jsx";
import PropertyForm from "./pages/PropertyForm.jsx"; // Import the new PropertyForm component

function App() {
  const [properties, setProperties] = useState([]);

  const addProperty = (property) => {
    setProperties([...properties, property]);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index properties={properties} />} />
        <Route path="/post-property" element={<PropertyForm addProperty={addProperty} />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
