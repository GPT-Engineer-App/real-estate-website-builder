import { useState } from "react";
import { Container, Box, Heading, FormControl, FormLabel, Input, Button, VStack } from "@chakra-ui/react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess("Account created successfully!");
      setEmail("");
      setPassword("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container maxW="container.md" mt={8}>
      <Box p={8} borderWidth={1} borderRadius="md" boxShadow="lg">
        <Heading mb={6}>Register Account</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            {error && <Box color="red.500">{error}</Box>}
            {success && <Box color="green.500">{success}</Box>}
            <Button type="submit" colorScheme="teal" size="lg" width="full">
              Register
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default RegisterAccount;