export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ce79d68eeb03fc07060838e',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-4hbqxfd6',
                  apiId: 'c1bb8049-cc21-4a17-b295-80b630768242'
                },
                {
                  buildHookId: '5ce79d686873a4a5b443379e',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-56h9ynbz',
                  apiId: '7c9bcd85-3a25-434c-affa-e91aef687f17'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/charlsefrancis/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-56h9ynbz.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
