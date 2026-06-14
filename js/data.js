// ============================================================
// 高考志愿填报助手 - 数据文件
// 高校数据 + 各省分数线 + 资料包产品
// ============================================================

// ---------- 高校数据库 ----------
const universities = [
  // ===== 北京 =====
  {
    id: 1,
    name: "北京大学",
    province: "北京", city: "北京", type: "综合",
    level: ["985", "211", "双一流", "C9"],
    isPublic: true,
    topMajors: ["经济学", "法学", "数学", "计算机科学与技术", "临床医学", "中国语言文学"],
    description: "中国顶尖综合性研究型大学，文理医工全面发展，拥有全国最好的基础学科和人文学科。未名湖畔，大师云集。",
    employmentRate: 0.97,
    genderRatio: { male: 48, female: 52 },
    avgScore: 690
  },
  {
    id: 2,
    name: "清华大学",
    province: "北京", city: "北京", type: "理工",
    level: ["985", "211", "双一流", "C9"],
    isPublic: true,
    topMajors: ["计算机科学与技术", "电子信息工程", "土木工程", "经济管理", "建筑学", "自动化"],
    description: "中国最顶尖的理工科大学，工科实力全国第一。清华园里走出无数国之栋梁，''自强不息，厚德载物''。",
    employmentRate: 0.98,
    genderRatio: { male: 65, female: 35 },
    avgScore: 692
  },
  {
    id: 3,
    name: "中国人民大学",
    province: "北京", city: "北京", type: "综合",
    level: ["985", "211", "双一流"],
    isPublic: true,
    topMajors: ["经济学", "法学", "新闻传播学", "统计学", "社会学", "金融学"],
    description: "人文社科领域的顶尖学府，经济学、法学、新闻学全国领先。''实事求是''的校训影响深远。",
    employmentRate: 0.96,
    genderRatio: { male: 40, female: 60 },
    avgScore: 672
  },
  {
    id: 4,
    name: "北京师范大学",
    province: "北京", city: "北京", type: "师范",
    level: ["985", "211", "双一流"],
    isPublic: true,
    topMajors: ["教育学", "心理学", "汉语言文学", "历史学", "地理科学", "数学"],
    description: "中国师范类院校的最高学府，教育学、心理学全国第一。想当老师的梦想之地。",
    employmentRate: 0.95,
    genderRatio: { male: 32, female: 68 },
    avgScore: 658
  },
  {
    id: 5,
    name: "北京航空航天大学",
    province: "北京", city: "北京", type: "理工",
    level: ["985", "211", "双一流"],
    isPublic: true,
    topMajors: ["航空航天工程", "计算机科学与技术", "软件工程", "自动化", "电子信息工程"],
    description: "国防七子之一，航空航天领域全国顶尖。计算机和软件工程也非常强势，就业极好。",
    employmentRate: 0.97,
    genderRatio: { male: 70, female: 30 },
    avgScore: 668
  },
  {
    id: 6,
    name: "北京理工大学",
    province: "北京", city: "北京", type: "理工",
    level: ["985", "211", "双一流"],
    isPublic: true,
    topMajors: ["兵器科学与技术", "车辆工程", "计算机科学", "自动化", "光电信息"],
    description: "国防七子之一，工科实力雄厚。车辆工程和兵器科学全国顶尖，在北京就业优势明显。",
    employmentRate: 0.96,
    genderRatio: { male: 68, female: 32 },
    avgScore: 660
  },
  {
    id: 7,
    name: "中国政法大学",
    province: "北京", city: "北京", type: "政法",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["法学", "政治学", "社会学", "侦查学"],
    description: "中国法学教育的最高殿堂，''法大''是每个法律人的梦想。校友遍布全国政法系统。",
    employmentRate: 0.93,
    genderRatio: { male: 42, female: 58 },
    avgScore: 645
  },
  {
    id: 8,
    name: "中央财经大学",
    province: "北京", city: "北京", type: "财经",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["金融学", "会计学", "经济学", "财政学", "保险学"],
    description: "财经类顶尖院校，金融和会计专业全国前三。毕业生遍布各大银行、券商和会计师事务所。",
    employmentRate: 0.95,
    genderRatio: { male: 38, female: 62 },
    avgScore: 655
  },
  {
    id: 9,
    name: "对外经济贸易大学",
    province: "北京", city: "北京", type: "财经",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["国际经济与贸易", "金融学", "商务英语", "法学", "会计学"],
    description: "国际化程度极高的财经名校，外经贸领域全国领先。外语+财经的复合培养模式。",
    employmentRate: 0.95,
    genderRatio: { male: 33, female: 67 },
    avgScore: 650
  },
  {
    id: 10,
    name: "中国传媒大学",
    province: "北京", city: "北京", type: "语言",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["新闻传播学", "广播电视学", "播音与主持", "广告学", "动画"],
    description: "传媒领域的清华北大，培养了大批著名主持人、导演和媒体人。想做传媒行业的第一选择。",
    employmentRate: 0.92,
    genderRatio: { male: 35, female: 65 },
    avgScore: 630
  },

  // ===== 上海 =====
  {
    id: 11,
    name: "复旦大学",
    province: "上海", city: "上海", type: "综合",
    level: ["985", "211", "双一流", "C9"],
    isPublic: true,
    topMajors: ["新闻学", "经济学", "临床医学", "数学", "哲学", "金融学"],
    description: "江南第一学府，文理医经全面发展。''日月光华，旦复旦兮''，人文气息浓厚。",
    employmentRate: 0.97,
    genderRatio: { male: 44, female: 56 },
    avgScore: 688
  },
  {
    id: 12,
    name: "上海交通大学",
    province: "上海", city: "上海", type: "综合",
    level: ["985", "211", "双一流", "C9"],
    isPublic: true,
    topMajors: ["船舶与海洋工程", "临床医学", "计算机科学", "机械工程", "金融学"],
    description: "工科、医科双巅峰的顶尖名校。闵行校区大到需要校车通勤，医学院全国第一。",
    employmentRate: 0.98,
    genderRatio: { male: 60, female: 40 },
    avgScore: 687
  },
  {
    id: 13,
    name: "同济大学",
    province: "上海", city: "上海", type: "理工",
    level: ["985", "211", "双一流"],
    isPublic: true,
    topMajors: ["土木工程", "建筑学", "城乡规划", "环境工程", "车辆工程", "设计学"],
    description: "建筑老八校之首，土木建筑类全国最强。德国合作背景深厚，设计学科也全国顶尖。",
    employmentRate: 0.96,
    genderRatio: { male: 62, female: 38 },
    avgScore: 670
  },
  {
    id: 14,
    name: "华东师范大学",
    province: "上海", city: "上海", type: "师范",
    level: ["985", "211", "双一流"],
    isPublic: true,
    topMajors: ["教育学", "心理学", "地理学", "软件工程", "汉语言文学", "统计学"],
    description: "师范类第二把交椅，教育学、地理学全国顶尖。在上海当老师的最佳跳板。",
    employmentRate: 0.95,
    genderRatio: { male: 34, female: 66 },
    avgScore: 664
  },
  {
    id: 15,
    name: "上海财经大学",
    province: "上海", city: "上海", type: "财经",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["会计学", "金融学", "经济学", "工商管理", "统计学"],
    description: "财经类院校的翘楚，在金融圈认可度极高。坐落上海，实习和就业资源丰富。",
    employmentRate: 0.96,
    genderRatio: { male: 37, female: 63 },
    avgScore: 662
  },
  {
    id: 16,
    name: "上海外国语大学",
    province: "上海", city: "上海", type: "语言",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["英语", "日语", "翻译", "国际关系", "新闻学", "法语"],
    description: "外语类顶尖院校，语言专业设置最全。''格高志远，学贯中外''，国际组织人才培养基地。",
    employmentRate: 0.94,
    genderRatio: { male: 25, female: 75 },
    avgScore: 642
  },

  // ===== 广东 =====
  {
    id: 17,
    name: "中山大学",
    province: "广东", city: "广州/珠海/深圳", type: "综合",
    level: ["985", "211", "双一流"],
    isPublic: true,
    topMajors: ["临床医学", "工商管理", "哲学", "海洋科学", "计算机科学", "金融学"],
    description: "华南第一学府，''双鸭山大学''。医学和商科尤其强势，三校区五校园遍布珠三角。",
    employmentRate: 0.95,
    genderRatio: { male: 47, female: 53 },
    avgScore: 650
  },
  {
    id: 18,
    name: "华南理工大学",
    province: "广东", city: "广州", type: "理工",
    level: ["985", "211", "双一流"],
    isPublic: true,
    topMajors: ["建筑学", "轻工技术与工程", "材料科学", "计算机科学", "食品科学"],
    description: "建筑老八校之一，轻工和材料全国顶尖。工科强校，在珠三角就业认可度极高。",
    employmentRate: 0.96,
    genderRatio: { male: 65, female: 35 },
    avgScore: 635
  },
  {
    id: 19,
    name: "暨南大学",
    province: "广东", city: "广州/珠海/深圳", type: "综合",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["新闻传播学", "药学", "金融学", "汉语言文学", "临床医学"],
    description: "华侨最高学府，国际化程度高。新闻传播全国前五，港澳台学生最多的内地高校。",
    employmentRate: 0.94,
    genderRatio: { male: 43, female: 57 },
    avgScore: 615
  },
  {
    id: 20,
    name: "华南师范大学",
    province: "广东", city: "广州", type: "师范",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["心理学", "教育学", "体育学", "物理学", "汉语言文学"],
    description: "华南地区最好的师范院校，心理学全国前三。广州深圳中小学教师的主要来源。",
    employmentRate: 0.93,
    genderRatio: { male: 35, female: 65 },
    avgScore: 600
  },
  {
    id: 21,
    name: "深圳大学",
    province: "广东", city: "深圳", type: "综合",
    level: [],
    isPublic: true,
    topMajors: ["计算机科学", "金融学", "建筑学", "电子信息工程", "法学"],
    description: "不是双一流但分数超过很多211。背靠深圳，马化腾母校，计算机和金融就业极好。奖学金多到花不完。",
    employmentRate: 0.94,
    genderRatio: { male: 52, female: 48 },
    avgScore: 610
  },
  {
    id: 22,
    name: "南方医科大学",
    province: "广东", city: "广州", type: "医药",
    level: [],
    isPublic: true,
    topMajors: ["临床医学", "基础医学", "口腔医学", "护理学", "药学"],
    description: "原第一军医大学，医学实力强劲。附属医院众多，临床医学在华南认可度很高。",
    employmentRate: 0.93,
    genderRatio: { male: 42, female: 58 },
    avgScore: 598
  },

  // ===== 浙江 =====
  {
    id: 23,
    name: "浙江大学",
    province: "浙江", city: "杭州", type: "综合",
    level: ["985", "211", "双一流", "C9"],
    isPublic: true,
    topMajors: ["计算机科学", "控制科学", "临床医学", "农业工程", "光学工程", "数学"],
    description: "''东方剑桥''，学科门类最齐全的超级大学。杭州互联网氛围浓厚，计算机相关专业就业无敌。",
    employmentRate: 0.97,
    genderRatio: { male: 58, female: 42 },
    avgScore: 678
  },

  // ===== 江苏 =====
  {
    id: 24,
    name: "南京大学",
    province: "江苏", city: "南京", type: "综合",
    level: ["985", "211", "双一流", "C9"],
    isPublic: true,
    topMajors: ["天文学", "地质学", "物理学", "计算机科学", "哲学", "图书情报"],
    description: "C9名校，基础学科实力极强。天文和地质全国第一，''诚朴雄伟，励学敦行''。",
    employmentRate: 0.96,
    genderRatio: { male: 50, female: 50 },
    avgScore: 676
  },
  {
    id: 25,
    name: "东南大学",
    province: "江苏", city: "南京", type: "理工",
    level: ["985", "211", "双一流"],
    isPublic: true,
    topMajors: ["建筑学", "土木工程", "交通运输", "电子科学", "生物医学工程"],
    description: "建筑老八校之一，建筑和土木实力全国前三。工科强校，很低调但实力不输华科。",
    employmentRate: 0.97,
    genderRatio: { male: 63, female: 37 },
    avgScore: 658
  },
  {
    id: 26,
    name: "南京航空航天大学",
    province: "江苏", city: "南京", type: "理工",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["航空航天工程", "力学", "自动化", "计算机科学", "材料科学"],
    description: "国防七子之一，航空航天特色鲜明。南京军工企业多，就业稳定。",
    employmentRate: 0.95,
    genderRatio: { male: 67, female: 33 },
    avgScore: 625
  },
  {
    id: 27,
    name: "南京师范大学",
    province: "江苏", city: "南京", type: "师范",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["教育学", "地理学", "汉语言文学", "美术学", "马克思主义理论"],
    description: "师范类名校，地理学全国顶尖。南京中小学教师主要培养基地，随园校区超美。",
    employmentRate: 0.93,
    genderRatio: { male: 30, female: 70 },
    avgScore: 610
  },
  {
    id: 28,
    name: "苏州大学",
    province: "江苏", city: "苏州", type: "综合",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["材料科学", "放射医学", "纺织工程", "法学", "设计学"],
    description: "近年上升势头最猛的211之一。位于最强地级市苏州，校园极美，留学和就业都很好。",
    employmentRate: 0.94,
    genderRatio: { male: 45, female: 55 },
    avgScore: 612
  },

  // ===== 湖北 =====
  {
    id: 29,
    name: "武汉大学",
    province: "湖北", city: "武汉", type: "综合",
    level: ["985", "211", "双一流"],
    isPublic: true,
    topMajors: ["测绘科学", "法学", "新闻学", "遥感技术", "水利工程", "口腔医学"],
    description: "''中国最美大学''，樱花季的珞珈山绝美。测绘遥感全球第一，法学''五院四系''之一。",
    employmentRate: 0.95,
    genderRatio: { male: 51, female: 49 },
    avgScore: 655
  },
  {
    id: 30,
    name: "华中科技大学",
    province: "湖北", city: "武汉", type: "理工",
    level: ["985", "211", "双一流"],
    isPublic: true,
    topMajors: ["机械工程", "光学工程", "电气工程", "计算机科学", "临床医学"],
    description: "''华科''工科强校，机械和光学全国第一。合并同济医科大学后医学也超强，学在华科不是吹的。",
    employmentRate: 0.96,
    genderRatio: { male: 64, female: 36 },
    avgScore: 650
  },
  {
    id: 31,
    name: "武汉理工大学",
    province: "湖北", city: "武汉", type: "理工",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["材料科学", "船舶与海洋工程", "车辆工程", "交通运输", "土木工程"],
    description: "211工科强校，材料科学全国领先。三大行业（建材建工、交通、汽车）校友网络庞大。",
    employmentRate: 0.94,
    genderRatio: { male: 66, female: 34 },
    avgScore: 605
  },
  {
    id: 32,
    name: "中南财经政法大学",
    province: "湖北", city: "武汉", type: "财经",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["会计学", "金融学", "法学", "财政学", "经济学"],
    description: "财经+政法双特色211。''五院四系''中唯一的财经院校，会计和法学都很好。",
    employmentRate: 0.93,
    genderRatio: { male: 38, female: 62 },
    avgScore: 612
  },
  {
    id: 33,
    name: "华中师范大学",
    province: "湖北", city: "武汉", type: "师范",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["教育学", "历史学", "政治学", "汉语言文学", "物理学", "化学"],
    description: "教育部直属六所师范大学之一。师范专业全国认可，毕业生遍布全国重点中学。",
    employmentRate: 0.94,
    genderRatio: { male: 32, female: 68 },
    avgScore: 608
  },

  // ===== 四川/重庆 =====
  {
    id: 34,
    name: "四川大学",
    province: "四川", city: "成都", type: "综合",
    level: ["985", "211", "双一流"],
    isPublic: true,
    topMajors: ["口腔医学", "临床医学", "药学", "轻工技术", "考古学", "数学"],
    description: "西南第一学府，口腔医学亚洲第一。成都生活安逸，''少不入川''但来了就不想走。",
    employmentRate: 0.94,
    genderRatio: { male: 48, female: 52 },
    avgScore: 640
  },
  {
    id: 35,
    name: "电子科技大学",
    province: "四川", city: "成都", type: "理工",
    level: ["985", "211", "双一流"],
    isPublic: true,
    topMajors: ["电子科学与技术", "通信工程", "计算机科学", "网络安全", "集成电路"],
    description: "''成电''，电子信息领域的黄埔军校。在IT和互联网行业认可度极高，毕业生被疯抢。",
    employmentRate: 0.97,
    genderRatio: { male: 72, female: 28 },
    avgScore: 655
  },
  {
    id: 36,
    name: "西南财经大学",
    province: "四川", city: "成都", type: "财经",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["金融学", "会计学", "保险学", "经济学", "统计学"],
    description: "财经类强校，金融学科实力雄厚。央行直属背景，在西南地区金融圈地位无人能撼。",
    employmentRate: 0.94,
    genderRatio: { male: 40, female: 60 },
    avgScore: 625
  },
  {
    id: 37,
    name: "重庆大学",
    province: "重庆", city: "重庆", type: "理工",
    level: ["985", "211", "双一流"],
    isPublic: true,
    topMajors: ["建筑学", "电气工程", "机械工程", "土木工程", "矿业工程"],
    description: "建筑老八校之一，电气和建筑是王牌。山城重庆，火锅和夜景等着你。",
    employmentRate: 0.94,
    genderRatio: { male: 62, female: 38 },
    avgScore: 630
  },
  {
    id: 38,
    name: "西南政法大学",
    province: "重庆", city: "重庆", type: "政法",
    level: [],
    isPublic: true,
    topMajors: ["法学", "侦查学", "经济法", "知识产权", "新闻学"],
    description: "''法学界的黄埔军校''，五院四系之一。虽非211但法学实力碾压大多数985，校友遍布公检法。",
    employmentRate: 0.91,
    genderRatio: { male: 43, female: 57 },
    avgScore: 602
  },

  // ===== 湖南 =====
  {
    id: 39,
    name: "中南大学",
    province: "湖南", city: "长沙", type: "理工",
    level: ["985", "211", "双一流"],
    isPublic: true,
    topMajors: ["临床医学", "材料科学", "冶金工程", "交通运输", "计算机科学"],
    description: "合并湘雅医学院后医学实力超强（''南湘雅北协和''）。冶金和材料全国第一档。",
    employmentRate: 0.95,
    genderRatio: { male: 58, female: 42 },
    avgScore: 635
  },
  {
    id: 40,
    name: "湖南大学",
    province: "湖南", city: "长沙", type: "理工",
    level: ["985", "211", "双一流"],
    isPublic: true,
    topMajors: ["土木工程", "机械工程", "化学", "建筑学", "设计学", "电气工程"],
    description: "千年学府岳麓书院所在地。土木和化学是王牌，设计学科全国前五。校园没有围墙，和城市融为一体。",
    employmentRate: 0.94,
    genderRatio: { male: 57, female: 43 },
    avgScore: 622
  },
  {
    id: 41,
    name: "湖南师范大学",
    province: "湖南", city: "长沙", type: "师范",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["教育学", "汉语言文学", "英语", "生物学", "马克思主义理论"],
    description: "211师范院校，外语和中文是强势学科。长沙房价低，生活性价比高。",
    employmentRate: 0.92,
    genderRatio: { male: 31, female: 69 },
    avgScore: 590
  },

  // ===== 陕西 =====
  {
    id: 42,
    name: "西安交通大学",
    province: "陕西", city: "西安", type: "理工",
    level: ["985", "211", "双一流", "C9"],
    isPublic: true,
    topMajors: ["电气工程", "能源动力", "机械工程", "管理科学", "临床医学", "计算机科学"],
    description: "C9名校，老交大血脉。电气和能动全国第一档，西部第一名校。''西迁精神''的发源地。",
    employmentRate: 0.96,
    genderRatio: { male: 64, female: 36 },
    avgScore: 652
  },
  {
    id: 43,
    name: "西北工业大学",
    province: "陕西", city: "西安", type: "理工",
    level: ["985", "211", "双一流"],
    isPublic: true,
    topMajors: ["航空航天工程", "材料科学", "计算机科学", "航海工程", "力学"],
    description: "国防七子之一，三航（航空、航天、航海）特色。极其低调但实力超强，军工就业保障好。",
    employmentRate: 0.96,
    genderRatio: { male: 72, female: 28 },
    avgScore: 638
  },
  {
    id: 44,
    name: "西安电子科技大学",
    province: "陕西", city: "西安", type: "理工",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["通信工程", "电子科学", "计算机科学", "网络安全", "集成电路"],
    description: "两电一邮之一，通信和电子全国顶尖。华为、中兴的''后花园''，IT就业不输985。",
    employmentRate: 0.96,
    genderRatio: { male: 70, female: 30 },
    avgScore: 620
  },
  {
    id: 45,
    name: "陕西师范大学",
    province: "陕西", city: "西安", type: "师范",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["教育学", "汉语言文学", "历史学", "心理学", "地理科学"],
    description: "教育部直属六所师范大学之一。西北地区最好的师范院校，公费师范生就业包分配。",
    employmentRate: 0.93,
    genderRatio: { male: 30, female: 70 },
    avgScore: 585
  },

  // ===== 天津 =====
  {
    id: 46,
    name: "南开大学",
    province: "天津", city: "天津", type: "综合",
    level: ["985", "211", "双一流"],
    isPublic: true,
    topMajors: ["数学", "化学", "历史学", "经济学", "工商管理", "统计学"],
    description: "''允公允能，日新月异''。数学和化学是全国王牌，经济学科历史悠久。周总理母校。",
    employmentRate: 0.95,
    genderRatio: { male: 46, female: 54 },
    avgScore: 668
  },
  {
    id: 47,
    name: "天津大学",
    province: "天津", city: "天津", type: "理工",
    level: ["985", "211", "双一流"],
    isPublic: true,
    topMajors: ["化学工程", "建筑学", "精密仪器", "水利工程", "土木工程", "管理科学"],
    description: "中国第一所现代大学（1895年北洋大学）。化工全国第一，建筑老八校之一。",
    employmentRate: 0.96,
    genderRatio: { male: 63, female: 37 },
    avgScore: 655
  },

  // ===== 福建 =====
  {
    id: 48,
    name: "厦门大学",
    province: "福建", city: "厦门", type: "综合",
    level: ["985", "211", "双一流"],
    isPublic: true,
    topMajors: ["会计学", "金融学", "海洋科学", "化学", "统计学", "新闻传播学"],
    description: "''中国最美大学''实至名归，出门就是海滩。会计和金融''南方之强''，海洋科学全国第一。",
    employmentRate: 0.95,
    genderRatio: { male: 47, female: 53 },
    avgScore: 650
  },

  // ===== 山东 =====
  {
    id: 49,
    name: "山东大学",
    province: "山东", city: "济南/青岛/威海", type: "综合",
    level: ["985", "211", "双一流"],
    isPublic: true,
    topMajors: ["数学", "临床医学", "中国语言文学", "材料科学", "考古学"],
    description: "齐鲁大地第一学府。数学和临床医学实力强劲，文史见长。一校三地八校园的超级大学。",
    employmentRate: 0.94,
    genderRatio: { male: 50, female: 50 },
    avgScore: 632
  },
  {
    id: 50,
    name: "中国海洋大学",
    province: "山东", city: "青岛", type: "理工",
    level: ["985", "211", "双一流"],
    isPublic: true,
    topMajors: ["海洋科学", "水产", "环境科学", "食品科学", "药学"],
    description: "海洋科学全国第一，水产学科全球领先。青岛这座城市本身就加分——红瓦绿树碧海蓝天。",
    employmentRate: 0.92,
    genderRatio: { male: 48, female: 52 },
    avgScore: 610
  },

  // ===== 东北 =====
  {
    id: 51,
    name: "哈尔滨工业大学",
    province: "黑龙江", city: "哈尔滨/深圳/威海", type: "理工",
    level: ["985", "211", "双一流", "C9"],
    isPublic: true,
    topMajors: ["航空航天工程", "计算机科学", "机械工程", "土木工程", "环境工程", "控制科学"],
    description: "C9工科强校，航天领域全国第一梯队。深圳校区分数已超过本部，三个校区各有特色。",
    employmentRate: 0.96,
    genderRatio: { male: 70, female: 30 },
    avgScore: 645
  },
  {
    id: 52,
    name: "吉林大学",
    province: "吉林", city: "长春", type: "综合",
    level: ["985", "211", "双一流"],
    isPublic: true,
    topMajors: ["车辆工程", "法学", "化学", "地质工程", "临床医学", "考古学"],
    description: "''美丽的长春市坐落在吉林大学里面''——全国最大的大学。车辆工程和法学都是全国前列。",
    employmentRate: 0.92,
    genderRatio: { male: 52, female: 48 },
    avgScore: 605
  },
  {
    id: 53,
    name: "大连理工大学",
    province: "辽宁", city: "大连", type: "理工",
    level: ["985", "211", "双一流"],
    isPublic: true,
    topMajors: ["化学工程", "机械工程", "土木工程", "力学", "船舶工程", "计算机科学"],
    description: "东北工科第二强校。坐落美丽的海滨城市大连，化工和力学全国前列。",
    employmentRate: 0.94,
    genderRatio: { male: 66, female: 34 },
    avgScore: 625
  },
  {
    id: 54,
    name: "东北师范大学",
    province: "吉林", city: "长春", type: "师范",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["教育学", "马克思主义理论", "历史学", "生物学", "数学"],
    description: "教育部直属六所之一，师范专业全国前三。公费师范生就业包分配，考研率也很高。",
    employmentRate: 0.93,
    genderRatio: { male: 29, female: 71 },
    avgScore: 580
  },

  // ===== 安徽 =====
  {
    id: 55,
    name: "中国科学技术大学",
    province: "安徽", city: "合肥", type: "理工",
    level: ["985", "211", "双一流", "C9"],
    isPublic: true,
    topMajors: ["物理学", "数学", "计算机科学", "化学", "天文学", "核科学"],
    description: "科学院直属，纯粹的科研圣地。少年班全国闻名，物理和数学的殿堂。''千生一院士''的传奇。",
    employmentRate: 0.96,
    genderRatio: { male: 68, female: 32 },
    avgScore: 680
  },
  {
    id: 56,
    name: "合肥工业大学",
    province: "安徽", city: "合肥", type: "理工",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["车辆工程", "管理科学", "机械工程", "计算机科学", "仪器科学"],
    description: "汽车行业的黄埔军校，江淮大地上的工科明珠。合肥近年发展迅猛，就业前景越来越好。",
    employmentRate: 0.94,
    genderRatio: { male: 66, female: 34 },
    avgScore: 598
  },

  // ===== 其他省份精选 =====
  {
    id: 57,
    name: "兰州大学",
    province: "甘肃", city: "兰州", type: "综合",
    level: ["985", "211", "双一流"],
    isPublic: true,
    topMajors: ["化学", "草学", "生态学", "物理学", "地理学", "历史学"],
    description: "最''憋屈''的985，但基础学科实力仍在。化学和草学全国领先。分数在985中偏低，性价比高。",
    employmentRate: 0.90,
    genderRatio: { male: 50, female: 50 },
    avgScore: 590
  },
  {
    id: 58,
    name: "郑州大学",
    province: "河南", city: "郑州", type: "综合",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["临床医学", "化学", "材料科学", "水利工程", "考古学"],
    description: "河南唯一的211，中原第一大校。临床医学和化学是王牌，体量大、专业全。",
    employmentRate: 0.92,
    genderRatio: { male: 49, female: 51 },
    avgScore: 592
  },
  {
    id: 59,
    name: "云南大学",
    province: "云南", city: "昆明", type: "综合",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["民族学", "生态学", "生物学", "旅游管理", "天文学"],
    description: "云南最美大学，呈贡校区四季如春。民族学和生态学全国顶尖。昆明气候绝佳，幸福感拉满。",
    employmentRate: 0.90,
    genderRatio: { male: 46, female: 54 },
    avgScore: 575
  },
  {
    id: 60,
    name: "南昌大学",
    province: "江西", city: "南昌", type: "综合",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["食品科学", "临床医学", "材料科学", "新闻传播学", "化学"],
    description: "江西唯一的211。食品科学全国前三，临床医学在省内认可度高。",
    employmentRate: 0.91,
    genderRatio: { male: 50, female: 50 },
    avgScore: 580
  },
  {
    id: 61,
    name: "广西大学",
    province: "广西", city: "南宁", type: "综合",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["土木工程", "农业科学", "动物科学", "工程管理", "外国语言文学"],
    description: "广西唯一的211。土木工程和涉农学科是特色，东盟合作背景加分。",
    employmentRate: 0.90,
    genderRatio: { male: 51, female: 49 },
    avgScore: 565
  },
  {
    id: 62,
    name: "海南大学",
    province: "海南", city: "海口", type: "综合",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["法学", "热带农业", "旅游管理", "海洋科学", "工商管理"],
    description: "海南唯一的211。热带农业和海洋学科特色鲜明。海南自贸港政策利好，未来发展空间大。",
    employmentRate: 0.88,
    genderRatio: { male: 48, female: 52 },
    avgScore: 560
  },
  {
    id: 63,
    name: "贵州大学",
    province: "贵州", city: "贵阳", type: "综合",
    level: ["211", "双一流"],
    isPublic: true,
    topMajors: ["植物保护", "大数据", "土木工程", "农林经济", "化学"],
    description: "贵州唯一的211。植物保护学科全国前列，大数据专业受益于贵州大数据产业发展。",
    employmentRate: 0.89,
    genderRatio: { male: 50, female: 50 },
    avgScore: 555
  }
];

