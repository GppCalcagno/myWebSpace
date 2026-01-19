import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; //libreria built-in che si occupa di 
import { z } from 'astro/zod'; //parcer


const noteCollection = defineCollection({
      loader: glob({ pattern: "**/*.md", base: "./src/content/notes/" }),
      
      schema: z.object({
        title:z.string(),
        tags: z.array(z.string()),
        date: z.coerce.date(),  // coerce converte stringhe in Date
        ispublic: z.boolean().default(false),

      })

})

//this must be written like this export const collections = {[name]: [Mycollection]}
export const collections = { notes: noteCollection};
