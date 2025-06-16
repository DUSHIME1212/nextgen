import { defineField, defineType } from "sanity";

export const workschema = defineType({
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "string",
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.min(1).max(200),
    }),
    defineField({
      name: "url",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "Objective",
      type: "string",
      title: "Objective",
    }),
    defineField({
      name: "heroImage",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "solution",
      type: "string",
      title: "solution",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "role",
      title: "Your Role",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "UX Designer", value: "ux_designer" },
          { title: "UI Designer", value: "ui_designer" },
          { title: "Product Designer", value: "product_designer" },
          { title: "Graphic Designer", value: "graphic_designer" },
          { title: "Researcher", value: "researcher" },
          { title: "Project Manager", value: "project_manager" },
          { title: "Other", value: "other" },
        ],
      },
      description: "Select all roles you played in this project",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "process",
      title: "Design Process",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        },
      ],
      description:
        "Detail your design process (research, wireframes, prototyping, etc.)",
    }),
    //impact
    defineField({
      name: "impact",
      type: "object",
      title: "Impact",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Impact Title",
          validation: (rule) => rule.required().min(3).max(50),
        }),
        defineField({
          name: "subtitle",
          type: "string",
          title: "Impact Subtitle",
          validation: (rule) => rule.required().min(5).max(50),
        }),
        defineField({
          name: "description",
          type: "string",
          title: "Impact Description",
          validation: (rule) => rule.required().min(10).max(200),
        }),
        defineField({
          name: "stats",
          type: "array",
          title: "Impact Stats",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "label",
                  type: "string",
                  title: "Stat Label",
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: "value",
                  type: "number",
                  title: "Stat Value",
                  validation: (rule) => rule.required(),
                }),
              ],
              preview: {
                select: {
                  title: "label",
                  subtitle: "value",
                },
              },
            },
          ],
          validation: (rule) => rule.required().min(1).max(5),
        }),
      ],
    }),
    //impact image
    defineField({
      name: "impactImage",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "personalVoices",
      type: "object",
      title: "Personal Voices",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Personal Voices Title",
          validation: (rule) => rule.required().min(3).max(50),
        }),
        defineField({
          name: "subtitle",
          type: "string",
          title: "Personal Voices Subtitle",
          validation: (rule) => rule.required().min(5).max(50),
        }),
        defineField({
          name: "description",
          type: "string",
          title: "Personal Voices Description",
          validation: (rule) => rule.required().min(10).max(200),
        }),
      ],
    }),
    // client information
    defineField({
      name: "clientInformation",
      type: "object",
      fields: [
        defineField({
          name: "name",
          type: "string",
          title: "Client Name",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "location",
          type: "string",
          title: "Client Location",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "industry",
          type: "string",
          title: "Client Industry",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "image",
          type: "image",
          title: "Client Image",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    //Optimization

    defineField({
      name: "optimization",
      type: "object",
      title: "Optimization",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Optimization Title",
          validation: (rule) => rule.required().min(3).max(50),
        }),
        defineField({
          name: "subtitle",
          type: "string",
          title: "Optimization Subtitle",
          validation: (rule) => rule.required().min(5).max(50),
        }),
        defineField({
          name: "description",
          type: "string",
          title: "Optimization Description",
          validation: (rule) => rule.required().min(10).max(200),
        }),
      ],
    }),
    //Awards
    defineField({
      name: "awards",
      type: "array",
      title: "Awards",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              type: "string",
              title: "Award Name",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "year",
              type: "number",
              title: "Award Year",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              type: "string",
              title: "Award Description",
            }),
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "year",
            },
          },
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Add relevant tags (e.g., mobile app, branding, e-commerce)",
    }),
  ],
});
