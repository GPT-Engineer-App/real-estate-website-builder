import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebaseConfig";

const Login = () => {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      window.location.href = "/";
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
      <VStack spacing={4}>
        <Heading>Login</Heading>
        <Button colorScheme="teal" onClick={handleLogin}>Login with Google</Button>
      </VStack>
    </Box>
  );
};

export default Login;