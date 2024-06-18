import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./pages/Login.jsx";
import Index from "./pages/Index.jsx";
import PropertyForm from "./pages/PropertyForm.jsx"; // Import the new PropertyForm component

function App() {
  const [properties, setProperties] = useState([]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const addProperty = (property) => {
    setProperties([...properties, property]);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index properties={properties} setProperties={setProperties} user={user} />} />
        <Route path="/post-property" element={user ? <PropertyForm addProperty={addProperty} properties={properties} setProperties={setProperties} /> : <Login />} />
        <Route path="/edit-property/:index" element={user ? <PropertyForm addProperty={addProperty} properties={properties} setProperties={setProperties} /> : <Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
