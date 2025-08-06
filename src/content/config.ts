import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    date: z.string().transform((str) => new Date(str)),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    weight: z.number().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const categories = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    style: z.object({
      background: z.string().optional(),
      color: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  posts,
  categories,
}; 