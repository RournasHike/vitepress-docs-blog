import { defineConfig } from "vitepress";
export default defineConfig({
  title: "其渊技术",
  // 主体配置
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: "../assets/favicon.ico",
    // 左侧菜单栏
    sidebar: {
	  "/": [
	     {
          text: "文档目录", // 分组标题
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
	  "/framework/": [
        // 匹配/spring/路径
		{
          text: "spring", // 分组标题
          collapsible: true, // 可折叠
          items: [
            { text: "spring中的IOC和DI", link: "/framework/spring/spring中的IOC和DI" },
			{ text: "spring中的AOP实现", link: "/framework/spring/spring中的AOP实现" },
			{ text: "spring中bean的循环依赖问题", link: "/framework/spring/spring中bean的循环依赖问题" },
			{ text: "spring中bean的生命周期", link: "/framework/spring/spring中bean的生命周期" },
			{ text: "spring中使用的设计模式", link: "/framework/spring/spring中使用的设计模式" },
			{ text: "spring的事务管理基础", link: "/framework/spring/spring的事务管理基础" },
			{ text: "spring的事务管理实现", link: "/framework/spring/spring的事务管理实现" },
			{ text: "spring的事件监听机制pubsub", link: "/framework/spring/spring的事件监听机制pubsub" },
			{ text: "spring常用注解", link: "/framework/spring/spring常用注解" },
			{ text: "springmvc组件", link: "/framework/spring/springmvc组件" },
          ]
        },
		{
          text: "spring boot", // 分组标题
          collapsible: true, // 可折叠
          items: [
            { text: "spring boot简介", link: "/framework/spring boot/index" },
          ]
        },
		{
          text: "spring cloud", // 分组标题
          collapsible: true, // 可折叠
          items: [
            { text: "spring cloud简介", link: "/framework/spring cloud/index" },
          ]
        },
		{
          text: "mybatis", // 分组标题
          collapsible: true, // 可折叠
          items: [
            { text: "mybatis动态sql", link: "/framework/mybatis/mybatis动态sql" },
			{ text: "mybatis批处理", link: "/framework/mybatis/mybatis批处理" },
			{ text: "mybatis代码生成器", link: "/framework/mybatis/mybatis代码生成器" },
			{ text: "mybatis缓存", link: "/framework/mybatis/mybatis缓存" },
			{ text: "mybatis批量CRUD操作", link: "/framework/mybatis/mybatis批量CRUD操作" },
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
        text: '框架',
        items: [
          { text: 'spring', link: '/framework/spring/index' },
          { text: 'spring boot', link: '/framework/spring boot/index' },
          { text: 'spring cloud', link: '/framework/spring cloud /index' }
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
