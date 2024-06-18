import { Container, Box, VStack, Heading, Text, Button, Image, Flex, IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const Index = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const storedProperties = JSON.parse(localStorage.getItem("properties")) || [];
    setProperties(storedProperties);
  }, []);

  return (
    <Container maxW="container.xl" p={0}>
      <Box bgImage="url('/images/hero-bg.jpg')" bgSize="cover" bgPos="center" height="100vh" display="flex" alignItems="center" justifyContent="center">
        <VStack spacing={4} textAlign="center" bg="rgba(0, 0, 0, 0.5)" p={8} borderRadius="md">
          <Heading color="white" fontSize="4xl">Welcome to Our Real Estate Company</Heading>
          <Text color="white" fontSize="xl">Find your dream home with us</Text>
          <Button colorScheme="teal" size="lg">Get Started</Button>
        </VStack>
      </Box>

      <Box p={8}>
        <Heading textAlign="center" mb={8}>Our Services</Heading>
        <Flex justify="space-around" wrap="wrap">
          <Box width="300px" textAlign="center" mb={8}>
            <Image src="/images/service1.jpg" borderRadius="md" mb={4} />
            <Heading size="md" mb={2}>Buying a Home</Heading>
            <Text>We help you find the perfect home for you and your family.</Text>
          </Box>
          <Box width="300px" textAlign="center" mb={8}>
            <Image src="/images/service2.jpg" borderRadius="md" mb={4} />
            <Heading size="md" mb={2}>Selling a Home</Heading>
            <Text>Get the best value for your property with our expert advice.</Text>
          </Box>
          <Box width="300px" textAlign="center" mb={8}>
            <Image src="/images/service3.jpg" borderRadius="md" mb={4} />
            <Heading size="md" mb={2}>Renting a Home</Heading>
            <Text>Find rental properties that meet your needs and budget.</Text>
          </Box>
        </Flex>
      </Box>

      <Box p={8}>
        <Heading textAlign="center" mb={8}>Posted Properties</Heading>
        <Flex justify="space-around" wrap="wrap">
          {properties.length > 0 ? (
            properties.map((property, index) => (
              <Box key={index} width="300px" textAlign="center" mb={8}>
                <Image src={property.photos[0]} borderRadius="md" mb={4} />
                <Heading size="md" mb={2}>{property.propertyName}</Heading>
                <Text>{property.address}</Text>
                <Text>${property.price}</Text>
              </Box>
            ))
          ) : (
            <Text>No properties posted yet.</Text>
          )}
        </Flex>
      </Box>

      <Box bg="gray.100" p={8}>
        <Heading textAlign="center" mb={8}>Contact Us</Heading>
        <Flex justify="space-around" wrap="wrap">
          <Box textAlign="center" mb={8}>
            <IconButton aria-label="Phone" icon={<FaPhone />} size="lg" isRound mb={4} />
            <Text>(123) 456-7890</Text>
          </Box>
          <Box textAlign="center" mb={8}>
            <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" isRound mb={4} />
            <Text>info@realestate.com</Text>
          </Box>
          <Box textAlign="center" mb={8}>
            <IconButton aria-label="Location" icon={<FaMapMarkerAlt />} size="lg" isRound mb={4} />
            <Text>123 Main St, Anytown, USA</Text>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;