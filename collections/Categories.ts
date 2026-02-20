import { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",
  fields: [
    {
      name: "category name",
      type: "text",
      required: true,
    },
  ],
};
