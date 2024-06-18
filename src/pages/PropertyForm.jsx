import { useState } from "react";
import { Container, Box, Heading, FormControl, FormLabel, Input, Textarea, Button, Image, VStack } from "@chakra-ui/react";

const PropertyForm = () => {
  const [propertyName, setPropertyName] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [photos, setPhotos] = useState([]);

  const handlePhotoChange = (e) => {
    setPhotos([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ propertyName, address, price, photos });
  };

  return (
    <Container maxW="container.md" mt={8}>
      <Box p={8} borderWidth={1} borderRadius="md" boxShadow="lg">
        <Heading mb={6}>Post a Property</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="property-name" isRequired>
              <FormLabel>Property Name</FormLabel>
              <Input
                type="text"
                value={propertyName}
                onChange={(e) => setPropertyName(e.target.value)}
              />
            </FormControl>
            <FormControl id="address" isRequired>
              <FormLabel>Address</FormLabel>
              <Textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormControl>
            <FormControl id="price" isRequired>
              <FormLabel>Price</FormLabel>
              <Input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormControl>
            <FormControl id="photos">
              <FormLabel>Photos</FormLabel>
              <Input
                type="file"
                multiple
                accept="image/*"
                onChange={handlePhotoChange}
              />
              <Box mt={4} display="flex" flexWrap="wrap">
                {photos.length > 0 &&
                  Array.from(photos).map((photo, index) => (
                    <Image
                      key={index}
                      src={URL.createObjectURL(photo)}
                      alt={`Property Photo ${index + 1}`}
                      boxSize="100px"
                      objectFit="cover"
                      mr={2}
                      mb={2}
                    />
                  ))}
              </Box>
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="full">
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default PropertyForm;