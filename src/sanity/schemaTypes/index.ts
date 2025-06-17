import { type SchemaTypeDefinition } from 'sanity'
import { workschema } from './project'
import { teamschema } from './team'
import { testimonialSchema } from './testimonial'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [workschema,teamschema,testimonialSchema],
}
