import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const interventions = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/interventions' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    status: z.enum(['Fatto', 'In Corso', 'Da Decidere', 'In Diagnosi']),
    cost_parts: z.number().optional(),
    cost_labor: z.number().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { interventions };
