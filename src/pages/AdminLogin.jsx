import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
      <VStack spacing={4}>
        <Heading>Admin Login</Heading>
        <Button colorScheme="teal" onClick={handleLogin}>Login with Google</Button>
      </VStack>
    </Box>
  );
};

export default AdminLogin;