import { Box, Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Box bg="teal.500" py={6} px={4} color="white">
        <Container maxW="container.lg">
          <Heading size="xl">Placeholder Heading</Heading>
          <Text mt={1} opacity={0.9}>
            Placeholder Text
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