// ---------- 各省分数线（近两年）----------
// 数据来源参考各省教育考试院，仅供示例参考
const provinceScores = {
  "广东": {
    "2025": {
      "物理类": { "本科线": 439, "特控线": 532, "专科线": 200 },
      "历史类": { "本科线": 428, "特控线": 536, "专科线": 200 }
    },
    "2024": {
      "物理类": { "本科线": 442, "特控线": 538, "专科线": 200 },
      "历史类": { "本科线": 428, "特控线": 539, "专科线": 200 }
    }
  },
  "北京": {
    "2025": { "综合": { "本科线": 434, "特控线": 523, "专科线": 120 } },
    "2024": { "综合": { "本科线": 434, "特控线": 523, "专科线": 120 } }
  },
  "上海": {
    "2025": { "综合": { "本科线": 403, "特控线": 503, "专科线": 120 } },
    "2024": { "综合": { "本科线": 403, "特控线": 503, "专科线": 120 } }
  },
  "浙江": {
    "2025": { "综合": { "一段线": 488, "二段线": 274, "特控线": 594 } },
    "2024": { "综合": { "一段线": 488, "二段线": 274, "特控线": 594 } }
  },
  "江苏": {
    "2025": {
      "物理类": { "本科线": 448, "特控线": 516, "专科线": 220 },
      "历史类": { "本科线": 471, "特控线": 527, "专科线": 220 }
    },
    "2024": {
      "物理类": { "本科线": 462, "特控线": 516, "专科线": 220 },
      "历史类": { "本科线": 478, "特控线": 530, "专科线": 220 }
    }
  },
  "湖北": {
    "2025": {
      "物理类": { "本科线": 424, "特控线": 525, "专科线": 200 },
      "历史类": { "本科线": 426, "特控线": 527, "专科线": 200 }
    },
    "2024": {
      "物理类": { "本科线": 437, "特控线": 525, "专科线": 200 },
      "历史类": { "本科线": 432, "特控线": 530, "专科线": 200 }
    }
  },
  "四川": {
    "2025": {
      "理科": { "本科一批": 515, "本科二批": 433, "专科线": 150 },
      "文科": { "本科一批": 527, "本科二批": 458, "专科线": 150 }
    },
    "2024": {
      "理科": { "本科一批": 520, "本科二批": 433, "专科线": 150 },
      "文科": { "本科一批": 529, "本科二批": 457, "专科线": 150 }
    }
  },
  "山东": {
    "2025": { "综合": { "一段线": 437, "二段线": 287, "特控线": 518 } },
    "2024": { "综合": { "一段线": 443, "二段线": 287, "特控线": 520 } }
  },
  "河南": {
    "2025": {
      "理科": { "本科一批": 509, "本科二批": 405, "专科线": 190 },
      "文科": { "本科一批": 521, "本科二批": 428, "专科线": 190 }
    },
    "2024": {
      "理科": { "本科一批": 514, "本科二批": 409, "专科线": 190 },
      "文科": { "本科一批": 527, "本科二批": 445, "专科线": 190 }
    }
  },
  "湖南": {
    "2025": {
      "物理类": { "本科线": 428, "特控线": 496, "专科线": 200 },
      "历史类": { "本科线": 451, "特控线": 516, "专科线": 200 }
    },
    "2024": {
      "物理类": { "本科线": 434, "特控线": 493, "专科线": 200 },
      "历史类": { "本科线": 451, "特控线": 515, "专科线": 200 }
    }
  }
};

