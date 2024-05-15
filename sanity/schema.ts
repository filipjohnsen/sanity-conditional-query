import { defineField, defineType, type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    defineType({
      name: "post",
      title: "Post",
      type: "document",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Title",
        }),
      ],
    }),
  ],
};
