// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome to Alsys Playbook',
  tagline: 'by Alsys LTD',
  url: 'https://alsysoft.github.io',
  baseUrl: '/alsys-admin-playbook/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.npmico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Alsysoft', // Usually your GitHub org/user name.
  projectName: 'alsys-admin-playbook', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      navbar: {
        //title: 'Alsys Ltd.',
        logo: {
          alt: 'My Site Logo',
          src: 'img/icon_ok.svg', 
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'docsVersionDropdown',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        logo: {
          alt: 'Meta Open Source Logo',
          src: 'img/favicon.ico',
        },
        style: 'dark',
        links: [
          {
            title: 'Websites',
            items: [
              {
                label: 'alsys.io',
                href: 'https://www.alsys.io/',
              },
              {
                label: 'alsysoft.com',
                href: 'https://www.alsysoft.com/',
              },
            ],
          },
          {
            title: 'Contact Us',
            items: [
              {
                label: 'UK +44 7522 585 427',
                href:'tel:+44%207522%20585%20427',              
              },
              {
                label: 'RO +40 756 196 206',
                href:'tel:+40%20756%20196206',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'linkedin',
                href:'https://www.linkedin.com/company/alsys-ltd/',              
              },
              {
                label: 'facebook',
                href:'https://www.facebook.com/alsysoft',
              },
            ],
          },
//          {
//            title: 'More',
//            items: [
//              {
//                label: 'GitHub',
//                href: 'https://github.com/tehciaktm/alsys_admin_playbook',
//              },
//            ],
//          },
        ],

        copyright: `© Copyright - Alsys Ltd. All rights reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;



