export default {
  name: "techStacks",
  type: "document",
  title: "Tech Stacks",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
  ],
};
