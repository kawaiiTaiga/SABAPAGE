import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'bd1'),
    exact: true
  },
  {
    path: '/blog/2025/07/15/3-things',
    component: ComponentCreator('/blog/2025/07/15/3-things', '763'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/experiments',
    component: ComponentCreator('/experiments', 'b53'),
    exact: true
  },
  {
    path: '/experiments/2025/08/11/vision-motor-loop',
    component: ComponentCreator('/experiments/2025/08/11/vision-motor-loop', '26a'),
    exact: true
  },
  {
    path: '/experiments/archive',
    component: ComponentCreator('/experiments/archive', '38a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '783'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '58f'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'b12'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', '698'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/cli',
                component: ComponentCreator('/docs/cli', '4c1'),
                exact: true
              },
              {
                path: '/docs/faq',
                component: ComponentCreator('/docs/faq', '489'),
                exact: true
              },
              {
                path: '/docs/getting-started',
                component: ComponentCreator('/docs/getting-started', 'eba'),
                exact: true
              },
              {
                path: '/docs/hardware',
                component: ComponentCreator('/docs/hardware', '3f8'),
                exact: true
              },
              {
                path: '/docs/integration',
                component: ComponentCreator('/docs/integration', '17b'),
                exact: true
              },
              {
                path: '/docs/tutorial/1-make-peripheral',
                component: ComponentCreator('/docs/tutorial/1-make-peripheral', '003'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/2-connect-core',
                component: ComponentCreator('/docs/tutorial/2-connect-core', 'ac8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/3-connect-claude',
                component: ComponentCreator('/docs/tutorial/3-connect-claude', '18b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '070'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
