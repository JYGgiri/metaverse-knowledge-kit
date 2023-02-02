// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config();
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Klaytn Metaverse',
  tagline: 'Lets Build The Metaverse Together',
  url: process.env.URL,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: process.env.ORG, // Usually your GitHub org/user name.
  projectName: process.env.PROJECT, // Usually your repo name.
  customFields: {
    teamEmail: process.env.EMAIL,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
    path: 'i18n',
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    }
  },
  plugins: [[ require.resolve('docusaurus-lunr-search'), {
    languages: ['en', 'ko'] // language codes
  }]],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/klaytn/klaytn-metaverse-package-docs/edit/main',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/klaytn/klaytn-metaverse-package-docs/edit/main',
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
      image: 'img/klaytn.png',
      navbar: {
        title: 'Metaverse Docs',
        logo: {
          alt: 'Klaytn Logo',
          src: 'img/klaytn.png',
          target: '_self',
          width: 32,
          height: 42,
          className: 'custom-navbar-logo-class',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/klaytn/klaytn-metaverse-package-docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Metaverse',
                to: '/docs/intro',
              },
              {
                label: 'FAQs',
                href: 'https://docs.klaytn.foundation/misc/faq',
              },
              {
                label: 'Developer Hub',
                href: 'http://developer.klaytn.foundation/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'https://forum.klaytn.foundation/',
              },
              {
                label: 'Discord',
                href: 'https://discord.io/KlaytnOfficial',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/Klaytn_EN',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/klaytn_official',
              },
              {
                label: 'Blog',
                href: 'https://www.klaytn.foundation/blog/',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
