import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      index: true,
      required: true,
    },
    {
      name: 'color',
      type: 'text',
    },
    {
      name: 'subcategories',
      type: 'array',
      minRows: 0,
      maxRows: 8,
      fields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'slug',
          type: 'text',
          unique: true,
          index: true,
          required: true,
        },
      ],
    },
  ],
}
