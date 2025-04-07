import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Busy Blog',

  projectId: 'd3gsrzw0',
  dataset: 'production',
  unstable_noLoaderAutoUpdate: true,
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
