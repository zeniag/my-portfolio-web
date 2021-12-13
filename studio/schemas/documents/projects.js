export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
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
      name: "publishedAt",
      title: "Published At",
      type: "date",
      optons: {
        dateFormat: "MM-DD-YYYY",
      },
    },
    {
      name: "showProject",
      title: "Show Project",
      description: "Choose if you want the project to be shown in Projects",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "reference", to: { type: "techStacks" } }],
    },
    {
      name: "websiteLink",
      title: "Website Link",
      type: "url",
    },
    {
      name: "githubLink",
      title: "Github Link",
      type: "url",
    },
    {
      name: "relatedProjects",
      title: "Related Projects",
      type: "array",
      of: [{ type: "reference", to: { type: "projects" } }],
    },
  ],
};
