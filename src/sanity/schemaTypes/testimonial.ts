import { defineField, defineType } from "sanity";

export const testimonialSchema = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "location",
      name: "location",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: "testimonial",
        title: "Testimonial",
        type: "text",
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: "rating",
        title: "Rating",
        type: "number",
        validation: (rule) => rule.required()
    })
  ],
});
