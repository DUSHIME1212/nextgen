import { defineField, defineType } from "sanity";

export const teamschema = defineField({
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Person name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Short Bio",
      type: "text",
      description: "A brief bio (50-150 words) about the team member",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "role",
      title: "Role in Company",
      type: "string",
      description:
        "The team member’s role (e.g., UX Designer, Project Manager)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Profile picture of the team member",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "Twitter", value: "twitter" },
                  { title: "Behance", value: "behance" },
                  { title: "Dribbble", value: "dribbble" },
                  { title: "GitHub", value: "github" },
                  { title: "Portfolio", value: "portfolio" },
                  { title: "Other", value: "other" },
                ],
              },
            },
            {
              name: "url",
              title: "URL",
              type: "url",
              validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }),
            },
          ],
        },
      ],
      description: "Social media or portfolio links for the team member",
    }),
  ],
});
