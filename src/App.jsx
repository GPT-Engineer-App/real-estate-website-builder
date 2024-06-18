import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./pages/Login.jsx";
import Index from "./pages/Index.jsx";
import PropertyForm from "./pages/PropertyForm.jsx"; // Import the new PropertyForm component
import AdminDashboard from "./pages/AdminDashboard.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import ManageProperties from "./pages/ManageProperties.jsx";
import RegisterAccount from "./pages/RegisterAccount.jsx";

function App() {
  const [properties, setProperties] = useState([]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ ...user, isAdmin: user.email === "admin@example.com" }); // Assuming admin is identified by email
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
        <Route path="/register" element={<RegisterAccount />} />
        <Route path="/admin/dashboard" element={user && user.isAdmin ? <AdminDashboard /> : <AdminLogin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/manage-properties" element={user ? <ManageProperties properties={properties} setProperties={setProperties} /> : <AdminLogin />} />
        <Route path="/admin/edit-property/:index" element={user ? <PropertyForm addProperty={addProperty} properties={properties} setProperties={setProperties} /> : <AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;