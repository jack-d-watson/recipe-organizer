import { Box, Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import RecipeCard from '@/components/RecipeCard/RecipeCard';
import { useEffect, useState } from 'react';

interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string;
}

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/recipes')
      .then((res) => res.json())
      .then(setRecipes)
      .catch(() => {
        // Fallback data when backend is not running
        setRecipes([
          {
            id: 1,
            title: 'Spaghetti Bolognese',
            description: 'Classic Italian meat sauce pasta',
            ingredients: ['spaghetti', 'ground beef', 'tomato sauce', 'onion', 'garlic'],
            instructions: 'Cook pasta. Brown beef with onion and garlic. Add tomato sauce. Combine.',
          },
          {
            id: 2,
            title: 'Caesar Salad',
            description: 'Crisp romaine with Caesar dressing',
            ingredients: ['romaine lettuce', 'parmesan', 'croutons', 'Caesar dressing'],
            instructions: 'Chop lettuce. Add dressing. Top with parmesan and croutons.',
          },
        ]);
      });
  }, []);

  return (
    <Box minH="100vh" bg="gray.50">
      <Box bg="teal.500" py={6} px={4} color="white">
        <Container maxW="container.lg">
          <Heading size="xl">🍳 Recipe Organizer</Heading>
          <Text mt={1} opacity={0.9}>
            Discover and manage your favourite recipes
          </Text>
        </Container>
      </Box>
      <Container maxW="container.lg" py={8}>
        <VStack spacing={6} align="stretch">
          <Heading size="md" color="gray.700">
            All Recipes
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