// ---------- 资料包产品 ----------
const materials = [
  {
    id: "m1",
    name: "2026高考志愿填报完全指南",
    price: 19.9,
    originalPrice: 39.9,
    cover: "📕",
    desc: "60页超全攻略！包含填报流程详解、平行志愿规则、退档避坑指南、各批次填报策略。看完你就是半个专家。",
    highlights: ["平行志愿怎么填不亏分", "退档/滑档怎么避免", "提前批和普通批怎么选", "征集志愿是什么"],
    tag: "最畅销"
  },
  {
    id: "m2",
    name: "全国高校专业详解大全",
    price: 15.9,
    originalPrice: 29.9,
    cover: "📗",
    desc: "覆盖200+热门专业！每个专业学什么、课程难不难、就业方向、薪资水平、适合什么性格。",
    highlights: ["计算机类各方向对比", "医学类学制说明", "文科专业出路分析", "'天坑专业'真的坑吗"],
    tag: "热门"
  },
  {
    id: "m3",
    name: "各省近三年分数线汇总",
    price: 9.9,
    originalPrice: 19.9,
    cover: "📊",
    desc: "Excel可筛选表格！涵盖30省近3年各批次分数线+100+院校录取最低分/位次。",
    highlights: ["30个省份全覆盖", "2023-2025三年数据", "可筛选可排序", "含位次对照表"],
    tag: "实用"
  },
  {
    id: "m4",
    name: "女生专属：适合女生的大学专业推荐",
    price: 12.9,
    originalPrice: 24.9,
    cover: "🌸",
    desc: "专为女生整理！从就业前景、工作环境、性别友好度等维度分析推荐。避开'重男轻女'行业。",
    highlights: ["就业不歧视女生的专业", "工作环境舒适体面", "女生薪资天花板高的行业", "真实学姐经验分享"],
    tag: "女生必看"
  },
  {
    id: "m5",
    name: "全套打包：志愿填报大礼包",
    price: 39.9,
    originalPrice: 78.6,
    cover: "🎁",
    desc: "以上四份资料一键打包！还额外赠送「大学四年规划指南」和「考研保研科普」。",
    highlights: ["四份资料全部包含", "额外赠送2份", "一次购买永久更新", "加学姐微信随时答疑"],
    tag: "最划算",
    isBundle: true
  }
];

