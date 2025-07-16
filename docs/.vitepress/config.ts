import { defineConfig } from "vitepress";
export default defineConfig({
  title: "其渊技术",
  // 主体配置
  themeConfig: {
    search: {
      provider: 'local'
    },
	footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    logo: "../assets/favicon.ico",
    // 左侧菜单栏
    sidebar: {
	  "/": [
	     {
          text: "学习目录", // 分组标题
          collapsible: true, // 可折叠
          items: [
			{ text: "IO", link: "/content/IO/index" },
			{ text: "JVM", link: "/content/JVM/index" },
			{ text: "JUC", link: "/content/JUC/index" },
			{ text: "Spring", link: "/content/Spring/index" },
			{ text: "Spring Boot", link: "/content/Spring Boot/index" },
			{ text: "Spring Cloud", link: "/content/Spring Cloud/index" },
			{ text: "DDD", link: "/content/DDD/index" },
			{ text: "Docker", link: "/content/Docker/index" },
			{ text: "Netty", link: "/content/Netty/index" },
			{ text: "MyBatis", link: "/content/MyBatis/index" }
			
          ],
        },
	  ],
      "/guide/": [
        // 匹配/guide/路径
        {
          text: "简介", // 分组标题
          collapsible: true, // 可折叠
          items: [
            { text: "什么是 VitePress？", link: "/guide/introduce/intro" },
			{ text: "VitePress使用场景", link: "/guide/introduce/deploy" },
			{ text: "vitepress定位", link: "/guide/introduce/position" }
          ],
        }
      ],
	  "/java/": [
        // 匹配/java/路径
		{
          text: "jvm", // 分组标题
          collapsible: true, // 可折叠
          items: [
            { text: "jvm简介", link: "/java/jvm/index" },
          ]
        },
		{
          text: "juc", // 分组标题
          collapsible: true, // 可折叠
          items: [
            { text: "juc简介", link: "/java/juc/index" },
          ]
        },
		{
          text: "io", // 分组标题
          collapsible: true, // 可折叠
          items: [
            { text: "io简介", link: "/java/io/index" },
          ]
        },
      ],
	  "/spring/": [
        // 匹配/spring/路径
		{
          text: "spring", // 分组标题
          collapsible: true, // 可折叠
          items: [
            { text: "spring简介", link: "/spring/spring/index" },
          ]
        },
		{
          text: "spring boot", // 分组标题
          collapsible: true, // 可折叠
          items: [
            { text: "spring boot简介", link: "/spring/spring boot/index" },
          ]
        },
		{
          text: "spring cloud", // 分组标题
          collapsible: true, // 可折叠
          items: [
            { text: "spring cloud简介", link: "/spring/spring cloud/index" },
          ]
        },
      ],
    },
    // 顶部菜单栏
    nav: [
      { text: "指南", link: "/guide/introduce/intro", activeMatch: "/guide/" },
	  {
        text: 'java',
        items: [
          { text: 'juc', link: '/java/juc/index' },
          { text: 'jvm', link: '/java/jvm/index' },
          { text: 'io', link: '/java/io/index' }
        ]
      },
	  {
        text: 'spring',
        items: [
          { text: 'spring', link: '/spring/spring/index' },
          { text: 'spring boot', link: '/spring/spring boot/index' },
          { text: 'spring cloud', link: '/spring/spring cloud /index' }
        ]
      },
      { text: 'Github', link: 'https://github.com/rournashike/' }
    ],
	footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  },
});
