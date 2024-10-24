import {defineField, defineType} from 'sanity'

export const clientsType = defineType({
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'url',
      type: 'url',
    }),
  ],
})
