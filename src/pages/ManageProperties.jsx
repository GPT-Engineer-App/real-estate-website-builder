import { Box, Heading, VStack, Text, Button, Image, Flex, IconButton } from "@chakra-ui/react";
import { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ManageProperties = ({ properties, setProperties }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedProperties = JSON.parse(localStorage.getItem("properties")) || [];
    setProperties(storedProperties);
  }, [setProperties]);

  const handleDelete = (index) => {
    const updatedProperties = properties.filter((_, i) => i !== index);
    setProperties(updatedProperties);
    localStorage.setItem("properties", JSON.stringify(updatedProperties));
  };

  const handleEdit = (index) => {
    navigate(`/admin/edit-property/${index}`);
  };

  return (
    <Box p={8}>
      <Heading mb={6}>Manage Properties</Heading>
      <Flex justify="space-around" wrap="wrap">
        {properties.length > 0 ? (
          properties.map((property, index) => (
            <Box key={index} width="300px" textAlign="center" mb={8}>
              <Image src={property.photos[0]} borderRadius="md" mb={4} />
              <Heading size="md" mb={2}>{property.propertyName}</Heading>
              <Text>{property.address}</Text>
              <Text>${property.price}</Text>
              <Flex justify="center" mt={4}>
                <IconButton aria-label="Edit" icon={<FaEdit />} size="sm" mr={2} onClick={() => handleEdit(index)} />
                <IconButton aria-label="Delete" icon={<FaTrash />} size="sm" onClick={() => handleDelete(index)} />
              </Flex>
            </Box>
          ))
        ) : (
          <Text>No properties posted yet.</Text>
        )}
      </Flex>
    </Box>
  );
};

export default ManageProperties;