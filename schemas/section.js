export default {
  // Computer Name
  name: 'section',
  // visible title
  title: 'Section',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      description: 'Content here',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{
        type: 'pic' 
      }]
    },
  ],
};
