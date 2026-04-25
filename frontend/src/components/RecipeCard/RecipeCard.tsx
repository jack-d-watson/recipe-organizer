import {
  Badge,
  Box,
  Heading,
  HStack,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';

export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string;
}

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      p={5}
      _hover={{ boxShadow: 'lg', transform: 'translateY(-2px)', transition: 'all 0.2s' }}
    >
      <VStack align="start" spacing={3}>
        <Heading size="md" color="teal.600">
          {recipe.title}
        </Heading>
        <Text color="gray.600" fontSize="sm">
          {recipe.description}
        </Text>
        <Box>
          <Badge colorScheme="teal" mb={2}>
            Ingredients
          </Badge>
          <HStack wrap="wrap" spacing={1}>
            {recipe.ingredients.map((ingredient) => (
              <Tag key={ingredient} size="sm" colorScheme="gray" mt={1}>
                {ingredient}
              </Tag>
            ))}
          </HStack>
        </Box>
        <Box>
          <Badge colorScheme="orange" mb={2}>
            Instructions
          </Badge>
          <Text fontSize="sm" color="gray.700">
            {recipe.instructions}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
