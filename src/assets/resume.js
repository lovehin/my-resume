const resume = {
  avatar: "avatar.jpeg", // 头像
  name: "许立轩", // 姓名
  title: "前端工程师", // 职位
  married: "已婚", // 婚姻状况
  nation: "汉族", // 民族
  gender: "男", // 性别
  city: "云南昆明", // 城市
  degree: "本科", // 学历
  native_place: "广东肇庆", // 籍贯
  birthday: new Date("1996-04-09"), // 出生日期
  height: "171cm", // 身高
  weight: "65kg", // 体重
  workyear: 2018, // 开始工作年
  wechat: "ACE2487", // 微信
  qq: "707032337", // QQ
  email: "froginwe11@163.com", // 邮箱
  website: "https://lovehin.github.io/my-resume", // 个人网站
  phone: "18468069469", // 电话
  intro: `- 具备扎实的编程基础和丰富的项目经验，热爱编程，喜欢钻研技术。
- 在后端开发方面，我熟练掌握 Python、Java、JS/TS 和 Go语言，以及 Django、Flask、Gin、Spring 和 SpringBoot 等主流后端框架。
  
- 在前端开发方面，我掌握 Vue/React 双技术栈：
  - Vue 生态：Vue-Router、Vuex、Pinia、Uniapp、Element-Plus、uView
  - React 生态：React-Router、MobX、Redux
  - 跨平台开发：微信小程序、Uniapp 多端开发
  - 样式方案：熟悉 SCSS、PostCSS、WindiCSS、Unocss 等现代化 CSS 方案
  - 工程化：掌握 Webpack 和 Vite 构建工具配置

- 在爬虫开发方面，我具备深厚的技能储备，熟练使用 Scrapy、requests-html、XPath 选择器、CSS 选择器等工具和技术，擅长反爬虫策略的研究和应对。

- 除此之外，我还具备丰富的数据库操作经验，熟悉 MySQL、Sqlite3、Redis、Neo4j、Elasticsearch 和 MongoDB 等数据库技术。

- 在运维方面，我熟悉 Docker、Linux、宝塔和 Nginx 等相关技术。

- 在语言能力方面，我能说流利的粤语和普通话，能听懂大部分昆明话，并具备一定的英语沟通能力。`, // 介绍 markdown
  // 教育经历
  education: {
    school: "广东石油化工学院", // 学校
    major: "计算机科学与技术", // 专业
    location: "广东茂名", // 地点
    start_date: new Date("2014-09-01"), // 开始时间
    end_date: new Date("2018-06-01"), // 开始时间
    logo: "school_logo.png", // 学校logo
  },
  // 爱好
  hobbies: [
    {
      value: "看书",
      icon: "icon-park-outline:read-book",
    },
    {
      value: "编程",
      icon: "ri:macbook-line",
    },
    {
      value: "乒乓球",
      icon: "mingcute:pingpong-line",
    },
    {
      value: "山地车",
      icon: "cil:bike",
    },
    {
      value: "音乐",
      icon: "simple-line-icons:earphones",
    },
    {
      value: "旅游",
      icon: "icon-park-outline:vacation",
    },
  ],
  // 证书
  certificates: ["英语四级", "C1驾驶证"],
  // 工作经历
  experiences: [
    {
      company: "昆明择新网络科技有限公司",
      title: "后端开发工程师",
      start_date: new Date("2018-06-01"),
      end_date: new Date("2019-03-01"),
      intro: `我的主要工作职责是Django后端开发，主要涉及在线教育、游戏代练、藏语音乐等MVC网站的开发。此外，我还负责开发缅甸清关系统的PyQT桌面软件。`,
    },
    {
      company: "上海思佩驰科技有限公司云南分公司", // 公司
      title: "全栈开发工程师", // 职位
      start_date: new Date("2019-04-01"), // 开始时间
      end_date: new Date("2023-06-01"), // 结束时间
      intro: `在前期工作中，我主要从事爬虫方面的工作，负责招投标和招聘等信息的抓取，设计Scrapy爬虫群的整体架构，并进行部署和日常维护等工作。

在中间阶段，我曾负责开发招投标专家抽取系统的后端，并参与青春昆明自动授章程序的开发。
      
而后期，我主要担任Vue前端开发的角色，负责招聘、心理健康、青少年服务以及公司官网等多个网站/小程序/App的页面开发。同时，还承担了一部分Spring后端接口的开发工作。`, // 介绍 markdown
    },
    {
      company: "昆明埃舍尔科技有限公司", // 公司
      title: "前端开发工程师", // 职位
      start_date: new Date("2023-07-01"), // 开始时间
      end_date: null, // 结束时间
      intro: `担任前端开发工程师，主要负责多个数字化平台的前端开发与维护工作。这些平台涵盖了畜牧、花卉、销售管理、数字人视频生成和AI艺术创作等多个行业领域。运用React、Vue、TypeScript等技术栈，参与开发了后台管理系统、小程序、Web应用等功能模块，确保平台的高效稳定运行，推动了产业链的智能化升级。`, // 介绍 markdown
    },
  ],
  // 项目经历
  projects: [
    {
      name: "摩笔马良", // 项目名称
      role: "前端开发", // 角色
      content: `AI艺术创作平台，支持文生图/图生图功能，集成Stable Diffusion等主流模型。采用React+Unocss技术栈实现，网页端：使用React18+TypeScript构建，采用MobX进行状态管理，React-Router实现路由控制，Unocss原子化样式方案。小程序端：基于原生小程序开发，复现了网页端上的全部功能`, // 项目介绍
      link: "https://maliang.mthreads.com/", // [链接]
      start_date: new Date("2023-07-01"), // 开始时间
      end_date: new Date("2023-12-01"), // 结束时间
    },
    {
      name: "2D、3D播报数字人", // 项目名称
      role: "前端开发", // 角色
      content: `AIGC口播视频制作，数字人口播视频生成系统，主要功能模块包括，网页端：React18+Redux Toolkit技术栈，核心功能：支持文本/语音输入，自动生成带数字人讲解的视频，提供多模板选择`, // 项目介绍
      start_date: new Date("2023-09-01"), // 开始时间
      end_date: new Date("2024-02-01"), // 结束时间
    },
    {
      name: "云牛通", // 项目名称
      role: "前端开发", // 角色
      content: `云牛通，作为领先的数字畜牧全产业链平台，致力于利用先进数字化技术助力肉牛产业发展。我们针对传统养殖模式中的痛点问题，提供全面解决方案，推动养殖业的科学化与智慧化进程。在本项目中我主要负责后台管理系统及小程序的功能维护与优化，确保平台高效稳定运行，助力产业链各环节实现智能化升级`, // 项目介绍
      start_date: new Date("2024-03-01"), // 开始时间
      end_date: new Date("2025-03-01"), // 结束时间
    },
    {
      name: "销售管理系统", // 项目名称
      role: "前端开发", // 角色
      content: `全渠道销售管理解决方案：小程序端：客户拜访签到、订单即时上报。Web后台：Vue2+ElementUI，开发智能业绩分析、客户画像系统，实现与ERP系统数据对接，开发自动化报表生成模块`, // 项目介绍
      start_date: new Date("2024-06-01"), // 开始时间
      end_date: new Date("2024-10-01"), // 结束时间
    },
    {
      name: "云花通", // 项目名称
      role: "前端开发", // 角色
      content: `云花通旨在为云南花卉产业提供便捷、安全、高效的支付结算服务，助力花卉产业链的转型升级。在此项目中，我主要负责管理后台以及小程序的功能维护`, // 项目介绍
      start_date: new Date("2024-03-01"), // 开始时间
      end_date: new Date("2025-03-01"), // 结束时间
    },
    {
      name: "有标网", // 项目名称
      role: "爬虫开发", // 角色
      content: `有标网是一家推送招投标采购信息服务平台，汇聚了全国各地的招标采购信息，并专注于互联网+招投标行业的大数据服务，为客户提供全面的招标、投标、采购等招投标数据。
      在该项目中，我主要负责爬虫架构、日常开发与维护等工作。由于平台需要大量及时有效的招投标信息，我们的爬虫开发团队至今已经开发了4000+个政府网站爬虫，基本覆盖了全国各地。
      我们主要使用 Python + Scrapy  爬虫框架 + Selenium + Redis + RabbitMQ + IP  代理池 + Crawlab  分布式部署等开发框架，以确保能够高效地抓取并处理大量的招投标信息。
      为了保证信息的准确性和可靠性，我们还需要对抓取到的信息进行审核、分类和填充，其中分类算法采用了朴素贝叶斯分类器。`, // 项目介绍
      achivement: `每日10万+全国公开招投标、政府采购中标及成交信息查询，实现与全国公共资源交易和政府采购网站同步并实时更新`, // [成就]
      link: "https://51ztb.com/", // [链接]
      start_date: new Date("2019-04-01"), // 开始时间
      end_date: new Date("2023-01-01"), // 结束时间
    },
    {
      name: "云南启航就业服务平台", // 项目名称
      role: "前端/爬虫开发", // 角色
      content: `这是一个专注于云南地区的招聘服务平台，使用前后端分离开发
      我主要负责前端(前台/后台/小程序)的部分页面以及招聘网站爬虫的架构设计与开发
      前端技术栈：Vue 3全家桶、Element-Plus 组件库、Uniapp (小程序)、若依后台框架
      爬虫技术栈：Python、Scrapy 爬虫框架、Selenium (模拟浏览器访问、突破部分 JS 加密反爬)、MongoDB 用于暂时存储招聘信息、经过审核程序筛选后最终会入库 MySQL、Jenkins+Docker/DockerCompose+scrapyd 部署`, // 项目介绍
      achivement: `10w用户，1000w访问量，200w职位数据`, // [成就]
      link: "https://www.qihjob.com/", // [链接]
      start_date: new Date("2020-01-01"), // 开始时间
      end_date: new Date("2022-01-01"), // 结束时间
    },
    {
      name: "青春昆明", // 项目名称
      role: "后端/前端开发", // 角色
      content: `编写自动检测授章程序：后台可以设置复杂的授章条件，有章与章之间的相互依赖包含、满足特定积分等，程序通过 Canal  订阅 MySQL的 binlog  日志，可以增量得知表的增删改查情况，即可对奖章的满足与否进行快速检查，将自动授章程序与后端代码解耦，可以降低数据库压力
      前端：负责编写后台管理的部分模块，用的是若依后台那一套，即 Vue2+Vuex+VueRouter+ElementUI`, // 项目介绍
      achivement: `注册用户已突破21万，发布各类活动114场，访问量达822万人次`, // [成就]
      link: "https://mobile.88spc.com/", // [链接]
      start_date: new Date("2021-01-01"), // 开始时间
      end_date: new Date("2023-01-01"), // 结束时间
    },
    {
      name: "之心云心理健康咨询服务", // 项目名称
      role: "后端/前端开发", // 角色
      content: `心理健康咨询服务平台，分为H5/PC端，后台用的是若依的 Golang  前后端分离版本，主要负责部分 Gin  后端接口编写以及 Vue  后台绝大部分的页面以及组件的封装与设计`, // 项目介绍
      achivement: ``, // [成就]
      link: "https://zt.zhixinyun.com/login", // [链接]
      start_date: new Date("2021-01-01"), // 开始时间
      end_date: new Date("2023-01-01"), // 结束时间
    },
    {
      name: "在线教育网站", // 项目名称
      role: "后端开发", // 角色
      content: `MVC项目，主要负责 Django/Flask 后端代码以及与前端人员进行配合页面模版的编写`, // 项目介绍
      achivement: ``, // [成就]
      link: "", // [链接]
      start_date: new Date("2018-06-01"), // 开始时间
      end_date: new Date("2019-03-01"), // 结束时间
    },
  ],
  // 技能类别
  categories: [
    {
      value: "编程语言",
      skills: [
        {
          value: "Python",
          score: 4,
          desc: "广泛应用于Web开发、爬虫、数据分析、人工智能等领域",
        },
        {
          value: "Java",
          score: 3,
          desc: "广泛应用于大型企业级应用、Android移动应用等领域",
        },
        {
          value: "Golang",
          score: 4,
          desc: "适用于分布式系统、网络编程等领域",
        },
        {
          value: "JavaScript",
          score: 4,
          desc: "前端开发必备语言，也可用于Node.js后端开发",
        },
        {
          value: "TypeScript",
          score: 3,
          desc: "JavaScript的超集，增加了类型检查等特性，提高代码可维护性和安全性",
        },
      ],
    },
    {
      value: "前端开发",
      skills: [
        {
          value: "Vue",
          score: 4,
          desc: "轻量级MVVM框架，易于上手和扩展",
        },
        {
          value: "Vue-Router",
          score: 4,
          desc: "Vue的官方路由管理器",
        },
        {
          value: "Vuex",
          score: 4,
          desc: "Vue的状态管理库，用于管理组件间共享的数据",
        },
        {
          value: "Pinia",
          score: 4,
          desc: "Vue的新一代状态管理库，提供更好的类型检查和更好的性能",
        },
        {
          value: "React",
          score: 1,
          desc: "Facebook推出的前端框架，在业界有广泛应用",
        },
        {
          value: "Uniapp",
          score: 4,
          desc: "基于Vue.js的跨平台开发框架，可同时开发多个平台的应用",
        },
        {
          value: "SCSS",
          score: 4,
          desc: "CSS的预处理器之一，提供更方便的变量、函数等特性",
        },
        {
          value: "PostCSS",
          score: 3,
          desc: "CSS的后处理器，可扩展CSS的语法和特性",
        },
        {
          value: "WindiCSS",
          score: 4,
          desc: "基于Tailwind CSS的高效工具集和样式库，提供更好的开发体验和性能优化",
        },
        {
          value: "Element-Plus",
          score: 4,
          desc: "基于Element UI的升级版UI组件库",
        },
        {
          value: "Ant Design",
          score: 3,
          desc: "由阿里巴巴出品的UI组件库，兼容React和Vue",
        },
        {
          value: "uView",
          score: 3,
          desc: "uni-app生态下的UI框架，提供了更好的UI设计和开发体验",
        },
        {
          value: "微信小程序",
          score: 2,
          desc: "腾讯开发的小程序开发平台，基于JavaScript、CSS和WXML语言",
        },
        {
          value: "Echarts",
          score: 3,
          desc: "百度推出的数据可视化库，支持多种图表类型",
        },
        {
          value: "jQuery",
          score: 2,
          desc: "JavaScript的轻量级库，提供了许多方便的DOM操作和特效",
        },
        {
          value: "Bootstrap",
          score: 2,
          desc: "Twitter推出的Web前端开发框架，提供了一系列CSS和JavaScript的组件和工具",
        },
        {
          value: "React",
          score: 4,
          desc: "Facebook推出的前端框架，掌握基础开发能力"
        },
        {
          value: "React-Router",
          score: 4,
          desc: "React的官方路由解决方案"
        },
        {
          value: "MobX",
          score: 4,
          desc: "React状态管理库"
        },
        {
          value: "Redux",
          score: 3,
          desc: "JavaScript应用状态管理容器"
        },
        {
          value: "Unocss",
          score: 4,
          desc: "原子化CSS引擎，与WindiCSS一脉相承"
        },
      ],
    },
    {
      value: "爬虫开发",
      skills: [
        {
          value: "Scrapy",
          score: 4,
          desc: "Python的爬虫框架之一，易于编写和扩展",
        },
        {
          value: "requests-html",
          score: 4,
          desc: "Python HTTP客户端库，提供了支持HTML解析的功能",
        },
        {
          value: "正则表达式",
          score: 4,
          desc: "用于匹配字符串的表达式语言",
        },
        {
          value: "Xpath选择器",
          score: 4,
          desc: "XML文档的路径语言，在爬虫开发中经常用于定位HTML元素",
        },
        {
          value: "CSS选择器",
          score: 4,
          desc: "用于定位HTML元素的选择器语法",
        },
        {
          value: "反反爬",
          score: 4,
          desc: "针对网站的反爬虫机制进行应对和突破的技术",
        },
        {
          value: "Selenium",
          score: 4,
          desc: "Web自动化测试工具，也可用于爬虫开发中模拟浏览器行为",
        },
        {
          value: "Postman",
          score: 3,
          desc: "API开发和测试工具，可用于快速调试API接口",
        },
        {
          value: "Fiddler",
          score: 2,
          desc: "Web调试代理工具，可用于分析Web请求和响应",
        },
      ],
    },
    {
      value: "后端开发",
      skills: [
        {
          value: "Flask",
          score: 3,
          desc: "Python的轻量级Web框架，易于使用和扩展",
        },
        {
          value: "Gin",
          score: 3,
          desc: "Go语言的Web框架，提供了高性能和良好的开发体验",
        },
        {
          value: "Django",
          score: 4,
          desc: "Python的Web框架之一，提供了完整、易用的开发体验",
        },
        {
          value: "Spring",
          score: 3,
          desc: "Java的企业级框架，提供了一系列组件和能力，易于集成实现各种需求",
        },
        {
          value: "SpringBoot",
          score: 3,
          desc: "Spring的轻量级版本，提供了更快的开发体验和更方便的集成方式",
        },
        {
          value: "Shiro",
          score: 2,
          desc: "Java的安全框架，提供了身份验证、授权等功能",
        },
        {
          value: "hutool",
          score: 3,
          desc: "Java工具类库，提供了大量的工具函数和组件",
        },
        {
          value: "Mybatis",
          score: 3,
          desc: "Java持久层框架，提供了SQL映射和ORM等功能",
        },
        {
          value: "Mybatis-Plus",
          score: 3,
          desc: "Mybatis的增强版，提供了更多的特性和便利",
        },
        {
          value: "Hibernate",
          score: 1,
          desc: "Java的ORM框架，提供了自动映射和关系维护等功能",
        },
        {
          value: "SQLAlchemy",
          score: 3,
          desc: "Python的ORM框架，提供了高度可扩展和可定制化的特性",
        },
        {
          value: "RabbitMQ",
          score: 1,
          desc: "基于AMQP协议的消息队列系统，可用于实现异步任务和解耦架构",
        },
      ],
    },
    {
      value: "数据库",
      skills: [
        {
          value: "MySQL",
          score: 4,
          desc: "广泛应用的关系型数据库，提供了高性能和可靠性",
        },
        {
          value: "Sqlite3",
          score: 4,
          desc: "轻量级嵌入式关系型数据库，适用于小型应用",
        },
        {
          value: "Redis",
          score: 3,
          desc: "基于内存的键值对数据库，提供了高效的缓存和计算能力",
        },
        {
          value: "Neo4j",
          score: 2,
          desc: "基于图结构的NoSQL数据库，适用于复杂查询和分析场景",
        },
        {
          value: "Elasticsearch",
          score: 3,
          desc: "基于Lucene的全文搜索引擎，适用于海量数据的搜索和分析",
        },
        {
          value: "MongoDB",
          score: 4,
          desc: "文档型数据库，适用于动态和复杂数据的存储和查询",
        },
        {
          value: "Canal",
          score: 3,
          desc: "阿里巴巴MySQL binlog增量订阅&消费组件，可用于实时同步MySQL数据",
        },
      ],
    },
    {
      value: "运 维",
      skills: [
        {
          value: "Docker",
          score: 3,
          desc: "容器虚拟化平台，可提供可移植、可扩展和高效的应用环境",
        },
        {
          value: "Docker Compose",
          score: 4,
          desc: "用于定义和运行多容器Docker应用程序的工具",
        },
        {
          value: "Linux命令",
          score: 3,
          desc: "开源操作系统，可用于各种应用和场景",
        },
        {
          value: "宝塔",
          score: 2,
          desc: "Web应用管理面板，提供了图形化的界面和便捷的维护方式",
        },
        {
          value: "Nginx",
          score: 2,
          desc: "高性能Web服务器和反向代理服务器，可用于负载均衡和高并发处理",
        },
      ],
    },
    {
      value: "语 言",
      skills: [
        {
          value: "粤语",
          score: 4,
          desc: "广东小伙",
        },
        {
          value: "英语",
          score: 2,
          desc: "能看懂大部分英语技术文档",
        },
        {
          value: "普通话",
          score: 3,
          desc: "虽是广东人，但说普通话并不烫嘴，起码听不出来是广东人",
        },
        {
          value: "昆明话",
          score: 2,
          desc: "能大概听懂",
        },
      ],
    },
    {
      value: "其 他",
      skills: [
        {
          value: "Git",
          score: 4,
          desc: "分布式版本控制系统，可用于团队协作和代码管理",
        },
        {
          value: "Jupyter Notebook",
          score: 4,
          desc: "交互式计算环境，可用于数据分析、机器学习等领域",
        },
        {
          value: "Markdown",
          score: 4,
          desc: "轻量级标记语言，可用于撰写文档和文章",
        },
        {
          value: "VSCode",
          score: 4,
          desc: "微软推出的轻量级代码编辑器，提供了丰富的插件和扩展",
        },
        {
          value: "PyCharm",
          score: 4,
          desc: "JetBrains推出的Python IDE，提供了全面的开发支持和高效的调试功能",
        },
        {
          value: "IntelliJ IDEA",
          score: 3,
          desc: "JetBrains推出的Java IDE，提供了强大的自动化功能和便捷的集成体验",
        },
      ],
    },
  ],
};

resume.categories.forEach((x) => {
  x.skills.sort((a, b) => b.score - a.score);
});
resume.experiences.sort(
  (a, b) => b.start_date.getTime() - a.start_date.getTime()
);
resume.projects.sort((a, b) => b.end_date.getTime() - a.end_date.getTime());
export default resume;
