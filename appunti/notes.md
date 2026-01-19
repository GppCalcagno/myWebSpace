
# Notes: WHy collection  

[Link] (https://docs.astro.build/en/guides/content-collections/#/)

Collections stored locally in your project or on your filesystem can have entries of Markdown. Content collections are the best way to manage sets of content in any Astro project. Collections help to organize and query your documents, enable Intellisense and type checking in your editor, and provide automatic TypeScript type-safety for all of your content.

Content collections rely on TypeScript to provide Zod validation, Intellisense and type checking in your editor.

## HOW TO
To define collections, you must create a src/content.config.ts file in your project.
Individual collections use defineCollection() to configure:
- a loader for a data source (required)
- a schema for type safety (optional, but highly recommended!)

// {
//     id: 'note2',
//     data: {
//       title: 'The greatest post of all time',
//       tags: [Array],
//       date: 2025-12-01T00:00:00.000Z,
//       ispublic: true
//     },
//     body: '# Title\r\n' +
//       'Here is my _great_ post 2!\r\n' +
//       '\r\n' +
//       '## Subtitle\r\n' +
//       'this is under the subtitle',
//     filePath: 'src/content/notes/note2.md',
//     digest: 'affe97fbb0ab5d3f',
//     rendered: {
//       html: '<h1 id="title">Title</h1>\n' +
//         '<p>Here is my <em>great</em> post 2!</p>\n' +
//         '<h2 id="subtitle">Subtitle</h2>\n' +
//         '<p>this is under the subtitle</p>',
//       metadata: [Object]
//     },
//     collection: 'notes'
//   },
