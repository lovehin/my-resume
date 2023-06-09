const resume = {
  avatar: "avatar.png", // 头像
  name: "许立轩", // 姓名
  title: "全栈工程师", // 职位
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
  intro: `具备比较扎实的计算机专业知识，热爱编程，喜欢钻研技术。熟练掌握Python、Golang、JavaScript、Java等编程语言，并且熟悉前端、后端和爬虫开发。
  
  在工作中，我对项目的要求极高，能够独立完成从需求分析到上线发布的全流程，能够在快速迭代的环境下保证代码质量和交付效率。同时，我也有很强的学习能力和团队协作精神。

  我的优势在于：
  
  1. 扎实的计算机专业基础，熟悉多种编程语言和开发框架，能够独立完成从前端、后端到数据库的开发工作。
  
  2. 对项目要求和代码质量极为重视，具备良好的编码习惯和代码规范意识，能够自主设计和编写高质量、可靠性强的代码。
  
  3. 有丰富的实际项目经验，熟练运用各种开发工具和技术，能够迅速上手和适应各种项目需求。
  
  4. 具备良好的团队合作能力和高度的责任心，能够协同其他成员解决问题，推动项目进展，并对自己工作的质量和效率持续追求和改进。`, // 介绍 markdown
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
      end_date: null, // 结束时间
      intro: `在前期工作中，我主要从事爬虫方面的工作，负责招投标和招聘等信息的抓取，设计Scrapy爬虫群的整体架构，并进行部署和日常维护等工作。

在中间阶段，我曾负责开发招投标专家抽取系统的后端，并参与青春昆明自动授章程序的开发。
      
而后期，我主要担任Vue前端开发的角色，负责招聘、心理健康、青少年服务以及公司官网等多个网站/小程序/App的页面开发。同时，还承担了一部分Spring后端接口的开发工作。`, // 介绍 markdown
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
          value: "Linux",
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
export default resume;
