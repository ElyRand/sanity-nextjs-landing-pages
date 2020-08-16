export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f389246a068ceac3628bb31',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wrh547m1',
                  apiId: 'c2bb3df9-675a-4ed9-9828-dc880716b89b'
                },
                {
                  buildHookId: '5f389247c3f45fc808e0dbe2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hdat191g',
                  apiId: '5a9c67ae-c062-41f5-80bc-5e92d50cc9d9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Kuilto/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hdat191g.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
