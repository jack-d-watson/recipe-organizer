import type { Meta, StoryObj } from '@storybook/react';
import RecipeCard from './RecipeCard';

const meta: Meta<typeof RecipeCard> = {
  title: 'Components/RecipeCard',
  component: RecipeCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    recipe: {
      id: 1,
      title: 'Spaghetti Bolognese',
      description: 'Classic Italian meat sauce pasta',
      ingredients: ['spaghetti', 'ground beef', 'tomato sauce', 'onion', 'garlic'],
      instructions: 'Cook pasta. Brown beef with onion and garlic. Add tomato sauce. Combine.',
    },
  },
};

export const Salad: Story = {
  args: {
    recipe: {
      id: 2,
      title: 'Caesar Salad',
      description: 'Crisp romaine with Caesar dressing',
      ingredients: ['romaine lettuce', 'parmesan', 'croutons', 'Caesar dressing'],
      instructions: 'Chop lettuce. Add dressing. Top with parmesan and croutons.',
    },
  },
};
