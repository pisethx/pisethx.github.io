import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const stringList = z.array(z.string()).optional()

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      type: 'page',
      source: '**',
      schema: z.object({
        badge: z.string().optional(),
        technologies: stringList,
        softwares: stringList,
        hardwares: stringList,
        others: stringList,
        stack: stringList,
        collections: stringList
      })
    })
  }
})
