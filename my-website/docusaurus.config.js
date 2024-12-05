// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const simplePlantUML = require("@akebifiky/remark-simple-plantuml");
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'System_for_blood_donors_doc',
  tagline: 'Документация',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://eiritel.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: 'system_for_blood_donors_doc',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'eiritel', // Usually your GitHub org/user name.
  projectName: 'system_for_blood_donors_doc', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

//подключаем плагин для drawio
plugins: [
  ['drawio', {}]
],

presets: [
  [
    'classic',
    /** @type {import('@docusaurus/preset-classic').Options} */
    ({
      docs: {
        sidebarPath: './sidebars.js',
        routeBasePath: 'docs',
        editUrl:
          'https://github.com/eiritel/system_for_blood_donors_doc',
        remarkPlugins: [simplePlantUML], //подключаем плагин для plantuml
      },
      blog: false,
      theme: {
        customCss: './src/css/custom.css',
      },
    }),
  ],
  // подключаем плагин для OPENAPI
  [
    'redocusaurus',
    {
      specs: [
        {
          id: 'donors_system',
          spec: 'api_specs/openapi.yaml',
        },
      ],
      theme: {
        primaryColor: '#1890ff',
      },
    }
  ],
],

themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'system_for_blood_donors_doc', //Название на навбаре
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg', //Логотип на навбаре
      },
      // тут можно настроить элементы навбара
      items: [
        {
          href: 'https://github.com/eiritel/system_for_blood_donors_doc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    // тут можно настроить элементы футера
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/eiritel',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
