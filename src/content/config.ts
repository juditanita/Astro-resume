import { defineCollection, z } from 'astro:content';
const projectCollection = defineCollection({type:"content",
schema: z.object({
    title: z.string(),
    github: z.string(),
    url: z.string(),
    image: z.string(),

    tags: z.array(z.string()),
  }),

})


export const collections = {
    project: projectCollection,
  };