// ---------- 大学录取分数线参考（部分高校在广东物理类的数据）----------
// 数据仅供参考，实际以各省教育考试院公布为准
const uniScores = {
  "广东": {
    "2025": {
      "物理类": [
        { name: "北京大学", minScore: 694, rank: 83 },
        { name: "清华大学", minScore: 693, rank: 88 },
        { name: "复旦大学", minScore: 682, rank: 274 },
        { name: "上海交通大学", minScore: 681, rank: 298 },
        { name: "浙江大学", minScore: 676, rank: 457 },
        { name: "中国科学技术大学", minScore: 675, rank: 492 },
        { name: "南京大学", minScore: 672, rank: 601 },
        { name: "中国人民大学", minScore: 670, rank: 682 },
        { name: "北京航空航天大学", minScore: 658, rank: 1432 },
        { name: "同济大学", minScore: 655, rank: 1689 },
        { name: "武汉大学", minScore: 648, rank: 2345 },
        { name: "华中科技大学", minScore: 646, rank: 2567 },
        { name: "西安交通大学", minScore: 644, rank: 2789 },
        { name: "电子科技大学", minScore: 643, rank: 2912 },
        { name: "南开大学", minScore: 642, rank: 3010 },
        { name: "北京师范大学", minScore: 640, rank: 3288 },
        { name: "天津大学", minScore: 638, rank: 3533 },
        { name: "中山大学", minScore: 635, rank: 3956 },
        { name: "华南理工大学", minScore: 628, rank: 5123 },
        { name: "厦门大学", minScore: 626, rank: 5488 },
        { name: "四川大学", minScore: 620, rank: 6712 },
        { name: "中南大学", minScore: 618, rank: 7067 },
        { name: "山东大学", minScore: 614, rank: 7890 },
        { name: "重庆大学", minScore: 610, rank: 8712 },
        { name: "深圳大学", minScore: 608, rank: 9134 },
        { name: "暨南大学", minScore: 606, rank: 9532 },
        { name: "西南财经大学", minScore: 603, rank: 10235 },
        { name: "中南财经政法大学", minScore: 598, rank: 11456 },
        { name: "华南师范大学", minScore: 592, rank: 12890 },
        { name: "南方医科大学", minScore: 588, rank: 13987 }
      ],
      "历史类": [
        { name: "北京大学", minScore: 663, rank: 35 },
        { name: "清华大学", minScore: 662, rank: 38 },
        { name: "复旦大学", minScore: 655, rank: 87 },
        { name: "上海交通大学", minScore: 654, rank: 92 },
        { name: "中国人民大学", minScore: 648, rank: 156 },
        { name: "南京大学", minScore: 645, rank: 198 },
        { name: "浙江大学", minScore: 642, rank: 245 },
        { name: "武汉大学", minScore: 632, rank: 456 },
        { name: "南开大学", minScore: 626, rank: 612 },
        { name: "北京师范大学", minScore: 624, rank: 668 },
        { name: "中山大学", minScore: 620, rank: 801 },
        { name: "同济大学", minScore: 616, rank: 945 },
        { name: "厦门大学", minScore: 614, rank: 1023 },
        { name: "华东师范大学", minScore: 612, rank: 1098 },
        { name: "中国政法大学", minScore: 610, rank: 1176 },
        { name: "上海财经大学", minScore: 608, rank: 1256 },
        { name: "对外经济贸易大学", minScore: 605, rank: 1389 },
        { name: "暨南大学", minScore: 598, rank: 1789 },
        { name: "中国传媒大学", minScore: 595, rank: 1956 },
        { name: "中南财经政法大学", minScore: 590, rank: 2267 },
        { name: "华南师范大学", minScore: 585, rank: 2623 },
        { name: "深圳大学", minScore: 582, rank: 2856 },
        { name: "西南政法大学", minScore: 578, rank: 3167 }
      ]
    }
  }
};
