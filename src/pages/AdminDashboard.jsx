import { Box, Heading, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const AdminDashboard = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.isAdmin) {
      navigate("/admin/login");
    }
  }, [user, navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/admin/login");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <Box p={8}>
      <Heading mb={6}>Admin Dashboard</Heading>
      <VStack spacing={4}>
        <Button colorScheme="teal" onClick={() => navigate("/admin/manage-properties")}>Manage Properties</Button>
        <Button colorScheme="teal" onClick={handleLogout}>Logout</Button>
      </VStack>
    </Box>
  );
};

export default AdminDashboard;