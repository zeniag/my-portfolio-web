export default {
  name: "skillSet",
  title: "Skill Set",
  type: "document",
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
      name: "skillSets",
      title: "Skill Sets",
      type: "array",
      of: [{ type: "reference", to: { type: "techStacks" } }],
    },
  ],
};
