// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Black Me',
    tagline: 'Go big or go home',
    url: 'https://blackme2327.github.io',
    baseUrl: '/MyWiki/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'BlackMe2327', // Usually your GitHub org/user name.
    projectName: 'MyWiki ', // Usually your repo name.
    deploymentBranch: 'master',
    trailingSlash: false,


    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
        localeConfigs: {
            en: {
                htmlLang: 'en-GB',
            },
        },
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
            navbar: {
                title: 'Black Me',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.jpg',
                },
                items: [
                    {
                        type: 'localeDropdown',
                        position: 'right',
                    },
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: '编程知识',
                    },
                    {to: '/blog', label: '个人博客', position: 'left'},
                    {
                        href: 'https://github.com/BlackMe2327',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/BlackMe2327',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['java', 'c', 'sql'],
            }
        }),
};

module.exports = config;
