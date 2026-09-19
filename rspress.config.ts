import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '伏羲天团奥姆尼珀腾斯圣殿',
  description: '伏羲（Fuxi Legion）EVE Online 欧服军团文档站点。',
  lang: 'zh',
  icon: '/fuxi-logo.png',
  logo: {
    light: '/fuxi-logo.png',
    dark: '/fuxi-logo.png',
  },
  logoText: 'FUXI Legion',
  locales: [
    {
      lang: 'en',
      label: 'English',
      title: 'Fuxi Legion Omnipotence Temple',
      description: 'Documentation for Fuxi Legion in EVE Online.',
    },
    {
      lang: 'zh',
      label: '简体中文',
      title: '伏羲天团奥姆尼珀腾斯圣殿',
      description: '伏羲（Fuxi Legion）EVE Online 欧服军团文档站点。',
    },
  ],
  themeConfig: {
    editLink: {
      docRepoBaseUrl: 'https://github.com/XiaomaiTX/fuxi-docs/tree/master/docs',
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/XiaomaiTX/fuxi-docs',
      },
    ],
  },
});
