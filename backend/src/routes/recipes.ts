import { Router, Request, Response } from 'express';

export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string;
}

const recipes: Recipe[] = [
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
];

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.json(recipes);
});

router.get('/:id', (req: Request, res: Response) => {
  const recipe = recipes.find((r) => r.id === Number(req.params.id));
  if (!recipe) {
    res.status(404).json({ error: 'Recipe not found' });
    return;
  }
  res.json(recipe);
});

export default router;
