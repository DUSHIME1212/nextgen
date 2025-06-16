import { type SchemaTypeDefinition } from 'sanity'
import { workschema } from './project'
import { teamschema } from './team'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [workschema,teamschema],
}
