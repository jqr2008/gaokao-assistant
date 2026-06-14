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
  },

  // ===== 北京（续）=====
  { id: 64, name: "北京外国语大学", province: "北京", city: "北京", type: "语言", level: ["211", "双一流"], isPublic: true, topMajors: ["英语", "翻译", "外交学", "国际新闻", "德语", "法语"], description: "中国外交官的摇篮，外语类最高学府。101种语言覆盖全球，毕业生遍布外交部、新华社和跨国公司。", employmentRate: 0.94, genderRatio: { male: 22, female: 78 }, avgScore: 648 },
  { id: 65, name: "北京邮电大学", province: "北京", city: "北京", type: "理工", level: ["211", "双一流"], isPublic: true, topMajors: ["通信工程", "计算机科学", "网络空间安全", "电子信息工程", "人工智能"], description: "两电一邮之一，通信和计算机全国顶尖。互联网大厂的目标院校，毕业生薪酬常年全国前十。", employmentRate: 0.97, genderRatio: { male: 68, female: 32 }, avgScore: 645 },
  { id: 66, name: "北京科技大学", province: "北京", city: "北京", type: "理工", level: ["211", "双一流"], isPublic: true, topMajors: ["材料科学", "冶金工程", "机械工程", "自动化", "计算机科学"], description: "原北京钢铁学院，材料冶金全国顶尖。''求实鼎新''的学风扎实，工科底蕴深厚。", employmentRate: 0.95, genderRatio: { male: 62, female: 38 }, avgScore: 632 },
  { id: 67, name: "北京交通大学", province: "北京", city: "北京", type: "理工", level: ["211", "双一流"], isPublic: true, topMajors: ["交通运输", "通信工程", "土木工程", "物流管理", "电气工程"], description: "铁路行业的清华，交通运输全国第一。校友遍布铁路局、地铁公司和物流巨头。", employmentRate: 0.96, genderRatio: { male: 60, female: 40 }, avgScore: 635 },
  { id: 68, name: "北京化工大学", province: "北京", city: "北京", type: "理工", level: ["211", "双一流"], isPublic: true, topMajors: ["化学工程", "材料科学", "高分子材料", "应用化学", "生物工程"], description: "化工领域的顶尖211，高分子材料全国前三。实验室条件好，产学研结合紧密。", employmentRate: 0.93, genderRatio: { male: 58, female: 42 }, avgScore: 608 },
  { id: 69, name: "北京工业大学", province: "北京", city: "北京", type: "理工", level: ["211", "双一流"], isPublic: true, topMajors: ["土木工程", "计算机科学", "环境工程", "光学工程", "材料科学"], description: "北京市属唯一的211，工科门类齐全。在北京本地就业优势明显，分数线在211中偏高。", employmentRate: 0.93, genderRatio: { male: 60, female: 40 }, avgScore: 610 },
  { id: 70, name: "华北电力大学", province: "北京", city: "北京/保定", type: "理工", level: ["211", "双一流"], isPublic: true, topMajors: ["电气工程", "能源动力", "自动化", "新能源科学", "核工程"], description: "电力行业的黄埔军校，电气工程全国前三。国家电网和南方电网的铁杆目标院校。", employmentRate: 0.96, genderRatio: { male: 65, female: 35 }, avgScore: 618 },
  { id: 71, name: "北京林业大学", province: "北京", city: "北京", type: "农林", level: ["211", "双一流"], isPublic: true, topMajors: ["风景园林", "林学", "园林设计", "环境科学", "水土保持"], description: "林业和风景园林全国顶尖，校园本身就像植物园。园林设计毕业生在北上广深很吃香。", employmentRate: 0.91, genderRatio: { male: 42, female: 58 }, avgScore: 595 },
  { id: 72, name: "北京中医药大学", province: "北京", city: "北京", type: "医药", level: ["211", "双一流"], isPublic: true, topMajors: ["中医学", "中药学", "针灸推拿", "中西医结合", "药学"], description: "中医药领域的最高学府，中医教育的老大哥。附属医院遍布北京，临床资源丰富。", employmentRate: 0.90, genderRatio: { male: 36, female: 64 }, avgScore: 598 },
  { id: 73, name: "中央民族大学", province: "北京", city: "北京", type: "民族", level: ["985", "211", "双一流"], isPublic: true, topMajors: ["民族学", "社会学", "舞蹈学", "音乐学", "中国语言文学"], description: "民族类最高学府，民族学全国第一。校园多元文化氛围浓厚，艺术类专业也很有特色。", employmentRate: 0.88, genderRatio: { male: 38, female: 62 }, avgScore: 600 },
  { id: 74, name: "中国地质大学(北京)", province: "北京", city: "北京", type: "理工", level: ["211", "双一流"], isPublic: true, topMajors: ["地质学", "地质工程", "地球物理", "宝石学", "环境工程"], description: "地质学全国第一，珠宝鉴定全国最强。''艰苦朴素，求真务实''，地质人遍布全球。", employmentRate: 0.92, genderRatio: { male: 58, female: 42 }, avgScore: 590 },
  { id: 75, name: "中国矿业大学(北京)", province: "北京", city: "北京", type: "理工", level: ["211", "双一流"], isPublic: true, topMajors: ["矿业工程", "安全工程", "测绘工程", "土木工程", "机械工程"], description: "矿业工程和安全工程全国第一。两校区（北京+徐州）独立招生，北京校区地理位置更好。", employmentRate: 0.93, genderRatio: { male: 64, female: 36 }, avgScore: 585 },
  { id: 76, name: "中国石油大学(北京)", province: "北京", city: "北京", type: "理工", level: ["211", "双一流"], isPublic: true, topMajors: ["石油工程", "油气储运", "化学工程", "地质工程", "海洋工程"], description: "石油石化领域的最高学府，三桶油的后花园。石油工程毕业生起薪高，但行业周期性明显。", employmentRate: 0.94, genderRatio: { male: 62, female: 38 }, avgScore: 592 },
  { id: 77, name: "北京体育大学", province: "北京", city: "北京", type: "体育", level: ["211", "双一流"], isPublic: true, topMajors: ["体育教育", "运动训练", "体育新闻", "运动康复", "体育管理"], description: "体育类唯一的211，冠军的摇篮。不仅有体育专业，体育新闻和运动康复也很有特色。", employmentRate: 0.89, genderRatio: { male: 55, female: 45 }, avgScore: 540 },

  // ===== 上海（续）=====
  { id: 78, name: "华东理工大学", province: "上海", city: "上海", type: "理工", level: ["211", "双一流"], isPublic: true, topMajors: ["化学工程", "应用化学", "生物工程", "材料科学", "药学"], description: "化工领域全国前三，上海工科重镇。坐落上海，实习机会多，毕业生在上海认可度很高。", employmentRate: 0.95, genderRatio: { male: 57, female: 43 }, avgScore: 638 },
  { id: 79, name: "东华大学", province: "上海", city: "上海", type: "理工", level: ["211", "双一流"], isPublic: true, topMajors: ["纺织工程", "服装设计", "材料科学", "环境工程", "管理科学"], description: "原中国纺织大学，纺织和服装设计全国第一。改名后知名度下降但实力仍在，设计学科非常强。", employmentRate: 0.93, genderRatio: { male: 40, female: 60 }, avgScore: 615 },
  { id: 80, name: "上海大学", province: "上海", city: "上海", type: "综合", level: ["211", "双一流"], isPublic: true, topMajors: ["美术学", "机械工程", "社会学", "材料科学", "影视艺术", "计算机科学"], description: "上海的地方旗舰211，近年上升迅猛。钱伟长校长留下的''三学期制''独树一帜。", employmentRate: 0.93, genderRatio: { male: 50, female: 50 }, avgScore: 618 },
  { id: 81, name: "华东政法大学", province: "上海", city: "上海", type: "政法", level: [], isPublic: true, topMajors: ["法学", "知识产权", "经济法", "国际法", "侦查学"], description: "五院四系之一，法学实力强劲。地处上海，毕业生遍布长三角法律圈。非211但法学分比很多985高。", employmentRate: 0.92, genderRatio: { male: 38, female: 62 }, avgScore: 625 },

  // ===== 广东（续）=====
  { id: 82, name: "广东外语外贸大学", province: "广东", city: "广州", type: "语言", level: [], isPublic: true, topMajors: ["英语", "商务英语", "翻译", "国际经济与贸易", "日语", "西班牙语"], description: "华南外语类最强校，商务英语全国前三。广交会的''主场学校''，外语+贸易复合培养是特色。", employmentRate: 0.93, genderRatio: { male: 28, female: 72 }, avgScore: 588 },
  { id: 83, name: "广东工业大学", province: "广东", city: "广州", type: "理工", level: [], isPublic: true, topMajors: ["机械工程", "自动化", "计算机科学", "工业设计", "土木工程"], description: "广东省属工科强校，工科门类齐全。在珠三角制造业中认可度极高，就业率常年很高。", employmentRate: 0.94, genderRatio: { male: 65, female: 35 }, avgScore: 575 },
  { id: 84, name: "广州大学", province: "广东", city: "广州", type: "综合", level: [], isPublic: true, topMajors: ["土木工程", "教育学", "数学", "统计学", "地理科学"], description: "广州的亲儿子，近年投入巨资发展。土木和抗震工程是特色，师范专业在广州市很吃香。", employmentRate: 0.91, genderRatio: { male: 48, female: 52 }, avgScore: 568 },
  { id: 85, name: "汕头大学", province: "广东", city: "汕头", type: "综合", level: [], isPublic: true, topMajors: ["临床医学", "艺术设计", "工商管理", "新闻传播学", "法学"], description: "李嘉诚基金会持续资助，国际化程度高。医学院全英教学，学费全免+生活费补贴的良心学校。", employmentRate: 0.90, genderRatio: { male: 47, female: 53 }, avgScore: 575 },
  { id: 86, name: "广州医科大学", province: "广东", city: "广州", type: "医药", level: ["双一流"], isPublic: true, topMajors: ["临床医学", "呼吸内科", "护理学", "药学", "预防医学"], description: "钟南山院士坐镇，呼吸内科全国第一。双一流学科建设高校，临床医学实力在广东位居前列。", employmentRate: 0.93, genderRatio: { male: 42, female: 58 }, avgScore: 585 },

  // ===== 浙江（续）=====
  { id: 87, name: "浙江工业大学", province: "浙江", city: "杭州", type: "理工", level: [], isPublic: true, topMajors: ["化学工程", "机械工程", "计算机科学", "药学", "工商管理"], description: "浙江老二，省属最强工科院校。在省内有''小浙大''之称，杭州就业优势明显。", employmentRate: 0.94, genderRatio: { male: 60, female: 40 }, avgScore: 610 },
  { id: 88, name: "浙江师范大学", province: "浙江", city: "金华", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "数学", "学前教育", "心理学"], description: "浙江最好的师范院校，省重点建设高校。幼儿园和小学教师的主要来源，师范专业省内第一。", employmentRate: 0.93, genderRatio: { male: 30, female: 70 }, avgScore: 595 },
  { id: 89, name: "宁波大学", province: "浙江", city: "宁波", type: "综合", level: ["双一流"], isPublic: true, topMajors: ["力学", "水产", "海洋科学", "信息通信", "临床医学"], description: "包玉刚捐建，双一流学科建设高校。力学和水产是特色，宁波计划单列市的资源投入可观。", employmentRate: 0.92, genderRatio: { male: 48, female: 52 }, avgScore: 598 },
  { id: 90, name: "杭州电子科技大学", province: "浙江", city: "杭州", type: "理工", level: [], isPublic: true, topMajors: ["电子信息工程", "计算机科学", "通信工程", "自动化", "会计学"], description: "电子信息特色鲜明，阿里系的''近水楼台''。坐落杭州，IT就业不输211。会计学也很强。", employmentRate: 0.95, genderRatio: { male: 68, female: 32 }, avgScore: 605 },
  { id: 91, name: "温州医科大学", province: "浙江", city: "温州", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "眼视光学", "药学", "护理学", "医学检验"], description: "眼视光学全国第一，附属眼视光医院世界知名。临床医学在浙江省内认可度仅次于浙大。", employmentRate: 0.93, genderRatio: { male: 42, female: 58 }, avgScore: 608 },

  // ===== 江苏（续）=====
  { id: 92, name: "南京理工大学", province: "江苏", city: "南京", type: "理工", level: ["211", "双一流"], isPublic: true, topMajors: ["兵器科学与技术", "光学工程", "化学工程", "计算机科学", "自动化"], description: "国防七子之一，兵器科学和光学工程全国顶尖。校园梧桐大道超美，军工+IT两条路都好就业。", employmentRate: 0.96, genderRatio: { male: 67, female: 33 }, avgScore: 630 },
  { id: 93, name: "河海大学", province: "江苏", city: "南京", type: "理工", level: ["211", "双一流"], isPublic: true, topMajors: ["水利工程", "土木工程", "环境工程", "海洋科学", "计算机科学"], description: "水利领域的绝对王者，世界第一。三峡工程、南水北调的主力军，学水利就去河海。", employmentRate: 0.95, genderRatio: { male: 58, female: 42 }, avgScore: 615 },
  { id: 94, name: "江南大学", province: "江苏", city: "无锡", type: "理工", level: ["211", "双一流"], isPublic: true, topMajors: ["食品科学", "轻工技术", "工业设计", "生物工程", "纺织工程"], description: "食品科学全国第一，轻工技术世界领先。在无锡这座宜居城市，生活成本和环境都很好。", employmentRate: 0.94, genderRatio: { male: 48, female: 52 }, avgScore: 600 },
  { id: 95, name: "南京农业大学", province: "江苏", city: "南京", type: "农林", level: ["211", "双一流"], isPublic: true, topMajors: ["农业资源", "作物学", "兽医学", "食品科学", "土地资源管理"], description: "农业类211中的佼佼者，农经和兽医全国前三。南京的农业类院校里地理位置最好的。", employmentRate: 0.92, genderRatio: { male: 46, female: 54 }, avgScore: 588 },
  { id: 96, name: "中国药科大学", province: "江苏", city: "南京", type: "医药", level: ["211", "双一流"], isPublic: true, topMajors: ["药学", "中药学", "制药工程", "药物化学", "临床药学"], description: "药学领域唯一的211，药界清华。毕业生遍布各大药企和药监局，起薪高就业好。", employmentRate: 0.95, genderRatio: { male: 38, female: 62 }, avgScore: 610 },
  { id: 97, name: "南京邮电大学", province: "江苏", city: "南京", type: "理工", level: ["双一流"], isPublic: true, topMajors: ["通信工程", "电子信息工程", "计算机科学", "自动化", "光电信息"], description: "双一流学科建设高校，通信和电子是王牌。三大运营商的目标院校，IT就业不输985。", employmentRate: 0.95, genderRatio: { male: 62, female: 38 }, avgScore: 605 },
  { id: 98, name: "南京信息工程大学", province: "江苏", city: "南京", type: "理工", level: ["双一流"], isPublic: true, topMajors: ["大气科学", "应用气象", "环境科学", "计算机科学", "遥感技术"], description: "大气科学全国第一，气象人才的摇篮。全国气象局领导大半出自这里，就业非常对口稳定。", employmentRate: 0.93, genderRatio: { male: 52, female: 48 }, avgScore: 588 },
  { id: 99, name: "中国矿业大学", province: "江苏", city: "徐州", type: "理工", level: ["211", "双一流"], isPublic: true, topMajors: ["矿业工程", "安全工程", "测绘工程", "土木工程", "机械工程"], description: "矿业工程和安全工程全国第一。徐州校区（与北京独立），在安全工程领域无人能敌。", employmentRate: 0.94, genderRatio: { male: 65, female: 35 }, avgScore: 578 },
  { id: 100, name: "江苏大学", province: "江苏", city: "镇江", type: "理工", level: [], isPublic: true, topMajors: ["车辆工程", "农业工程", "医学检验", "能源动力", "食品科学"], description: "原镇江农机学院，车辆工程业内认可度极高。医学检验全国前三，省属重点中实力突出。", employmentRate: 0.93, genderRatio: { male: 58, female: 42 }, avgScore: 575 },

  // ===== 湖北（续）=====
  { id: 101, name: "中国地质大学(武汉)", province: "湖北", city: "武汉", type: "理工", level: ["211", "双一流"], isPublic: true, topMajors: ["地质学", "地质工程", "珠宝学", "地球物理", "环境工程"], description: "地质学全国第一，珠宝鉴定和设计全国最强。校园里有化石林和博物馆，地质人的圣地。", employmentRate: 0.92, genderRatio: { male: 56, female: 44 }, avgScore: 598 },
  { id: 102, name: "华中农业大学", province: "湖北", city: "武汉", type: "农林", level: ["211", "双一流"], isPublic: true, topMajors: ["园艺学", "畜牧学", "兽医学", "生物科学", "食品科学"], description: "农业类211中实力稳居前三，园艺学全国第一。生物和食品学科也很强，校园大的像个小镇。", employmentRate: 0.91, genderRatio: { male: 47, female: 53 }, avgScore: 590 },

  // ===== 陕西（续）=====
  { id: 103, name: "西北大学", province: "陕西", city: "西安", type: "综合", level: ["211", "双一流"], isPublic: true, topMajors: ["考古学", "地质学", "经济学", "历史学", "化学"], description: "西北地区老牌名校，考古学全国前三。贾平凹的母校，经济学在西北首屈一指。", employmentRate: 0.90, genderRatio: { male: 48, female: 52 }, avgScore: 590 },
  { id: 104, name: "长安大学", province: "陕西", city: "西安", type: "理工", level: ["211", "双一流"], isPublic: true, topMajors: ["交通运输", "土木工程", "地质工程", "车辆工程", "测绘工程"], description: "公路交通领域的王者，号称''亚洲唯一培养公路人才的大学''。港珠澳大桥总工就是长安校友。", employmentRate: 0.94, genderRatio: { male: 63, female: 37 }, avgScore: 585 },
  { id: 105, name: "西北农林科技大学", province: "陕西", city: "杨凌", type: "农林", level: ["985", "211", "双一流"], isPublic: true, topMajors: ["葡萄酒酿造", "植物保护", "农业水利", "动物科学", "食品科学"], description: "农林类985，葡萄酒专业全国唯一且顶尖。地理位置偏但分数在985中最低，性价比之王。", employmentRate: 0.89, genderRatio: { male: 50, female: 50 }, avgScore: 575 },

  // ===== 天津（续）=====
  { id: 106, name: "天津医科大学", province: "天津", city: "天津", type: "医药", level: ["211", "双一流"], isPublic: true, topMajors: ["临床医学", "肿瘤学", "口腔医学", "护理学", "药学"], description: "医学类唯一的211，肿瘤学科全国领先。天津医疗资源丰富，附属医院实力雄厚。", employmentRate: 0.93, genderRatio: { male: 40, female: 60 }, avgScore: 628 },
  { id: 107, name: "河北工业大学", province: "天津", city: "天津", type: "理工", level: ["211", "双一流"], isPublic: true, topMajors: ["电气工程", "机械工程", "化学工程", "材料科学", "土木工程"], description: "全国唯一的''异地办学''211——河北的211但校园在天津。电气工程是王牌，京津冀就业都不错。", employmentRate: 0.92, genderRatio: { male: 62, female: 38 }, avgScore: 595 },

  // ===== 福建（续）=====
  { id: 108, name: "福州大学", province: "福建", city: "福州", type: "理工", level: ["211", "双一流"], isPublic: true, topMajors: ["化学工程", "电气工程", "土木工程", "计算机科学", "机械工程"], description: "福建省属唯一的211（厦门大学是部属）。化工和电气是王牌，在福建省内就业无敌。", employmentRate: 0.93, genderRatio: { male: 58, female: 42 }, avgScore: 595 },

  // ===== 山东（续）=====
  { id: 109, name: "中国石油大学(华东)", province: "山东", city: "青岛", type: "理工", level: ["211", "双一流"], isPublic: true, topMajors: ["石油工程", "化学工程", "地质工程", "油气储运", "安全工程"], description: "石油石化领域与北京校区并列双雄。位于青岛这座美丽海滨城市，毕业生进三桶油有天然优势。", employmentRate: 0.94, genderRatio: { male: 62, female: 38 }, avgScore: 592 },
  { id: 110, name: "青岛大学", province: "山东", city: "青岛", type: "综合", level: [], isPublic: true, topMajors: ["临床医学", "纺织工程", "材料科学", "自动化", "旅游管理"], description: "青岛的亲儿子，近年投入巨大发展迅速。医学院在山东省内认可度高，青岛这座城市本身加分。", employmentRate: 0.91, genderRatio: { male: 47, female: 53 }, avgScore: 578 },

  // ===== 东北（续）=====
  { id: 111, name: "东北大学", province: "辽宁", city: "沈阳", type: "理工", level: ["985", "211", "双一流"], isPublic: true, topMajors: ["自动化", "计算机科学", "冶金工程", "材料科学", "机器人工程"], description: "老牌985工科强校，自动化和冶金全国前三。近年发力计算机和AI，沈阳校区+秦皇岛分校。", employmentRate: 0.93, genderRatio: { male: 64, female: 36 }, avgScore: 610 },
  { id: 112, name: "哈尔滨工程大学", province: "黑龙江", city: "哈尔滨", type: "理工", level: ["211", "双一流"], isPublic: true, topMajors: ["船舶工程", "海洋工程", "核科学", "水声工程", "自动化"], description: "三海一核（船舶、海洋、海军、核能）领域的王者。国防七子之一，军工就业保障极好。", employmentRate: 0.95, genderRatio: { male: 68, female: 32 }, avgScore: 605 },
  { id: 113, name: "东北林业大学", province: "黑龙江", city: "哈尔滨", type: "农林", level: ["211", "双一流"], isPublic: true, topMajors: ["林学", "森林工程", "园林设计", "木材科学", "野生动物保护"], description: "林业类211，在东北林业资源丰富的背景下有独特优势。园林和野保专业很有意思。", employmentRate: 0.88, genderRatio: { male: 48, female: 52 }, avgScore: 540 },
  { id: 114, name: "延边大学", province: "吉林", city: "延吉", type: "综合", level: ["211", "双一流"], isPublic: true, topMajors: ["朝鲜语", "临床医学", "药学", "法学", "汉语言文学"], description: "地处中朝边境的211，朝鲜语全国最强。民族特色鲜明，冷面、烤肉和延吉风情是加分项。", employmentRate: 0.87, genderRatio: { male: 42, female: 58 }, avgScore: 530 },

  // ===== 安徽（续）=====
  { id: 115, name: "安徽大学", province: "安徽", city: "合肥", type: "综合", level: ["211", "双一流"], isPublic: true, topMajors: ["计算机科学", "汉语言文学", "法学", "英语", "电子信息工程"], description: "安徽省属211，文科见长。在合肥有中科大和合工大双星环绕下，安大走综合路线发展稳健。", employmentRate: 0.91, genderRatio: { male: 49, female: 51 }, avgScore: 590 },

  // ===== 河南（续）=====
  { id: 116, name: "河南大学", province: "河南", city: "开封/郑州", type: "综合", level: ["双一流"], isPublic: true, topMajors: ["生物学", "教育学", "汉语言文学", "地理学", "经济学"], description: "百年老校，双一流学科建设高校。虽非211但底蕴深厚，生物学是双一流学科。开封校区古色古香。", employmentRate: 0.89, genderRatio: { male: 45, female: 55 }, avgScore: 578 },

  // ===== 河北 =====
  { id: 117, name: "燕山大学", province: "河北", city: "秦皇岛", type: "理工", level: [], isPublic: true, topMajors: ["机械工程", "材料科学", "自动化", "车辆工程", "仪器科学"], description: "原哈工大重型机械学院，机械工程全国前列。秦皇岛海边大学，在重型机械和汽车行业地位很高。", employmentRate: 0.92, genderRatio: { male: 64, female: 36 }, avgScore: 578 },

  // ===== 湖南（续）=====
  { id: 118, name: "湘潭大学", province: "湖南", city: "湘潭", type: "综合", level: ["双一流"], isPublic: true, topMajors: ["数学", "法学", "马克思主义理论", "化学", "材料科学"], description: "新晋双一流，数学学科是王牌。毛主席亲自倡办的大学，法学和化工也有一定实力。", employmentRate: 0.90, genderRatio: { male: 52, female: 48 }, avgScore: 570 },
  { id: 119, name: "长沙理工大学", province: "湖南", city: "长沙", type: "理工", level: [], isPublic: true, topMajors: ["交通运输", "电气工程", "土木工程", "水利工程", "计算机科学"], description: "交通和电力特色鲜明，电气工程进国家电网的绿色通道。长沙这座城市生活成本低、幸福指数高。", employmentRate: 0.93, genderRatio: { male: 62, female: 38 }, avgScore: 572 },

  // ===== 四川/重庆（续）=====
  { id: 120, name: "西南交通大学", province: "四川", city: "成都", type: "理工", level: ["211", "双一流"], isPublic: true, topMajors: ["交通运输", "土木工程", "机械工程", "电气工程", "计算机科学"], description: "中国铁路工程师的摇篮，交通运输全国第一。成都校区生活安逸，峨眉校区山清水秀。", employmentRate: 0.95, genderRatio: { male: 64, female: 36 }, avgScore: 620 },
  { id: 121, name: "四川农业大学", province: "四川", city: "雅安/成都", type: "农林", level: ["211", "双一流"], isPublic: true, topMajors: ["动物科学", "农学", "风景园林", "食品科学", "草学"], description: "西南地区最好的农林院校。雅安校区环境清幽，成都校区方便就业。动物科学是王牌。", employmentRate: 0.90, genderRatio: { male: 47, female: 53 }, avgScore: 575 },
  { id: 122, name: "成都理工大学", province: "四川", city: "成都", type: "理工", level: ["双一流"], isPublic: true, topMajors: ["地质学", "地质工程", "石油工程", "土木工程", "核工程"], description: "地质学双一流学科，原成都地质学院。在地质勘探和油气领域地位很高，成都的宜居环境加分。", employmentRate: 0.91, genderRatio: { male: 60, female: 40 }, avgScore: 572 },
  { id: 123, name: "西南石油大学", province: "四川", city: "成都", type: "理工", level: ["双一流"], isPublic: true, topMajors: ["石油工程", "油气储运", "地质工程", "化学工程", "机械工程"], description: "石油天然气领域特色鲜明，双一流建设学科。毕业生进中石油、中石化、中海油有传统优势。", employmentRate: 0.93, genderRatio: { male: 63, female: 37 }, avgScore: 568 },
  { id: 124, name: "重庆邮电大学", province: "重庆", city: "重庆", type: "理工", level: [], isPublic: true, topMajors: ["通信工程", "计算机科学", "自动化", "微电子", "软件工程"], description: "四邮之一，通信和计算机是王牌。在西南IT圈认可度高，华为中兴的重要招聘基地。", employmentRate: 0.94, genderRatio: { male: 66, female: 34 }, avgScore: 580 },

  // ===== 云南/贵州（续）=====
  { id: 125, name: "昆明理工大学", province: "云南", city: "昆明", type: "理工", level: [], isPublic: true, topMajors: ["冶金工程", "材料科学", "环境工程", "建筑学", "电气工程"], description: "双非中的工科强者，冶金工程全国前列。昆明气候四季如春，是很多人心中的宜居城市。", employmentRate: 0.91, genderRatio: { male: 62, female: 38 }, avgScore: 550 },

  // ===== 山西 =====
  { id: 126, name: "太原理工大学", province: "山西", city: "太原", type: "理工", level: ["211", "双一流"], isPublic: true, topMajors: ["矿业工程", "机械工程", "化学工程", "材料科学", "土木工程"], description: "山西唯一的211，矿业和机械是传统强项。郑强教授任书记后改革力度大，发展势头好。", employmentRate: 0.91, genderRatio: { male: 62, female: 38 }, avgScore: 560 },

  // ===== 甘肃/新疆/宁夏/青海/西藏 =====
  { id: 127, name: "新疆大学", province: "新疆", city: "乌鲁木齐", type: "综合", level: ["211", "双一流"], isPublic: true, topMajors: ["马克思主义理论", "计算机科学", "化学", "地理学", "少数民族语言"], description: "新疆最高学府，双一流建设高校。一带一路桥头堡的地缘优势，中亚研究特色鲜明。", employmentRate: 0.86, genderRatio: { male: 48, female: 52 }, avgScore: 520 },
  { id: 128, name: "石河子大学", province: "新疆", city: "石河子", type: "综合", level: ["211", "双一流"], isPublic: true, topMajors: ["农业工程", "临床医学", "化学工程", "动物医学", "食品科学"], description: "兵团直属211，地处戈壁绿洲石河子。医学和农学在新疆排名前列，分数在211中最低。", employmentRate: 0.87, genderRatio: { male: 47, female: 53 }, avgScore: 505 },
  { id: 129, name: "宁夏大学", province: "宁夏", city: "银川", type: "综合", level: ["211", "双一流"], isPublic: true, topMajors: ["草学", "民族学", "水利工程", "化学工程", "计算机科学"], description: "宁夏唯一的211。草学和民族学是特色，宁夏平原的灌溉农业研究有区域优势。", employmentRate: 0.86, genderRatio: { male: 48, female: 52 }, avgScore: 510 },
  { id: 130, name: "青海大学", province: "青海", city: "西宁", type: "综合", level: ["211", "双一流"], isPublic: true, topMajors: ["生态学", "临床医学", "水利工程", "高原医学", "草学"], description: "青海唯一的211，高原特色学科全国独一无二。清华大学对口支援，发展迅速。", employmentRate: 0.85, genderRatio: { male: 50, female: 50 }, avgScore: 500 },
  { id: 131, name: "西藏大学", province: "西藏", city: "拉萨", type: "综合", level: ["211", "双一流"], isPublic: true, topMajors: ["生态学", "藏语言文学", "高原医学", "民族学", "计算机科学"], description: "西藏唯一的211，海拔最高的大学。高原研究和藏学研究世界独此一家。", employmentRate: 0.83, genderRatio: { male: 48, female: 52 }, avgScore: 480 },

  // ===== 内蒙古 =====
  { id: 132, name: "内蒙古大学", province: "内蒙古", city: "呼和浩特", type: "综合", level: ["211", "双一流"], isPublic: true, topMajors: ["生物学", "蒙古学", "生态学", "化学", "计算机科学"], description: "内蒙古唯一的211，生物学（特别是草原生态）是双一流学科。蒙古学研究全球领先。", employmentRate: 0.86, genderRatio: { male: 46, female: 54 }, avgScore: 528 },

  // ===== 辽宁（续）=====
  { id: 133, name: "东北财经大学", province: "辽宁", city: "大连", type: "财经", level: [], isPublic: true, topMajors: ["会计学", "金融学", "经济学", "统计学", "财政学"], description: "财经类强校，非211但专业实力不输中南财经。在大连这座美丽的海滨城市，就业遍布东北金融圈。", employmentRate: 0.93, genderRatio: { male: 38, female: 62 }, avgScore: 595 },
  { id: 134, name: "大连海事大学", province: "辽宁", city: "大连", type: "理工", level: ["211", "双一流"], isPublic: true, topMajors: ["航海技术", "轮机工程", "交通运输", "法学(海商法)", "物流管理"], description: "海事领域唯一的211，航海家的摇篮。海商法全国第一，毕业生遍布全球航运公司。", employmentRate: 0.95, genderRatio: { male: 68, female: 32 }, avgScore: 588 },

  // ===== 江西（续）=====
  { id: 135, name: "江西财经大学", province: "江西", city: "南昌", type: "财经", level: [], isPublic: true, topMajors: ["会计学", "金融学", "经济学", "统计学", "工商管理"], description: "财经类强校，在南方财经圈有一定知名度。会计和统计是传统王牌，校友网络在华南活跃。", employmentRate: 0.91, genderRatio: { male: 40, female: 60 }, avgScore: 572 },

  // ===== 广东（续2）=====
  { id: 136, name: "广东财经大学", province: "广东", city: "广州/佛山", type: "财经", level: [], isPublic: true, topMajors: ["会计学", "金融学", "法学", "工商管理", "经济学"], description: "广东省属财经院校，在广州和佛山有校区。会计和金融在广东省内就业不错，分数友好。", employmentRate: 0.90, genderRatio: { male: 42, female: 58 }, avgScore: 555 },
  { id: 137, name: "东莞理工学院", province: "广东", city: "东莞", type: "理工", level: [], isPublic: true, topMajors: ["计算机科学", "电子信息工程", "机械工程", "环境工程", "应用化学"], description: "东莞的亲儿子，近年投入巨资发展。背靠世界工厂东莞，工科生实习和就业资源丰富。", employmentRate: 0.93, genderRatio: { male: 62, female: 38 }, avgScore: 545 },

  // ===== 上海（续2）=====
  { id: 138, name: "上海理工大学", province: "上海", city: "上海", type: "理工", level: [], isPublic: true, topMajors: ["光学工程", "动力工程", "医疗器械", "管理科学", "印刷工程"], description: "上海老牌工科院校，光学和医疗器械是特色。地处上海杨浦，周边高校云集学术氛围好。", employmentRate: 0.92, genderRatio: { male: 58, female: 42 }, avgScore: 560 },
  { id: 139, name: "上海师范大学", province: "上海", city: "上海", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "学前教育", "心理学", "旅游管理"], description: "上海市属师范院校，上海中小学教师的主要来源。在上海当老师必选的两所之一（另一所是华师大）。", employmentRate: 0.92, genderRatio: { male: 32, female: 68 }, avgScore: 555 },

  // ===== 广西（续）=====
  { id: 140, name: "广西医科大学", province: "广西", city: "南宁", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "口腔医学", "预防医学", "药学", "护理学"], description: "广西最好的医学院，临床和口腔在省内一家独大。附属医院遍布广西，就业不愁。", employmentRate: 0.92, genderRatio: { male: 40, female: 60 }, avgScore: 565 },

  // ===== 海南（续）=====
  { id: 141, name: "海南师范大学", province: "海南", city: "海口", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "英语", "生态学", "旅游管理"], description: "海南基础教育教师的摇篮，师范专业省内最强。海南自贸港建设带来更多就业机会。", employmentRate: 0.88, genderRatio: { male: 34, female: 66 }, avgScore: 540 },

  // ===== 艺术/体育类名校 =====
  { id: 142, name: "中央美术学院", province: "北京", city: "北京", type: "艺术", level: ["双一流"], isPublic: true, topMajors: ["美术学", "设计学", "雕塑", "中国画", "艺术理论"], description: "中国美术教育的最高殿堂，美术学全国第一。想学造型艺术和设计的终极梦想。", employmentRate: 0.87, genderRatio: { male: 40, female: 60 }, avgScore: 550 },
  { id: 143, name: "中国美术学院", province: "浙江", city: "杭州", type: "艺术", level: ["双一流"], isPublic: true, topMajors: ["美术学", "设计学", "中国画", "建筑学", "艺术理论"], description: "与央美齐名的顶级美院，国画和书法全国最强。杭州西湖边的校园美到窒息。", employmentRate: 0.88, genderRatio: { male: 38, female: 62 }, avgScore: 548 },
  { id: 144, name: "北京电影学院", province: "北京", city: "北京", type: "艺术", level: [], isPublic: true, topMajors: ["导演", "表演", "摄影", "动画", "编剧"], description: "中国电影人才的摇篮，明星和导演的母校。想进影视行业的第一选择，校友资源无敌。", employmentRate: 0.85, genderRatio: { male: 45, female: 55 }, avgScore: 500 },
  { id: 145, name: "上海戏剧学院", province: "上海", city: "上海", type: "艺术", level: [], isPublic: true, topMajors: ["表演", "戏剧影视导演", "戏剧文学", "舞台美术", "播音主持"], description: "与中戏、北电并列的顶级艺术院校。上海的影视戏剧资源丰富，胡歌、徐峥的母校。", employmentRate: 0.84, genderRatio: { male: 42, female: 58 }, avgScore: 495 },
  { id: 146, name: "南京艺术学院", province: "江苏", city: "南京", type: "艺术", level: [], isPublic: true, topMajors: ["美术学", "音乐学", "设计学", "舞蹈学", "艺术理论"], description: "六大艺术学院之首，艺术学科门类最齐全。美术和音乐都很强，南京文艺氛围浓厚。", employmentRate: 0.86, genderRatio: { male: 38, female: 62 }, avgScore: 520 },

  // ===== 更多热门省属院校 =====
  { id: 147, name: "上海对外经贸大学", province: "上海", city: "上海", type: "财经", level: [], isPublic: true, topMajors: ["国际经济与贸易", "商务英语", "金融学", "会计学", "法学"], description: "外经贸领域特色鲜明，国际贸易实务全国前列。在外企和贸易公司的认可度很高。", employmentRate: 0.92, genderRatio: { male: 32, female: 68 }, avgScore: 555 },
  { id: 148, name: "首都经济贸易大学", province: "北京", city: "北京", type: "财经", level: [], isPublic: true, topMajors: ["劳动经济学", "会计学", "金融学", "统计学", "人力资源管理"], description: "北京市属财经强校，劳动经济学全国第一。在北京就业有地缘优势，分数比央财和对外经贸友好。", employmentRate: 0.93, genderRatio: { male: 36, female: 64 }, avgScore: 592 },
  { id: 149, name: "南京财经大学", province: "江苏", city: "南京", type: "财经", level: [], isPublic: true, topMajors: ["会计学", "金融学", "食品科学", "经济学", "统计学"], description: "江苏省属财经院校，在江苏金融圈有一定影响力。南京地理位置好，但分数比一线财经院校低不少。", employmentRate: 0.91, genderRatio: { male: 38, female: 62 }, avgScore: 570 },
  { id: 150, name: "浙江工商大学", province: "浙江", city: "杭州", type: "财经", level: [], isPublic: true, topMajors: ["工商管理", "统计学", "食品科学", "会计学", "金融学"], description: "浙江省属重点，统计学和工商管理是优势学科。在杭州这座电商之都，商科就业前景好。", employmentRate: 0.92, genderRatio: { male: 42, female: 58 }, avgScore: 590 },
  { id: 151, name: "福建师范大学", province: "福建", city: "福州", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "音乐学", "美术学", "体育学"], description: "福建省属最强师范，音乐和美术专业很有特色。在福建省内中小学教师招聘中占据主导地位。", employmentRate: 0.90, genderRatio: { male: 32, female: 68 }, avgScore: 562 },
  { id: 152, name: "山东师范大学", province: "山东", city: "济南", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "马克思主义理论", "心理学", "化学"], description: "山东省属最强师范，全省中小学教师的摇篮。考研率很高，学习氛围浓厚。", employmentRate: 0.91, genderRatio: { male: 30, female: 70 }, avgScore: 572 },
  { id: 153, name: "河北大学", province: "河北", city: "保定", type: "综合", level: [], isPublic: true, topMajors: ["光学工程", "汉语言文学", "化学", "生物学", "新闻传播学"], description: "河北省属重点，历史悠久底蕴深厚。光学工程是特色学科，在河北省内综合实力排前三。", employmentRate: 0.89, genderRatio: { male: 47, female: 53 }, avgScore: 560 },
  { id: 154, name: "山西大学", province: "山西", city: "太原", type: "综合", level: ["双一流"], isPublic: true, topMajors: ["物理学", "哲学", "计算机科学", "化学", "历史学"], description: "百年老校，新晋双一流。物理学和哲学有深厚积淀，整体在山西仅次于太原理工。", employmentRate: 0.88, genderRatio: { male: 48, female: 52 }, avgScore: 548 },
  { id: 155, name: "湖北大学", province: "湖北", city: "武汉", type: "综合", level: [], isPublic: true, topMajors: ["材料科学", "汉语言文学", "生物学", "化学", "教育学"], description: "湖北省属重点，在武汉高校林立的格局中走出了自己的路。师范和材料科学有区域优势。", employmentRate: 0.90, genderRatio: { male: 47, female: 53 }, avgScore: 565 },
  { id: 156, name: "安徽师范大学", province: "安徽", city: "芜湖", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "历史学", "地理科学", "生物学"], description: "安徽省属最强师范，底蕴深厚。师范专业省内认可度仅次于教育部直属六所。", employmentRate: 0.90, genderRatio: { male: 33, female: 67 }, avgScore: 558 },

  // ===== 民办/特色院校（分数较低的保底选择）=====
  { id: 157, name: "西交利物浦大学", province: "江苏", city: "苏州", type: "综合", level: [], isPublic: false, topMajors: ["金融数学", "建筑学", "计算机科学", "传媒学", "工商管理"], description: "中英合作办学标杆，全英文教学。发利物浦大学学位，出国读研的跳板。学费较贵但性价比高。", employmentRate: 0.90, genderRatio: { male: 45, female: 55 }, avgScore: 590 },
  { id: 158, name: "宁波诺丁汉大学", province: "浙江", city: "宁波", type: "综合", level: [], isPublic: false, topMajors: ["国际商务", "计算机科学", "建筑学", "英语", "经济学"], description: "中国第一所中外合作大学，全英文授课。发诺丁汉大学学位，申请英国硕士有天然优势。", employmentRate: 0.90, genderRatio: { male: 43, female: 57 }, avgScore: 595 },
  { id: 159, name: "南方科技大学", province: "广东", city: "深圳", type: "理工", level: ["双一流"], isPublic: true, topMajors: ["物理学", "材料科学", "计算机科学", "生物医学工程", "金融数学"], description: "深圳创办的新型研究型大学，上升速度惊人。全英文教学，院士比例全国最高之一。综合评价招生。", employmentRate: 0.94, genderRatio: { male: 58, female: 42 }, avgScore: 648 },
  { id: 160, name: "上海纽约大学", province: "上海", city: "上海", type: "综合", level: [], isPublic: false, topMajors: ["数据科学", "金融学", "互动媒体", "计算机科学", "社会科学"], description: "华东师大和纽约大学合办，国际化程度极高。发纽大学位，在前滩的校园超现代。学费高但含金量也高。", employmentRate: 0.92, genderRatio: { male: 42, female: 58 }, avgScore: 642 },
  { id: 161, name: "外交学院", province: "北京", city: "北京", type: "语言", level: ["双一流"], isPublic: true, topMajors: ["外交学", "国际法", "英语", "翻译", "国际关系"], description: "外交部直属的精英院校，外交官的摇篮。小而精的培养模式，毕业生进外交部比例全国最高。", employmentRate: 0.94, genderRatio: { male: 35, female: 65 }, avgScore: 640 },

  // ===== 各省普通本科（覆盖面更广）=====
  // 广东
  { id: 162, name: "广东海洋大学", province: "广东", city: "湛江", type: "理工", level: [], isPublic: true, topMajors: ["海洋科学", "水产养殖", "食品科学", "船舶工程", "大气科学"], description: "华南海洋类特色院校，水产和海洋科学是王牌。湛江的海鲜又便宜又好吃。", employmentRate: 0.88, genderRatio: { male: 55, female: 45 }, avgScore: 510 },
  { id: 163, name: "五邑大学", province: "广东", city: "江门", type: "理工", level: [], isPublic: true, topMajors: ["机械工程", "纺织工程", "计算机科学", "电子信息工程", "土木工程"], description: "江门市属院校，侨乡特色。工科为主，在江门本地就业有优势，分数在本科线附近。", employmentRate: 0.89, genderRatio: { male: 58, female: 42 }, avgScore: 488 },
  { id: 164, name: "佛山科学技术学院", province: "广东", city: "佛山", type: "理工", level: [], isPublic: true, topMajors: ["机械工程", "兽医学", "土木工程", "计算机科学", "口腔医学"], description: "佛山唯一的公办本科，兽医和口腔医学很实用。佛山经济强、就业机会多。", employmentRate: 0.91, genderRatio: { male: 55, female: 45 }, avgScore: 500 },
  { id: 165, name: "惠州学院", province: "广东", city: "惠州", type: "综合", level: [], isPublic: true, topMajors: ["服装设计", "电子信息工程", "化学工程", "计算机科学", "数学"], description: "惠州唯一的公办本科，服装设计有地方产业支撑。惠州环境好、离深圳近。", employmentRate: 0.88, genderRatio: { male: 48, female: 52 }, avgScore: 485 },
  { id: 166, name: "肇庆学院", province: "广东", city: "肇庆", type: "综合", level: [], isPublic: true, topMajors: ["教育学", "旅游管理", "环境工程", "美术学", "体育教育"], description: "肇庆唯一的公办本科，师范方向为主。星湖校区风景如画，生活节奏慢适合沉下心来学习。", employmentRate: 0.87, genderRatio: { male: 44, female: 56 }, avgScore: 478 },

  // 北京普通本科
  { id: 167, name: "北京联合大学", province: "北京", city: "北京", type: "综合", level: [], isPublic: true, topMajors: ["旅游管理", "软件工程", "特殊教育", "应用心理学", "会展经济"], description: "北京市属综合院校，校区遍布北京各处。特殊教育全国知名，分数在北京高校中最友好。", employmentRate: 0.89, genderRatio: { male: 46, female: 54 }, avgScore: 520 },
  { id: 168, name: "北京服装学院", province: "北京", city: "北京", type: "艺术", level: [], isPublic: true, topMajors: ["服装设计", "艺术设计", "纺织工程", "时尚管理", "工业设计"], description: "服装设计全国顶尖，北京时尚圈的摇篮。喜欢服装和设计的女生首选。", employmentRate: 0.88, genderRatio: { male: 30, female: 70 }, avgScore: 510 },
  { id: 169, name: "北京印刷学院", province: "北京", city: "北京", type: "理工", level: [], isPublic: true, topMajors: ["印刷工程", "包装设计", "数字媒体", "出版学", "艺术设计"], description: "国内唯一的印刷类专业院校，数字媒体和出版很有特色。新媒体时代转型很成功。", employmentRate: 0.89, genderRatio: { male: 42, female: 58 }, avgScore: 505 },

  // 上海普通本科
  { id: 170, name: "上海工程技术大学", province: "上海", city: "上海", type: "理工", level: [], isPublic: true, topMajors: ["车辆工程", "轨道交通", "服装设计", "航空运输", "计算机科学"], description: "工科应用型院校，轨道交通和车辆是特色。和上海地铁、上汽有深度合作。", employmentRate: 0.92, genderRatio: { male: 60, female: 40 }, avgScore: 530 },
  { id: 171, name: "上海应用技术大学", province: "上海", city: "上海", type: "理工", level: [], isPublic: true, topMajors: ["香精香料", "化学工程", "材料科学", "风景园林", "机械工程"], description: "香精香料专业全国独此一家，化妆品行业的人才基地。喜欢化学和香水的女生可以考虑。", employmentRate: 0.91, genderRatio: { male: 48, female: 52 }, avgScore: 528 },

  // 江苏普通本科
  { id: 172, name: "南通大学", province: "江苏", city: "南通", type: "综合", level: [], isPublic: true, topMajors: ["临床医学", "纺织工程", "教育学", "电子信息工程", "汉语言文学"], description: "南通最高学府，医学和纺织是传统强项。南通靠江靠海靠上海，地理位置优越。", employmentRate: 0.90, genderRatio: { male: 48, female: 52 }, avgScore: 535 },
  { id: 173, name: "常州大学", province: "江苏", city: "常州", type: "理工", level: [], isPublic: true, topMajors: ["化学工程", "油气储运", "材料科学", "安全工程", "计算机科学"], description: "原江苏石油化工学院，石化特色鲜明。常州制造业强，工科生就业面广。", employmentRate: 0.91, genderRatio: { male: 58, female: 42 }, avgScore: 532 },
  { id: 174, name: "苏州科技大学", province: "江苏", city: "苏州", type: "理工", level: [], isPublic: true, topMajors: ["建筑学", "环境工程", "城市规划", "土木工程", "给排水"], description: "建筑和城市规划为特色，在苏州这个最强地级市就业极好。环境设计也很强。", employmentRate: 0.90, genderRatio: { male: 54, female: 46 }, avgScore: 542 },

  // 浙江普通本科
  { id: 175, name: "浙江理工大学", province: "浙江", city: "杭州", type: "理工", level: [], isPublic: true, topMajors: ["纺织工程", "服装设计", "机械工程", "材料科学", "计算机科学"], description: "原浙江丝绸工学院，纺织和服装设计全国前茅。在杭州互联网氛围中工科就业也很好。", employmentRate: 0.92, genderRatio: { male: 50, female: 50 }, avgScore: 592 },
  { id: 176, name: "浙江海洋大学", province: "浙江", city: "舟山", type: "理工", level: [], isPublic: true, topMajors: ["海洋科学", "船舶工程", "水产养殖", "食品科学", "港口航道"], description: "海洋特色鲜明，位于舟山群岛新区。船舶和港航专业毕业生供不应求。", employmentRate: 0.90, genderRatio: { male: 58, female: 42 }, avgScore: 550 },
  { id: 177, name: "中国计量大学", province: "浙江", city: "杭州", type: "理工", level: [], isPublic: true, topMajors: ["测控技术", "质量管理", "光学工程", "标准化工程", "知识产权"], description: "国内唯一的质量监督检验类院校。质量管理和标准化专业全国独有，就业非常对口。", employmentRate: 0.93, genderRatio: { male: 55, female: 45 }, avgScore: 588 },

  // 湖北普通本科
  { id: 178, name: "武汉科技大学", province: "湖北", city: "武汉", type: "理工", level: [], isPublic: true, topMajors: ["冶金工程", "材料科学", "机械工程", "临床医学", "计算机科学"], description: "原武汉钢铁学院，冶金和材料很强。在武汉高校中是工科实力仅次于211的存在。", employmentRate: 0.92, genderRatio: { male: 60, female: 40 }, avgScore: 575 },
  { id: 179, name: "湖北工业大学", province: "湖北", city: "武汉", type: "理工", level: [], isPublic: true, topMajors: ["机械工程", "工业设计", "轻工技术", "电气工程", "土木工程"], description: "湖北省属工科强校，工业设计是特色。在武汉工科院校中性价比高。", employmentRate: 0.90, genderRatio: { male: 58, female: 42 }, avgScore: 550 },
  { id: 180, name: "武汉纺织大学", province: "湖北", city: "武汉", type: "理工", level: [], isPublic: true, topMajors: ["纺织工程", "服装设计", "材料科学", "计算机科学", "艺术设计"], description: "原武汉纺织工学院，纺织和服装很有特色。服装设计在华中地区首屈一指。", employmentRate: 0.89, genderRatio: { male: 42, female: 58 }, avgScore: 520 },

  // 四川/重庆普通本科
  { id: 181, name: "成都大学", province: "四川", city: "成都", type: "综合", level: [], isPublic: true, topMajors: ["药学", "动画", "旅游管理", "食品科学", "软件工程"], description: "成都市属院校，发展迅猛。动画专业在全国小有名气，成都的生活太安逸了。", employmentRate: 0.89, genderRatio: { male: 46, female: 54 }, avgScore: 532 },
  { id: 182, name: "西华大学", province: "四川", city: "成都", type: "理工", level: [], isPublic: true, topMajors: ["车辆工程", "能源动力", "食品科学", "计算机科学", "会计学"], description: "原四川工业学院，车辆和能动是传统优势。在成都就业资源丰富。", employmentRate: 0.90, genderRatio: { male: 57, female: 43 }, avgScore: 538 },
  { id: 183, name: "重庆交通大学", province: "重庆", city: "重庆", type: "理工", level: [], isPublic: true, topMajors: ["土木工程", "交通运输", "水利工程", "港口航道", "桥梁工程"], description: "交通领域的特色院校，桥梁和隧道工程全国有名。在西南交通系统就业非常好。", employmentRate: 0.92, genderRatio: { male: 62, female: 38 }, avgScore: 545 },

  // 辽宁普通本科
  { id: 184, name: "辽宁大学", province: "辽宁", city: "沈阳", type: "综合", level: ["211", "双一流"], isPublic: true, topMajors: ["经济学", "法学", "工商管理", "汉语言文学", "广播影视"], description: "辽宁省属211，文科实力在东北前三。经济学和法学是传统强项，沈阳又是东北中心城市。", employmentRate: 0.89, genderRatio: { male: 42, female: 58 }, avgScore: 580 },
  { id: 185, name: "沈阳药科大学", province: "辽宁", city: "沈阳", type: "医药", level: [], isPublic: true, topMajors: ["药学", "中药学", "制药工程", "药物制剂", "药物化学"], description: "药学领域的老牌强校，与南药（中国药科）齐名''北药''。药企抢着要。", employmentRate: 0.93, genderRatio: { male: 38, female: 62 }, avgScore: 568 },

  // 湖南普通本科
  { id: 186, name: "湖南科技大学", province: "湖南", city: "湘潭", type: "理工", level: [], isPublic: true, topMajors: ["矿业工程", "机械工程", "安全工程", "计算机科学", "教育学"], description: "原湘潭矿院，矿业和安全工程是特色。合并师范后教育学也发展得不错。", employmentRate: 0.89, genderRatio: { male: 57, female: 43 }, avgScore: 542 },
  { id: 187, name: "南华大学", province: "湖南", city: "衡阳", type: "理工", level: [], isPublic: true, topMajors: ["核科学", "临床医学", "矿业工程", "安全工程", "土木工程"], description: "核科学和医学双特色，原核工业部下属院校。核工程毕业生进中核集团有独特优势。", employmentRate: 0.90, genderRatio: { male: 56, female: 44 }, avgScore: 528 },
  { id: 188, name: "湖南工商大学", province: "湖南", city: "长沙", type: "财经", level: [], isPublic: true, topMajors: ["会计学", "工商管理", "经济学", "金融学", "电子商务"], description: "湖南省属财经院校，在长沙就业有地缘优势。分数比中南财经政法大学友好很多。", employmentRate: 0.89, genderRatio: { male: 40, female: 60 }, avgScore: 535 },

  // 陕西普通本科
  { id: 189, name: "西安理工大学", province: "陕西", city: "西安", type: "理工", level: [], isPublic: true, topMajors: ["水利工程", "机械工程", "印刷包装", "自动化", "电气工程"], description: "原陕西机械学院，水利和印刷是王牌。在西安工科院校中仅次于西交大和西工大。", employmentRate: 0.91, genderRatio: { male: 62, female: 38 }, avgScore: 548 },
  { id: 190, name: "西安建筑科技大学", province: "陕西", city: "西安", type: "理工", level: [], isPublic: true, topMajors: ["建筑学", "土木工程", "城乡规划", "环境工程", "材料科学"], description: "建筑老八校之一！建筑学全国前十。虽是双非但建筑实力碾压很多985，行业认可度极高。", employmentRate: 0.93, genderRatio: { male: 60, female: 40 }, avgScore: 558 },

  // 黑龙江普通本科
  { id: 191, name: "黑龙江大学", province: "黑龙江", city: "哈尔滨", type: "综合", level: [], isPublic: true, topMajors: ["俄语", "法学", "哲学", "化学", "计算机科学"], description: "俄语全国第一，对俄交流的桥头堡。法学和哲学在东北也很有影响力。", employmentRate: 0.87, genderRatio: { male: 45, female: 55 }, avgScore: 520 },
  { id: 192, name: "哈尔滨理工大学", province: "黑龙江", city: "哈尔滨", type: "理工", level: [], isPublic: true, topMajors: ["电气工程", "机械工程", "高分子材料", "测控技术", "计算机科学"], description: "原哈电工学院，电气和电缆专业全国闻名。毕业生进国家电网有传统优势。", employmentRate: 0.90, genderRatio: { male: 62, female: 38 }, avgScore: 525 },

  // 山东普通本科
  { id: 193, name: "济南大学", province: "山东", city: "济南", type: "综合", level: [], isPublic: true, topMajors: ["材料科学", "化学工程", "计算机科学", "临床医学", "会计学"], description: "山东省属重点，材料科学是优势学科。合并了医学和财经类资源后发展全面。", employmentRate: 0.89, genderRatio: { male: 50, female: 50 }, avgScore: 548 },
  { id: 194, name: "山东科技大学", province: "山东", city: "青岛", type: "理工", level: [], isPublic: true, topMajors: ["矿业工程", "测绘工程", "计算机科学", "安全工程", "地质工程"], description: "原山东矿院，矿业和测绘是传统优势。主校区在青岛，海景校园超赞。", employmentRate: 0.91, genderRatio: { male: 60, female: 40 }, avgScore: 555 },
  { id: 195, name: "青岛科技大学", province: "山东", city: "青岛", type: "理工", level: [], isPublic: true, topMajors: ["化学工程", "高分子材料", "橡胶工程", "机械工程", "自动化"], description: "橡胶和化工领域全国顶尖，号称''中国橡胶工业的黄埔军校''。青岛校区临海而建。", employmentRate: 0.92, genderRatio: { male: 58, female: 42 }, avgScore: 555 },

  // 福建普通本科
  { id: 196, name: "华侨大学", province: "福建", city: "泉州/厦门", type: "综合", level: [], isPublic: true, topMajors: ["建筑学", "旅游管理", "工商管理", "土木工程", "华文教育"], description: "国务院侨办直属，泉州和厦门双校区。建筑和旅游是王牌，华侨资源丰富。", employmentRate: 0.89, genderRatio: { male: 48, female: 52 }, avgScore: 555 },
  { id: 197, name: "集美大学", province: "福建", city: "厦门", type: "综合", level: [], isPublic: true, topMajors: ["航海技术", "水产养殖", "财经学", "体育学", "轮机工程"], description: "陈嘉庚先生创办，航海和水产是特色。坐落在厦门最美海岸线上，校园本身就是风景。", employmentRate: 0.90, genderRatio: { male: 50, female: 50 }, avgScore: 538 },

  // 河南普通本科
  { id: 198, name: "河南科技大学", province: "河南", city: "洛阳", type: "理工", level: [], isPublic: true, topMajors: ["机械工程", "轴承制造", "车辆工程", "材料科学", "临床医学"], description: "原洛阳工学院，中国轴承行业的黄埔军校。机械和材料很强，洛阳是重工业基地。", employmentRate: 0.90, genderRatio: { male: 60, female: 40 }, avgScore: 535 },
  { id: 199, name: "河南师范大学", province: "河南", city: "新乡", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "物理学", "化学", "生物学"], description: "河南省属最强师范，考研率河南高校第一。想当老师又去不了部属师范的绝佳选择。", employmentRate: 0.89, genderRatio: { male: 32, female: 68 }, avgScore: 542 },

  // 天津普通本科
  { id: 200, name: "天津工业大学", province: "天津", city: "天津", type: "理工", level: ["双一流"], isPublic: true, topMajors: ["纺织工程", "材料科学", "机械工程", "计算机科学", "服装设计"], description: "双一流学科建设高校，纺织科学与工程全国前三。在天津除了天大南开就数它了。", employmentRate: 0.91, genderRatio: { male: 52, female: 48 }, avgScore: 565 },
  { id: 201, name: "天津师范大学", province: "天津", city: "天津", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "心理学", "汉语言文学", "新闻传播学", "政治学"], description: "天津最好的师范院校，心理学是国家级特色专业。天津中小学教师的主要来源。", employmentRate: 0.90, genderRatio: { male: 30, female: 70 }, avgScore: 558 },
  { id: 202, name: "天津科技大学", province: "天津", city: "天津", type: "理工", level: [], isPublic: true, topMajors: ["轻工技术", "食品科学", "生物工程", "海洋科学", "包装工程"], description: "原天津轻工业学院，发酵和食品全国前茅。海河边上的美丽校园，盐业和海洋特色鲜明。", employmentRate: 0.90, genderRatio: { male: 50, female: 50 }, avgScore: 550 },

  // 甘肃/新疆普通本科
  { id: 203, name: "西北师范大学", province: "甘肃", city: "兰州", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "历史学", "化学", "地理科学"], description: "西北最好的省属师范，在甘肃教育系统地位不可撼动。历史底蕴深厚，前身是北平师范大学。", employmentRate: 0.87, genderRatio: { male: 32, female: 68 }, avgScore: 510 },
  { id: 204, name: "兰州交通大学", province: "甘肃", city: "兰州", type: "理工", level: [], isPublic: true, topMajors: ["交通运输", "土木工程", "车辆工程", "环境工程", "自动化"], description: "原兰州铁道学院，铁路系统的重要人才基地。在西北铁路和交通系统就业很好。", employmentRate: 0.91, genderRatio: { male: 62, female: 38 }, avgScore: 520 },
  { id: 205, name: "兰州理工大学", province: "甘肃", city: "兰州", type: "理工", level: [], isPublic: true, topMajors: ["机械工程", "焊接工程", "材料科学", "土木工程", "自动化"], description: "原甘肃工业大学，焊接专业全国闻名。在西北重工业基地背景下，工科底蕴扎实。", employmentRate: 0.90, genderRatio: { male: 63, female: 37 }, avgScore: 516 },

  // 云南/广西普通本科
  { id: 206, name: "云南师范大学", province: "云南", city: "昆明", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "地理科学", "体育学", "旅游管理"], description: "西南联大师范学院的后裔，云南最好的师范院校。昆明的蓝天白云让人不想毕业。", employmentRate: 0.87, genderRatio: { male: 33, female: 67 }, avgScore: 528 },
  { id: 207, name: "广西师范大学", province: "广西", city: "桂林", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "马克思主义理论", "化学", "旅游管理"], description: "广西最好的师范，坐落在山水甲天下的桂林。校园美得像景区，学费也便宜。", employmentRate: 0.87, genderRatio: { male: 32, female: 68 }, avgScore: 525 },
  { id: 208, name: "桂林电子科技大学", province: "广西", city: "桂林", type: "理工", level: [], isPublic: true, topMajors: ["电子信息工程", "通信工程", "计算机科学", "测控技术", "机械工程"], description: "四电之一，电子信息和通信是王牌。在珠三角IT圈有一定知名度，分数友好。", employmentRate: 0.91, genderRatio: { male: 65, female: 35 }, avgScore: 535 },

  // 安徽普通本科
  { id: 209, name: "安徽理工大学", province: "安徽", city: "淮南", type: "理工", level: [], isPublic: true, topMajors: ["矿业工程", "安全工程", "土木工程", "爆破工程", "地质工程"], description: "原淮南矿院，矿业和安全工程是王牌。爆破专业全国独树一帜，很酷。", employmentRate: 0.90, genderRatio: { male: 63, female: 37 }, avgScore: 515 },

  // 江西普通本科
  { id: 210, name: "华东交通大学", province: "江西", city: "南昌", type: "理工", level: [], isPublic: true, topMajors: ["交通运输", "土木工程", "电气工程", "车辆工程", "会计学"], description: "原上海铁道学院迁建，交通和土木是王牌。进铁路局和地铁公司的绿色通道。", employmentRate: 0.91, genderRatio: { male: 62, female: 38 }, avgScore: 535 },

  // 河北普通本科
  { id: 211, name: "石家庄铁道大学", province: "河北", city: "石家庄", type: "理工", level: [], isPublic: true, topMajors: ["土木工程", "交通运输", "桥梁工程", "机械工程", "工程管理"], description: "铁道系统老牌院校，桥梁和隧道工程全国知名。铁路局校招的重点目标院校。", employmentRate: 0.92, genderRatio: { male: 65, female: 35 }, avgScore: 540 },

  // 山西普通本科
  { id: 212, name: "中北大学", province: "山西", city: "太原", type: "理工", level: [], isPublic: true, topMajors: ["兵器科学", "仪器科学", "材料科学", "安全工程", "电子信息"], description: "国防八校之一，原太原机械学院。兵器科学和仪器仪表全国前列，军工就业好。", employmentRate: 0.91, genderRatio: { male: 65, female: 35 }, avgScore: 530 },

  // 贵州普通本科
  { id: 213, name: "贵州医科大学", province: "贵州", city: "贵阳", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "药学", "预防医学", "护理学", "口腔医学"], description: "贵州最好的医学院，在省内医疗卫生系统地位稳固。分数在医学类中偏低，性价比高。", employmentRate: 0.91, genderRatio: { male: 40, female: 60 }, avgScore: 528 },

  // 内蒙古普通本科
  { id: 214, name: "内蒙古科技大学", province: "内蒙古", city: "包头", type: "理工", level: [], isPublic: true, topMajors: ["冶金工程", "矿业工程", "材料科学", "机械工程", "稀土工程"], description: "原包头钢铁学院，冶金和稀土是王牌。包头是中国的稀土之都，相关专业就业非常好。", employmentRate: 0.89, genderRatio: { male: 62, female: 38 }, avgScore: 490 },

  // 吉林普通本科
  { id: 215, name: "长春理工大学", province: "吉林", city: "长春", type: "理工", level: [], isPublic: true, topMajors: ["光学工程", "光电信息", "测控技术", "计算机科学", "机械工程"], description: "原长春光机所附属学院，光学工程全国前五。中国光学英才的摇篮，光通信就业很好。", employmentRate: 0.91, genderRatio: { male: 62, female: 38 }, avgScore: 535 },
  { id: 216, name: "东北电力大学", province: "吉林", city: "吉林市", type: "理工", level: [], isPublic: true, topMajors: ["电气工程", "能源动力", "自动化", "核工程", "土木工程"], description: "电力系统的重要人才基地，电气工程就业无敌。进国网的主力校之一，很多学子进央企。", employmentRate: 0.94, genderRatio: { male: 64, female: 36 }, avgScore: 550 },

  // ===== 第四批：更多普通本科+民办+独立学院 =====
  // 广东
  { id: 217, name: "广东医科大学", province: "广东", city: "湛江/东莞", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "麻醉学", "护理学", "医学影像", "药学"], description: "广东省属医学院，湛江和东莞双校区。在粤西和东莞医疗系统认可度高。", employmentRate: 0.91, genderRatio: { male: 42, female: 58 }, avgScore: 545 },
  { id: 218, name: "广东药科大学", province: "广东", city: "广州", type: "医药", level: [], isPublic: true, topMajors: ["药学", "中药学", "制药工程", "预防医学", "临床药学"], description: "华南药学重镇，药学门类齐全。与广药集团深度合作，实习和就业有保障。", employmentRate: 0.90, genderRatio: { male: 40, female: 60 }, avgScore: 535 },
  { id: 219, name: "仲恺农业工程学院", province: "广东", city: "广州", type: "农林", level: [], isPublic: true, topMajors: ["园艺学", "植物保护", "食品科学", "动物科学", "风景园林"], description: "纪念廖仲恺先生而建，农林特色。在广州白云区，校园清幽。", employmentRate: 0.87, genderRatio: { male: 48, female: 52 }, avgScore: 495 },
  { id: 220, name: "广东技术师范大学", province: "广东", city: "广州", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "电子信息工程", "会计学", "汉语言文学", "计算机科学"], description: "职业师范特色，培养中职教师。在广州多校区办学，技术+师范双轨培养。", employmentRate: 0.88, genderRatio: { male: 44, female: 56 }, avgScore: 505 },
  { id: 221, name: "岭南师范学院", province: "广东", city: "湛江", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "数学", "英语", "特殊教育"], description: "原湛江师范学院，粤西师范重镇。公费师范生政策好，毕业即入编。", employmentRate: 0.88, genderRatio: { male: 33, female: 67 }, avgScore: 492 },
  { id: 222, name: "广东金融学院", province: "广东", city: "广州", type: "财经", level: [], isPublic: true, topMajors: ["金融学", "会计学", "保险学", "经济学", "信用管理"], description: "广东省属金融特色院校，银行和保险行业校友多。在广东金融圈有不小影响力。", employmentRate: 0.91, genderRatio: { male: 38, female: 62 }, avgScore: 530 },
  { id: 223, name: "韶关学院", province: "广东", city: "韶关", type: "综合", level: [], isPublic: true, topMajors: ["师范类各科", "临床医学", "机械工程", "计算机科学", "食品科学"], description: "粤北地区唯一的公办本科，师范和医学是主要方向。学费低，生活成本也低。", employmentRate: 0.86, genderRatio: { male: 45, female: 55 }, avgScore: 475 },
  { id: 224, name: "嘉应学院", province: "广东", city: "梅州", type: "综合", level: [], isPublic: true, topMajors: ["师范类各科", "临床医学", "计算机科学", "土木工程", "英语"], description: "梅州唯一的公办本科，客家文化特色鲜明。师范和医学是主要培养方向。", employmentRate: 0.86, genderRatio: { male: 43, female: 57 }, avgScore: 472 },

  // 浙江
  { id: 225, name: "浙江农林大学", province: "浙江", city: "杭州", type: "农林", level: [], isPublic: true, topMajors: ["林学", "风景园林", "农学", "生态学", "茶学"], description: "浙江唯一的农林本科院校，园林和茶学很有特色。杭州临安的生态环境一流。", employmentRate: 0.89, genderRatio: { male: 48, female: 52 }, avgScore: 575 },
  { id: 226, name: "浙江中医药大学", province: "浙江", city: "杭州", type: "医药", level: [], isPublic: true, topMajors: ["中医学", "中药学", "针灸推拿", "临床医学", "护理学"], description: "浙江省属中医药院校，中医和针灸是王牌。附属医院遍布浙江，临床资源好。", employmentRate: 0.90, genderRatio: { male: 36, female: 64 }, avgScore: 588 },
  { id: 227, name: "浙江科技学院", province: "浙江", city: "杭州", type: "理工", level: [], isPublic: true, topMajors: ["机械工程", "土木工程", "计算机科学", "艺术设计", "生物工程"], description: "应用型理工科院校，中德合作项目多。杭州的地理优势让就业和实习很方便。", employmentRate: 0.90, genderRatio: { male: 56, female: 44 }, avgScore: 572 },
  { id: 228, name: "绍兴文理学院", province: "浙江", city: "绍兴", type: "综合", level: [], isPublic: true, topMajors: ["汉语言文学", "纺织工程", "临床医学", "工商管理", "书法学"], description: "绍兴唯一的公办本科，兰亭书法学院全国唯一。文化底蕴极深，鲁迅的故乡。", employmentRate: 0.87, genderRatio: { male: 42, female: 58 }, avgScore: 555 },
  { id: 229, name: "湖州师范学院", province: "浙江", city: "湖州", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "护理学", "水产养殖", "汉语言文学", "数学"], description: "湖州唯一的公办本科，师范和护理是主打。太湖边的校园环境宜人。", employmentRate: 0.88, genderRatio: { male: 32, female: 68 }, avgScore: 550 },

  // 江苏
  { id: 230, name: "南京工程学院", province: "江苏", city: "南京", type: "理工", level: [], isPublic: true, topMajors: ["电气工程", "机械工程", "自动化", "能源动力", "计算机科学"], description: "电力特色鲜明的应用型本科，电气专业进国网比例高。和电力系统渊源深厚。", employmentRate: 0.93, genderRatio: { male: 63, female: 37 }, avgScore: 550 },
  { id: 231, name: "徐州医科大学", province: "江苏", city: "徐州", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "麻醉学", "护理学", "医学影像", "药学"], description: "麻醉学全国顶尖，全国麻醉学人才培养基地。学麻醉去徐医是不二之选。", employmentRate: 0.93, genderRatio: { male: 40, female: 60 }, avgScore: 582 },
  { id: 232, name: "江苏师范大学", province: "江苏", city: "徐州", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "数学", "地理科学", "历史学"], description: "江苏省属重点师范院校，在苏北地区教育系统占据主导。考研率逐年上升。", employmentRate: 0.89, genderRatio: { male: 30, female: 70 }, avgScore: 560 },
  { id: 233, name: "南京审计大学", province: "江苏", city: "南京", type: "财经", level: [], isPublic: true, topMajors: ["审计学", "会计学", "金融学", "经济学", "法学"], description: "审计署直属背景，审计学全国第一。考公进审计系统的金字招牌。", employmentRate: 0.94, genderRatio: { male: 36, female: 64 }, avgScore: 592 },
  { id: 234, name: "南京林业大学", province: "江苏", city: "南京", type: "农林", level: ["双一流"], isPublic: true, topMajors: ["林学", "风景园林", "木材科学", "家具设计", "生态学"], description: "双一流学科建设高校，林业和园林全国前三。南京的梧桐很多都是南林人栽的。", employmentRate: 0.90, genderRatio: { male: 48, female: 52 }, avgScore: 578 },

  // 北京
  { id: 235, name: "首都师范大学", province: "北京", city: "北京", type: "师范", level: ["双一流"], isPublic: true, topMajors: ["教育学", "心理学", "汉语言文学", "数学", "美术学"], description: "北京市属最强师范，双一流学科建设高校。北京中小学教师的黄埔军校。", employmentRate: 0.92, genderRatio: { male: 30, female: 70 }, avgScore: 595 },
  { id: 236, name: "北京第二外国语学院", province: "北京", city: "北京", type: "语言", level: [], isPublic: true, topMajors: ["旅游管理", "酒店管理", "英语", "日语", "翻译"], description: "国家旅游局直属背景，旅游和酒店管理全国前茅。外语+旅游复合型人才培养。", employmentRate: 0.91, genderRatio: { male: 28, female: 72 }, avgScore: 580 },
  { id: 237, name: "北京物资学院", province: "北京", city: "北京", type: "财经", level: [], isPublic: true, topMajors: ["物流管理", "经济学", "会计学", "信息管理", "金融学"], description: "国内唯一以物流为特色的本科院校，物流管理全国第一。京东等企业的目标院校。", employmentRate: 0.91, genderRatio: { male: 44, female: 56 }, avgScore: 528 },

  // 上海
  { id: 238, name: "上海海事大学", province: "上海", city: "上海", type: "理工", level: [], isPublic: true, topMajors: ["航海技术", "轮机工程", "交通运输", "物流管理", "海商法"], description: "海事特色鲜明，航运界的黄埔军校。地处上海自贸区，港航就业资源丰富。", employmentRate: 0.93, genderRatio: { male: 62, female: 38 }, avgScore: 545 },
  { id: 239, name: "上海电力大学", province: "上海", city: "上海", type: "理工", level: [], isPublic: true, topMajors: ["电气工程", "能源动力", "自动化", "新能源科学", "计算机科学"], description: "电力行业重要基地，电气专业进国家电网上海公司的主渠道之一。", employmentRate: 0.94, genderRatio: { male: 64, female: 36 }, avgScore: 548 },
  { id: 240, name: "上海政法学院", province: "上海", city: "上海", type: "政法", level: [], isPublic: true, topMajors: ["法学", "监狱学", "社会学", "国际政治", "行政管理"], description: "上海市属政法院校，监狱学全国独有。考公和司法考试通过率在上海领先。", employmentRate: 0.90, genderRatio: { male: 40, female: 60 }, avgScore: 535 },

  // 湖北
  { id: 241, name: "长江大学", province: "湖北", city: "荆州/武汉", type: "综合", level: [], isPublic: true, topMajors: ["石油工程", "地质工程", "农学", "临床医学", "教育学"], description: "湖北省属规模最大的综合大学，石油和农学是王牌。合并了多所院校后学科齐全。", employmentRate: 0.89, genderRatio: { male: 52, female: 48 }, avgScore: 520 },
  { id: 242, name: "三峡大学", province: "湖北", city: "宜昌", type: "理工", level: [], isPublic: true, topMajors: ["水利工程", "电气工程", "土木工程", "临床医学", "计算机科学"], description: "原武汉水利电力大学（宜昌），水利和电气是王牌。三峡大坝旁边的大学。", employmentRate: 0.91, genderRatio: { male: 58, female: 42 }, avgScore: 535 },
  { id: 243, name: "武汉工程大学", province: "湖北", city: "武汉", type: "理工", level: [], isPublic: true, topMajors: ["化学工程", "材料科学", "制药工程", "安全工程", "计算机科学"], description: "原武汉化工学院，化工和制药是强项。武汉药企多，就业对口率高。", employmentRate: 0.90, genderRatio: { male: 58, female: 42 }, avgScore: 545 },
  { id: 244, name: "湖北经济学院", province: "湖北", city: "武汉", type: "财经", level: [], isPublic: true, topMajors: ["会计学", "金融学", "经济学", "工商管理", "电子商务"], description: "湖北省属财经院校，在武汉金融圈有一定认可度。分数友好，性价比不错。", employmentRate: 0.89, genderRatio: { male: 40, female: 60 }, avgScore: 520 },
  { id: 245, name: "江汉大学", province: "湖北", city: "武汉", type: "综合", level: [], isPublic: true, topMajors: ["临床医学", "体育学", "艺术设计", "化学工程", "园艺学"], description: "武汉市属院校，体育和艺术有特色。武汉市投入大，发展速度很快。", employmentRate: 0.88, genderRatio: { male: 48, female: 52 }, avgScore: 515 },

  // 四川
  { id: 246, name: "西南科技大学", province: "四川", city: "绵阳", type: "理工", level: [], isPublic: true, topMajors: ["材料科学", "环境工程", "自动化", "土木工程", "计算机科学"], description: "绵阳科技城的重要高校，与中国工程物理研究院合作密切。工科性价比高。", employmentRate: 0.89, genderRatio: { male: 60, female: 40 }, avgScore: 535 },
  { id: 247, name: "成都信息工程大学", province: "四川", city: "成都", type: "理工", level: [], isPublic: true, topMajors: ["大气科学", "通信工程", "计算机科学", "电子科学", "统计学"], description: "原成都气象学院，气象和信息技术双特色。气象局和IT公司都来校招。", employmentRate: 0.91, genderRatio: { male: 56, female: 44 }, avgScore: 548 },
  { id: 248, name: "西华师范大学", province: "四川", city: "南充", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "历史学", "生物学", "化学"], description: "四川省属重点师范，在四川教育系统校友遍布。考研率高，学风扎实。", employmentRate: 0.88, genderRatio: { male: 32, female: 68 }, avgScore: 528 },

  // 山东
  { id: 249, name: "曲阜师范大学", province: "山东", city: "曲阜", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "数学", "汉语言文学", "体育学", "书法学"], description: "号称''考研神校''，考研率常年全国第一。曲阜是孔子故里，文化氛围极浓。", employmentRate: 0.87, genderRatio: { male: 35, female: 65 }, avgScore: 535 },
  { id: 250, name: "山东农业大学", province: "山东", city: "泰安", type: "农林", level: [], isPublic: true, topMajors: ["农学", "园艺学", "植物保护", "动物科学", "食品科学"], description: "山东省属重点，农业学科实力在省属院校中数一数二。泰安在泰山脚下，环境好。", employmentRate: 0.88, genderRatio: { male: 50, female: 50 }, avgScore: 525 },
  { id: 251, name: "鲁东大学", province: "山东", city: "烟台", type: "综合", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "地理科学", "心理学", "交通工程"], description: "原烟台师范学院，师范底蕴深厚。烟台这座海滨城市太适合生活了。", employmentRate: 0.87, genderRatio: { male: 42, female: 58 }, avgScore: 518 },
  { id: 252, name: "烟台大学", province: "山东", city: "烟台", type: "综合", level: [], isPublic: true, topMajors: ["法学", "药学", "土木工程", "海洋科学", "食品科学"], description: "北大清华援建，法学是王牌。烟台的海景校园、海鲜和气候让人向往。", employmentRate: 0.88, genderRatio: { male: 48, female: 52 }, avgScore: 532 },

  // 河南
  { id: 253, name: "河南理工大学", province: "河南", city: "焦作", type: "理工", level: [], isPublic: true, topMajors: ["矿业工程", "安全工程", "测绘工程", "机械工程", "地质工程"], description: "中国矿业教育的发源地之一，安全工程全国前三。河南工科强校。", employmentRate: 0.90, genderRatio: { male: 62, female: 38 }, avgScore: 535 },
  { id: 254, name: "河南工业大学", province: "河南", city: "郑州", type: "理工", level: [], isPublic: true, topMajors: ["食品科学", "粮油工程", "机械工程", "土木工程", "计算机科学"], description: "原郑州粮食学院，粮油食品全国顶尖。全国粮食系统的人才基地。", employmentRate: 0.90, genderRatio: { male: 56, female: 44 }, avgScore: 538 },
  { id: 255, name: "华北水利水电大学", province: "河南", city: "郑州", type: "理工", level: [], isPublic: true, topMajors: ["水利工程", "土木工程", "地质工程", "电气工程", "给排水"], description: "水利部与河南共建，水利水电特色鲜明。进水利系统和各大工程局有优势。", employmentRate: 0.91, genderRatio: { male: 63, female: 37 }, avgScore: 540 },
  { id: 256, name: "郑州轻工业大学", province: "河南", city: "郑州", type: "理工", level: [], isPublic: true, topMajors: ["食品科学", "烟草工程", "电气工程", "工业设计", "化工"], description: "烟草行业的重要人才基地，烟草工程全国唯一或极少。轻工和食品也很强。", employmentRate: 0.90, genderRatio: { male: 55, female: 45 }, avgScore: 530 },

  // 福建
  { id: 257, name: "福建农林大学", province: "福建", city: "福州", type: "农林", level: [], isPublic: true, topMajors: ["植物保护", "林学", "园艺学", "食品科学", "生态学"], description: "福建省属重点，农林学科在省属中排名前列。福州的气候和环境很宜居。", employmentRate: 0.88, genderRatio: { male: 47, female: 53 }, avgScore: 542 },
  { id: 258, name: "闽江学院", province: "福建", city: "福州", type: "综合", level: [], isPublic: true, topMajors: ["服装设计", "计算机科学", "工商管理", "广告学", "测绘工程"], description: "福州市属院校，服装设计很有特色。听说习近平主席曾兼任校长。", employmentRate: 0.86, genderRatio: { male: 45, female: 55 }, avgScore: 505 },
  { id: 259, name: "厦门理工学院", province: "福建", city: "厦门", type: "理工", level: [], isPublic: true, topMajors: ["车辆工程", "机械工程", "计算机科学", "光电信息", "旅游管理"], description: "厦门市属应用型本科，工科为主。厦门的城市魅力让分数线水涨船高。", employmentRate: 0.91, genderRatio: { male: 58, female: 42 }, avgScore: 528 },

  // 天津
  { id: 260, name: "天津商业大学", province: "天津", city: "天津", type: "财经", level: [], isPublic: true, topMajors: ["工商管理", "会计学", "金融学", "旅游管理", "能源动力"], description: "原天津商学院，制冷和暖通空调全国顶尖。商业+工科双轮驱动。", employmentRate: 0.90, genderRatio: { male: 42, female: 58 }, avgScore: 535 },
  { id: 261, name: "天津外国语大学", province: "天津", city: "天津", type: "语言", level: [], isPublic: true, topMajors: ["英语", "日语", "翻译", "韩语", "国际新闻"], description: "八大外语院校之一，日语和韩语是特色。马场道校区欧式建筑很漂亮。", employmentRate: 0.90, genderRatio: { male: 24, female: 76 }, avgScore: 558 },

  // 河北
  { id: 262, name: "河北科技大学", province: "河北", city: "石家庄", type: "理工", level: [], isPublic: true, topMajors: ["化学工程", "机械工程", "环境工程", "计算机科学", "纺织工程"], description: "河北省属工科院校，化工和机械是传统强项。在石家庄就业机会多。", employmentRate: 0.89, genderRatio: { male: 58, female: 42 }, avgScore: 528 },
  { id: 263, name: "河北农业大学", province: "河北", city: "保定", type: "农林", level: [], isPublic: true, topMajors: ["农学", "园艺学", "植物保护", "动物科学", "食品科学"], description: "河北省属重点，农林学科百年积淀。在京津冀农业系统就业有优势。", employmentRate: 0.87, genderRatio: { male: 48, female: 52 }, avgScore: 515 },
  { id: 264, name: "河北医科大学", province: "河北", city: "石家庄", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "口腔医学", "药学", "预防医学", "中医学"], description: "河北最好的医学院，在省内医疗系统地位极高。河北看病找的大夫八成是校友。", employmentRate: 0.92, genderRatio: { male: 38, female: 62 }, avgScore: 570 },

  // 重庆
  { id: 265, name: "重庆医科大学", province: "重庆", city: "重庆", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "儿科", "口腔医学", "护理学", "药学"], description: "西南医学重镇，儿科学全国前三。附属儿童医院全国知名，学儿科的首选。", employmentRate: 0.93, genderRatio: { male: 38, female: 62 }, avgScore: 590 },
  { id: 266, name: "重庆师范大学", province: "重庆", city: "重庆", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "数学", "特殊教育", "旅游管理"], description: "重庆市属重点师范，特殊教育全国有名。重庆中小学教师主要来源之一。", employmentRate: 0.89, genderRatio: { male: 30, female: 70 }, avgScore: 548 },

  // 陕西
  { id: 267, name: "西安工业大学", province: "陕西", city: "西安", type: "理工", level: [], isPublic: true, topMajors: ["兵器科学", "光学工程", "测控技术", "机械工程", "计算机科学"], description: "国防八校之一，原西安工业学院。兵器科学和光学是王牌，军工特色。", employmentRate: 0.90, genderRatio: { male: 62, female: 38 }, avgScore: 530 },
  { id: 268, name: "西安石油大学", province: "陕西", city: "西安", type: "理工", level: [], isPublic: true, topMajors: ["石油工程", "地质工程", "化学工程", "油气储运", "机械工程"], description: "西北石油石化领域的重要人才基地。中石油长庆油田近在咫尺，就业对口。", employmentRate: 0.91, genderRatio: { male: 62, female: 38 }, avgScore: 525 },
  { id: 269, name: "西安工程大学", province: "陕西", city: "西安", type: "理工", level: [], isPublic: true, topMajors: ["纺织工程", "服装设计", "材料科学", "机械工程", "计算机科学"], description: "原西北纺织工学院，纺织和服装设计在西北最强。西安的文化氛围让设计类加分。", employmentRate: 0.88, genderRatio: { male: 48, female: 52 }, avgScore: 515 },

  // 辽宁
  { id: 270, name: "沈阳工业大学", province: "辽宁", city: "沈阳", type: "理工", level: [], isPublic: true, topMajors: ["电气工程", "机械工程", "材料科学", "自动化", "计算机科学"], description: "原沈阳机电学院，电气和机械是传统强项。在东北工业基地背景下工科底蕴好。", employmentRate: 0.90, genderRatio: { male: 63, female: 37 }, avgScore: 535 },
  { id: 271, name: "大连交通大学", province: "辽宁", city: "大连", type: "理工", level: [], isPublic: true, topMajors: ["车辆工程", "机械工程", "材料科学", "交通运输", "土木工程"], description: "原大连铁道学院，铁路和车辆是王牌。大连这座美丽城市的魅力加分。", employmentRate: 0.92, genderRatio: { male: 63, female: 37 }, avgScore: 545 },
  { id: 272, name: "辽宁师范大学", province: "辽宁", city: "大连", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "心理学", "汉语言文学", "地理科学", "物理"], description: "辽宁省属最强师范，在大连这座宜居城市。想在辽宁当老师的最佳选择。", employmentRate: 0.89, genderRatio: { male: 28, female: 72 }, avgScore: 548 },
  { id: 273, name: "大连大学", province: "辽宁", city: "大连", type: "综合", level: [], isPublic: true, topMajors: ["临床医学", "机械工程", "土木工程", "计算机科学", "旅游管理"], description: "大连市属综合院校，医学和工科是主要方向。大连这座城市本身就很诱人。", employmentRate: 0.88, genderRatio: { male: 48, female: 52 }, avgScore: 522 },

  // 黑龙江
  { id: 274, name: "哈尔滨商业大学", province: "黑龙江", city: "哈尔滨", type: "财经", level: [], isPublic: true, topMajors: ["会计学", "食品科学", "经济学", "中药学", "工商管理"], description: "原黑龙江商学院，会计和食品是王牌。在东北商业和流通领域影响大。", employmentRate: 0.87, genderRatio: { male: 42, female: 58 }, avgScore: 498 },
  { id: 275, name: "黑龙江中医药大学", province: "黑龙江", city: "哈尔滨", type: "医药", level: [], isPublic: true, topMajors: ["中药学", "中医学", "针灸推拿", "药学", "中西医结合"], description: "中药学全国顶尖，北药基地的核心院校。想学中药的性价比之选。", employmentRate: 0.88, genderRatio: { male: 35, female: 65 }, avgScore: 505 },

  // 安徽
  { id: 276, name: "安徽农业大学", province: "安徽", city: "合肥", type: "农林", level: [], isPublic: true, topMajors: ["茶学", "农学", "植物保护", "动物科学", "食品科学"], description: "茶学全国第一，安徽省属重点。在合肥，离中科大不远，学术交流多。", employmentRate: 0.87, genderRatio: { male: 48, female: 52 }, avgScore: 518 },
  { id: 277, name: "安徽医科大学", province: "安徽", city: "合肥", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "口腔医学", "公共卫生", "药学", "护理学"], description: "安徽最好的医学院，在省内医疗系统地位无可撼动。附属医院众多。", employmentRate: 0.92, genderRatio: { male: 40, female: 60 }, avgScore: 572 },
  { id: 278, name: "安徽财经大学", province: "安徽", city: "蚌埠", type: "财经", level: [], isPublic: true, topMajors: ["会计学", "金融学", "经济学", "国际经济与贸易", "统计学"], description: "安徽省属财经强校，在安徽省金融圈校友多。虽不在合肥但专业认可度不低。", employmentRate: 0.89, genderRatio: { male: 38, female: 62 }, avgScore: 540 },
  { id: 279, name: "安徽工程大学", province: "安徽", city: "芜湖", type: "理工", level: [], isPublic: true, topMajors: ["机械工程", "控制科学", "纺织工程", "计算机科学", "艺术设计"], description: "原安徽机电学院，应用型工科特色。芜湖有奇瑞汽车等大型企业，就业有支撑。", employmentRate: 0.90, genderRatio: { male: 60, female: 40 }, avgScore: 515 },

  // 江西
  { id: 280, name: "江西理工大学", province: "江西", city: "赣州/南昌", type: "理工", level: [], isPublic: true, topMajors: ["冶金工程", "矿业工程", "材料科学", "机械工程", "计算机科学"], description: "原江西冶金学院，冶金稀土全国有名。赣州是稀土王国，产学研结合紧。", employmentRate: 0.89, genderRatio: { male: 62, female: 38 }, avgScore: 520 },
  { id: 281, name: "东华理工大学", province: "江西", city: "南昌/抚州", type: "理工", level: [], isPublic: true, topMajors: ["核科学", "地质工程", "测绘工程", "化学", "资源勘查"], description: "原华东地质学院，核科学和地质是王牌。核工业系统的重要人才基地。", employmentRate: 0.90, genderRatio: { male: 60, female: 40 }, avgScore: 518 },
  { id: 282, name: "江西师范大学", province: "江西", city: "南昌", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "心理学", "化学", "马克思主义理论"], description: "江西省属最强师范，省内中小学教师的摇篮。在江西教育系统影响力巨大。", employmentRate: 0.88, genderRatio: { male: 32, female: 68 }, avgScore: 545 },
  { id: 283, name: "江西农业大学", province: "江西", city: "南昌", type: "农林", level: [], isPublic: true, topMajors: ["动物科学", "农学", "林学", "食品科学", "风景园林"], description: "江西省属重点，农林学科百年积淀。梅岭脚下的校园环境好。", employmentRate: 0.86, genderRatio: { male: 48, female: 52 }, avgScore: 515 },

  // 湖南
  { id: 284, name: "湖南工业大学", province: "湖南", city: "株洲", type: "理工", level: [], isPublic: true, topMajors: ["包装工程", "印刷工程", "材料科学", "机械工程", "艺术设计"], description: "原株洲工学院，包装工程全国第一。中国包装行业的人才基地。", employmentRate: 0.89, genderRatio: { male: 55, female: 45 }, avgScore: 518 },
  { id: 285, name: "中南林业科技大学", province: "湖南", city: "长沙", type: "农林", level: [], isPublic: true, topMajors: ["林学", "木材科学", "风景园林", "食品科学", "环境工程"], description: "原中南林学院，林业和园林是王牌。在长沙市区，韶山南路校区位置好。", employmentRate: 0.88, genderRatio: { male: 48, female: 52 }, avgScore: 528 },
  { id: 286, name: "湖南中医药大学", province: "湖南", city: "长沙", type: "医药", level: [], isPublic: true, topMajors: ["中医学", "中药学", "针灸推拿", "中西医结合", "护理学"], description: "湖南省属中医药院校，中医在湖南卫生系统地位稳固。长沙的房价亲民。", employmentRate: 0.89, genderRatio: { male: 35, female: 65 }, avgScore: 535 },

  // 广西
  { id: 287, name: "桂林理工大学", province: "广西", city: "桂林", type: "理工", level: [], isPublic: true, topMajors: ["地质工程", "环境工程", "土木工程", "旅游管理", "材料科学"], description: "原桂林冶金地质学院，地质和旅游是特色。在桂林山水间读书是种享受。", employmentRate: 0.88, genderRatio: { male: 58, female: 42 }, avgScore: 505 },
  { id: 288, name: "广西民族大学", province: "广西", city: "南宁", type: "民族", level: [], isPublic: true, topMajors: ["东南亚语种", "民族学", "法学", "汉语言文学", "政治学"], description: "东南亚语种全国最全，小语种就业好。相思湖畔的校园充满南国风情。", employmentRate: 0.87, genderRatio: { male: 38, female: 62 }, avgScore: 510 },

  // 云南
  { id: 289, name: "云南财经大学", province: "云南", city: "昆明", type: "财经", level: [], isPublic: true, topMajors: ["会计学", "金融学", "经济学", "统计学", "工商管理"], description: "云南省属财经强校，在云南和东南亚经贸领域有影响力。昆明的气候永远舒服。", employmentRate: 0.88, genderRatio: { male: 40, female: 60 }, avgScore: 528 },
  { id: 290, name: "云南民族大学", province: "云南", city: "昆明", type: "民族", level: [], isPublic: true, topMajors: ["民族学", "东南亚语种", "社会学", "旅游管理", "艺术设计"], description: "民族学全国前三，民族文化研究重镇。东南亚语种和民族语言是独特优势。", employmentRate: 0.85, genderRatio: { male: 42, female: 58 }, avgScore: 518 },
  { id: 291, name: "西南林业大学", province: "云南", city: "昆明", type: "农林", level: [], isPublic: true, topMajors: ["林学", "木材科学", "风景园林", "生态学", "环境工程"], description: "西南地区林业最高学府，木材科学很有特色。昆明的一草一木都是活教材。", employmentRate: 0.86, genderRatio: { male: 48, female: 52 }, avgScore: 510 },

  // 甘肃
  { id: 292, name: "甘肃农业大学", province: "甘肃", city: "兰州", type: "农林", level: [], isPublic: true, topMajors: ["草学", "动物医学", "农学", "水土保持", "食品科学"], description: "草学全国顶尖，全国草业人才的摇篮。在干旱农业和草原研究方面独树一帜。", employmentRate: 0.86, genderRatio: { male: 48, female: 52 }, avgScore: 475 },

  // 新疆
  { id: 293, name: "新疆医科大学", province: "新疆", city: "乌鲁木齐", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "维吾尔医学", "药学", "护理学", "口腔医学"], description: "新疆最好的医学院，在新疆医疗系统一家独大。维吾尔医学全国独有。", employmentRate: 0.90, genderRatio: { male: 38, female: 62 }, avgScore: 505 },
  { id: 294, name: "新疆师范大学", province: "新疆", city: "乌鲁木齐", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "马克思主义理论", "民族学", "地理科学"], description: "新疆最好的师范院校，培养了大批新疆中小学教师。中亚研究是特色。", employmentRate: 0.86, genderRatio: { male: 35, female: 65 }, avgScore: 488 },

  // 更多民办/独立学院本科
  { id: 295, name: "吉林外国语大学", province: "吉林", city: "长春", type: "语言", level: [], isPublic: false, topMajors: ["英语", "翻译", "日语", "商务英语", "教育学"], description: "民办语言类强校，外语专业齐全。全国民办高校中唯一更名为大学的。", employmentRate: 0.88, genderRatio: { male: 22, female: 78 }, avgScore: 480 },
  { id: 296, name: "武昌首义学院", province: "湖北", city: "武汉", type: "理工", level: [], isPublic: false, topMajors: ["计算机科学", "机械工程", "土木工程", "自动化", "电子信息"], description: "民办本科中排名常年第一，工科实力在民办中突出。武汉的地理位置加分。", employmentRate: 0.87, genderRatio: { male: 60, female: 40 }, avgScore: 460 },
  { id: 297, name: "文华学院", province: "湖北", city: "武汉", type: "理工", level: [], isPublic: false, topMajors: ["计算机科学", "通信工程", "机械工程", "自动化", "工商管理"], description: "民办本科排名前列，和武昌首义学院同为华中科大关联民办。学风在民办中算好的。", employmentRate: 0.86, genderRatio: { male: 58, female: 42 }, avgScore: 458 },
  { id: 298, name: "珠海科技学院", province: "广东", city: "珠海", type: "综合", level: [], isPublic: false, topMajors: ["计算机科学", "金融学", "旅游管理", "英语", "药学"], description: "原吉林大学珠海学院，民办中规模最大环境最好的之一。珠海海景校园超美。", employmentRate: 0.85, genderRatio: { male: 45, female: 55 }, avgScore: 485 },
  { id: 299, name: "广州城市理工学院", province: "广东", city: "广州", type: "理工", level: [], isPublic: false, topMajors: ["车辆工程", "机械工程", "计算机科学", "电气工程", "工商管理"], description: "原华南理工广州学院，工科在民办中较强。在花都区，离白云机场近。", employmentRate: 0.86, genderRatio: { male: 60, female: 40 }, avgScore: 478 },
  { id: 300, name: "电子科技大学中山学院", province: "广东", city: "中山", type: "理工", level: [], isPublic: false, topMajors: ["电子信息工程", "计算机科学", "通信工程", "机械工程", "自动化"], description: "电子科技大学与中山市共建，电子信息特色。在珠三角就业有地域优势。", employmentRate: 0.87, genderRatio: { male: 62, female: 38 }, avgScore: 480 },
  { id: 301, name: "北京理工大学珠海学院", province: "广东", city: "珠海", type: "理工", level: [], isPublic: false, topMajors: ["计算机科学", "机械工程", "会计学", "信息管理", "法学"], description: "北理工品牌加持，珠海校区环境优美。转设中，但北理工的牌子有含金量。", employmentRate: 0.86, genderRatio: { male: 55, female: 45 }, avgScore: 488 },

  // ===== 第五批：补充更多本科院校 =====
  // 北京
  { id: 302, name: "北京工商大学", province: "北京", city: "北京", type: "财经", level: [], isPublic: true, topMajors: ["会计学", "食品科学", "金融学", "工商管理", "物流管理"], description: "北京市属重点，会计和食品科学是传统王牌。在北京市属院校中排名靠前。", employmentRate: 0.90, genderRatio: { male: 40, female: 60 }, avgScore: 545 },
  { id: 303, name: "北京建筑大学", province: "北京", city: "北京", type: "理工", level: [], isPublic: true, topMajors: ["建筑学", "土木工程", "城乡规划", "测绘工程", "给排水"], description: "北京市属唯一的建筑类院校，建筑学在北京本地认可度高。校友遍布北京城建系统。", employmentRate: 0.92, genderRatio: { male: 62, female: 38 }, avgScore: 542 },
  { id: 304, name: "北京信息科技大学", province: "北京", city: "北京", type: "理工", level: [], isPublic: true, topMajors: ["计算机科学", "测控技术", "自动化", "电子信息", "信息管理"], description: "原北京机械工业学院+北京信息工程学院合并，IT特色鲜明。海淀区地理位置优越。", employmentRate: 0.91, genderRatio: { male: 60, female: 40 }, avgScore: 538 },
  { id: 305, name: "北方工业大学", province: "北京", city: "北京", type: "理工", level: [], isPublic: true, topMajors: ["自动化", "计算机科学", "机械工程", "电气工程", "建筑学"], description: "原北京冶金机电学院，工科底子扎实。石景山区校园环境不错。", employmentRate: 0.90, genderRatio: { male: 62, female: 38 }, avgScore: 535 },

  // 上海
  { id: 306, name: "上海海洋大学", province: "上海", city: "上海", type: "理工", level: ["双一流"], isPublic: true, topMajors: ["水产养殖", "海洋科学", "食品科学", "渔业资源", "环境工程"], description: "水产学科全国第一，双一流建设学科。临港新校区面朝大海。", employmentRate: 0.89, genderRatio: { male: 50, female: 50 }, avgScore: 538 },
  { id: 307, name: "上海立信会计金融学院", province: "上海", city: "上海", type: "财经", level: [], isPublic: true, topMajors: ["会计学", "审计学", "金融学", "财务管理", "税务"], description: "立信会计专科并入，会计和审计在业内名声极好。''学会计到立信''深入人心。", employmentRate: 0.93, genderRatio: { male: 34, female: 66 }, avgScore: 535 },

  // 广东
  { id: 308, name: "广州航海学院", province: "广东", city: "广州", type: "理工", level: [], isPublic: true, topMajors: ["航海技术", "轮机工程", "船舶电子", "港口航道", "交通运输"], description: "华南唯一独立设置的航海院校，航海和轮机是核心。广州港是世界大港，就业不愁。", employmentRate: 0.92, genderRatio: { male: 68, female: 32 }, avgScore: 500 },
  { id: 309, name: "广东石油化工学院", province: "广东", city: "茂名", type: "理工", level: [], isPublic: true, topMajors: ["石油工程", "化学工程", "油气储运", "环境工程", "机械工程"], description: "华南唯一石油化工特色院校，茂名石化基地旁。石化行业对口就业率高。", employmentRate: 0.90, genderRatio: { male: 62, female: 38 }, avgScore: 490 },
  { id: 310, name: "韩山师范学院", province: "广东", city: "潮州", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "历史学", "数学", "化学"], description: "百年师范老校，潮州文化底蕴深厚。在粤东教育系统很有影响力。", employmentRate: 0.87, genderRatio: { male: 34, female: 66 }, avgScore: 485 },

  // 浙江
  { id: 311, name: "嘉兴大学", province: "浙江", city: "嘉兴", type: "综合", level: [], isPublic: true, topMajors: ["经济学", "会计学", "临床医学", "机械工程", "纺织工程"], description: "原嘉兴学院，2024年更名大学。红船精神发源地，嘉兴地处长三角核心。", employmentRate: 0.89, genderRatio: { male: 46, female: 54 }, avgScore: 565 },
  { id: 312, name: "台州学院", province: "浙江", city: "台州", type: "综合", level: [], isPublic: true, topMajors: ["临床医学", "材料科学", "机械工程", "小学教育", "制药工程"], description: "台州唯一公办本科，医学和工科是主要方向。台州民营经济发达就业机会多。", employmentRate: 0.88, genderRatio: { male: 48, female: 52 }, avgScore: 548 },
  { id: 313, name: "温州大学", province: "浙江", city: "温州", type: "综合", level: [], isPublic: true, topMajors: ["化学", "生态学", "小学教育", "机械工程", "经济学"], description: "温州唯一以城市命名的大学，化学和生态学是优势学科。温州人创业精神浓厚。", employmentRate: 0.89, genderRatio: { male: 47, female: 53 }, avgScore: 558 },
  { id: 314, name: "浙江外国语学院", province: "浙江", city: "杭州", type: "语言", level: [], isPublic: true, topMajors: ["英语", "翻译", "商务英语", "日语", "旅游管理"], description: "浙江省属外语院校，在杭州，小语种就业灵活。想学外语但分数不够北外上外的选择。", employmentRate: 0.89, genderRatio: { male: 24, female: 76 }, avgScore: 570 },

  // 江苏
  { id: 315, name: "江苏科技大学", province: "江苏", city: "镇江", type: "理工", level: [], isPublic: true, topMajors: ["船舶工程", "海洋工程", "焊接工程", "材料科学", "自动化"], description: "原华东船舶工业学院，船舶和焊接全国顶尖。在镇江，长江边上，造船业发达。", employmentRate: 0.93, genderRatio: { male: 64, female: 36 }, avgScore: 548 },
  { id: 316, name: "盐城工学院", province: "江苏", city: "盐城", type: "理工", level: [], isPublic: true, topMajors: ["机械工程", "土木工程", "化学工程", "材料科学", "环境工程"], description: "盐城唯一工科院校，服务地方产业。新能源（风电）相关方向有特色。", employmentRate: 0.88, genderRatio: { male: 60, female: 40 }, avgScore: 505 },
  { id: 317, name: "淮阴工学院", province: "江苏", city: "淮安", type: "理工", level: [], isPublic: true, topMajors: ["机械工程", "交通运输", "食品科学", "计算机科学", "生物工程"], description: "淮安唯一的工科本科，周总理故乡的高校。交通和食品是特色方向。", employmentRate: 0.87, genderRatio: { male: 58, female: 42 }, avgScore: 500 },
  { id: 318, name: "常州工学院", province: "江苏", city: "常州", type: "理工", level: [], isPublic: true, topMajors: ["机械工程", "土木工程", "电气工程", "计算机科学", "学前教育"], description: "常州市属应用型本科，服务常州制造业。和常州本地企业合作紧密。", employmentRate: 0.89, genderRatio: { male: 56, female: 44 }, avgScore: 508 },
  { id: 319, name: "南京晓庄学院", province: "江苏", city: "南京", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "学前教育", "汉语言文学", "心理学", "英语"], description: "陶行知创办，小学教育全国闻名。南京中小学教师的重要来源。", employmentRate: 0.89, genderRatio: { male: 28, female: 72 }, avgScore: 525 },
  { id: 320, name: "金陵科技学院", province: "江苏", city: "南京", type: "理工", level: [], isPublic: true, topMajors: ["软件工程", "会计学", "园林设计", "动画", "计算机科学"], description: "南京市属应用型本科，软件和园艺有特色。在江宁大学城，周边环境好。", employmentRate: 0.88, genderRatio: { male: 50, female: 50 }, avgScore: 520 },

  // 湖北
  { id: 321, name: "湖北汽车工业学院", province: "湖北", city: "十堰", type: "理工", level: [], isPublic: true, topMajors: ["车辆工程", "机械工程", "材料科学", "自动化", "交通运输"], description: "汽车行业黄埔，东风汽车公司的摇篮。十堰是中国卡车之都，汽车产业链完整。", employmentRate: 0.93, genderRatio: { male: 66, female: 34 }, avgScore: 508 },
  { id: 322, name: "湖北科技学院", province: "湖北", city: "咸宁", type: "综合", level: [], isPublic: true, topMajors: ["临床医学", "药学", "小学教育", "核科学", "地理科学"], description: "原咸宁医学院+咸宁师专合并，医学和师范双轨。核科学是独特的特色方向。", employmentRate: 0.87, genderRatio: { male: 45, female: 55 }, avgScore: 498 },
  { id: 323, name: "湖北文理学院", province: "湖北", city: "襄阳", type: "综合", level: [], isPublic: true, topMajors: ["机械工程", "中国语言文学", "临床医学", "计算机科学", "旅游管理"], description: "襄阳唯一的公办本科，诸葛亮隐居地的大学。服务襄阳汽车和旅游产业。", employmentRate: 0.87, genderRatio: { male: 48, female: 52 }, avgScore: 495 },
  { id: 324, name: "黄冈师范学院", province: "湖北", city: "黄冈", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "数学", "美术学", "音乐学"], description: "黄冈基础教育全国闻名，师范底子好。百年师范老校，教育类专业扎实。", employmentRate: 0.87, genderRatio: { male: 33, female: 67 }, avgScore: 492 },

  // 四川
  { id: 325, name: "成都大学", province: "四川", city: "成都", type: "综合", level: [], isPublic: true, topMajors: ["药学", "动画", "旅游管理", "食品科学", "软件工程"], description: "成都市重点建设，发展迅猛。成都大运村所在地，硬件条件一流。", employmentRate: 0.89, genderRatio: { male: 46, female: 54 }, avgScore: 538 },
  { id: 326, name: "四川轻化工大学", province: "四川", city: "自贡/宜宾", type: "理工", level: [], isPublic: true, topMajors: ["化学工程", "食品科学", "生物工程", "自动化", "酿酒工程"], description: "原四川轻化工学院，酿酒工程全国独有。自贡和宜宾双城办学，白酒产业支撑。", employmentRate: 0.90, genderRatio: { male: 58, female: 42 }, avgScore: 520 },
  { id: 327, name: "绵阳师范学院", province: "四川", city: "绵阳", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "数学", "化学", "生物科学"], description: "绵阳唯一的师范本科，川西北教育人才的摇篮。绵阳是四川第二大城市。", employmentRate: 0.87, genderRatio: { male: 32, female: 68 }, avgScore: 510 },
  { id: 328, name: "乐山师范学院", province: "四川", city: "乐山", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "旅游管理", "特殊教育", "美术学"], description: "乐山唯一的本科，特殊教育全国有名。乐山大佛和峨眉山旁的校园。", employmentRate: 0.86, genderRatio: { male: 33, female: 67 }, avgScore: 505 },
  { id: 329, name: "内江师范学院", province: "四川", city: "内江", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "数学", "体育学", "美术学"], description: "内江唯一的本科院校，张大千故里的师范学府。新校区环境好。", employmentRate: 0.86, genderRatio: { male: 34, female: 66 }, avgScore: 500 },
  { id: 330, name: "宜宾学院", province: "四川", city: "宜宾", type: "综合", level: [], isPublic: true, topMajors: ["电子信息", "酿酒工程", "茶学", "小学教育", "计算机科学"], description: "宜宾唯一的公办本科，白酒和茶学很有地方特色。宜宾是五粮液的家乡。", employmentRate: 0.87, genderRatio: { male: 46, female: 54 }, avgScore: 505 },
  { id: 331, name: "攀枝花学院", province: "四川", city: "攀枝花", type: "理工", level: [], isPublic: true, topMajors: ["材料科学", "冶金工程", "土木工程", "临床医学", "康养管理"], description: "攀枝花唯一的公办本科，钒钛材料特色。冬天温暖如春，康养产业新兴。", employmentRate: 0.86, genderRatio: { male: 52, female: 48 }, avgScore: 488 },

  // 山东
  { id: 332, name: "青岛理工大学", province: "山东", city: "青岛", type: "理工", level: [], isPublic: true, topMajors: ["土木工程", "建筑学", "机械工程", "环境工程", "城市规划"], description: "原青岛建筑工程学院，土木建筑在山东仅次于山大。青岛的海景加分。", employmentRate: 0.91, genderRatio: { male: 62, female: 38 }, avgScore: 550 },
  { id: 333, name: "山东建筑大学", province: "山东", city: "济南", type: "理工", level: [], isPublic: true, topMajors: ["建筑学", "土木工程", "城乡规划", "风景园林", "给排水"], description: "山东省属建筑类强校，建筑学山东前三。在济南，城建系统校友多。", employmentRate: 0.90, genderRatio: { male: 62, female: 38 }, avgScore: 540 },
  { id: 334, name: "山东理工大学", province: "山东", city: "淄博", type: "理工", level: [], isPublic: true, topMajors: ["车辆工程", "机械工程", "农业工程", "电气工程", "化学工程"], description: "原山东工程学院+淄博学院合并，车辆和农机很强。淄博是工业城市就业扎实。", employmentRate: 0.90, genderRatio: { male: 62, female: 38 }, avgScore: 535 },
  { id: 335, name: "聊城大学", province: "山东", city: "聊城", type: "综合", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "化学", "历史学", "动物科学"], description: "鲁西最高学府，师范底蕴深厚。季羡林先生的母校，学风朴实。", employmentRate: 0.87, genderRatio: { male: 44, female: 56 }, avgScore: 515 },
  { id: 336, name: "临沂大学", province: "山东", city: "临沂", type: "综合", level: [], isPublic: true, topMajors: ["教育学", "物流管理", "数学", "机械工程", "化学"], description: "山东单体校园面积最大的大学，沂蒙精神传承。物流管理依托临沂商贸城。", employmentRate: 0.88, genderRatio: { male: 45, female: 55 }, avgScore: 510 },
  { id: 337, name: "山东第一医科大学", province: "山东", city: "济南/泰安", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "护理学", "药学", "医学影像", "公共卫生"], description: "山东省重点建设的医科大学，合并了省立医院等资源。临床医学上升势头猛。", employmentRate: 0.91, genderRatio: { male: 42, female: 58 }, avgScore: 555 },
  { id: 338, name: "潍坊医学院", province: "山东", city: "潍坊", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "麻醉学", "护理学", "医学影像", "口腔医学"], description: "山东省属老牌医学院，麻醉学是国家级特色专业。附属医院遍布潍坊。", employmentRate: 0.91, genderRatio: { male: 40, female: 60 }, avgScore: 542 },
  { id: 339, name: "滨州医学院", province: "山东", city: "烟台/滨州", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "口腔医学", "护理学", "康复治疗", "特殊教育"], description: "山东老牌医学院，烟台校区环境好。康复治疗和特教结合很有特色。", employmentRate: 0.90, genderRatio: { male: 38, female: 62 }, avgScore: 535 },

  // 河南
  { id: 340, name: "河南财经政法大学", province: "河南", city: "郑州", type: "财经", level: [], isPublic: true, topMajors: ["会计学", "金融学", "法学", "工商管理", "经济学"], description: "河南省属财经+政法特色院校，在河南金融圈和政法系统校友多。", employmentRate: 0.89, genderRatio: { male: 40, female: 60 }, avgScore: 545 },
  { id: 341, name: "中原工学院", province: "河南", city: "郑州", type: "理工", level: [], isPublic: true, topMajors: ["纺织工程", "服装设计", "机械工程", "计算机科学", "能源动力"], description: "原郑州纺织工学院，纺织和服装在河南最强。正向''河南电子科技大学''转型中。", employmentRate: 0.88, genderRatio: { male: 55, female: 45 }, avgScore: 520 },
  { id: 342, name: "郑州航空工业管理学院", province: "河南", city: "郑州", type: "理工", level: [], isPublic: true, topMajors: ["会计学", "飞行器设计", "工业工程", "物流管理", "审计学"], description: "原航空工业部直属，会计和审计在河南数一数二。航空特色+财经双轨。", employmentRate: 0.90, genderRatio: { male: 48, female: 52 }, avgScore: 525 },
  { id: 343, name: "洛阳师范学院", province: "河南", city: "洛阳", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "历史学", "旅游管理", "数学"], description: "洛阳最高师范学府，千年古都的文化底蕴加成。历史文化旅游方向有特色。", employmentRate: 0.87, genderRatio: { male: 32, female: 68 }, avgScore: 508 },
  { id: 344, name: "安阳师范学院", province: "河南", city: "安阳", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "历史学", "计算机科学", "甲骨学"], description: "甲骨文的故乡，甲骨学研究全国独有。师范教育在豫北很有影响力。", employmentRate: 0.86, genderRatio: { male: 32, female: 68 }, avgScore: 500 },
  { id: 345, name: "南阳师范学院", province: "河南", city: "南阳", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "生物学", "地理科学", "历史学"], description: "南阳唯一的师范本科，诸葛亮躬耕地办学。生物和水环境保护有区域特色。", employmentRate: 0.86, genderRatio: { male: 33, female: 67 }, avgScore: 500 },
  { id: 346, name: "信阳师范大学", province: "河南", city: "信阳", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "数学", "化学", "马克思主义理论"], description: "2023年更名大学，豫南最高师范学府。考研率高，学风淳朴。", employmentRate: 0.87, genderRatio: { male: 30, female: 70 }, avgScore: 512 },
  { id: 347, name: "河南科技学院", province: "河南", city: "新乡", type: "理工", level: [], isPublic: true, topMajors: ["农学", "食品科学", "动物科学", "机械工程", "园艺学"], description: "原百泉农专，农学和食品是传统优势。在新乡，小麦育种全国闻名。", employmentRate: 0.88, genderRatio: { male: 50, female: 50 }, avgScore: 505 },
  { id: 348, name: "新乡医学院", province: "河南", city: "新乡", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "护理学", "药学", "麻醉学", "医学检验"], description: "河南老牌医学院，在河南医疗系统认可度高。附属医院在豫北影响力大。", employmentRate: 0.91, genderRatio: { male: 40, female: 60 }, avgScore: 538 },

  // 辽宁
  { id: 349, name: "沈阳建筑大学", province: "辽宁", city: "沈阳", type: "理工", level: [], isPublic: true, topMajors: ["建筑学", "土木工程", "城乡规划", "风景园林", "机械工程"], description: "建筑新八校之一，建筑学在东北仅次于哈工大。校园里的长廊是世界最长。", employmentRate: 0.91, genderRatio: { male: 62, female: 38 }, avgScore: 538 },
  { id: 350, name: "沈阳航空航天大学", province: "辽宁", city: "沈阳", type: "理工", level: [], isPublic: true, topMajors: ["飞行器设计", "航空发动机", "自动化", "材料科学", "安全工程"], description: "原沈航，航空航天特色鲜明。沈飞等军工企业校招的重点院校。", employmentRate: 0.92, genderRatio: { male: 68, female: 32 }, avgScore: 535 },
  { id: 351, name: "辽宁石油化工大学", province: "辽宁", city: "抚顺", type: "理工", level: [], isPublic: true, topMajors: ["石油工程", "化学工程", "油气储运", "过程装备", "自动化"], description: "原抚顺石油学院，石化特色。抚顺是雷锋的第二故乡，校园雷锋精神文化浓。", employmentRate: 0.91, genderRatio: { male: 62, female: 38 }, avgScore: 505 },
  { id: 352, name: "大连工业大学", province: "辽宁", city: "大连", type: "理工", level: [], isPublic: true, topMajors: ["食品科学", "轻工技术", "纺织工程", "艺术设计", "生物工程"], description: "原大连轻工业学院，食品和发酵全国前茅。大连的海鲜加工方向独树一帜。", employmentRate: 0.89, genderRatio: { male: 48, female: 52 }, avgScore: 525 },
  { id: 353, name: "渤海大学", province: "辽宁", city: "锦州", type: "综合", level: [], isPublic: true, topMajors: ["食品科学", "教育学", "汉语言文学", "化学", "水产养殖"], description: "原锦州师范学院+辽宁商专合并，师范底蕴深。食品科学莫名其妙地强。", employmentRate: 0.87, genderRatio: { male: 42, female: 58 }, avgScore: 500 },
  { id: 354, name: "大连民族大学", province: "辽宁", city: "大连", type: "民族", level: [], isPublic: true, topMajors: ["计算机科学", "生物工程", "日语", "国际经济与贸易", "工业设计"], description: "国家民委直属，大连海滨校园。民族多样性 + 大连区位 = 独特体验。", employmentRate: 0.88, genderRatio: { male: 45, female: 55 }, avgScore: 515 },

  // 福建
  { id: 355, name: "福建医科大学", province: "福建", city: "福州", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "口腔医学", "护理学", "药学", "预防医学"], description: "福建最好的医学院，附属医院遍布全省。学医在福建的首选。", employmentRate: 0.92, genderRatio: { male: 40, female: 60 }, avgScore: 570 },
  { id: 356, name: "福建中医药大学", province: "福建", city: "福州", type: "医药", level: [], isPublic: true, topMajors: ["中医学", "中西医结合", "针灸推拿", "中药学", "护理学"], description: "福建省属中医药院校，中医康复学全国前三。福建中医药资源丰富。", employmentRate: 0.89, genderRatio: { male: 36, female: 64 }, avgScore: 530 },
  { id: 357, name: "闽南师范大学", province: "福建", city: "漳州", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "数学", "化学", "心理学"], description: "原漳州师范学院，闽南地区师范重镇。在漳州这座宜居慢城。", employmentRate: 0.88, genderRatio: { male: 32, female: 68 }, avgScore: 520 },
  { id: 358, name: "泉州师范学院", province: "福建", city: "泉州", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "电子商务", "音乐学", "纺织工程"], description: "泉州唯一的师范本科，海上丝绸之路起点的大学。电商和纺织有地方产业支撑。", employmentRate: 0.87, genderRatio: { male: 35, female: 65 }, avgScore: 510 },
  { id: 359, name: "福建工程学院", province: "福建", city: "福州", type: "理工", level: [], isPublic: true, topMajors: ["土木工程", "建筑学", "机械工程", "电气工程", "计算机科学"], description: "原福建建筑专科学校，建筑和土木在福建很强。正更名为福建理工大学。", employmentRate: 0.90, genderRatio: { male: 60, female: 40 }, avgScore: 515 },
  { id: 360, name: "厦门医学院", province: "福建", city: "厦门", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "口腔医学", "护理学", "药学", "医学检验"], description: "厦门唯一的公办医学院，虽然年轻但在厦门医疗系统就业很好。", employmentRate: 0.90, genderRatio: { male: 38, female: 62 }, avgScore: 525 },

  // 陕西
  { id: 361, name: "陕西科技大学", province: "陕西", city: "西安", type: "理工", level: [], isPublic: true, topMajors: ["轻工技术", "材料科学", "化学工程", "设计学", "食品科学"], description: "原西北轻工业学院，皮革和造纸全国前三。在西安未央大学城。", employmentRate: 0.89, genderRatio: { male: 56, female: 44 }, avgScore: 530 },
  { id: 362, name: "西安科技大学", province: "陕西", city: "西安", type: "理工", level: [], isPublic: true, topMajors: ["矿业工程", "安全工程", "地质工程", "测绘工程", "土木工程"], description: "原西安矿业学院，安全工程全国前三。在西安，地矿安全领域很强。", employmentRate: 0.91, genderRatio: { male: 62, female: 38 }, avgScore: 525 },
  { id: 363, name: "西北政法大学", province: "陕西", city: "西安", type: "政法", level: [], isPublic: true, topMajors: ["法学", "哲学", "经济学", "侦查学", "新闻学"], description: "五院四系之一！法学在西北无人能敌。非211但法学实力让很多985汗颜。", employmentRate: 0.89, genderRatio: { male: 42, female: 58 }, avgScore: 558 },
  { id: 364, name: "西安外国语大学", province: "陕西", city: "西安", type: "语言", level: [], isPublic: true, topMajors: ["英语", "翻译", "日语", "俄语", "旅游管理"], description: "八大外语院校之一，西北外语类最强。俄语和一带一路中亚语种是特色。", employmentRate: 0.89, genderRatio: { male: 22, female: 78 }, avgScore: 545 },
  { id: 365, name: "西安财经大学", province: "陕西", city: "西安", type: "财经", level: [], isPublic: true, topMajors: ["会计学", "统计学", "金融学", "经济学", "工商管理"], description: "陕西唯一的财经本科院校，统计学是国家特色专业。在西安金融圈有影响力。", employmentRate: 0.88, genderRatio: { male: 38, female: 62 }, avgScore: 525 },

  // 天津
  { id: 366, name: "天津中医药大学", province: "天津", city: "天津", type: "医药", level: ["双一流"], isPublic: true, topMajors: ["中医学", "中药学", "针灸推拿", "中西医结合", "药学"], description: "双一流学科建设高校，针灸推拿全国第一。中医药现代化研究的前沿。", employmentRate: 0.90, genderRatio: { male: 35, female: 65 }, avgScore: 555 },
  { id: 367, name: "天津财经大学", province: "天津", city: "天津", type: "财经", level: [], isPublic: true, topMajors: ["会计学", "金融学", "统计学", "经济学", "工商管理"], description: "天津市属财经强校，在天津仅次于南开的经济学科。会计和统计是王牌。", employmentRate: 0.91, genderRatio: { male: 36, female: 64 }, avgScore: 565 },
  { id: 368, name: "天津理工大学", province: "天津", city: "天津", type: "理工", level: [], isPublic: true, topMajors: ["计算机科学", "材料科学", "机械工程", "管理科学", "环境工程"], description: "天津市属工科院校，计算机和管理是优势。聋人工学院全国独有。", employmentRate: 0.89, genderRatio: { male: 58, female: 42 }, avgScore: 545 },
  { id: 369, name: "天津城建大学", province: "天津", city: "天津", type: "理工", level: [], isPublic: true, topMajors: ["建筑学", "土木工程", "城乡规划", "给排水", "风景园林"], description: "天津唯一的建筑类本科，城建特色鲜明。校友遍布天津城建系统和设计院。", employmentRate: 0.90, genderRatio: { male: 60, female: 40 }, avgScore: 530 },
  { id: 370, name: "天津农学院", province: "天津", city: "天津", type: "农林", level: [], isPublic: true, topMajors: ["农学", "水产养殖", "动物科学", "食品科学", "园林"], description: "天津唯一的农林本科，水产养殖是特色。在天津这座大城市学农很独特。", employmentRate: 0.86, genderRatio: { male: 48, female: 52 }, avgScore: 510 },

  // 重庆
  { id: 371, name: "重庆理工大学", province: "重庆", city: "重庆", type: "理工", level: [], isPublic: true, topMajors: ["车辆工程", "会计学", "机械工程", "计算机科学", "材料科学"], description: "原重庆工学院，车辆和会计是两大王牌。重庆汽车产业发达，就业对口。", employmentRate: 0.91, genderRatio: { male: 58, female: 42 }, avgScore: 532 },
  { id: 372, name: "重庆工商大学", province: "重庆", city: "重庆", type: "财经", level: [], isPublic: true, topMajors: ["经济学", "会计学", "工商管理", "金融学", "市场营销"], description: "重庆市属财经强校，在西南地区商科有一定影响力。南岸区校园俯瞰长江。", employmentRate: 0.89, genderRatio: { male: 42, female: 58 }, avgScore: 538 },
  { id: 373, name: "四川外国语大学", province: "重庆", city: "重庆", type: "语言", level: [], isPublic: true, topMajors: ["英语", "翻译", "日语", "德语", "商务英语"], description: "八大外语院校之一，虽叫四川但在重庆。外语学科齐全，在西南外语圈顶尖。", employmentRate: 0.89, genderRatio: { male: 22, female: 78 }, avgScore: 548 },

  // 江西
  { id: 374, name: "赣南师范大学", province: "江西", city: "赣州", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "化学", "历史学", "脐橙/园艺"], description: "赣南最高师范学府，脐橙之乡的特色园艺。红色故都的文化底蕴。", employmentRate: 0.87, genderRatio: { male: 33, female: 67 }, avgScore: 505 },
  { id: 375, name: "南昌航空大学", province: "江西", city: "南昌", type: "理工", level: [], isPublic: true, topMajors: ["飞行器设计", "焊接工程", "材料科学", "测控技术", "软件工程"], description: "原南昌航空工业学院，航空特色。焊接和无损检测全国知名。", employmentRate: 0.90, genderRatio: { male: 66, female: 34 }, avgScore: 532 },
  { id: 376, name: "景德镇陶瓷大学", province: "江西", city: "景德镇", type: "艺术", level: [], isPublic: true, topMajors: ["陶瓷设计", "雕塑", "美术学", "材料科学", "产品设计"], description: "中国唯一以陶瓷命名的大学，陶瓷领域世界顶尖。千年瓷都的艺术殿堂。", employmentRate: 0.86, genderRatio: { male: 42, female: 58 }, avgScore: 505 },
  { id: 377, name: "井冈山大学", province: "江西", city: "吉安", type: "综合", level: [], isPublic: true, topMajors: ["临床医学", "教育学", "生物科学", "汉语言文学", "化学"], description: "井冈山革命老区唯一的本科，红色文化资源丰富。医学和师范是主要方向。", employmentRate: 0.85, genderRatio: { male: 46, female: 54 }, avgScore: 492 },

  // 河北
  { id: 378, name: "华北理工大学", province: "河北", city: "唐山", type: "理工", level: [], isPublic: true, topMajors: ["冶金工程", "矿业工程", "临床医学", "公共卫生", "化学工程"], description: "原河北理工大学+华北煤炭医学院合并，冶金和医学双王牌。唐山重工业基地。", employmentRate: 0.90, genderRatio: { male: 56, female: 44 }, avgScore: 528 },
  { id: 379, name: "河北工程大学", province: "河北", city: "邯郸", type: "理工", level: [], isPublic: true, topMajors: ["土木工程", "水利工程", "地质工程", "矿业工程", "建筑学"], description: "原河北建筑科技学院+华北水利水电学院(邯郸)合并。水利和土木是王牌。", employmentRate: 0.89, genderRatio: { male: 62, female: 38 }, avgScore: 518 },
  { id: 380, name: "河北经贸大学", province: "河北", city: "石家庄", type: "财经", level: [], isPublic: true, topMajors: ["会计学", "经济学", "金融学", "法学", "工商管理"], description: "河北省属财经强校，在河北金融和商贸系统校友多。石家庄的地理位置优势。", employmentRate: 0.88, genderRatio: { male: 38, female: 62 }, avgScore: 525 },
  { id: 381, name: "河北地质大学", province: "河北", city: "石家庄", type: "理工", level: [], isPublic: true, topMajors: ["地质学", "勘查工程", "宝石学", "经济学", "水文地质"], description: "原河北地质学院，地质和宝石鉴定很强。是李四光等倡导创办的。", employmentRate: 0.88, genderRatio: { male: 55, female: 45 }, avgScore: 512 },
  { id: 382, name: "石家庄学院", province: "河北", city: "石家庄", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "生物工程", "化学", "计算机科学", "制药工程"], description: "石家庄市属本科，师范和应用型双轨。在石家庄本地就业有优势。", employmentRate: 0.86, genderRatio: { male: 44, female: 56 }, avgScore: 490 },

  // 安徽
  { id: 383, name: "淮北师范大学", province: "安徽", city: "淮北", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "数学", "化学", "计算机科学"], description: "安徽省属师范，在皖北教育系统地位重要。朴实学风，考研率不错。", employmentRate: 0.87, genderRatio: { male: 34, female: 66 }, avgScore: 500 },
  { id: 384, name: "安徽建筑大学", province: "安徽", city: "合肥", type: "理工", level: [], isPublic: true, topMajors: ["建筑学", "土木工程", "城乡规划", "工程管理", "给排水"], description: "安徽省属建筑类院校，在安徽城建系统校友多。在合肥，就业资源好。", employmentRate: 0.90, genderRatio: { male: 62, female: 38 }, avgScore: 520 },
  { id: 385, name: "合肥大学", province: "安徽", city: "合肥", type: "综合", level: [], isPublic: true, topMajors: ["机械工程", "计算机科学", "生物工程", "化学工程", "经济学"], description: "2023年由合肥学院更名，中德合作深厚。合肥科创城市背景，发展迅猛。", employmentRate: 0.90, genderRatio: { male: 55, female: 45 }, avgScore: 528 },

  // 湖南
  { id: 386, name: "湖南理工学院", province: "湖南", city: "岳阳", type: "理工", level: [], isPublic: true, topMajors: ["化学工程", "机械工程", "土木工程", "中国语言文学", "数学"], description: "岳阳唯一的公办本科，洞庭湖畔读书。化工和机械是传统优势。", employmentRate: 0.88, genderRatio: { male: 55, female: 45 }, avgScore: 510 },
  { id: 387, name: "衡阳师范学院", province: "湖南", city: "衡阳", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "地理科学", "物理学", "数学"], description: "衡阳最高师范学府，南岳衡山脚下的大学。师范底蕴深厚。", employmentRate: 0.87, genderRatio: { male: 32, female: 68 }, avgScore: 505 },
  { id: 388, name: "湖南文理学院", province: "湖南", city: "常德", type: "综合", level: [], isPublic: true, topMajors: ["汉语言文学", "机械工程", "生物科学", "地理科学", "英语"], description: "常德唯一的公办本科，桃花源里的大学。文史和生物是传统方向。", employmentRate: 0.86, genderRatio: { male: 45, female: 55 }, avgScore: 498 },
  { id: 389, name: "怀化学院", province: "湖南", city: "怀化", type: "综合", level: [], isPublic: true, topMajors: ["生物科学", "中国语言文学", "数学", "计算机科学", "旅游管理"], description: "怀化唯一的公办本科，大湘西地区的最高学府。生物资源丰富，植物学研究有优势。", employmentRate: 0.85, genderRatio: { male: 44, female: 56 }, avgScore: 485 },
  { id: 390, name: "湘南学院", province: "湖南", city: "郴州", type: "综合", level: [], isPublic: true, topMajors: ["临床医学", "护理学", "计算机科学", "旅游管理", "医学影像"], description: "郴州唯一的公办本科，医学和旅游是主要方向。靠近广东，就业有辐射优势。", employmentRate: 0.86, genderRatio: { male: 44, female: 56 }, avgScore: 488 },
  { id: 391, name: "邵阳学院", province: "湖南", city: "邵阳", type: "综合", level: [], isPublic: true, topMajors: ["机械工程", "食品科学", "临床医学", "会计学", "电气工程"], description: "邵阳唯一的公办本科，工科和医学是主要方向。服务湘中地区的综合院校。", employmentRate: 0.86, genderRatio: { male: 52, female: 48 }, avgScore: 485 },

  // 黑龙江
  { id: 392, name: "齐齐哈尔大学", province: "黑龙江", city: "齐齐哈尔", type: "综合", level: [], isPublic: true, topMajors: ["化学工程", "食品科学", "教育学", "英语", "机械工程"], description: "齐齐哈尔最高学府，黑龙江西部教育重镇。化工和食品是传统强项。", employmentRate: 0.85, genderRatio: { male: 48, female: 52 }, avgScore: 480 },
  { id: 393, name: "佳木斯大学", province: "黑龙江", city: "佳木斯", type: "综合", level: [], isPublic: true, topMajors: ["临床医学", "口腔医学", "机械工程", "俄语", "材料科学"], description: "佳木斯最高学府，口腔医学在全国小有名气。中俄边境的地缘优势。", employmentRate: 0.86, genderRatio: { male: 46, female: 54 }, avgScore: 478 },
  { id: 394, name: "黑龙江八一农垦大学", province: "黑龙江", city: "大庆", type: "农林", level: [], isPublic: true, topMajors: ["农学", "动物科学", "农业机械化", "食品科学", "水利工程"], description: "原黑龙江八一农大，农垦系统黄埔。在大庆，现代化大农业的科研高地。", employmentRate: 0.87, genderRatio: { male: 50, female: 50 }, avgScore: 470 },

  // 吉林
  { id: 395, name: "北华大学", province: "吉林", city: "吉林市", type: "综合", level: [], isPublic: true, topMajors: ["林学", "临床医学", "机械工程", "电气工程", "教育学"], description: "吉林省属规模最大的综合大学，由原吉林师范学院等四校合并。办学在吉林市。", employmentRate: 0.86, genderRatio: { male: 48, female: 52 }, avgScore: 495 },
  { id: 396, name: "吉林农业大学", province: "吉林", city: "长春", type: "农林", level: [], isPublic: true, topMajors: ["动物科学", "农学", "食品科学", "中药学", "植物保护"], description: "吉林省属重点农林院校，人参和中药材研究全国领先。长春生活成本低。", employmentRate: 0.86, genderRatio: { male: 48, female: 52 }, avgScore: 492 },
  { id: 397, name: "吉林师范大学", province: "吉林", city: "四平", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "历史学", "物理学", "化学"], description: "吉林省属重点师范，在吉林教育系统仅次于东北师大。四平英雄城的学府。", employmentRate: 0.88, genderRatio: { male: 30, female: 70 }, avgScore: 508 },

  // 广西
  { id: 398, name: "广西科技大学", province: "广西", city: "柳州", type: "理工", level: [], isPublic: true, topMajors: ["机械工程", "车辆工程", "土木工程", "计算机科学", "自动化"], description: "原广西工学院，柳州是汽车城。和柳工、五菱等大企业合作密切。", employmentRate: 0.89, genderRatio: { male: 60, female: 40 }, avgScore: 498 },
  { id: 399, name: "南宁师范大学", province: "广西", city: "南宁", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "地理科学", "化学", "小学教育"], description: "原广西师范学院，广西基础教育教师的主要来源。南宁作为首府资源好。", employmentRate: 0.88, genderRatio: { male: 32, female: 68 }, avgScore: 505 },
  { id: 400, name: "北部湾大学", province: "广西", city: "钦州", type: "理工", level: [], isPublic: true, topMajors: ["海洋科学", "航海技术", "水产养殖", "港口航道", "轮机工程"], description: "原钦州学院，北部湾经济区的海洋特色大学。面向东盟的区位优势。", employmentRate: 0.87, genderRatio: { male: 55, female: 45 }, avgScore: 478 },

  // 贵州
  { id: 401, name: "贵州师范大学", province: "贵州", city: "贵阳", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "地理科学", "数学", "马克思主义理论"], description: "贵州省属最强师范，贵州中小学教师的摇篮。贵阳市区地理位置优越。", employmentRate: 0.87, genderRatio: { male: 32, female: 68 }, avgScore: 512 },
  { id: 402, name: "贵州财经大学", province: "贵州", city: "贵阳", type: "财经", level: [], isPublic: true, topMajors: ["会计学", "金融学", "经济学", "工商管理", "电子商务"], description: "贵州唯一的财经本科，在贵州金融系统校友遍布。花溪大学城环境优美。", employmentRate: 0.87, genderRatio: { male: 38, female: 62 }, avgScore: 508 },
  { id: 403, name: "遵义医科大学", province: "贵州", city: "遵义/珠海", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "口腔医学", "护理学", "麻醉学", "药学"], description: "原大连医学院南迁，医学底子厚。遵义和珠海双校区，珠海校区在广东很受欢迎。", employmentRate: 0.90, genderRatio: { male: 42, female: 58 }, avgScore: 530 },

  // 云南
  { id: 404, name: "昆明医科大学", province: "云南", city: "昆明", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "口腔医学", "护理学", "药学", "法医学"], description: "云南最好的医学院，附属医院覆盖全省。法医学全国知名。", employmentRate: 0.91, genderRatio: { male: 38, female: 62 }, avgScore: 555 },

  // 甘肃
  { id: 405, name: "天水师范学院", province: "甘肃", city: "天水", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "历史学", "地理科学", "数学"], description: "天水唯一的本科，陇东南教育重镇。伏羲故里和麦积山旁的大学。", employmentRate: 0.85, genderRatio: { male: 33, female: 67 }, avgScore: 465 },
  { id: 406, name: "河西学院", province: "甘肃", city: "张掖", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "农学", "旅游管理", "历史学", "护理学"], description: "河西走廊唯一的公办本科，丝绸之路上的大学。敦煌和张掖丹霞是活教材。", employmentRate: 0.84, genderRatio: { male: 44, female: 56 }, avgScore: 450 },

  // 内蒙古
  { id: 407, name: "内蒙古师范大学", province: "内蒙古", city: "呼和浩特", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "蒙古学", "汉语言文学", "数学", "地理科学"], description: "内蒙古最强师范，蒙汉双语教学独树一帜。草原文化的学术高地。", employmentRate: 0.86, genderRatio: { male: 32, female: 68 }, avgScore: 490 },
  { id: 408, name: "内蒙古工业大学", province: "内蒙古", city: "呼和浩特", type: "理工", level: [], isPublic: true, topMajors: ["化学工程", "机械工程", "能源动力", "土木工程", "材料科学"], description: "内蒙古最强工科院校，在能源和化工领域有区域优势。风能太阳能方向很新。", employmentRate: 0.89, genderRatio: { male: 62, female: 38 }, avgScore: 488 },

  // 海南
  { id: 409, name: "海南医科大学", province: "海南", city: "海口", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "口腔医学", "热带医学", "护理学", "药学"], description: "海南最好的医学院，热带医学全国独有。海南自贸港建设带来医疗新机遇。", employmentRate: 0.89, genderRatio: { male: 40, female: 60 }, avgScore: 548 },
  { id: 410, name: "海南热带海洋学院", province: "海南", city: "三亚", type: "理工", level: [], isPublic: true, topMajors: ["海洋科学", "水产养殖", "旅游管理", "生态学", "航海技术"], description: "三亚唯一的公办本科，面朝大海的校园。热带海洋研究独此一家。", employmentRate: 0.85, genderRatio: { male: 48, female: 52 }, avgScore: 520 },

  // 宁夏
  { id: 411, name: "宁夏医科大学", province: "宁夏", city: "银川", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "口腔医学", "护理学", "中医学", "公共卫生"], description: "宁夏最好的医学院，在宁夏医疗系统一家独大。临床医学在宁夏就业保障好。", employmentRate: 0.89, genderRatio: { male: 38, female: 62 }, avgScore: 498 },

  // 新疆
  { id: 412, name: "塔里木大学", province: "新疆", city: "阿拉尔", type: "农林", level: [], isPublic: true, topMajors: ["农学", "园艺学", "动物科学", "水利工程", "食品科学"], description: "塔克拉玛干沙漠边缘的大学，王震将军创办。棉花和沙漠农业研究全球领先。", employmentRate: 0.84, genderRatio: { male: 50, female: 50 }, avgScore: 430 },
  { id: 413, name: "新疆农业大学", province: "新疆", city: "乌鲁木齐", type: "农林", level: [], isPublic: true, topMajors: ["农学", "草学", "动物科学", "水利工程", "农业机械化"], description: "新疆最好的农林院校，在干旱区农业研究世界知名。棉花、葡萄研究很牛。", employmentRate: 0.86, genderRatio: { male: 52, female: 48 }, avgScore: 458 },
  { id: 414, name: "新疆财经大学", province: "新疆", city: "乌鲁木齐", type: "财经", level: [], isPublic: true, topMajors: ["会计学", "金融学", "经济学", "工商管理", "旅游管理"], description: "新疆唯一的财经本科，面向中亚的国际经贸特色。新疆金融系统的人才基地。", employmentRate: 0.86, genderRatio: { male: 40, female: 60 }, avgScore: 465 },
  { id: 415, name: "喀什大学", province: "新疆", city: "喀什", type: "综合", level: [], isPublic: true, topMajors: ["汉语言文学", "教育学", "维吾尔语言", "数学", "物理学"], description: "南疆最高学府，喀什古城旁的大学。民族语言和双语教育研究全国领先。", employmentRate: 0.83, genderRatio: { male: 42, female: 58 }, avgScore: 425 },

  // 青海
  { id: 416, name: "青海师范大学", province: "青海", city: "西宁", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "数学", "地理科学", "藏语言文学"], description: "青海最好的师范院校，高原教育研究独树一帜。藏语言文学和民族教育是特色。", employmentRate: 0.85, genderRatio: { male: 34, female: 66 }, avgScore: 450 },
  { id: 417, name: "青海民族大学", province: "青海", city: "西宁", type: "民族", level: [], isPublic: true, topMajors: ["法学", "藏学", "民族学", "汉语言文学", "经济学"], description: "青海民族教育重镇，藏学和民族法学全国知名。与青海大学并列为青海两大本科。", employmentRate: 0.84, genderRatio: { male: 42, female: 58 }, avgScore: 448 },

  // 西藏
  { id: 418, name: "西藏民族大学", province: "陕西", city: "咸阳", type: "民族", level: [], isPublic: true, topMajors: ["民族学", "汉语言文学", "法学", "新闻学", "临床医学"], description: "西藏的大学但办学在陕西咸阳（历史原因）。西藏干部和人才的摇篮，民族学很强。", employmentRate: 0.83, genderRatio: { male: 44, female: 56 }, avgScore: 440 },

  // 山西
  { id: 419, name: "山西医科大学", province: "山西", city: "太原", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "口腔医学", "护理学", "预防医学", "法医学"], description: "山西最好的医学院，附属医院分布在全省。在山西医疗系统就业无敌。", employmentRate: 0.91, genderRatio: { male: 38, female: 62 }, avgScore: 545 },
  { id: 420, name: "山西财经大学", province: "山西", city: "太原", type: "财经", level: [], isPublic: true, topMajors: ["会计学", "金融学", "统计学", "经济学", "工商管理"], description: "山西唯一的财经本科，在山西金融和煤炭经济圈影响大。统计学是王牌。", employmentRate: 0.88, genderRatio: { male: 38, female: 62 }, avgScore: 520 },
  { id: 421, name: "山西师范大学", province: "山西", city: "太原", type: "师范", level: [], isPublic: true, topMajors: ["教育学", "汉语言文学", "化学", "物理学", "历史学"], description: "山西省属最强师范，已迁至太原办学。山西中小学教师的主要来源。", employmentRate: 0.87, genderRatio: { male: 28, female: 72 }, avgScore: 512 },
  { id: 422, name: "太原科技大学", province: "山西", city: "太原", type: "理工", level: [], isPublic: true, topMajors: ["机械工程", "材料科学", "自动化", "车辆工程", "计算机科学"], description: "原太原重型机械学院，重型机械和起重机方向全国领先。太重集团深度合作。", employmentRate: 0.89, genderRatio: { male: 64, female: 36 }, avgScore: 508 },
  { id: 423, name: "运城学院", province: "山西", city: "运城", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "生物科学", "化学", "汉语言文学", "数学"], description: "晋南唯一的公办本科，关公故里的大学。师范方向为主。", employmentRate: 0.85, genderRatio: { male: 42, female: 58 }, avgScore: 468 },

  // 更多地方本科
  { id: 424, name: "德州学院", province: "山东", city: "德州", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "机械工程", "纺织工程", "化学", "生物科学"], description: "德州唯一的公办本科，服务鲁西北地区。纺织和新能源方向有区域特色。", employmentRate: 0.86, genderRatio: { male: 46, female: 54 }, avgScore: 488 },
  { id: 425, name: "潍坊学院", province: "山东", city: "潍坊", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "机械工程", "计算机科学", "自动化", "设施农业"], description: "潍坊唯一的公办综合本科，服务地方经济。潍坊农业发达，设施农业有特色。", employmentRate: 0.87, genderRatio: { male: 48, female: 52 }, avgScore: 490 },
  { id: 426, name: "泰山学院", province: "山东", city: "泰安", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "旅游管理", "汉语言文学", "数学", "地理科学"], description: "泰山脚下的本科院校，旅游管理依托泰山世界遗产。师范方向为主。", employmentRate: 0.86, genderRatio: { male: 42, female: 58 }, avgScore: 485 },
  { id: 427, name: "菏泽学院", province: "山东", city: "菏泽", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "制药工程", "生物科学", "汉语言文学", "美术学"], description: "菏泽唯一的公办本科，牡丹之乡的大学。制药和生物有地方产业支撑。", employmentRate: 0.85, genderRatio: { male: 44, female: 56 }, avgScore: 480 },
  { id: 428, name: "枣庄学院", province: "山东", city: "枣庄", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "化学工程", "机械工程", "计算机科学", "汉语言文学"], description: "枣庄唯一的公办本科，服务鲁南地区。师范和应用型工科双轨发展。", employmentRate: 0.85, genderRatio: { male: 46, female: 54 }, avgScore: 478 },
  { id: 429, name: "滨州学院", province: "山东", city: "滨州", type: "理工", level: [], isPublic: true, topMajors: ["飞行技术", "交通运输", "机械工程", "生态学", "小学教育"], description: "原滨州师专，飞行技术专业全国为数不多的本科。正更名为山东航空学院。", employmentRate: 0.88, genderRatio: { male: 55, female: 45 }, avgScore: 482 },
  { id: 430, name: "济宁学院", province: "山东", city: "济宁", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "化学", "数学", "音乐学"], description: "济宁唯一的公办本科，曲阜隔壁。师范和儒学文化研究有地方优势。", employmentRate: 0.85, genderRatio: { male: 42, female: 58 }, avgScore: 475 },

  // 更多民办补充
  { id: 431, name: "三亚学院", province: "海南", city: "三亚", type: "综合", level: [], isPublic: false, topMajors: ["旅游管理", "酒店管理", "金融学", "计算机科学", "外语"], description: "三亚唯一的本科院校，吉利集团投资。旅游酒店管理有得天独厚的实习条件。", employmentRate: 0.84, genderRatio: { male: 44, female: 56 }, avgScore: 470 },
  { id: 432, name: "西安欧亚学院", province: "陕西", city: "西安", type: "财经", level: [], isPublic: false, topMajors: ["会计学", "金融学", "工商管理", "新闻学", "环境设计"], description: "民办财经类强校，校园美得像公园。教学质量在民办中口碑很好。", employmentRate: 0.86, genderRatio: { male: 40, female: 60 }, avgScore: 465 },
  { id: 433, name: "武汉学院", province: "湖北", city: "武汉", type: "财经", level: [], isPublic: false, topMajors: ["会计学", "金融学", "法学", "工商管理", "计算机科学"], description: "腾讯创始人陈一丹创办的民办本科，校园现代化。在武汉民办中排名前列。", employmentRate: 0.85, genderRatio: { male: 42, female: 58 }, avgScore: 468 },
  { id: 434, name: "四川传媒学院", province: "四川", city: "成都", type: "艺术", level: [], isPublic: false, topMajors: ["广播电视学", "播音主持", "动画", "摄影", "数字媒体"], description: "西部最好的传媒类民办本科，设备比很多公办还好。在成都，文创产业发达。", employmentRate: 0.85, genderRatio: { male: 38, female: 62 }, avgScore: 480 },

  // ===== 第六批：体育/艺术/军事/公安/更多地方学院 =====
  // --- 体育类院校 ---
  { id: 435, name: "上海体育大学", province: "上海", city: "上海", type: "体育", level: ["双一流"], isPublic: true, topMajors: ["体育教育", "运动训练", "运动康复", "体育经济", "新闻学(体育)"], description: "双一流体育大学，体育学全国前二。上海国际化平台，体育产业方向前景好。", employmentRate: 0.89, genderRatio: { male: 58, female: 42 }, avgScore: 530 },
  { id: 436, name: "武汉体育学院", province: "湖北", city: "武汉", type: "体育", level: [], isPublic: true, topMajors: ["体育教育", "运动训练", "武术与民族传统", "运动康复", "体育舞蹈"], description: "华中地区最强的体育院校，武术和体育舞蹈全国有名。培养了大批体育明星。", employmentRate: 0.88, genderRatio: { male: 60, female: 40 }, avgScore: 510 },
  { id: 437, name: "成都体育学院", province: "四川", city: "成都", type: "体育", level: [], isPublic: true, topMajors: ["体育教育", "运动训练", "运动医学", "武术", "体育新闻"], description: "西南地区最好的体育院校，运动医学全国前三。成都的运动康复产业发达。", employmentRate: 0.87, genderRatio: { male: 58, female: 42 }, avgScore: 505 },
  { id: 438, name: "天津体育学院", province: "天津", city: "天津", type: "体育", level: [], isPublic: true, topMajors: ["体育教育", "运动训练", "社会体育", "体育舞蹈", "运动康复"], description: "华北重要的体育院校，体育舞蹈和棒球是特色。天津的体育传统深厚。", employmentRate: 0.86, genderRatio: { male: 58, female: 42 }, avgScore: 495 },
  { id: 439, name: "广州体育学院", province: "广东", city: "广州", type: "体育", level: [], isPublic: true, topMajors: ["体育教育", "运动训练", "休闲体育", "体育新闻", "运动康复"], description: "华南地区体育教育的重镇，篮球和羽毛球很强。广州体育产业全国领先。", employmentRate: 0.87, genderRatio: { male: 62, female: 38 }, avgScore: 500 },
  { id: 440, name: "西安体育学院", province: "陕西", city: "西安", type: "体育", level: [], isPublic: true, topMajors: ["体育教育", "运动训练", "武术", "体育新闻", "运动人体科学"], description: "西北地区体育教育中心，武术和田径是传统强项。西安的体育氛围不错。", employmentRate: 0.86, genderRatio: { male: 60, female: 40 }, avgScore: 488 },
  { id: 441, name: "沈阳体育学院", province: "辽宁", city: "沈阳", type: "体育", level: [], isPublic: true, topMajors: ["体育教育", "运动训练", "冰雪运动", "运动康复", "体育管理"], description: "东北体育教育的摇篮，冰雪运动全国第一。冬奥冠军的母校。", employmentRate: 0.87, genderRatio: { male: 58, female: 42 }, avgScore: 490 },
  { id: 442, name: "山东体育学院", province: "山东", city: "济南", type: "体育", level: [], isPublic: true, topMajors: ["体育教育", "运动训练", "武术", "运动康复", "体育舞蹈"], description: "山东省属体育院校，武术和举重是传统强项。山东是体育大省。", employmentRate: 0.86, genderRatio: { male: 60, female: 40 }, avgScore: 485 },
  { id: 443, name: "哈尔滨体育学院", province: "黑龙江", city: "哈尔滨", type: "体育", level: [], isPublic: true, topMajors: ["体育教育", "冰雪运动", "运动训练", "运动康复", "体育管理"], description: "全国冰雪运动人才的核心培养基地。哈尔滨的冰上运动条件得天独厚。", employmentRate: 0.86, genderRatio: { male: 58, female: 42 }, avgScore: 478 },
  { id: 444, name: "南京体育学院", province: "江苏", city: "南京", type: "体育", level: [], isPublic: true, topMajors: ["体育教育", "运动训练", "体育新闻", "运动康复", "体育经济"], description: "江苏省属体育院校，培养了大量奥运冠军。南京的体育设施一流。", employmentRate: 0.87, genderRatio: { male: 58, female: 42 }, avgScore: 500 },
  { id: 445, name: "河北体育学院", province: "河北", city: "石家庄", type: "体育", level: [], isPublic: true, topMajors: ["体育教育", "运动训练", "武术", "社会体育", "运动康复"], description: "河北省属体育院校，武术和散打是传统优势。石家庄的体育基础扎实。", employmentRate: 0.85, genderRatio: { male: 62, female: 38 }, avgScore: 475 },

  // --- 艺术类院校补充 ---
  { id: 446, name: "中央音乐学院", province: "北京", city: "北京", type: "艺术", level: ["211", "双一流"], isPublic: true, topMajors: ["作曲", "音乐表演", "音乐学", "指挥", "音乐教育"], description: "中国音乐教育的顶级殿堂，211艺术院校。培养了中国最顶尖的音乐家。", employmentRate: 0.85, genderRatio: { male: 45, female: 55 }, avgScore: 560 },
  { id: 447, name: "中央戏剧学院", province: "北京", city: "北京", type: "艺术", level: ["双一流"], isPublic: true, topMajors: ["表演", "导演", "戏剧文学", "舞台美术", "艺术管理"], description: "中国戏剧影视表演的最高学府。章子怡、巩俐、易烊千玺的母校。", employmentRate: 0.84, genderRatio: { male: 42, female: 58 }, avgScore: 545 },
  { id: 448, name: "中国音乐学院", province: "北京", city: "北京", type: "艺术", level: ["双一流"], isPublic: true, topMajors: ["音乐表演", "作曲", "音乐学", "音乐教育", "指挥"], description: "民族音乐的最高学府，''中国音乐的殿堂''。培养了大批民族音乐大师。", employmentRate: 0.84, genderRatio: { male: 38, female: 62 }, avgScore: 550 },
  { id: 449, name: "中国戏曲学院", province: "北京", city: "北京", type: "艺术", level: [], isPublic: true, topMajors: ["京剧表演", "戏曲导演", "戏曲文学", "舞台美术", "戏曲音乐"], description: "中国戏曲教育的最高学府，京剧传承的核心基地。戏曲界的北大清华。", employmentRate: 0.82, genderRatio: { male: 45, female: 55 }, avgScore: 500 },
  { id: 450, name: "北京舞蹈学院", province: "北京", city: "北京", type: "艺术", level: [], isPublic: true, topMajors: ["舞蹈表演", "舞蹈编导", "舞蹈学", "芭蕾舞", "中国古典舞"], description: "中国舞蹈的最高学府，''舞蹈家的摇篮''。培养了中国最顶尖的舞者。", employmentRate: 0.83, genderRatio: { male: 30, female: 70 }, avgScore: 500 },
  { id: 451, name: "上海音乐学院", province: "上海", city: "上海", type: "艺术", level: ["双一流"], isPublic: true, topMajors: ["作曲", "音乐表演", "音乐学", "指挥", "音乐教育"], description: "与中央音乐学院齐名的顶级音乐学府。培养了大批国际获奖音乐家。", employmentRate: 0.85, genderRatio: { male: 42, female: 58 }, avgScore: 555 },
  { id: 452, name: "四川美术学院", province: "重庆", city: "重庆", type: "艺术", level: [], isPublic: true, topMajors: ["油画", "雕塑", "中国画", "艺术设计", "美术学"], description: "八大美院之一，油画和雕塑在全国名列前茅。重庆的艺术氛围浓厚。", employmentRate: 0.84, genderRatio: { male: 40, female: 60 }, avgScore: 530 },
  { id: 453, name: "广州美术学院", province: "广东", city: "广州", type: "艺术", level: [], isPublic: true, topMajors: ["设计学", "美术学", "工业设计", "中国画", "雕塑"], description: "八大美院之一，设计学全国前三。珠三角的设计产业发达，就业前景好。", employmentRate: 0.87, genderRatio: { male: 38, female: 62 }, avgScore: 545 },
  { id: 454, name: "湖北美术学院", province: "湖北", city: "武汉", type: "艺术", level: [], isPublic: true, topMajors: ["油画", "中国画", "雕塑", "水彩画", "设计学"], description: "八大美院之一，水彩画全国第一。武汉的艺术氛围自由奔放。", employmentRate: 0.84, genderRatio: { male: 38, female: 62 }, avgScore: 525 },
  { id: 455, name: "鲁迅美术学院", province: "辽宁", city: "沈阳/大连", type: "艺术", level: [], isPublic: true, topMajors: ["油画", "雕塑", "中国画", "设计学", "摄影"], description: "八大美院之一，雕塑和全景画全国最强。沈阳和大连双校区。", employmentRate: 0.84, genderRatio: { male: 40, female: 60 }, avgScore: 530 },
  { id: 456, name: "天津美术学院", province: "天津", city: "天津", type: "艺术", level: [], isPublic: true, topMajors: ["中国画", "油画", "设计学", "雕塑", "美术教育"], description: "八大美院之一，中国画和油画底蕴深厚。天津的港口城市气质独特。", employmentRate: 0.83, genderRatio: { male: 38, female: 62 }, avgScore: 525 },
  { id: 457, name: "西安美术学院", province: "陕西", city: "西安", type: "艺术", level: [], isPublic: true, topMajors: ["中国画", "油画", "设计学", "雕塑", "美术史论"], description: "八大美院之一，中国画和美术史论全国领先。西安古都的文化底蕴加成。", employmentRate: 0.84, genderRatio: { male: 40, female: 60 }, avgScore: 520 },
  { id: 458, name: "山东艺术学院", province: "山东", city: "济南", type: "艺术", level: [], isPublic: true, topMajors: ["音乐学", "美术学", "戏剧影视", "舞蹈学", "设计学"], description: "山东省属最高艺术学府，六大艺术学院之一。艺术类学科门类齐全。", employmentRate: 0.84, genderRatio: { male: 38, female: 62 }, avgScore: 510 },
  { id: 459, name: "吉林艺术学院", province: "吉林", city: "长春", type: "艺术", level: [], isPublic: true, topMajors: ["音乐学", "美术学", "舞蹈学", "戏剧影视", "设计学"], description: "六大艺术学院之一，东北艺术教育的重镇。长春的电影和艺术传统深厚。", employmentRate: 0.83, genderRatio: { male: 38, female: 62 }, avgScore: 500 },
  { id: 460, name: "云南艺术学院", province: "云南", city: "昆明", type: "艺术", level: [], isPublic: true, topMajors: ["音乐学", "美术学", "舞蹈学", "戏剧影视", "设计学"], description: "六大艺术学院之一，民族艺术研究全国领先。云南多民族文化是活教材。", employmentRate: 0.83, genderRatio: { male: 38, female: 62 }, avgScore: 500 },
  { id: 461, name: "广西艺术学院", province: "广西", city: "南宁", type: "艺术", level: [], isPublic: true, topMajors: ["音乐学", "美术学", "舞蹈学", "设计学", "民族艺术"], description: "六大艺术学院之一，民族音乐和舞蹈全国顶尖。壮族和东南亚艺术研究特色。", employmentRate: 0.82, genderRatio: { male: 36, female: 64 }, avgScore: 495 },
  { id: 462, name: "新疆艺术学院", province: "新疆", city: "乌鲁木齐", type: "艺术", level: [], isPublic: true, topMajors: ["音乐学", "美术学", "舞蹈学", "戏剧影视", "设计学"], description: "西北少数民族艺术教育的核心基地。维吾尔族舞蹈和音乐全国闻名。", employmentRate: 0.81, genderRatio: { male: 38, female: 62 }, avgScore: 460 },
  { id: 463, name: "星海音乐学院", province: "广东", city: "广州", type: "艺术", level: [], isPublic: true, topMajors: ["音乐表演", "音乐学", "作曲", "舞蹈学", "音乐教育"], description: "华南地区最好的音乐学院，流行音乐教育全国领先。广州音乐产业发达。", employmentRate: 0.85, genderRatio: { male: 40, female: 60 }, avgScore: 530 },
  { id: 464, name: "浙江音乐学院", province: "浙江", city: "杭州", type: "艺术", level: [], isPublic: true, topMajors: ["音乐表演", "音乐学", "作曲", "舞蹈学", "音乐教育"], description: "2016年新建但发展迅猛，设施一流。杭州互联网+音乐产业结合。", employmentRate: 0.84, genderRatio: { male: 40, female: 60 }, avgScore: 535 },
  { id: 465, name: "哈尔滨音乐学院", province: "黑龙江", city: "哈尔滨", type: "艺术", level: [], isPublic: true, topMajors: ["音乐表演", "作曲", "音乐学", "指挥", "音乐教育"], description: "中国最年轻的音乐学院，哈尔滨音乐之都的底蕴。俄派音乐传统深厚。", employmentRate: 0.83, genderRatio: { male: 42, female: 58 }, avgScore: 500 },

  // --- 公安/政法/军事院校 ---
  { id: 466, name: "中国人民公安大学", province: "北京", city: "北京", type: "政法", level: ["双一流"], isPublic: true, topMajors: ["侦查学", "治安学", "刑事科学技术", "公安管理", "网络安全"], description: "公安部直属最高学府，''共和国警官的摇篮''。入警率极高，毕业即公务员。", employmentRate: 0.96, genderRatio: { male: 65, female: 35 }, avgScore: 600 },
  { id: 467, name: "中国刑事警察学院", province: "辽宁", city: "沈阳", type: "政法", level: [], isPublic: true, topMajors: ["侦查学", "刑事科学技术", "经济犯罪侦查", "禁毒学", "网络安全"], description: "公安部直属，''东方福尔摩斯的摇篮''。全国刑侦人才的培养重镇。", employmentRate: 0.95, genderRatio: { male: 68, female: 32 }, avgScore: 580 },
  { id: 468, name: "中国人民警察大学", province: "河北", city: "廊坊", type: "政法", level: [], isPublic: true, topMajors: ["边防管理", "消防工程", "警卫学", "出入境管理", "公安政治"], description: "公安部直属，边防和消防指挥人才的核心基地。入警和入消防系统主渠道。", employmentRate: 0.94, genderRatio: { male: 70, female: 30 }, avgScore: 570 },
  { id: 469, name: "中国消防救援学院", province: "北京", city: "北京", type: "理工", level: [], isPublic: true, topMajors: ["消防指挥", "消防工程", "抢险救援", "火灾勘查", "应急管理"], description: "应急管理部直属，国家综合性消防救援人才摇篮。毕业可入消防救援队伍。", employmentRate: 0.93, genderRatio: { male: 72, female: 28 }, avgScore: 550 },
  { id: 470, name: "铁道警察学院", province: "河南", city: "郑州", type: "政法", level: [], isPublic: true, topMajors: ["铁路警务", "侦查学", "治安学", "刑事科学技术", "网络安全"], description: "公安部直属，全国唯一培养铁路警务人才的本科。铁路公安系统的黄埔。", employmentRate: 0.93, genderRatio: { male: 66, female: 34 }, avgScore: 540 },
  { id: 471, name: "南京森林警察学院", province: "江苏", city: "南京", type: "政法", level: [], isPublic: true, topMajors: ["森林消防", "食药环侦查", "治安学", "侦查学", "刑事科学技术"], description: "公安部直属，森林和食药环领域警务人才的基地。南京环境优美。", employmentRate: 0.92, genderRatio: { male: 65, female: 35 }, avgScore: 535 },
  { id: 472, name: "中央司法警官学院", province: "河北", city: "保定", type: "政法", level: [], isPublic: true, topMajors: ["监狱学", "司法警察", "矫正教育", "法学", "禁毒学"], description: "司法部直属唯一本科，''司法警官的摇篮''。监狱和戒毒系统就业保障好。", employmentRate: 0.92, genderRatio: { male: 62, female: 38 }, avgScore: 545 },
  { id: 473, name: "国际关系学院", province: "北京", city: "北京", type: "政法", level: [], isPublic: true, topMajors: ["国际政治", "英语", "日语", "国际经济", "信息安全"], description: "教育部直属的小规模精英院校，国家安全方向。小而精，毕业生多进体制。", employmentRate: 0.93, genderRatio: { male: 45, female: 55 }, avgScore: 630 },
  { id: 474, name: "北京警察学院", province: "北京", city: "北京", type: "政法", level: [], isPublic: true, topMajors: ["侦查学", "治安学", "刑事科学技术", "交通管理", "网络安全"], description: "北京市公安局直属，为首都培养警务人才。入警率极高。", employmentRate: 0.94, genderRatio: { male: 65, female: 35 }, avgScore: 560 },
  { id: 475, name: "上海公安学院", province: "上海", city: "上海", type: "政法", level: [], isPublic: true, topMajors: ["侦查学", "治安学", "刑事科学技术", "交通管理", "警务指挥"], description: "上海市公安局直属，为上海培养警务人才。上海警察待遇全国领先。", employmentRate: 0.94, genderRatio: { male: 64, female: 36 }, avgScore: 565 },
  { id: 476, name: "广东警官学院", province: "广东", city: "广州", type: "政法", level: [], isPublic: true, topMajors: ["侦查学", "治安学", "刑事科学技术", "经济犯罪侦查", "禁毒学"], description: "广东省公安厅直属，广东警察的摇篮。粤港澳警务合作方向有特色。", employmentRate: 0.93, genderRatio: { male: 66, female: 34 }, avgScore: 555 },

  // --- 军事院校 ---
  { id: 477, name: "国防科技大学", province: "湖南", city: "长沙", type: "理工", level: ["985", "211", "双一流"], isPublic: true, topMajors: ["计算机科学", "航天工程", "信息通信", "光学工程", "指挥信息系统"], description: "军中清华！中央军委直属的顶级军校。计算机和航天全国顶尖，毕业授军衔。", employmentRate: 1.0, genderRatio: { male: 75, female: 25 }, avgScore: 650 },
  { id: 478, name: "解放军信息工程大学", province: "河南", city: "郑州", type: "理工", level: [], isPublic: true, topMajors: ["密码学", "测绘科学", "网络安全", "通信工程", "遥感技术"], description: "战略支援部队直属，密码和测绘全国顶尖。军队信息化建设的核心力量。", employmentRate: 1.0, genderRatio: { male: 72, female: 28 }, avgScore: 620 },
  { id: 479, name: "解放军理工大学", province: "江苏", city: "南京", type: "理工", level: [], isPublic: true, topMajors: ["土木工程", "通信工程", "气象学", "机械工程", "指挥自动化"], description: "陆军直属，工科和气象是王牌。国防工程建设的主力人才培养基地。", employmentRate: 1.0, genderRatio: { male: 74, female: 26 }, avgScore: 610 },
  { id: 480, name: "海军工程大学", province: "湖北", city: "武汉", type: "理工", level: [], isPublic: true, topMajors: ["船舶工程", "电气工程", "核工程", "海洋工程", "武器系统"], description: "海军直属，''海军工程师的摇篮''。舰船电气和核动力全国顶尖。", employmentRate: 1.0, genderRatio: { male: 76, female: 24 }, avgScore: 610 },
  { id: 481, name: "空军工程大学", province: "陕西", city: "西安", type: "理工", level: [], isPublic: true, topMajors: ["飞行器设计", "航空工程", "雷达工程", "导弹工程", "指挥系统"], description: "空军直属，空军装备技术人才的摇篮。航空和雷达领域全国顶尖。", employmentRate: 1.0, genderRatio: { male: 76, female: 24 }, avgScore: 605 },
  { id: 482, name: "火箭军工程大学", province: "陕西", city: "西安", type: "理工", level: [], isPublic: true, topMajors: ["导弹工程", "核工程", "发射工程", "测控工程", "阵地工程"], description: "火箭军直属，战略导弹部队的人才基地。国家战略威慑力量的技术核心。", employmentRate: 1.0, genderRatio: { male: 78, female: 22 }, avgScore: 600 },
  { id: 483, name: "陆军工程大学", province: "江苏", city: "南京", type: "理工", level: [], isPublic: true, topMajors: ["通信工程", "野战工程", "指挥自动化", "机械工程", "弹药工程"], description: "陆军直属的综合工程院校，陆军现代化建设的主力人才培养基地。", employmentRate: 1.0, genderRatio: { male: 74, female: 26 }, avgScore: 595 },

  // --- 更多地方本科学院 ---
  { id: 484, name: "河北科技师范学院", province: "河北", city: "秦皇岛", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "动物科学", "园艺学", "食品科学", "计算机科学"], description: "河北唯一的职教师范本科，培养中职教师。秦皇岛海滨城市环境好。", employmentRate: 0.86, genderRatio: { male: 42, female: 58 }, avgScore: 495 },
  { id: 485, name: "唐山师范学院", province: "河北", city: "唐山", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "数学", "英语", "化学"], description: "唐山最高师范学府，冀东教育人才的摇篮。唐山工业底蕴深厚。", employmentRate: 0.86, genderRatio: { male: 30, female: 70 }, avgScore: 492 },
  { id: 486, name: "廊坊师范学院", province: "河北", city: "廊坊", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "数学", "英语", "物理学"], description: "廊坊最高师范学府，京津走廊上的大学。离北京近，实习就业辐射京津。", employmentRate: 0.86, genderRatio: { male: 30, female: 70 }, avgScore: 490 },
  { id: 487, name: "沧州师范学院", province: "河北", city: "沧州", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "武术", "英语", "数学"], description: "沧州唯一的公办师范本科，武术之乡的教育学府。武术教育全国独树一帜。", employmentRate: 0.85, genderRatio: { male: 32, female: 68 }, avgScore: 478 },
  { id: 488, name: "邢台学院", province: "河北", city: "邢台", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "机械工程", "汉语言文学", "数学", "会计学"], description: "邢台唯一的公办本科，服务冀南地区。师范和应用型工科双轨。", employmentRate: 0.85, genderRatio: { male: 44, female: 56 }, avgScore: 475 },
  { id: 489, name: "邯郸学院", province: "河北", city: "邯郸", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "化学", "计算机科学", "英语"], description: "邯郸唯一的公办本科，三千年古都的大学。师范方向为主。", employmentRate: 0.85, genderRatio: { male: 42, female: 58 }, avgScore: 475 },
  { id: 490, name: "保定学院", province: "河北", city: "保定", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "物理学", "美术学", "计算机科学"], description: "保定市属本科，师范底蕴深。保定的高校众多，学术氛围好。", employmentRate: 0.85, genderRatio: { male: 40, female: 60 }, avgScore: 478 },
  { id: 491, name: "衡水学院", province: "河北", city: "衡水", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "数学", "生物科学", "化学"], description: "衡水唯一的公办本科，衡水中学旁边的大学。师范是主要培养方向。", employmentRate: 0.85, genderRatio: { male: 40, female: 60 }, avgScore: 475 },
  { id: 492, name: "唐山学院", province: "河北", city: "唐山", type: "综合", level: [], isPublic: true, topMajors: ["机械工程", "土木工程", "会计学", "计算机科学", "汉语言文学"], description: "唐山市属应用型本科，工科和经管为主。唐山的重工业背景提供了就业支撑。", employmentRate: 0.87, genderRatio: { male: 55, female: 45 }, avgScore: 488 },

  // 山西
  { id: 493, name: "长治医学院", province: "山西", city: "长治", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "护理学", "药学", "麻醉学", "医学检验"], description: "山西老牌医学院，在晋东南医疗系统影响力大。长治是革命老区。", employmentRate: 0.89, genderRatio: { male: 40, female: 60 }, avgScore: 498 },
  { id: 494, name: "山西大同大学", province: "山西", city: "大同", type: "综合", level: [], isPublic: true, topMajors: ["临床医学", "小学教育", "煤炭工程", "汉语言文学", "数学"], description: "晋北最高学府，由原雁北师院等合并。医学和师范是主要方向。", employmentRate: 0.85, genderRatio: { male: 46, female: 54 }, avgScore: 480 },
  { id: 495, name: "太原师范学院", province: "山西", city: "太原", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "数学", "地理科学", "美术学"], description: "太原市属师范院校。正与山西师大等合并组建新的山西师范大学中。", employmentRate: 0.86, genderRatio: { male: 28, female: 72 }, avgScore: 488 },
  { id: 496, name: "长治学院", province: "山西", city: "长治", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "生物科学", "化学", "历史学"], description: "晋东南地方本科，师范方向为主。太行山区的教育人才基地。", employmentRate: 0.84, genderRatio: { male: 40, female: 60 }, avgScore: 462 },
  { id: 497, name: "吕梁学院", province: "山西", city: "吕梁", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "矿业工程", "化学", "数学"], description: "吕梁唯一的本科院校，师范和矿业是主要方向。革命老区的最高学府。", employmentRate: 0.84, genderRatio: { male: 44, female: 56 }, avgScore: 458 },
  { id: 498, name: "忻州师范学院", province: "山西", city: "忻州", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "数学", "英语", "地理科学"], description: "忻州唯一的师范本科，晋北教育人才的培养基地。五台山脚下的大学。", employmentRate: 0.85, genderRatio: { male: 30, female: 70 }, avgScore: 465 },
  { id: 499, name: "晋中学院", province: "山西", city: "晋中", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "机械工程", "数学", "音乐学"], description: "晋中唯一的公办本科，师范和应用型工科。晋商故里的大学。", employmentRate: 0.84, genderRatio: { male: 42, female: 58 }, avgScore: 462 },

  // 更多省份的地方学院
  { id: 500, name: "平顶山学院", province: "河南", city: "平顶山", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "化学工程", "计算机科学", "汉语言文学", "旅游管理"], description: "平顶山唯一的公办本科，师范和化工是主要方向。服务豫中地区。", employmentRate: 0.85, genderRatio: { male: 44, female: 56 }, avgScore: 478 },
  { id: 501, name: "许昌学院", province: "河南", city: "许昌", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "电气工程", "汉语言文学", "化学", "数学"], description: "许昌唯一的公办本科。电气工程有地方电力装备产业支撑。", employmentRate: 0.86, genderRatio: { male: 46, female: 54 }, avgScore: 482 },
  { id: 502, name: "周口师范学院", province: "河南", city: "周口", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "数学", "生物学", "美术学"], description: "周口唯一的师范本科，豫东教育人才的摇篮。老子故里的大学。", employmentRate: 0.85, genderRatio: { male: 32, female: 68 }, avgScore: 478 },
  { id: 503, name: "商丘师范学院", province: "河南", city: "商丘", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "历史学", "数学", "物理学"], description: "商丘唯一的师范本科，豫东地区的教育重镇。应天书院的历史传承。", employmentRate: 0.85, genderRatio: { male: 32, female: 68 }, avgScore: 482 },
  { id: 504, name: "黄淮学院", province: "河南", city: "驻马店", type: "综合", level: [], isPublic: true, topMajors: ["动画", "计算机科学", "机械工程", "小学教育", "电子商务"], description: "驻马店唯一的公办本科，动画专业在河南省内有特色。产教融合做得不错。", employmentRate: 0.85, genderRatio: { male: 48, female: 52 }, avgScore: 475 },
  { id: 505, name: "河南工程学院", province: "河南", city: "郑州", type: "理工", level: [], isPublic: true, topMajors: ["纺织工程", "采矿工程", "安全工程", "机械工程", "会计学"], description: "原郑州煤校+河南纺专合并，工科应用型。在郑州就业有区位优势。", employmentRate: 0.88, genderRatio: { male: 58, female: 42 }, avgScore: 495 },
  { id: 506, name: "洛阳理工学院", province: "河南", city: "洛阳", type: "理工", level: [], isPublic: true, topMajors: ["材料科学", "机械工程", "土木工程", "计算机科学", "自动化"], description: "洛阳市属应用型本科，无机非金属材料是特色。洛阳的工业基础好。", employmentRate: 0.88, genderRatio: { male: 58, female: 42 }, avgScore: 498 },
  { id: 507, name: "新乡学院", province: "河南", city: "新乡", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "机械工程", "制药工程", "会计学", "汉语言文学"], description: "新乡市属本科，应用型为主。在新乡这个河南高等教育重镇中发展。", employmentRate: 0.86, genderRatio: { male: 46, female: 54 }, avgScore: 478 },
  { id: 508, name: "安阳工学院", province: "河南", city: "安阳", type: "理工", level: [], isPublic: true, topMajors: ["机械工程", "飞行技术", "化学工程", "计算机科学", "土木工程"], description: "安阳市属应用型本科，飞行技术是少有的本科培养方向。甲骨文故乡的大学。", employmentRate: 0.87, genderRatio: { male: 60, female: 40 }, avgScore: 480 },
  { id: 509, name: "南阳理工学院", province: "河南", city: "南阳", type: "理工", level: [], isPublic: true, topMajors: ["软件工程", "机械工程", "土木工程", "中医学", "食品科学"], description: "南阳市属应用型本科，软件学院在河南小有名气。张仲景故里的大学。", employmentRate: 0.87, genderRatio: { male: 55, female: 45 }, avgScore: 492 },

  // 黑龙江更多地方院校
  { id: 510, name: "牡丹江师范学院", province: "黑龙江", city: "牡丹江", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "数学", "俄语", "生物学"], description: "牡丹江最高师范学府，靠近俄罗斯边境的大学。俄语教学有地缘优势。", employmentRate: 0.85, genderRatio: { male: 28, female: 72 }, avgScore: 460 },
  { id: 511, name: "大庆师范学院", province: "黑龙江", city: "大庆", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "石油工程", "汉语言文学", "学前教育", "数学"], description: "大庆唯一的师范本科，油田上的师范院校。石油工程方向独特。", employmentRate: 0.85, genderRatio: { male: 30, female: 70 }, avgScore: 458 },
  { id: 512, name: "绥化学院", province: "黑龙江", city: "绥化", type: "综合", level: [], isPublic: true, topMajors: ["特殊教育", "小学教育", "食品科学", "汉语言文学", "计算机科学"], description: "绥化唯一的本科院校，特殊教育是国家特色。黑龙江省重要的特教师资来源。", employmentRate: 0.84, genderRatio: { male: 38, female: 62 }, avgScore: 450 },
  { id: 513, name: "黑河学院", province: "黑龙江", city: "黑河", type: "综合", level: [], isPublic: true, topMajors: ["俄语", "美术学", "小学教育", "旅游管理", "国际经济与贸易"], description: "中俄边境线上唯一的本科院校，对岸就是俄罗斯。俄语和俄罗斯艺术研究极有优势。", employmentRate: 0.84, genderRatio: { male: 40, female: 60 }, avgScore: 448 },
  { id: 514, name: "黑龙江工程学院", province: "黑龙江", city: "哈尔滨", type: "理工", level: [], isPublic: true, topMajors: ["测绘工程", "土木工程", "车辆工程", "机械工程", "计算机科学"], description: "原黑龙江测绘学校升格，测绘和土木是王牌。在哈尔滨，冬天够冷够锻炼人。", employmentRate: 0.88, genderRatio: { male: 62, female: 38 }, avgScore: 478 },
  { id: 515, name: "哈尔滨学院", province: "黑龙江", city: "哈尔滨", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "土木工程", "计算机科学", "艺术设计"], description: "哈尔滨市属本科，师范和应用型为主。哈尔滨的冰雪文化和建筑特色加分。", employmentRate: 0.85, genderRatio: { male: 44, female: 56 }, avgScore: 475 },
  { id: 516, name: "齐齐哈尔医学院", province: "黑龙江", city: "齐齐哈尔", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "精神医学", "护理学", "药学", "医学影像"], description: "精神医学全国前三，黑龙江重要的医学人才培养基地。齐齐哈尔生活成本低。", employmentRate: 0.89, genderRatio: { male: 40, female: 60 }, avgScore: 485 },
  { id: 517, name: "牡丹江医学院", province: "黑龙江", city: "牡丹江", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "麻醉学", "护理学", "医学影像", "药学"], description: "黑龙江地方医学院，在牡丹江和黑龙江东部医疗系统认可度高。", employmentRate: 0.88, genderRatio: { male: 38, female: 62 }, avgScore: 480 },

  // 辽宁
  { id: 518, name: "锦州医科大学", province: "辽宁", city: "锦州", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "口腔医学", "护理学", "药学", "医学影像"], description: "原辽宁医学院，在辽西医疗系统地位稳固。锦州的烧烤比大学更有名。", employmentRate: 0.89, genderRatio: { male: 38, female: 62 }, avgScore: 510 },
  { id: 519, name: "沈阳医学院", province: "辽宁", city: "沈阳", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "护理学", "预防医学", "口腔医学", "药学"], description: "沈阳市属医学院，在沈阳市医疗系统就业有优势。分数友好。", employmentRate: 0.89, genderRatio: { male: 36, female: 64 }, avgScore: 505 },
  { id: 520, name: "沈阳工程学院", province: "辽宁", city: "沈阳", type: "理工", level: [], isPublic: true, topMajors: ["电气工程", "能源动力", "自动化", "机械工程", "计算机科学"], description: "原沈阳电力高专，电力特色鲜明。进国家电网东北公司的重要渠道。", employmentRate: 0.92, genderRatio: { male: 64, female: 36 }, avgScore: 515 },
  { id: 521, name: "鞍山师范学院", province: "辽宁", city: "鞍山", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "数学", "英语", "学前教育"], description: "鞍山唯一的师范本科，钢都的教育人才基地。师范教育底蕴深厚。", employmentRate: 0.85, genderRatio: { male: 28, female: 72 }, avgScore: 480 },
  { id: 522, name: "辽东学院", province: "辽宁", city: "丹东", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "纺织工程", "旅游管理", "朝鲜语", "园艺学"], description: "丹东唯一的本科，对岸就是朝鲜。朝鲜语和边境旅游研究有独特优势。", employmentRate: 0.84, genderRatio: { male: 42, female: 58 }, avgScore: 465 },
  { id: 523, name: "营口理工学院", province: "辽宁", city: "营口", type: "理工", level: [], isPublic: true, topMajors: ["机械工程", "化学工程", "物流管理", "计算机科学", "自动化"], description: "营口唯一的公办本科，年轻的工科院校。营口港是东北重要的出海口。", employmentRate: 0.86, genderRatio: { male: 60, female: 40 }, avgScore: 468 },

  // 内蒙古
  { id: 524, name: "内蒙古民族大学", province: "内蒙古", city: "通辽", type: "综合", level: [], isPublic: true, topMajors: ["蒙医学", "临床医学", "动物科学", "教育学", "化学"], description: "内蒙古东部最高学府，蒙医学全国第一。蒙汉双语教学是最大特色。", employmentRate: 0.85, genderRatio: { male: 46, female: 54 }, avgScore: 478 },
  { id: 525, name: "内蒙古财经大学", province: "内蒙古", city: "呼和浩特", type: "财经", level: [], isPublic: true, topMajors: ["会计学", "金融学", "经济学", "工商管理", "旅游管理"], description: "内蒙古唯一的财经本科，在内蒙古金融系统校友遍布。草原丝路的财经学府。", employmentRate: 0.86, genderRatio: { male: 38, female: 62 }, avgScore: 485 },
  { id: 526, name: "赤峰学院", province: "内蒙古", city: "赤峰", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "临床医学", "历史学", "考古学", "生物科学"], description: "赤峰唯一的公办本科，考古学和红山文化研究有独特优势。", employmentRate: 0.84, genderRatio: { male: 42, female: 58 }, avgScore: 465 },
  { id: 527, name: "呼伦贝尔学院", province: "内蒙古", city: "呼伦贝尔", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "旅游管理", "草学", "俄语", "蒙古学"], description: "呼伦贝尔大草原上唯一的本科院校。草原生态和民族旅游是最大特色。", employmentRate: 0.83, genderRatio: { male: 42, female: 58 }, avgScore: 455 },
  { id: 528, name: "集宁师范学院", province: "内蒙古", city: "乌兰察布", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "数学", "英语", "学前教育"], description: "乌兰察布唯一的本科，师范为主。内蒙古中部的重要教育人才培养基地。", employmentRate: 0.84, genderRatio: { male: 30, female: 70 }, avgScore: 452 },
  { id: 529, name: "河套学院", province: "内蒙古", city: "巴彦淖尔", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "农学", "动物科学", "汉语言文学", "水利工程"], description: "河套平原上唯一的本科院校，农学和水利有灌区农业特色。", employmentRate: 0.83, genderRatio: { male: 44, female: 56 }, avgScore: 448 },

  // 新疆
  { id: 530, name: "昌吉学院", province: "新疆", city: "昌吉", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "计算机科学", "汉语言文学", "数学", "化学"], description: "昌吉唯一的本科，乌鲁木齐卫星城的大学。师范和应用型工科为主。", employmentRate: 0.83, genderRatio: { male: 42, female: 58 }, avgScore: 435 },

  // 民办补充
  { id: 531, name: "郑州工商学院", province: "河南", city: "郑州", type: "财经", level: [], isPublic: false, topMajors: ["会计学", "金融学", "工商管理", "土木工程", "计算机科学"], description: "宇华教育旗下的民办本科，在河南民办中规模较大。郑州的区位优势。", employmentRate: 0.84, genderRatio: { male: 44, female: 56 }, avgScore: 450 },
  { id: 532, name: "郑州科技学院", province: "河南", city: "郑州", type: "理工", level: [], isPublic: false, topMajors: ["计算机科学", "机械工程", "土木工程", "电气工程", "工商管理"], description: "河南民办工科强校，应用型定位。在郑州这个国家中心城市就业有优势。", employmentRate: 0.85, genderRatio: { male: 58, female: 42 }, avgScore: 448 },
  { id: 533, name: "南昌理工学院", province: "江西", city: "南昌", type: "理工", level: [], isPublic: false, topMajors: ["计算机科学", "机械工程", "土木工程", "电气工程", "工商管理"], description: "江西规模较大的民办本科，工科专业比较齐全。南昌的地理位置不错。", employmentRate: 0.84, genderRatio: { male: 58, female: 42 }, avgScore: 452 },
  { id: 534, name: "江西科技学院", province: "江西", city: "南昌", type: "理工", level: [], isPublic: false, topMajors: ["计算机科学", "汽车服务", "机械工程", "土木工程", "工商管理"], description: "江西民办强校，汽车服务工程有地方产业背景。位于南昌瑶湖大学城。", employmentRate: 0.84, genderRatio: { male: 56, female: 44 }, avgScore: 450 },
  { id: 535, name: "青岛滨海学院", province: "山东", city: "青岛", type: "综合", level: [], isPublic: false, topMajors: ["学前教育", "机械工程", "计算机科学", "财务管理", "护理学"], description: "山东最早的民办本科之一，在青岛。学前教育和护理是特色。", employmentRate: 0.84, genderRatio: { male: 42, female: 58 }, avgScore: 460 },
  { id: 536, name: "烟台南山学院", province: "山东", city: "烟台", type: "理工", level: [], isPublic: false, topMajors: ["材料科学", "机械工程", "自动化", "计算机科学", "纺织工程"], description: "南山集团创办的民办本科，材料（铝业）是特色。烟台的宜居环境加分。", employmentRate: 0.85, genderRatio: { male: 56, female: 44 }, avgScore: 458 },
  { id: 537, name: "西安培华学院", province: "陕西", city: "西安", type: "综合", level: [], isPublic: false, topMajors: ["会计学", "护理学", "学前教育", "计算机科学", "电子商务"], description: "陕西最早的民办本科之一，女生比例高。在西安市区地理位置好。", employmentRate: 0.84, genderRatio: { male: 32, female: 68 }, avgScore: 455 },
  { id: 538, name: "西安外事学院", province: "陕西", city: "西安", type: "财经", level: [], isPublic: false, topMajors: ["国际经济与贸易", "英语", "工商管理", "会计学", "计算机科学"], description: "外语和商科为特色的民办本科，国际化是做得很好的民办之一。", employmentRate: 0.84, genderRatio: { male: 35, female: 65 }, avgScore: 452 },
  { id: 539, name: "西安翻译学院", province: "陕西", city: "西安", type: "语言", level: [], isPublic: false, topMajors: ["英语", "翻译", "商务英语", "日语", "国际经济与贸易"], description: "以翻译命名的民办本科，外语翻译是核心特色。在民办语言类中名列前茅。", employmentRate: 0.84, genderRatio: { male: 25, female: 75 }, avgScore: 450 },
  { id: 540, name: "西京学院", province: "陕西", city: "西安", type: "理工", level: [], isPublic: false, topMajors: ["机械工程", "控制科学", "计算机科学", "土木工程", "艺术设计"], description: "陕西民办中工科较强的，控制科学是专业硕士点。西安民办高校的排头兵。", employmentRate: 0.84, genderRatio: { male: 58, female: 42 }, avgScore: 455 },
  { id: 541, name: "河北传媒学院", province: "河北", city: "石家庄", type: "艺术", level: [], isPublic: false, topMajors: ["广播电视学", "播音主持", "影视摄影", "表演", "数字媒体"], description: "民办传媒类强校，河北广电系统的重要人才来源。设备投入大。", employmentRate: 0.83, genderRatio: { male: 38, female: 62 }, avgScore: 460 },
  { id: 542, name: "大连艺术学院", province: "辽宁", city: "大连", type: "艺术", level: [], isPublic: false, topMajors: ["音乐表演", "舞蹈表演", "艺术设计", "美术学", "播音主持"], description: "东北民办艺术类强校，在大连这个浪漫之都。艺术实践机会多。", employmentRate: 0.82, genderRatio: { male: 35, female: 65 }, avgScore: 455 },
  { id: 543, name: "成都文理学院", province: "四川", city: "成都", type: "综合", level: [], isPublic: false, topMajors: ["汉语言文学", "会计学", "英语", "学前教育", "计算机科学"], description: "原四川师范大学文理学院，文科和师范有母体学校底蕴。成都的生活安逸。", employmentRate: 0.84, genderRatio: { male: 36, female: 64 }, avgScore: 465 },
  { id: 544, name: "重庆人文科技学院", province: "重庆", city: "重庆", type: "综合", level: [], isPublic: false, topMajors: ["汉语言文学", "英语", "学前教育", "计算机科学", "会计学"], description: "原西南大学育才学院，师范和文科有底蕴。在重庆合川区。", employmentRate: 0.83, genderRatio: { male: 38, female: 62 }, avgScore: 458 },
  { id: 545, name: "武汉东湖学院", province: "湖北", city: "武汉", type: "综合", level: [], isPublic: false, topMajors: ["计算机科学", "工商管理", "电子商务", "英语", "法学"], description: "湖北民办本科排名前列，在武汉东湖之滨。校园环境优美。", employmentRate: 0.84, genderRatio: { male: 48, female: 52 }, avgScore: 462 },
  { id: 546, name: "汉口学院", province: "湖北", city: "武汉", type: "综合", level: [], isPublic: false, topMajors: ["计算机科学", "工商管理", "汉语言文学", "英语", "艺术设计"], description: "武汉老牌民办本科，在汉口办学。应用型人才培养为主。", employmentRate: 0.83, genderRatio: { male: 46, female: 54 }, avgScore: 458 },
  { id: 547, name: "武汉华夏理工学院", province: "湖北", city: "武汉", type: "理工", level: [], isPublic: false, topMajors: ["车辆工程", "机械工程", "计算机科学", "制药工程", "工商管理"], description: "原武汉理工大学华夏学院，工科在民办中较强。车辆工程有母体底蕴。", employmentRate: 0.85, genderRatio: { male: 58, female: 42 }, avgScore: 460 },
  { id: 548, name: "武汉传媒学院", province: "湖北", city: "武汉", type: "艺术", level: [], isPublic: false, topMajors: ["广播电视学", "播音主持", "动画", "摄影", "文化产业管理"], description: "华中地区唯一的传媒类民办本科。武汉的文创产业在崛起。", employmentRate: 0.83, genderRatio: { male: 38, female: 62 }, avgScore: 455 },
  { id: 549, name: "武汉生物工程学院", province: "湖北", city: "武汉", type: "理工", level: [], isPublic: false, topMajors: ["生物工程", "制药工程", "食品科学", "环境工程", "园林"], description: "湖北最早的民办本科之一，生物和制药是特色。产学研结合做得不错。", employmentRate: 0.84, genderRatio: { male: 48, female: 52 }, avgScore: 455 },

  // ===== 第七批：民族类/农林类/更多缺漏院校 =====
  // 民族类（补充）
  { id: 550, name: "中南民族大学", province: "湖北", city: "武汉", type: "民族", level: [], isPublic: true, topMajors: ["民族学", "化学", "药学", "工商管理", "法学"], description: "国家民委直属，中南地区最好的民族院校。南湖边的校园，民族多样性丰富。", employmentRate: 0.88, genderRatio: { male: 44, female: 56 }, avgScore: 565 },
  { id: 551, name: "西南民族大学", province: "四川", city: "成都", type: "民族", level: [], isPublic: true, topMajors: ["民族学", "畜牧学", "法学", "藏学", "旅游管理"], description: "国家民委直属，西南地区民族教育的重镇。在成都这座美食之都，校园文化多元。", employmentRate: 0.86, genderRatio: { male: 44, female: 56 }, avgScore: 550 },
  { id: 552, name: "西北民族大学", province: "甘肃", city: "兰州", type: "民族", level: [], isPublic: true, topMajors: ["民族学", "藏语言文学", "蒙古语言文学", "舞蹈学", "医学"], description: "国家民委直属，西北民族教育的旗舰。少数民族语言和艺术全国最强。", employmentRate: 0.84, genderRatio: { male: 44, female: 56 }, avgScore: 480 },
  { id: 553, name: "北方民族大学", province: "宁夏", city: "银川", type: "民族", level: [], isPublic: true, topMajors: ["民族学", "材料科学", "计算机科学", "经济学", "音乐学"], description: "国家民委直属，唯一设在宁夏的民族高校。塞上江南银川的学府。", employmentRate: 0.84, genderRatio: { male: 46, female: 54 }, avgScore: 478 },
  { id: 554, name: "贵州民族大学", province: "贵州", city: "贵阳", type: "民族", level: [], isPublic: true, topMajors: ["民族学", "法学", "旅游管理", "苗学", "环境工程"], description: "贵州省属民族院校，苗族侗族文化研究全国领先。贵阳气候凉爽宜人。", employmentRate: 0.85, genderRatio: { male: 44, female: 56 }, avgScore: 495 },
  { id: 555, name: "湖北民族大学", province: "湖北", city: "恩施", type: "民族", level: [], isPublic: true, topMajors: ["民族学", "临床医学", "林学", "数学", "中国语言文学"], description: "湖北民族地区的最高学府，恩施大峡谷旁的大学。土家族苗族文化研究特色鲜明。", employmentRate: 0.85, genderRatio: { male: 44, female: 56 }, avgScore: 492 },
  { id: 556, name: "四川民族学院", province: "四川", city: "康定", type: "民族", level: [], isPublic: true, topMajors: ["藏语言文学", "旅游管理", "音乐学", "小学教育", "民族学"], description: "四川藏区唯一的本科，康定情歌的故乡。藏族文化和艺术教育全国知名。", employmentRate: 0.82, genderRatio: { male: 42, female: 58 }, avgScore: 465 },

  // 农林类（补充）
  { id: 557, name: "浙江海洋大学", province: "浙江", city: "舟山", type: "农林", level: [], isPublic: true, topMajors: ["海洋科学", "船舶工程", "水产养殖", "食品科学", "港口航道"], description: "改名前的浙江海洋学院，海洋和水产是王牌。舟山群岛新区的海洋特色大学。", employmentRate: 0.90, genderRatio: { male: 56, female: 44 }, avgScore: 560 },
  { id: 558, name: "广东海洋大学", province: "广东", city: "湛江", type: "农林", level: [], isPublic: true, topMajors: ["海洋科学", "水产养殖", "食品科学", "大气科学", "船舶工程"], description: "华南海洋教育的重镇，水产养殖全国前三。湛江的海鲜又多又便宜。", employmentRate: 0.88, genderRatio: { male: 55, female: 45 }, avgScore: 512 },
  { id: 559, name: "北京农学院", province: "北京", city: "北京", type: "农林", level: [], isPublic: true, topMajors: ["园艺学", "动物医学", "食品科学", "风景园林", "农业经济"], description: "北京市属唯一的农林本科，在北京学农很独特。宠物医学方向很受欢迎。", employmentRate: 0.87, genderRatio: { male: 44, female: 56 }, avgScore: 505 },
  { id: 561, name: "天津农学院", province: "天津", city: "天津", type: "农林", level: [], isPublic: true, topMajors: ["水产养殖", "农学", "动物科学", "食品科学", "园林"], description: "天津唯一的农林本科，在直辖市学农的独特体验。水产养殖是王牌。", employmentRate: 0.86, genderRatio: { male: 48, female: 52 }, avgScore: 508 },
  { id: 562, name: "山西农业大学", province: "山西", city: "太谷", type: "农林", level: [], isPublic: true, topMajors: ["农学", "动物科学", "植物保护", "园艺学", "食品科学"], description: "百年农业学府，山西省属重点。在太谷，一所大学带火一座城。", employmentRate: 0.86, genderRatio: { male: 48, female: 52 }, avgScore: 485 },
  // 更多地方学院补充
  { id: 564, name: "莆田学院", province: "福建", city: "莆田", type: "综合", level: [], isPublic: true, topMajors: ["临床医学", "护理学", "小学教育", "机械工程", "数学"], description: "莆田唯一的公办本科，医学和师范是主要方向。妈祖故乡的大学。", employmentRate: 0.86, genderRatio: { male: 44, female: 56 }, avgScore: 488 },
  { id: 565, name: "龙岩学院", province: "福建", city: "龙岩", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "动物医学", "材料科学", "计算机科学", "旅游管理"], description: "龙岩唯一的公办本科，闽西革命老区的最高学府。客家文化研究有特色。", employmentRate: 0.85, genderRatio: { male: 46, female: 54 }, avgScore: 482 },
  { id: 566, name: "三明学院", province: "福建", city: "三明", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "机械工程", "化学工程", "旅游管理", "艺术设计"], description: "三明唯一的公办本科，闽中地区的最高学府。绿色生态和林业研究有地方优势。", employmentRate: 0.85, genderRatio: { male: 48, female: 52 }, avgScore: 478 },
  { id: 567, name: "武夷学院", province: "福建", city: "武夷山", type: "综合", level: [], isPublic: true, topMajors: ["旅游管理", "茶学", "学前教育", "环境工程", "艺术设计"], description: "武夷山唯一的本科，茶学和旅游是全国独一份。在5A级景区里上大学。", employmentRate: 0.84, genderRatio: { male: 44, female: 56 }, avgScore: 475 },
  { id: 568, name: "宁德师范学院", province: "福建", city: "宁德", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "数学", "英语", "化学"], description: "宁德唯一的师范本科，闽东教育人才的培养基地。宁德时代总部所在地。", employmentRate: 0.85, genderRatio: { male: 30, female: 70 }, avgScore: 478 },

  // 更多省份地方院校
  { id: 569, name: "池州学院", province: "安徽", city: "池州", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "旅游管理", "化学", "计算机科学", "汉语言文学"], description: "池州唯一的公办本科，九华山脚下的大学。旅游管理和生态学有地缘优势。", employmentRate: 0.84, genderRatio: { male: 44, female: 56 }, avgScore: 470 },
  { id: 570, name: "宿州学院", province: "安徽", city: "宿州", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "地质工程", "生物科学", "机械工程", "数学"], description: "宿州唯一的本科，地质和煤矿工程有皖北地方特色。师范方向为主。", employmentRate: 0.85, genderRatio: { male: 46, female: 54 }, avgScore: 468 },
  { id: 571, name: "铜陵学院", province: "安徽", city: "铜陵", type: "财经", level: [], isPublic: true, topMajors: ["会计学", "金融学", "经济学", "财务管理", "计算机科学"], description: "铜陵唯一的本科，财经特色。原安徽财贸学院铜陵分院发展而来。", employmentRate: 0.86, genderRatio: { male: 42, female: 58 }, avgScore: 472 },
  { id: 572, name: "淮南师范学院", province: "安徽", city: "淮南", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "数学", "化学", "美术学"], description: "淮南的师范本科，皖北教育人才的重要来源。豆腐发源地的大学。", employmentRate: 0.85, genderRatio: { male: 30, female: 70 }, avgScore: 468 },
  { id: 573, name: "巢湖学院", province: "安徽", city: "巢湖", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "体育教育", "旅游管理", "机械工程", "计算机科学"], description: "巢湖之滨的唯一本科，师范和体育是特色。合肥的后花园，环境宜人。", employmentRate: 0.85, genderRatio: { male: 45, female: 55 }, avgScore: 470 },
  { id: 574, name: "蚌埠学院", province: "安徽", city: "蚌埠", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "食品科学", "机械工程", "计算机科学", "音乐学"], description: "蚌埠市属本科，食品和机械是应用型方向。蚌埠是安徽的交通枢纽。", employmentRate: 0.85, genderRatio: { male: 48, female: 52 }, avgScore: 472 },

  // 更多民办
  { id: 575, name: "广州商学院", province: "广东", city: "广州", type: "财经", level: [], isPublic: false, topMajors: ["会计学", "金融学", "电子商务", "国际经济与贸易", "法学"], description: "广东民办财经类强校，在广州中新知识城。商科为主，就业导向明确。", employmentRate: 0.84, genderRatio: { male: 42, female: 58 }, avgScore: 460 },
  { id: 576, name: "广东科技学院", province: "广东", city: "东莞", type: "理工", level: [], isPublic: false, topMajors: ["计算机科学", "机械工程", "自动化", "电子商务", "英语"], description: "东莞的民办工科本科，服务大湾区制造业。东莞的IT和制造产业就业支撑强。", employmentRate: 0.85, genderRatio: { male: 58, female: 42 }, avgScore: 458 },
  { id: 577, name: "厦门工学院", province: "福建", city: "厦门", type: "理工", level: [], isPublic: false, topMajors: ["机械工程", "土木工程", "计算机科学", "建筑学", "电气工程"], description: "厦门的民办工科本科，工科专业比较齐全。厦门这座城市本身就加分。", employmentRate: 0.84, genderRatio: { male: 62, female: 38 }, avgScore: 462 },
  { id: 578, name: "福州外语外贸学院", province: "福建", city: "福州", type: "财经", level: [], isPublic: false, topMajors: ["英语", "国际经济与贸易", "会计学", "商务英语", "金融学"], description: "民办外语+财经特色，在福州长乐。外向型经济相关专业有福建外贸产业支撑。", employmentRate: 0.84, genderRatio: { male: 30, female: 70 }, avgScore: 455 },
  { id: 579, name: "泉州信息工程学院", province: "福建", city: "泉州", type: "理工", level: [], isPublic: false, topMajors: ["电子信息工程", "软件工程", "机械工程", "通信工程", "电子商务"], description: "泉州民办工科本科，电子信息特色。泉州民营经济发达，IT类就业有地域优势。", employmentRate: 0.85, genderRatio: { male: 62, female: 38 }, avgScore: 458 },

  // ===== 第八批：各省学院全面补充 =====
  // 广东
  { id: 580, name: "广州航海学院", province: "广东", city: "广州", type: "理工", level: [], isPublic: true, topMajors: ["航海技术", "轮机工程", "船舶电子", "港口航道", "交通运输"], description: "华南唯一独立航海本科，广州港是世界级大港。航海类就业率极高。", employmentRate: 0.92, genderRatio: { male: 68, female: 32 }, avgScore: 502 },

  // 河南
  { id: 581, name: "河南城建学院", province: "河南", city: "平顶山", type: "理工", level: [], isPublic: true, topMajors: ["土木工程", "建筑学", "城乡规划", "给排水", "测绘工程"], description: "河南省属城建类本科，土木建筑在河南仅次于郑大。建设行业校友遍布河南。", employmentRate: 0.89, genderRatio: { male: 62, female: 38 }, avgScore: 492 },
  { id: 582, name: "河南牧业经济学院", province: "河南", city: "郑州", type: "农林", level: [], isPublic: true, topMajors: ["动物科学", "兽医学", "食品科学", "会计学", "市场营销"], description: "原郑州牧专+河南商专合并，畜牧兽医和会计是双王牌。在郑州龙子湖大学城。", employmentRate: 0.89, genderRatio: { male: 48, female: 52 }, avgScore: 495 },
  { id: 583, name: "郑州师范学院", province: "河南", city: "郑州", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "特殊教育", "数学", "英语"], description: "郑州市属师范本科，小学教育和特教是王牌。郑州中小学教师的重要来源。", employmentRate: 0.88, genderRatio: { male: 26, female: 74 }, avgScore: 498 },

  // 山东
  { id: 584, name: "山东政法学院", province: "山东", city: "济南", type: "政法", level: [], isPublic: true, topMajors: ["法学", "监狱学", "政治学", "行政管理", "经济学"], description: "山东省属政法类本科，法学在山东省内仅次于山大。考公和政法系统就业好。", employmentRate: 0.88, genderRatio: { male: 42, female: 58 }, avgScore: 522 },
  { id: 585, name: "山东女子学院", province: "山东", city: "济南", type: "综合", level: [], isPublic: true, topMajors: ["学前教育", "社会工作", "英语", "工商管理", "计算机科学"], description: "全国三所女子本科之一，女生专属的大学。学前教育和社工国家级特色专业。", employmentRate: 0.87, genderRatio: { male: 5, female: 95 }, avgScore: 490 },
  { id: 586, name: "齐鲁师范学院", province: "山东", city: "济南", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "数学", "化学", "思想政治教育"], description: "山东省属师范本科，中小学教师培训基地。济南的地理位置加分。", employmentRate: 0.88, genderRatio: { male: 28, female: 72 }, avgScore: 500 },
  { id: 587, name: "山东青年政治学院", province: "山东", city: "济南", type: "政法", level: [], isPublic: true, topMajors: ["社会工作", "政治学", "舞蹈学", "播音主持", "经济学"], description: "原山东省团校，青年工作和政治学是特色。舞蹈专业意外地强。", employmentRate: 0.85, genderRatio: { male: 40, female: 60 }, avgScore: 488 },
  { id: 588, name: "山东管理学院", province: "山东", city: "济南", type: "财经", level: [], isPublic: true, topMajors: ["劳动关系", "会计学", "工商管理", "经济学", "人力资源管理"], description: "原山东省工会管理干部学院，劳动关系是独有特色。工会系统就业对口。", employmentRate: 0.86, genderRatio: { male: 42, female: 58 }, avgScore: 485 },
  { id: 589, name: "山东农业工程学院", province: "山东", city: "济南/淄博", type: "农林", level: [], isPublic: true, topMajors: ["农学", "农业工程", "食品科学", "国土资源", "风景园林"], description: "山东省属农林本科，服务山东农业现代化。土地资源管理是特色方向。", employmentRate: 0.86, genderRatio: { male: 50, female: 50 }, avgScore: 488 },

  // 辽宁
  { id: 590, name: "辽宁科技学院", province: "辽宁", city: "本溪", type: "理工", level: [], isPublic: true, topMajors: ["冶金工程", "机械工程", "自动化", "土木工程", "计算机科学"], description: "原本溪冶金高专，冶金和机械是传统优势。本溪是中国钢都之一。", employmentRate: 0.88, genderRatio: { male: 62, female: 38 }, avgScore: 478 },
  { id: 591, name: "沈阳化工大学", province: "辽宁", city: "沈阳", type: "理工", level: [], isPublic: true, topMajors: ["化学工程", "材料科学", "过程装备", "自动化", "应用化学"], description: "原沈阳化工学院，化工和过程装备是王牌。在沈阳铁西老工业区。", employmentRate: 0.90, genderRatio: { male: 58, female: 42 }, avgScore: 508 },

  // 吉林
  { id: 592, name: "吉林化工学院", province: "吉林", city: "吉林市", type: "理工", level: [], isPublic: true, topMajors: ["化学工程", "材料科学", "过程装备", "自动化", "制药工程"], description: "吉林省属化工特色本科，化工和制药是两大方向。吉林市有化工产业基础。", employmentRate: 0.88, genderRatio: { male: 58, female: 42 }, avgScore: 472 },
  { id: 593, name: "吉林工商学院", province: "吉林", city: "长春", type: "财经", level: [], isPublic: true, topMajors: ["会计学", "工商管理", "经济学", "食品科学", "旅游管理"], description: "原吉林财税高专+吉林商专等合并，财经特色。长春的生活成本低。", employmentRate: 0.86, genderRatio: { male: 40, female: 60 }, avgScore: 475 },
  { id: 594, name: "吉林医药学院", province: "吉林", city: "吉林市", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "护理学", "药学", "医学检验", "预防医学"], description: "原第四军医大学吉林军医学院，医学底子好。在吉林市，分数友好。", employmentRate: 0.89, genderRatio: { male: 40, female: 60 }, avgScore: 478 },
  { id: 595, name: "通化师范学院", province: "吉林", city: "通化", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "数学", "生物科学", "历史学"], description: "通化唯一的师范本科，长白山脚下的大学。为吉林东南部培养教师。", employmentRate: 0.84, genderRatio: { male: 30, female: 70 }, avgScore: 458 },
  { id: 596, name: "白城师范学院", province: "吉林", city: "白城", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "数学", "地理科学", "化学"], description: "白城唯一的本科，吉林西部教育的人才基地。向海湿地旁的大学。", employmentRate: 0.84, genderRatio: { male: 30, female: 70 }, avgScore: 455 },

  // 黑龙江
  { id: 597, name: "黑龙江工业学院", province: "黑龙江", city: "鸡西", type: "理工", level: [], isPublic: true, topMajors: ["矿业工程", "机械工程", "电气工程", "土木工程", "计算机科学"], description: "鸡西唯一的公办本科，矿业和机械是传统方向。黑龙江东部的重要工科院校。", employmentRate: 0.86, genderRatio: { male: 60, female: 40 }, avgScore: 460 },

  // 陕西
  { id: 598, name: "陕西学前师范学院", province: "陕西", city: "西安", type: "师范", level: [], isPublic: true, topMajors: ["学前教育", "小学教育", "心理学", "汉语言文学", "音乐学"], description: "陕西唯一的学前师范本科，幼教人才的核心基地。在西安，地理位置不错。", employmentRate: 0.87, genderRatio: { male: 22, female: 78 }, avgScore: 485 },
  { id: 599, name: "咸阳师范学院", province: "陕西", city: "咸阳", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "数学", "历史学", "化学"], description: "咸阳最高的师范学府，离西安很近。为关中和陕北培养教育人才。", employmentRate: 0.86, genderRatio: { male: 28, female: 72 }, avgScore: 482 },
  { id: 600, name: "渭南师范学院", province: "陕西", city: "渭南", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "数学", "物理学", "美术学"], description: "渭南唯一的师范本科，关中东部的教育重镇。华山西岳脚下的大学。", employmentRate: 0.85, genderRatio: { male: 30, female: 70 }, avgScore: 478 },
  { id: 601, name: "榆林学院", province: "陕西", city: "榆林", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "能源化工", "机械工程", "会计学", "历史学"], description: "榆林唯一的公办本科，能源化工有陕北煤炭产业支撑。近年发展迅速。", employmentRate: 0.86, genderRatio: { male: 48, female: 52 }, avgScore: 475 },
  { id: 602, name: "商洛学院", province: "陕西", city: "商洛", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "生物科学", "中药学", "汉语言文学", "数学"], description: "商洛唯一的本科，秦岭腹地的大学。中药资源和生物多样性研究有地缘优势。", employmentRate: 0.84, genderRatio: { male: 42, female: 58 }, avgScore: 465 },
  { id: 603, name: "安康学院", province: "陕西", city: "安康", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "农学", "旅游管理", "汉语言文学", "茶学"], description: "安康唯一的本科，秦巴山区汉水之滨。富硒食品和茶学有独特研究方向。", employmentRate: 0.84, genderRatio: { male: 42, female: 58 }, avgScore: 462 },

  // 湖南
  { id: 604, name: "湖南工程学院", province: "湖南", city: "湘潭", type: "理工", level: [], isPublic: true, topMajors: ["电气工程", "机械工程", "纺织工程", "自动化", "计算机科学"], description: "原湘潭机电高专+湖南纺织高专合并，电气和纺织是双王牌。应用型工科强校。", employmentRate: 0.89, genderRatio: { male: 60, female: 40 }, avgScore: 505 },
  { id: 605, name: "湖南城市学院", province: "湖南", city: "益阳", type: "理工", level: [], isPublic: true, topMajors: ["土木工程", "建筑学", "城乡规划", "测绘工程", "给排水"], description: "原湖南城建高专+益阳师专合并，城建是核心特色。湖南城建系统校友众多。", employmentRate: 0.89, genderRatio: { male: 60, female: 40 }, avgScore: 498 },
  { id: 606, name: "湖南工学院", province: "湖南", city: "衡阳", type: "理工", level: [], isPublic: true, topMajors: ["安全工程", "机械工程", "土木工程", "材料科学", "计算机科学"], description: "原湖南大学衡阳分校+湖南建材高专合并，安全工程是国家级特色。", employmentRate: 0.88, genderRatio: { male: 62, female: 38 }, avgScore: 495 },
  { id: 607, name: "湖南科技学院", province: "湖南", city: "永州", type: "综合", level: [], isPublic: true, topMajors: ["汉语言文学", "生物工程", "计算机科学", "数学", "法学"], description: "永州唯一的公办本科，潇湘文化发源地。柳宗元《永州八记》的文学传统。", employmentRate: 0.85, genderRatio: { male: 46, female: 54 }, avgScore: 488 },
  { id: 608, name: "湖南人文科技学院", province: "湖南", city: "娄底", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "材料科学", "农学", "计算机科学", "英语"], description: "娄底唯一的公办本科，师范和应用型工科并举。曾国藩故里的大学。", employmentRate: 0.85, genderRatio: { male: 48, female: 52 }, avgScore: 485 },
  { id: 609, name: "长沙学院", province: "湖南", city: "长沙", type: "综合", level: [], isPublic: true, topMajors: ["软件工程", "旅游管理", "公共管理", "艺术设计", "英语"], description: "长沙市属本科，在长沙市区。软件和旅游管理有长沙产业支撑。", employmentRate: 0.88, genderRatio: { male: 48, female: 52 }, avgScore: 508 },

  // 更多地方学院
  { id: 610, name: "桂林航天工业学院", province: "广西", city: "桂林", type: "理工", level: [], isPublic: true, topMajors: ["飞行器制造", "汽车服务", "能源动力", "机械工程", "通信工程"], description: "原桂林航天工业高专，航天和地方产业结合。桂林山水间的工科院校。", employmentRate: 0.88, genderRatio: { male: 62, female: 38 }, avgScore: 482 },
  { id: 611, name: "梧州学院", province: "广西", city: "梧州", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "电子信息工程", "国际经济与贸易", "宝石学", "机械工程"], description: "梧州唯一的公办本科，宝石鉴定全国独有。西江畔上的大学。", employmentRate: 0.84, genderRatio: { male: 46, female: 54 }, avgScore: 468 },
  { id: 612, name: "百色学院", province: "广西", city: "百色", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "化学", "材料科学", "汉语言文学", "旅游管理"], description: "百色唯一的公办本科，革命老区的最高学府。铝金属材料研究有地方优势。", employmentRate: 0.84, genderRatio: { male: 44, female: 56 }, avgScore: 465 },
  { id: 613, name: "河池学院", province: "广西", city: "河池", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "生物科学", "电子信息工程", "数学"], description: "河池唯一的公办本科，桂西北少数民族地区的最高学府。", employmentRate: 0.83, genderRatio: { male: 44, female: 56 }, avgScore: 462 },
  { id: 614, name: "贺州学院", province: "广西", city: "贺州", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "食品科学", "旅游管理", "计算机科学", "英语"], description: "贺州唯一的公办本科，桂粤湘三省交界的大学。长寿之乡的食品研究有地方特色。", employmentRate: 0.83, genderRatio: { male: 44, female: 56 }, avgScore: 460 },
  // 江西
  { id: 616, name: "赣南医学院", province: "江西", city: "赣州", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "麻醉学", "护理学", "药学", "口腔医学"], description: "赣南唯一的医学院，临床和麻醉是主要方向。在江西南部医疗系统有影响力。", employmentRate: 0.89, genderRatio: { male: 42, female: 58 }, avgScore: 508 },
  { id: 617, name: "宜春学院", province: "江西", city: "宜春", type: "综合", level: [], isPublic: true, topMajors: ["临床医学", "农学", "小学教育", "药学", "计算机科学"], description: "宜春唯一的公办本科，医学+农学+师范三方向。美容医学方向全国独有。", employmentRate: 0.86, genderRatio: { male: 46, female: 54 }, avgScore: 485 },
  { id: 618, name: "上饶师范学院", province: "江西", city: "上饶", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "数学", "化学", "历史学"], description: "上饶唯一的师范本科，赣东北教育人才的摇篮。三清山和婺源旁的大学。", employmentRate: 0.85, genderRatio: { male: 32, female: 68 }, avgScore: 480 },
  { id: 619, name: "九江学院", province: "江西", city: "九江", type: "综合", level: [], isPublic: true, topMajors: ["临床医学", "会计学", "旅游管理", "土木工程", "小学教育"], description: "九江唯一的公办本科，医学+财经+师范多方向。庐山和鄱阳湖旁的大学。", employmentRate: 0.87, genderRatio: { male: 46, female: 54 }, avgScore: 490 },
  { id: 620, name: "萍乡学院", province: "江西", city: "萍乡", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "机械工程", "矿业工程", "汉语言文学", "材料科学"], description: "萍乡唯一的公办本科，煤矿和机械有历史渊源。安源革命精神的传承地。", employmentRate: 0.85, genderRatio: { male: 48, female: 52 }, avgScore: 472 },
  { id: 621, name: "新余学院", province: "江西", city: "新余", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "新能源科学", "机械工程", "计算机科学", "护理学"], description: "新余唯一的公办本科，新能源方向有地方光伏产业支撑。", employmentRate: 0.86, genderRatio: { male: 48, female: 52 }, avgScore: 475 },
  { id: 622, name: "南昌工程学院", province: "江西", city: "南昌", type: "理工", level: [], isPublic: true, topMajors: ["水利工程", "土木工程", "电气工程", "水土保持", "计算机科学"], description: "原南昌水专，水利水电是王牌。江西省水利系统的人才基地。", employmentRate: 0.90, genderRatio: { male: 62, female: 38 }, avgScore: 510 },
  { id: 623, name: "景德镇学院", province: "江西", city: "景德镇", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "陶瓷设计", "工艺美术", "汉语言文学", "英语"], description: "景德镇市属本科，陶瓷和师范双方向。千年瓷都的文化底蕴加持。", employmentRate: 0.85, genderRatio: { male: 40, female: 60 }, avgScore: 472 },

  // ===== 第九批：近年新升本科/职业本科院校 =====
  // 职业本科（2023-2025年升格）
  { id: 624, name: "深圳职业技术大学", province: "广东", city: "深圳", type: "理工", level: [], isPublic: true, topMajors: ["电子信息工程", "计算机网络", "人工智能", "现代通信", "新能源汽车"], description: "2023年由深职院升格，中国职业本科的标杆。深圳区位+应用型定位，就业比很多公办本科好。", employmentRate: 0.96, genderRatio: { male: 56, female: 44 }, avgScore: 545 },
  { id: 625, name: "南京工业职业技术大学", province: "江苏", city: "南京", type: "理工", level: [], isPublic: true, topMajors: ["机械电子", "自动化", "软件工程", "电气工程", "现代物流"], description: "原南京工业职业技术学院，2020年首批职业本科试点。百年职教名校，工科就业好。", employmentRate: 0.94, genderRatio: { male: 62, female: 38 }, avgScore: 510 },
  { id: 626, name: "浙江机电职业技术大学", province: "浙江", city: "杭州", type: "理工", level: [], isPublic: true, topMajors: ["智能制造", "电气自动化", "物联网工程", "大数据", "机械设计"], description: "2024年升格，杭州滨江区的应用型本科。浙江制造业发达，毕业生供不应求。", employmentRate: 0.94, genderRatio: { male: 64, female: 36 }, avgScore: 518 },
  { id: 627, name: "河北工业职业技术大学", province: "河北", city: "石家庄", type: "理工", level: [], isPublic: true, topMajors: ["钢铁冶金", "材料工程", "机械制造", "自动化", "环境工程"], description: "原河北工业职技学院，钢铁冶金特色。服务河北钢铁产业升级。", employmentRate: 0.91, genderRatio: { male: 64, female: 36 }, avgScore: 478 },
  { id: 628, name: "兰州资源环境职业技术大学", province: "甘肃", city: "兰州", type: "理工", level: [], isPublic: true, topMajors: ["安全工程", "环境工程", "测绘工程", "应急管理", "气象学"], description: "原兰州资源环境学院，安全+气象+环境三特色。西部地区紧缺人才培养基地。", employmentRate: 0.90, genderRatio: { male: 60, female: 40 }, avgScore: 455 },
  { id: 629, name: "兰州石化职业技术大学", province: "甘肃", city: "兰州", type: "理工", level: [], isPublic: true, topMajors: ["石油化工", "化学工程", "过程装备", "应用化工", "安全工程"], description: "原兰州石化职技学院，石化特色鲜明。中石油兰州石化的对口人才培养基地。", employmentRate: 0.91, genderRatio: { male: 62, female: 38 }, avgScore: 458 },
  { id: 630, name: "西安汽车职业大学", province: "陕西", city: "西安", type: "理工", level: [], isPublic: false, topMajors: ["车辆工程", "新能源汽车", "汽车服务", "智能网联", "交通运输"], description: "民办职业本科，汽车全产业链人才培养。西安有比亚迪等车企，就业对口。", employmentRate: 0.89, genderRatio: { male: 68, female: 32 }, avgScore: 445 },
  { id: 631, name: "泉州职业技术大学", province: "福建", city: "泉州", type: "理工", level: [], isPublic: false, topMajors: ["机械设计", "计算机应用", "油气储运", "汽车服务", "电子商务"], description: "福建民办职业本科，应用型工科为主。泉州民营经济提供了大量就业机会。", employmentRate: 0.88, genderRatio: { male: 60, female: 40 }, avgScore: 450 },
  { id: 632, name: "山东工程职业技术大学", province: "山东", city: "济南", type: "理工", level: [], isPublic: false, topMajors: ["机械制造", "建筑工程", "电子信息", "计算机科学", "会计学"], description: "山东民办职业本科，工科+经管多方向。在济南，学技术+好就业。", employmentRate: 0.88, genderRatio: { male: 60, female: 40 }, avgScore: 455 },
  { id: 633, name: "江西软件职业技术大学", province: "江西", city: "南昌", type: "理工", level: [], isPublic: false, topMajors: ["软件工程", "区块链工程", "大数据", "网络空间安全", "VR技术"], description: "全国首个软件职业本科，先锋软件集团创办。区块链和VR方向很有前瞻性。", employmentRate: 0.87, genderRatio: { male: 65, female: 35 }, avgScore: 450 },
  { id: 634, name: "广州科技职业技术大学", province: "广东", city: "广州", type: "理工", level: [], isPublic: false, topMajors: ["计算机应用", "机械制造", "建筑工程", "印刷工程", "数字媒体"], description: "广东民办职业本科，在广州白云区。工科应用型，大湾区就业机会多。", employmentRate: 0.87, genderRatio: { male: 58, female: 42 }, avgScore: 458 },
  { id: 635, name: "广东工商职业技术大学", province: "广东", city: "肇庆", type: "理工", level: [], isPublic: false, topMajors: ["工商管理", "计算机科学", "机械制造", "建筑工程", "电子商务"], description: "广东民办职业本科，商科+工科。肇庆的环境宜人，离广佛不远。", employmentRate: 0.86, genderRatio: { male: 52, female: 48 }, avgScore: 452 },
  { id: 636, name: "海南科技职业大学", province: "海南", city: "海口", type: "理工", level: [], isPublic: false, topMajors: ["航海技术", "轮机工程", "计算机科学", "健康管理", "新能源汽车"], description: "海南民办职业本科，航海和健康是特色方向。海南自贸港建设带来新机遇。", employmentRate: 0.86, genderRatio: { male: 58, female: 42 }, avgScore: 460 },
  { id: 637, name: "重庆机电职业技术大学", province: "重庆", city: "重庆", type: "理工", level: [], isPublic: false, topMajors: ["机械制造", "电气自动化", "车辆工程", "智能制造", "计算机科学"], description: "重庆民办职业本科，机电制造特色。重庆汽车和装备制造业发达，就业有支撑。", employmentRate: 0.88, genderRatio: { male: 64, female: 36 }, avgScore: 455 },
  { id: 638, name: "运城职业技术大学", province: "山西", city: "运城", type: "理工", level: [], isPublic: false, topMajors: ["机械制造", "智能采矿", "中医健康", "建筑工程", "计算机科学"], description: "山西民办职业本科，智能采矿和中医健康两大特色。服务地方产业转型。", employmentRate: 0.86, genderRatio: { male: 58, female: 42 }, avgScore: 448 },
  { id: 639, name: "河南科技职业大学", province: "河南", city: "周口", type: "理工", level: [], isPublic: false, topMajors: ["计算机应用", "机械制造", "电子信息", "建筑工程", "护理学"], description: "河南民办职业本科，工科+护理多方向。豫东地区重要的应用型人才培养基地。", employmentRate: 0.87, genderRatio: { male: 55, female: 45 }, avgScore: 455 },
  { id: 640, name: "广西城市职业大学", province: "广西", city: "崇左", type: "理工", level: [], isPublic: false, topMajors: ["计算机应用", "建筑工程", "机械制造", "汽车服务", "物流管理"], description: "广西民办职业本科，在崇左（靠近越南边境）。东盟方向的区位优势。", employmentRate: 0.85, genderRatio: { male: 56, female: 44 }, avgScore: 442 },
  { id: 641, name: "成都艺术职业大学", province: "四川", city: "成都", type: "艺术", level: [], isPublic: false, topMajors: ["环境设计", "数字媒体", "视觉传达", "舞蹈表演", "音乐表演"], description: "全国首批艺术职业本科，设计+表演两大方向。在成都这个文创之都。", employmentRate: 0.84, genderRatio: { male: 38, female: 62 }, avgScore: 460 },

  // 近年升格/更名的公办本科
  { id: 642, name: "浙江科技大学", province: "浙江", city: "杭州", type: "理工", level: [], isPublic: true, topMajors: ["机械工程", "土木工程", "计算机科学", "化学工程", "设计学"], description: "2023年由浙江科技学院更名，中德合作底蕴深厚。杭州小和山大学城。", employmentRate: 0.91, genderRatio: { male: 56, female: 44 }, avgScore: 578 },
  { id: 643, name: "重庆科技大学", province: "重庆", city: "重庆", type: "理工", level: [], isPublic: true, topMajors: ["石油工程", "冶金工程", "机械工程", "安全工程", "电气工程"], description: "2023年由重庆科技学院更名，石油和冶金两大王牌。在重庆大学城。", employmentRate: 0.91, genderRatio: { male: 60, female: 40 }, avgScore: 530 },
{ id: 645, name: "蚌埠医科大学", province: "安徽", city: "蚌埠", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "麻醉学", "护理学", "医学检验", "药学"], description: "2023年由蚌埠医学院更名，安徽老牌医学院。临床和麻醉是传统优势。", employmentRate: 0.91, genderRatio: { male: 42, female: 58 }, avgScore: 545 },
  { id: 646, name: "赣南医科大学", province: "江西", city: "赣州", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "麻醉学", "护理学", "药学", "口腔医学"], description: "2023年由赣南医学院更名，江西南部最强的医学院。", employmentRate: 0.90, genderRatio: { male: 42, female: 58 }, avgScore: 525 },
  { id: 647, name: "山东第二医科大学", province: "山东", city: "潍坊", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "麻醉学", "护理学", "医学影像", "口腔医学"], description: "2023年由潍坊医学院更名，麻醉学是国家级特色专业。山东省属重点医学院。", employmentRate: 0.91, genderRatio: { male: 40, female: 60 }, avgScore: 548 },
  { id: 648, name: "佛山大学", province: "广东", city: "佛山", type: "理工", level: [], isPublic: true, topMajors: ["机械工程", "兽医学", "土木工程", "计算机科学", "口腔医学"], description: "2024年由佛山科学技术学院更名。佛山是中国制造业重镇，就业资源丰富。", employmentRate: 0.92, genderRatio: { male: 56, female: 44 }, avgScore: 535 },
  { id: 700, name: "成都医学院", province: "四川", city: "成都", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "护理学", "药学", "医学检验", "预防医学"], description: "原第三军医大学成都军医学院，转制后发展迅速。", employmentRate: 0.90, genderRatio: { male: 38, female: 62 }, avgScore: 542 },
  { id: 701, name: "川北医学院", province: "四川", city: "南充", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "口腔医学", "麻醉学", "护理学", "医学影像"], description: "四川老牌医学院，川北地区医疗人才基地。", employmentRate: 0.90, genderRatio: { male: 40, female: 60 }, avgScore: 532 },
  { id: 702, name: "西南医科大学", province: "四川", city: "泸州", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "口腔医学", "麻醉学", "中西医结合", "护理学"], description: "原泸州医学院，国家级特色专业。", employmentRate: 0.91, genderRatio: { male: 42, female: 58 }, avgScore: 558 },
  { id: 703, name: "成都师范学院", province: "四川", city: "成都", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "学前教育", "心理学", "汉语言文学", "数学"], description: "四川省属师范，在成都温江大学城。", employmentRate: 0.87, genderRatio: { male: 28, female: 72 }, avgScore: 515 },
  { id: 704, name: "四川旅游学院", province: "四川", city: "成都", type: "综合", level: [], isPublic: true, topMajors: ["烹饪与营养", "酒店管理", "旅游管理", "会展经济", "休闲体育"], description: "全国唯一以旅游命名的本科。", employmentRate: 0.88, genderRatio: { male: 42, female: 58 }, avgScore: 495 },
  { id: 705, name: "四川警察学院", province: "四川", city: "泸州", type: "政法", level: [], isPublic: true, topMajors: ["侦查学", "治安学", "刑事科学技术", "交通管理", "公安管理"], description: "四川省公安厅直属，入警率极高。", employmentRate: 0.94, genderRatio: { male: 66, female: 34 }, avgScore: 535 },
  { id: 706, name: "阿坝师范学院", province: "四川", city: "汶川", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "学前教育", "藏语言文学", "音乐学", "美术学"], description: "阿坝州唯一的本科，藏族羌族地区师范学府。", employmentRate: 0.83, genderRatio: { male: 34, female: 66 }, avgScore: 468 },
  { id: 707, name: "大理大学", province: "云南", city: "大理", type: "综合", level: [], isPublic: true, topMajors: ["临床医学", "药学", "小学教育", "旅游管理", "生态学"], description: "苍山洱海旁的大学。", employmentRate: 0.86, genderRatio: { male: 44, female: 56 }, avgScore: 515 },
  { id: 708, name: "曲靖师范学院", province: "云南", city: "曲靖", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "数学", "化学", "物理学"], description: "滇东教育人才摇篮。", employmentRate: 0.85, genderRatio: { male: 32, female: 68 }, avgScore: 488 },
  { id: 709, name: "玉溪师范学院", province: "云南", city: "玉溪", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "地理科学", "美术学", "数学"], description: "聂耳故乡的师范学府。", employmentRate: 0.85, genderRatio: { male: 32, female: 68 }, avgScore: 485 },
  { id: 710, name: "楚雄师范学院", province: "云南", city: "楚雄", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "数学", "物理学", "英语"], description: "彝族地区最高学府。", employmentRate: 0.84, genderRatio: { male: 32, female: 68 }, avgScore: 478 },
  { id: 711, name: "红河学院", province: "云南", city: "蒙自", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "越南语", "国际经济与贸易", "农学", "计算机科学"], description: "靠近越南边境，越南语有地缘优势。", employmentRate: 0.84, genderRatio: { male: 44, female: 56 }, avgScore: 475 },
  { id: 712, name: "保山学院", province: "云南", city: "保山", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "宝石学", "旅游管理", "汉语言文学", "英语"], description: "宝石鉴定有滇西地缘优势。", employmentRate: 0.84, genderRatio: { male: 42, female: 58 }, avgScore: 470 },
  { id: 713, name: "文山学院", province: "云南", city: "文山", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "三七医药", "生物科学", "汉语言文学", "数学"], description: "三七药材研究全国独有。", employmentRate: 0.83, genderRatio: { male: 42, female: 58 }, avgScore: 468 },
  { id: 714, name: "普洱学院", province: "云南", city: "普洱", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "茶学", "旅游管理", "生物科学", "数学"], description: "普洱茶和咖啡研究高地。", employmentRate: 0.84, genderRatio: { male: 42, female: 58 }, avgScore: 465 },
  { id: 715, name: "昭通学院", province: "云南", city: "昭通", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "数学", "物理学", "化学"], description: "滇东北最高学府。", employmentRate: 0.83, genderRatio: { male: 44, female: 56 }, avgScore: 462 },
  { id: 716, name: "滇西应用技术大学", province: "云南", city: "大理", type: "理工", level: [], isPublic: true, topMajors: ["宝石学", "中药学", "傣医学", "茶学", "旅游管理"], description: "珠宝+中药+茶学+傣医四大特色。", employmentRate: 0.85, genderRatio: { male: 46, female: 54 }, avgScore: 480 },
  { id: 717, name: "滇西科技师范学院", province: "云南", city: "临沧", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "物联网工程", "缅甸语", "汉语言文学", "数学"], description: "中缅边境上的大学。", employmentRate: 0.83, genderRatio: { male: 42, female: 58 }, avgScore: 465 },
  { id: 718, name: "贵州师范学院", province: "贵州", city: "贵阳", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "学前教育", "化学", "数学", "英语"], description: "贵州省属师范。", employmentRate: 0.86, genderRatio: { male: 30, female: 70 }, avgScore: 490 },
  { id: 719, name: "贵州理工学院", province: "贵州", city: "贵阳", type: "理工", level: [], isPublic: true, topMajors: ["矿业工程", "土木工程", "化学工程", "机械工程", "电气工程"], description: "2013年新建工科本科。", employmentRate: 0.88, genderRatio: { male: 62, female: 38 }, avgScore: 478 },
  { id: 720, name: "铜仁学院", province: "贵州", city: "铜仁", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "水产养殖", "旅游管理", "数学", "汉语言文学"], description: "梵净山脚下的大学。", employmentRate: 0.84, genderRatio: { male: 44, female: 56 }, avgScore: 462 },
  { id: 721, name: "安顺学院", province: "贵州", city: "安顺", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "旅游管理", "特殊教育", "计算机科学", "地理科学"], description: "黄果树瀑布旁，特教是国家级特色。", employmentRate: 0.84, genderRatio: { male: 42, female: 58 }, avgScore: 465 },
  { id: 722, name: "凯里学院", province: "贵州", city: "凯里", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "民族学", "旅游管理", "音乐学", "生物科学"], description: "黔东南苗族侗族文化中心。", employmentRate: 0.83, genderRatio: { male: 42, female: 58 }, avgScore: 460 },
  { id: 723, name: "黔南民族师范学院", province: "贵州", city: "都匀", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "数学", "化学", "体育教育"], description: "布依族苗族地区师范本科。", employmentRate: 0.84, genderRatio: { male: 32, female: 68 }, avgScore: 462 },
  { id: 724, name: "贵州工程应用技术学院", province: "贵州", city: "毕节", type: "理工", level: [], isPublic: true, topMajors: ["小学教育", "矿业工程", "机械工程", "土木工程", "计算机科学"], description: "毕节唯一的公办本科。", employmentRate: 0.85, genderRatio: { male: 48, female: 52 }, avgScore: 458 },
  { id: 725, name: "六盘水师范学院", province: "贵州", city: "六盘水", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "矿业工程", "化学", "生物科学", "英语"], description: "中国凉都，夏季19度。", employmentRate: 0.84, genderRatio: { male: 34, female: 66 }, avgScore: 458 },
  { id: 726, name: "贵州商学院", province: "贵州", city: "贵阳", type: "财经", level: [], isPublic: true, topMajors: ["会计学", "工商管理", "电子商务", "市场营销", "物流管理"], description: "贵州省属财经本科。", employmentRate: 0.86, genderRatio: { male: 40, female: 60 }, avgScore: 472 },
  { id: 727, name: "茅台学院", province: "贵州", city: "仁怀", type: "理工", level: [], isPublic: false, topMajors: ["酿酒工程", "食品科学", "市场营销", "电子商务", "自动化"], description: "茅台集团创办，酿酒工程全国独有。", employmentRate: 0.90, genderRatio: { male: 55, female: 45 }, avgScore: 468 },
  { id: 728, name: "四川工程职业技术大学", province: "四川", city: "德阳", type: "理工", level: [], isPublic: true, topMajors: ["机械制造", "电气工程", "数控技术", "焊接工程", "材料工程"], description: "2024年升格职业本科。", employmentRate: 0.93, genderRatio: { male: 64, female: 36 }, avgScore: 495 },
  { id: 729, name: "长春汽车职业技术大学", province: "吉林", city: "长春", type: "理工", level: [], isPublic: true, topMajors: ["车辆工程", "新能源汽车", "智能网联", "汽车服务", "机械制造"], description: "2024年升格，一汽集团旁。", employmentRate: 0.93, genderRatio: { male: 66, female: 34 }, avgScore: 478 },
  { id: 730, name: "广东轻工职业技术大学", province: "广东", city: "广州", type: "理工", level: [], isPublic: true, topMajors: ["精细化工", "食品科学", "艺术设计", "智能制造", "数字媒体"], description: "2024年升格，轻工和设计全国闻名。", employmentRate: 0.93, genderRatio: { male: 48, female: 52 }, avgScore: 520 },
  { id: 731, name: "柳州职业技术大学", province: "广西", city: "柳州", type: "理工", level: [], isPublic: true, topMajors: ["机械制造", "汽车工程", "电气自动化", "计算机应用", "数控技术"], description: "2024年升格。", employmentRate: 0.91, genderRatio: { male: 62, female: 38 }, avgScore: 472 },
  { id: 732, name: "南宁职业技术大学", province: "广西", city: "南宁", type: "理工", level: [], isPublic: true, topMajors: ["建筑工程", "计算机应用", "电子商务", "旅游管理", "艺术设计"], description: "2024年升格。", employmentRate: 0.89, genderRatio: { male: 52, female: 48 }, avgScore: 468 },
  { id: 733, name: "贵州交通职业大学", province: "贵州", city: "贵阳", type: "理工", level: [], isPublic: true, topMajors: ["道路桥梁", "交通运输", "汽车服务", "建筑工程", "工程管理"], description: "2024年升格。", employmentRate: 0.91, genderRatio: { male: 64, female: 36 }, avgScore: 465 },
  { id: 734, name: "甘肃林业职业技术大学", province: "甘肃", city: "天水", type: "农林", level: [], isPublic: true, topMajors: ["林学", "园林设计", "环境工程", "水土保持", "旅游管理"], description: "2024年升格。", employmentRate: 0.87, genderRatio: { male: 52, female: 48 }, avgScore: 442 },
  { id: 735, name: "新疆农业职业技术大学", province: "新疆", city: "昌吉", type: "农林", level: [], isPublic: true, topMajors: ["农学", "园艺学", "畜牧兽医", "食品加工", "农业机械"], description: "2024年升格。", employmentRate: 0.87, genderRatio: { male: 50, female: 50 }, avgScore: 430 }
  { id: 736, name: "重庆文理学院", province: "重庆", city: "永川", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "材料科学", "园林", "软件工程", "旅游管理"], description: "永川区公办本科。", employmentRate: 0.87, genderRatio: { male: 46, female: 54 }, avgScore: 508 },
  { id: 737, name: "重庆三峡学院", province: "重庆", city: "万州", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "环境工程", "汉语言文学", "电子信息", "旅游管理"], description: "万州区公办本科。", employmentRate: 0.86, genderRatio: { male: 46, female: 54 }, avgScore: 498 },
  { id: 738, name: "长江师范学院", province: "重庆", city: "涪陵", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "数学", "化学", "音乐学"], description: "涪陵区公办师范本科。", employmentRate: 0.86, genderRatio: { male: 32, female: 68 }, avgScore: 495 },
  { id: 739, name: "重庆第二师范学院", province: "重庆", city: "重庆", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "学前教育", "汉语言文学", "数学", "英语"], description: "重庆市属师范。", employmentRate: 0.88, genderRatio: { male: 26, female: 74 }, avgScore: 508 },
  { id: 740, name: "重庆警察学院", province: "重庆", city: "重庆", type: "政法", level: [], isPublic: true, topMajors: ["侦查学", "治安学", "刑事科学技术", "交通管理", "禁毒学"], description: "重庆市公安局直属。", employmentRate: 0.94, genderRatio: { male: 66, female: 34 }, avgScore: 540 },
  { id: 741, name: "重庆中医药学院", province: "重庆", city: "重庆", type: "医药", level: [], isPublic: true, topMajors: ["中医学", "中药学", "针灸推拿", "中西医结合", "中医康复"], description: "2023年新设本科院校。", employmentRate: 0.88, genderRatio: { male: 36, female: 64 }, avgScore: 525 },
  { id: 742, name: "西藏藏医药大学", province: "西藏", city: "拉萨", type: "医药", level: [], isPublic: true, topMajors: ["藏医学", "藏药学", "临床医学", "护理学"], description: "藏医药最高学府。", employmentRate: 0.82, genderRatio: { male: 42, female: 58 }, avgScore: 420 },
  { id: 743, name: "西藏农牧学院", province: "西藏", city: "林芝", type: "农林", level: [], isPublic: true, topMajors: ["农学", "动物科学", "林学", "草学", "食品科学"], description: "西藏农牧业人才基地。", employmentRate: 0.82, genderRatio: { male: 50, female: 50 }, avgScore: 425 },
  { id: 744, name: "甘肃医学院", province: "甘肃", city: "平凉", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "护理学", "药学", "医学检验", "预防医学"], description: "甘肃地方医学院。", employmentRate: 0.88, genderRatio: { male: 38, female: 62 }, avgScore: 468 },
  { id: 745, name: "甘肃民族师范学院", province: "甘肃", city: "合作", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "藏语言文学", "数学", "汉语言文学", "学前教育"], description: "甘南藏区唯一本科。", employmentRate: 0.83, genderRatio: { male: 34, female: 66 }, avgScore: 445 },
  { id: 746, name: "陇东学院", province: "甘肃", city: "庆阳", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "石油工程", "土木工程", "农学", "历史学"], description: "庆阳唯一公办本科。", employmentRate: 0.84, genderRatio: { male: 46, female: 54 }, avgScore: 455 },
  { id: 747, name: "兰州城市学院", province: "甘肃", city: "兰州", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "石油工程", "机械工程", "旅游管理", "音乐学"], description: "兰州市属本科。", employmentRate: 0.85, genderRatio: { male: 44, female: 56 }, avgScore: 458 },
  { id: 748, name: "兰州文理学院", province: "甘肃", city: "兰州", type: "综合", level: [], isPublic: true, topMajors: ["汉语言文学", "旅游管理", "新闻学", "艺术设计", "化学"], description: "兰州市属应用型本科。", employmentRate: 0.84, genderRatio: { male: 40, female: 60 }, avgScore: 455 },
  { id: 749, name: "兰州工业学院", province: "甘肃", city: "兰州", type: "理工", level: [], isPublic: true, topMajors: ["机械工程", "自动化", "土木工程", "计算机科学", "材料科学"], description: "甘肃省属工科本科。", employmentRate: 0.87, genderRatio: { male: 62, female: 38 }, avgScore: 462 },
  { id: 750, name: "宁夏师范学院", province: "宁夏", city: "固原", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "数学", "化学", "英语"], description: "宁夏唯一师范本科。", employmentRate: 0.85, genderRatio: { male: 30, female: 70 }, avgScore: 458 },
  { id: 751, name: "宁夏理工学院", province: "宁夏", city: "石嘴山", type: "理工", level: [], isPublic: false, topMajors: ["机械工程", "电气工程", "计算机科学", "土木工程", "会计学"], description: "宁夏民办本科。", employmentRate: 0.84, genderRatio: { male: 58, female: 42 }, avgScore: 440 },
  { id: 752, name: "银川科技学院", province: "宁夏", city: "银川", type: "理工", level: [], isPublic: false, topMajors: ["计算机科学", "能源化学", "土木工程", "会计学", "环境设计"], description: "原中国矿大银川学院。", employmentRate: 0.84, genderRatio: { male: 52, female: 48 }, avgScore: 438 },
  { id: 753, name: "银川能源学院", province: "宁夏", city: "银川", type: "理工", level: [], isPublic: false, topMajors: ["能源动力", "化学工程", "电气工程", "计算机科学", "财务管理"], description: "宁夏民办本科，能源特色。", employmentRate: 0.84, genderRatio: { male: 55, female: 45 }, avgScore: 435 },
  { id: 754, name: "新疆理工学院", province: "新疆", city: "阿克苏", type: "理工", level: [], isPublic: true, topMajors: ["计算机科学", "机械工程", "土木工程", "电气工程", "通信工程"], description: "阿克苏地区公办本科。", employmentRate: 0.85, genderRatio: { male: 58, female: 42 }, avgScore: 440 },
  { id: 755, name: "新疆科技学院", province: "新疆", city: "库尔勒", type: "财经", level: [], isPublic: true, topMajors: ["会计学", "金融学", "计算机科学", "电子商务", "法学"], description: "库尔勒市公办本科。", employmentRate: 0.85, genderRatio: { male: 42, female: 58 }, avgScore: 438 },
  { id: 756, name: "新疆政法学院", province: "新疆", city: "图木舒克", type: "政法", level: [], isPublic: true, topMajors: ["法学", "监狱学", "政治学", "公安管理", "社会工作"], description: "新疆生产建设兵团直属。", employmentRate: 0.87, genderRatio: { male: 48, female: 52 }, avgScore: 445 },
  { id: 757, name: "新疆第二医学院", province: "新疆", city: "克拉玛依", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "护理学", "口腔医学", "药学", "麻醉学"], description: "原新疆医科大学厚博学院转设。", employmentRate: 0.88, genderRatio: { male: 40, female: 60 }, avgScore: 455 },
  { id: 758, name: "新疆工程学院", province: "新疆", city: "乌鲁木齐", type: "理工", level: [], isPublic: true, topMajors: ["矿业工程", "安全工程", "机械工程", "电气工程", "土木工程"], description: "新疆工科应用型本科。", employmentRate: 0.88, genderRatio: { male: 62, female: 38 }, avgScore: 450 },
  { id: 759, name: "新疆警察学院", province: "新疆", city: "乌鲁木齐", type: "政法", level: [], isPublic: true, topMajors: ["侦查学", "治安学", "反恐警务", "刑事科学技术", "禁毒学"], description: "新疆公安厅直属。", employmentRate: 0.93, genderRatio: { male: 68, female: 32 }, avgScore: 475 },
  { id: 760, name: "内蒙古医科大学", province: "内蒙古", city: "呼和浩特", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "蒙医学", "口腔医学", "护理学", "药学"], description: "内蒙古最好的医学院。", employmentRate: 0.89, genderRatio: { male: 38, female: 62 }, avgScore: 505 },
  { id: 761, name: "内蒙古艺术学院", province: "内蒙古", city: "呼和浩特", type: "艺术", level: [], isPublic: true, topMajors: ["音乐表演", "舞蹈表演","美术学","设计学","表演"], description: "内蒙古最高艺术学府。", employmentRate: 0.82, genderRatio: { male: 36, female: 64 }, avgScore: 460 },
  { id: 762, name: "鄂尔多斯应用技术学院", province: "内蒙古", city: "鄂尔多斯", type: "理工", level: [], isPublic: true, topMajors: ["机械工程", "土木工程", "化学工程","交通运输", "计算机科学"], description: "鄂尔多斯唯一的公办本科。", employmentRate: 0.86, genderRatio: { male: 58, female: 42 }, avgScore: 460 },
  { id: 763, name: "呼和浩特民族学院", province: "内蒙古", city: "呼和浩特", type: "民族", level: [], isPublic: true, topMajors: ["小学教育", "蒙古语言文学", "数学", "音乐学", "美术学"], description: "蒙汉双语教学的民族院校。", employmentRate: 0.83, genderRatio: { male: 40, female: 60 }, avgScore: 455 },
  { id: 764, name: "山西中医药大学", province: "山西", city: "太原", type: "医药", level: [], isPublic: true, topMajors: ["中医学", "中药学", "针灸推拿", "中西医结合", "护理学"], description: "山西省属中医药院校。", employmentRate: 0.88, genderRatio: { male: 36, female: 64 }, avgScore: 515 },
  { id: 765, name: "山西工学院", province: "山西", city: "朔州", type: "理工", level: [], isPublic: true, topMajors: ["矿业工程", "机械工程","电气工程", "计算机科学","土木工程"], description: "朔州市公办本科。", employmentRate: 0.86, genderRatio: { male: 62, female: 38 }, avgScore: 458 },
  { id: 766, name: "山西科技学院", province: "山西", city: "晋城", type: "理工", level: [], isPublic: true, topMajors: ["机械工程", "计算机科学", "土木工程", "电气工程", "材料科学"], description: "晋城市公办本科。", employmentRate: 0.86, genderRatio: { male: 60, female: 40 }, avgScore: 462 },
  { id: 767, name: "山西工程技术学院", province: "山西", city: "阳泉", type: "理工", level: [], isPublic: true, topMajors: ["矿业工程", "机械工程", "土木工程", "电气工程", "测绘工程"], description: "阳泉市唯一的公办本科。", employmentRate: 0.87, genderRatio: { male: 62, female: 38 }, avgScore: 460 },
  { id: 768, name: "山西能源学院", province: "山西", city: "晋中", type: "理工", level: [], isPublic: true, topMajors: ["采矿工程", "安全工程", "能源动力", "电气工程", "机械工程"], description: "能源特色应用型本科。", employmentRate: 0.88, genderRatio: { male: 64, female: 36 }, avgScore: 465 },
  { id: 769, name: "山西传媒学院", province: "山西", city: "晋中", type: "艺术", level: [], isPublic: true, topMajors: ["广播电视学", "播音主持", "动画", "数字媒体","摄影"], description: "全国仅有的几所公办传媒本科之一。", employmentRate: 0.84, genderRatio: { male: 36, female: 64 }, avgScore: 480 },
  { id: 770, name: "太原工业学院", province: "山西", city: "太原", type: "理工", level: [], isPublic: true, topMajors: ["机械工程", "化学工程", "自动化", "材料科学","计算机科学"], description: "山西省属工科本科。", employmentRate: 0.87, genderRatio: { male: 62, female: 38 }, avgScore: 470 },
  { id: 771, name: "山西警察学院", province: "山西", city: "太原", type: "政法", level: [], isPublic: true, topMajors: ["侦查学", "治安学","交通管理","刑事科学技术","公安管理"], description: "山西省公安厅直属。", employmentRate: 0.92, genderRatio: { male: 66, female: 34 }, avgScore: 500 },
  { id: 772, name: "山西电子科技学院", province: "山西", city: "临汾", type: "理工", level: [], isPublic: true, topMajors: ["计算机科学", "电子信息", "通信工程", "自动化", "软件工程"], description: "2024年由山西师大文理学院转设。", employmentRate: 0.86, genderRatio: { male: 58, female: 42 }, avgScore: 465 },
  { id: 773, name: "河北中医药大学", province: "河北", city: "石家庄", type: "医药", level: [], isPublic: true, topMajors: ["中医学", "中药学", "针灸推拿", "中西医结合", "护理学"], description: "河北省属中医药院校。", employmentRate: 0.88, genderRatio: { male: 36, female: 64 }, avgScore: 530 },
  { id: 774, name: "承德医学院", province: "河北", city: "承德", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "护理学", "药学", "麻醉学", "中医学"], description: "河北老牌医学院。", employmentRate: 0.90, genderRatio: { male: 40, female: 60 }, avgScore: 522 },
  { id: 775, name: "河北北方学院", province: "河北", city: "张家口", type: "综合", level: [], isPublic: true, topMajors: ["临床医学", "农学", "小学教育", "药学", "计算机科学"], description: "张家口唯一的公办本科。", employmentRate: 0.85, genderRatio: { male: 44, female: 56 }, avgScore: 488 },
  { id: 776, name: "河北民族师范学院", province: "河北", city: "承德", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "满语", "旅游管理", "汉语言文学", "数学"], description: "满族文化研究特色。", employmentRate: 0.85, genderRatio: { male: 30, female: 70 }, avgScore: 478 },
  { id: 777, name: "河北环境工程学院", province: "河北", city: "秦皇岛", type: "理工", level: [], isPublic: true, topMajors: ["环境工程", "环境科学", "生态学", "园林", "环境管理"], description: "全国唯一环境类本科。", employmentRate: 0.85, genderRatio: { male: 50, female: 50 }, avgScore: 480 },
  { id: 778, name: "河北水利电力学院", province: "河北", city: "沧州", type: "理工", level: [], isPublic: true, topMajors: ["水利工程", "电气工程", "土木工程", "自动化", "给排水"], description: "水利电力特色本科。", employmentRate: 0.89, genderRatio: { male: 62, female: 38 }, avgScore: 485 },
  { id: 779, name: "河北建筑工程学院", province: "河北", city: "张家口", type: "理工", level: [], isPublic: true, topMajors: ["土木工程", "建筑学", "城乡规划", "给排水", "建筑环境"], description: "河北省属建筑类本科。", employmentRate: 0.89, genderRatio: { male: 64, female: 36 }, avgScore: 490 },
  { id: 780, name: "河南警察学院", province: "河南", city: "郑州", type: "政法", level: [], isPublic: true, topMajors: ["侦查学", "治安学", "刑事科学技术", "交通管理", "禁毒学"], description: "河南省公安厅直属。", employmentRate: 0.93, genderRatio: { male: 66, female: 34 }, avgScore: 535 },
  { id: 781, name: "中原科技学院", province: "河南", city: "郑州", type: "理工", level: [], isPublic: false, topMajors: ["计算机科学", "土木工程", "机械工程", "学前教育", "财务管理"], description: "郑州民办本科。", employmentRate: 0.84, genderRatio: { male: 48, female: 52 }, avgScore: 455 },
  { id: 782, name: "新乡工程学院", province: "河南", city: "新乡", type: "理工", level: [], isPublic: false, topMajors: ["机械工程", "计算机科学", "土木工程", "生物工程", "食品科学"], description: "原河南科技学院新科学院转设。", employmentRate: 0.85, genderRatio: { male: 56, female: 44 }, avgScore: 452 },
  { id: 783, name: "郑州经贸学院", province: "河南", city: "郑州", type: "财经", level: [], isPublic: false, topMajors: ["会计学", "金融学", "国际经济与贸易", "工商管理", "计算机科学"], description: "郑州民办财经本科。", employmentRate: 0.84, genderRatio: { male: 40, female: 60 }, avgScore: 450 },
  { id: 784, name: "商丘工学院", province: "河南", city: "商丘", type: "理工", level: [], isPublic: false, topMajors: ["机械工程", "土木工程", "计算机科学", "会计学", "护理学"], description: "商丘民办本科。", employmentRate: 0.84, genderRatio: { male: 56, female: 44 }, avgScore: 448 },
  { id: 785, name: "信阳学院", province: "河南", city: "信阳", type: "综合", level: [], isPublic: false, topMajors: ["汉语言文学", "小学教育", "英语", "计算机科学", "数学"], description: "信阳民办本科。", employmentRate: 0.84, genderRatio: { male: 40, female: 60 }, avgScore: 455 },
  { id: 786, name: "郑州商学院", province: "河南", city: "郑州", type: "财经", level: [], isPublic: false, topMajors: ["会计学", "金融学", "工商管理", "国际经济与贸易", "电子商务"], description: "郑州民办财经本科。", employmentRate: 0.84, genderRatio: { male: 40, female: 60 }, avgScore: 452 },
  { id: 787, name: "郑州升达经贸管理学院", province: "河南", city: "郑州", type: "财经", level: [], isPublic: false, topMajors: ["会计学", "金融学", "国际经济与贸易", "工商管理", "英语"], description: "郑州民办财经本科。", employmentRate: 0.84, genderRatio: { male: 38, female: 62 }, avgScore: 450 },
  { id: 788, name: "黄河科技学院", province: "河南", city: "郑州", type: "理工", level: [], isPublic: false, topMajors: ["计算机科学", "机械工程", "临床医学", "护理学", "工商管理"], description: "全国最早民办本科之一。", employmentRate: 0.85, genderRatio: { male: 50, female: 50 }, avgScore: 455 },
  { id: 789, name: "安徽艺术学院", province: "安徽", city: "合肥", type: "艺术", level: [], isPublic: true, topMajors: ["音乐表演", "舞蹈表演", "美术学", "设计学", "戏剧影视"], description: "安徽省属艺术本科。", employmentRate: 0.83, genderRatio: { male: 38, female: 62 }, avgScore: 490 },
  { id: 790, name: "皖南医学院", province: "安徽", city: "芜湖", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "麻醉学", "护理学", "口腔医学", "法医学"], description: "安徽老牌医学院。", employmentRate: 0.90, genderRatio: { male: 42, female: 58 }, avgScore: 535 },
  { id: 791, name: "蚌埠学院", province: "安徽", city: "蚌埠", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "食品科学", "机械工程", "计算机科学", "音乐学"], description: "蚌埠市属本科。", employmentRate: 0.85, genderRatio: { male: 48, female: 52 }, avgScore: 472 },
  { id: 792, name: "皖西学院", province: "安徽", city: "六安", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "生物工程", "中药学", "电子信息", "旅游管理"], description: "六安市唯一的公办本科。", employmentRate: 0.85, genderRatio: { male: 46, female: 54 }, avgScore: 478 },
  { id: 793, name: "滁州学院", province: "安徽", city: "滁州", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "地理信息", "物联网工程", "化学", "美术学"], description: "滁州唯一公办本科。", employmentRate: 0.86, genderRatio: { male: 46, female: 54 }, avgScore: 482 },
  { id: 794, name: "黄山学院", province: "安徽", city: "黄山", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "旅游管理", "园林", "外语", "美术学"], description: "黄山风景区旁的本科。", employmentRate: 0.85, genderRatio: { male: 42, female: 58 }, avgScore: 480 },
  { id: 795, name: "亳州学院", province: "安徽", city: "亳州", type: "综合", level: [], isPublic: true, topMajors: ["小学教育", "中药学", "酿酒工程", "学前教育", "汉语言文学"], description: "亳州唯一的公办本科。", employmentRate: 0.84, genderRatio: { male: 40, female: 60 }, avgScore: 468 },
  { id: 796, name: "马鞍山学院", province: "安徽", city: "马鞍山", type: "理工", level: [], isPublic: false, topMajors: ["计算机科学", "土木工程", "机械工程", "金融学", "自动化"], description: "原安工大工商学院转设。", employmentRate: 0.85, genderRatio: { male: 58, female: 42 }, avgScore: 460 },
  { id: 797, name: "合肥城市学院", province: "安徽", city: "合肥", type: "理工", level: [], isPublic: false, topMajors: ["土木工程", "建筑学", "城乡规划", "工程管理", "计算机科学"], description: "原安建大城市建设学院转设。", employmentRate: 0.85, genderRatio: { male: 62, female: 38 }, avgScore: 458 },
  { id: 798, name: "芜湖学院", province: "安徽", city: "芜湖", type: "综合", level: [], isPublic: false, topMajors: ["计算机科学", "汉语言文学", "英语", "工商管理", "学前教育"], description: "原安师大皖江学院转设。", employmentRate: 0.84, genderRatio: { male: 44, female: 56 }, avgScore: 462 },
  { id: 799, name: "安徽信息工程学院", province: "安徽", city: "芜湖", type: "理工", level: [], isPublic: false, topMajors: ["计算机科学", "软件工程", "大数据","机械工程", "电子信息"], description: "科大讯飞参与办学。", employmentRate: 0.87, genderRatio: { male: 62, female: 38 }, avgScore: 465 },
  { id: 800, name: "阜阳理工学院", province: "安徽", city: "阜阳", type: "理工", level: [], isPublic: false, topMajors: ["计算机科学", "机械工程", "土木工程", "经济学", "汉语言文学"], description: "原阜阳师大信工学院转设。", employmentRate: 0.84, genderRatio: { male: 52, female: 48 }, avgScore: 458 },
  { id: 801, name: "南昌医学院", province: "江西", city: "南昌", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "护理学", "药学", "中西医结合", "预防医学"], description: "2021年新设公办医学本科。", employmentRate: 0.88, genderRatio: { male: 40, female: 60 }, avgScore: 515 },
  { id: 802, name: "赣东学院", province: "江西", city: "抚州", type: "理工", level: [], isPublic: true, topMajors: ["计算机科学", "机械工程", "土木工程", "会计学", "电子信息"], description: "原东华理工长江学院转设。", employmentRate: 0.85, genderRatio: { male: 56, female: 44 }, avgScore: 465 },
  { id: 803, name: "赣南科技学院", province: "江西", city: "赣州", type: "理工", level: [], isPublic: true, topMajors: ["计算机科学", "机械工程", "矿业工程", "土木工程", "会计学"], description: "原江西理工应科院转设。", employmentRate: 0.86, genderRatio: { male: 58, female: 42 }, avgScore: 468 },
  { id: 804, name: "南昌应用技术师范学院", province: "江西", city: "南昌", type: "师范", level: [], isPublic: false, topMajors: ["小学教育", "汉语言文学", "英语", "数学", "计算机科学"], description: "民办师范本科。", employmentRate: 0.84, genderRatio: { male: 32, female: 68 }, avgScore: 455 },
  { id: 805, name: "南昌工学院", province: "江西", city: "南昌", type: "理工", level: [], isPublic: false, topMajors: ["土木工程", "机械工程", "计算机科学", "会计学", "电子商务"], description: "南昌民办本科。", employmentRate: 0.84, genderRatio: { male: 56, female: 44 }, avgScore: 452 },
  { id: 806, name: "共青科技职业学院", province: "江西", city: "共青城", type: "理工", level: [], isPublic: false, topMajors: ["机械制造", "计算机应用", "电子商务", "建筑工程", "航海技术"], description: "共青城民办职业本科。", employmentRate: 0.84, genderRatio: { male: 60, female: 40 }, avgScore: 445 },
  { id: 807, name: "江西服装学院", province: "江西", city: "南昌", type: "艺术", level: [], isPublic: false, topMajors: ["服装设计", "艺术设计", "纺织工程", "数字媒体", "时尚管理"], description: "全国最大服装类民办本科。", employmentRate: 0.85, genderRatio: { male: 30, female: 70 }, avgScore: 445 },
  { id: 808, name: "江西工程学院", province: "江西", city: "新余", type: "理工", level: [], isPublic: false, topMajors: ["电子信息", "计算机科学", "机械工程", "土木工程", "会计学"], description: "新余民办本科。", employmentRate: 0.83, genderRatio: { male: 60, female: 40 }, avgScore: 442 },
  { id: 809, name: "江西应用科技学院", province: "江西", city: "南昌", type: "理工", level: [], isPublic: false, topMajors: ["计算机科学", "土木工程", "机械工程", "旅游管理", "财务管理"], description: "南昌民办应用型本科。", employmentRate: 0.84, genderRatio: { male: 55, female: 45 }, avgScore: 442 },
  { id: 810, name: "厦门医学院", province: "福建", city: "厦门", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "口腔医学", "护理学", "药学", "医学检验"], description: "厦门市属医学院。", employmentRate: 0.90, genderRatio: { male: 38, female: 62 }, avgScore: 530 },
  { id: 811, name: "福建警察学院", province: "福建", city: "福州", type: "政法", level: [], isPublic: true, topMajors: ["侦查学", "治安学", "刑事科学技术", "经济犯罪侦查", "交通管理"], description: "福建省公安厅直属。", employmentRate: 0.93, genderRatio: { male: 66, female: 34 }, avgScore: 535 },
  { id: 812, name: "福建技术师范学院", province: "福建", city: "福清", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "汉语言文学", "数学", "食品科学", "新能源"], description: "原福建师大福清分校。", employmentRate: 0.86, genderRatio: { male: 38, female: 62 }, avgScore: 490 },
  { id: 813, name: "福建商学院", province: "福建", city: "福州", type: "财经", level: [], isPublic: true, topMajors: ["会计学", "金融学", "国际商务", "市场营销", "电子商务"], description: "福建省属财经本科。", employmentRate: 0.87, genderRatio: { male: 38, female: 62 }, avgScore: 495 },
  { id: 814, name: "厦门华厦学院", province: "福建", city: "厦门", type: "理工", level: [], isPublic: false, topMajors: ["通信工程", "食品质量", "物流管理", "制药工程", "财务管理"], description: "厦门民办本科。", employmentRate: 0.84, genderRatio: { male: 44, female: 56 }, avgScore: 455 },
  { id: 815, name: "闽南理工学院", province: "福建", city: "石狮", type: "理工", level: [], isPublic: false, topMajors: ["机械工程", "土木工程", "计算机科学", "电气工程", "财务管理"], description: "石狮民办本科。", employmentRate: 0.84, genderRatio: { male: 60, female: 40 }, avgScore: 452 },
  { id: 816, name: "闽南科技学院", province: "福建", city: "泉州", type: "理工", level: [], isPublic: false, topMajors: ["计算机科学", "光电信息", "生物工程", "工商管理", "英语"], description: "原福建师大闽南科技学院转设。", employmentRate: 0.84, genderRatio: { male: 52, female: 48 }, avgScore: 450 },
  { id: 817, name: "福州理工学院", province: "福建", city: "福州", type: "理工", level: [], isPublic: false, topMajors: ["计算机科学", "土木工程","电子信息", "金融工程", "护理学"], description: "福州民办本科。", employmentRate: 0.84, genderRatio: { male: 55, female: 45 }, avgScore: 455 },
  { id: 818, name: "仰恩大学", province: "福建", city: "泉州", type: "综合", level: [], isPublic: false, topMajors: ["会计学", "金融学", "计算机科学", "法学", "英语"], description: "福建最早的民办本科之一。", employmentRate: 0.84, genderRatio: { male: 46, female: 54 }, avgScore: 460 },
  { id: 819, name: "辽宁理工学院", province: "辽宁", city: "锦州", type: "理工", level: [], isPublic: false, topMajors: ["计算机科学", "机械工程", "土木工程", "会计学", "英语"], description: "锦州民办本科。", employmentRate: 0.84, genderRatio: { male: 56, female: 44 }, avgScore: 445 },
  { id: 820, name: "沈阳城市学院", province: "辽宁", city: "沈阳", type: "综合", level: [], isPublic: false, topMajors: ["计算机科学", "建筑学", "会计学", "新闻学", "旅游管理"], description: "沈阳民办本科。", employmentRate: 0.84, genderRatio: { male: 48, female: 52 }, avgScore: 448 },
  { id: 821, name: "沈阳科技学院", province: "辽宁", city: "沈阳", type: "理工", level: [], isPublic: false, topMajors: ["化学工程", "机械工程", "计算机科学", "生物工程", "自动化"], description: "原沈阳化工科亚学院转设。", employmentRate: 0.85, genderRatio: { male: 58, female: 42 }, avgScore: 445 },
  { id: 822, name: "大连科技学院", province: "辽宁", city: "大连", type: "理工", level: [], isPublic: false, topMajors: ["计算机科学", "软件工程", "轨道交通", "电气工程", "机械工程"], description: "大连民办本科。", employmentRate: 0.85, genderRatio: { male: 58, female: 42 }, avgScore: 450 },
  { id: 823, name: "大连财经学院", province: "辽宁", city: "大连", type: "财经", level: [], isPublic: false, topMajors: ["会计学", "金融学", "国际经济与贸易", "工商管理", "法学"], description: "大连民办财经本科。", employmentRate: 0.85, genderRatio: { male: 36, female: 64 }, avgScore: 452 },
  { id: 824, name: "大连东软信息学院", province: "辽宁", city: "大连", type: "理工", level: [], isPublic: false, topMajors: ["软件工程", "计算机科学", "数字媒体", "电子商务", "大数据"], description: "东软集团创办，IT特色鲜明。", employmentRate: 0.88, genderRatio: { male: 62, female: 38 }, avgScore: 458 },
  { id: 825, name: "辽宁何氏医学院", province: "辽宁", city: "沈阳", type: "医药", level: [], isPublic: false, topMajors: ["临床医学", "护理学", "药学", "眼视光学", "医学影像"], description: "民办医学院，眼科特色。", employmentRate: 0.87, genderRatio: { male: 38, female: 62 }, avgScore: 448 },
  { id: 826, name: "辽宁传媒学院", province: "辽宁", city: "沈阳", type: "艺术", level: [], isPublic: false, topMajors: ["广播电视学", "广告学", "数字媒体", "动画", "播音主持"], description: "东北民办传媒类本科。", employmentRate: 0.83, genderRatio: { male: 36, female: 64 }, avgScore: 442 },
  { id: 827, name: "辽宁财贸学院", province: "辽宁", city: "葫芦岛", type: "财经", level: [], isPublic: false, topMajors: ["会计学", "金融学", "经济学", "审计学", "财务管理"], description: "葫芦岛民办财经本科。", employmentRate: 0.83, genderRatio: { male: 40, female: 60 }, avgScore: 440 },
  { id: 828, name: "吉林外国语大学", province: "吉林", city: "长春", type: "语言", level: [], isPublic: false, topMajors: ["英语", "翻译", "日语", "商务英语", "教育学"], description: "民办语言类强校。", employmentRate: 0.88, genderRatio: { male: 22, female: 78 }, avgScore: 480 },
  { id: 829, name: "长春财经学院", province: "吉林", city: "长春", type: "财经", level: [], isPublic: false, topMajors: ["会计学", "金融学", "经济学", "工商管理", "财务管理"], description: "长春民办财经本科。", employmentRate: 0.85, genderRatio: { male: 38, female: 62 }, avgScore: 452 },
  { id: 830, name: "长春建筑学院", province: "吉林", city: "长春", type: "理工", level: [], isPublic: false, topMajors: ["建筑学", "土木工程", "城乡规划", "风景园林", "工程管理"], description: "民办建筑类本科。", employmentRate: 0.86, genderRatio: { male: 62, female: 38 }, avgScore: 450 },
  { id: 831, name: "长春科技学院", province: "吉林", city: "长春", type: "理工", level: [], isPublic: false, topMajors: ["机械工程", "计算机科学", "土木工程", "动物科学", "财务管理"], description: "长春民办本科。", employmentRate: 0.84, genderRatio: { male: 56, female: 44 }, avgScore: 445 },
  { id: 832, name: "长春人文学院", province: "吉林", city: "长春", type: "综合", level: [], isPublic: false, topMajors: ["汉语言文学", "社会工作", "学前教育", "英语", "计算机科学"], description: "原东北师大人文学院转设。", employmentRate: 0.84, genderRatio: { male: 36, female: 64 }, avgScore: 450 },
  { id: 833, name: "长春光华学院", province: "吉林", city: "长春", type: "综合", level: [], isPublic: false, topMajors: ["汉语言文学", "会计学", "英语", "计算机科学", "工商管理"], description: "长春民办本科。", employmentRate: 0.84, genderRatio: { male: 40, female: 60 }, avgScore: 448 },
  { id: 834, name: "长春电子科技学院", province: "吉林", city: "长春", type: "理工", level: [], isPublic: false, topMajors: ["计算机科学", "电子信息", "通信工程", "光电信息", "自动化"], description: "原长春理工光电信息学院转设。", employmentRate: 0.85, genderRatio: { male: 60, female: 40 }, avgScore: 448 },
  { id: 835, name: "吉林建筑科技学院", province: "吉林", city: "长春", type: "理工", level: [], isPublic: false, topMajors: ["建筑学", "土木工程", "城乡规划", "给排水", "建筑环境"], description: "民办建筑类本科。", employmentRate: 0.85, genderRatio: { male: 62, female: 38 }, avgScore: 445 },
  { id: 836, name: "黑龙江东方学院", province: "黑龙江", city: "哈尔滨", type: "综合", level: [], isPublic: false, topMajors: ["计算机科学", "汉语言文学", "食品科学", "乳品工程", "金融学"], description: "黑龙江最早的民办本科。", employmentRate: 0.84, genderRatio: { male: 44, female: 56 }, avgScore: 445 },
  { id: 837, name: "黑龙江财经学院", province: "黑龙江", city: "哈尔滨", type: "财经", level: [], isPublic: false, topMajors: ["会计学", "金融学", "国际经济与贸易", "工商管理", "财务管理"], description: "哈尔滨民办财经本科。", employmentRate: 0.84, genderRatio: { male: 36, female: 64 }, avgScore: 442 },
  { id: 838, name: "黑龙江工商学院", province: "黑龙江", city: "哈尔滨", type: "财经", level: [], isPublic: false, topMajors: ["会计学", "工商管理", "计算机科学", "电子商务", "市场营销"], description: "哈尔滨民办本科。", employmentRate: 0.84, genderRatio: { male: 44, female: 56 }, avgScore: 440 },
  { id: 839, name: "哈尔滨石油学院", province: "黑龙江", city: "哈尔滨", type: "理工", level: [], isPublic: false, topMajors: ["石油工程", "化学工程", "机械工程", "土木工程", "自动化"], description: "民办石油特色本科。", employmentRate: 0.86, genderRatio: { male: 62, female: 38 }, avgScore: 442 },
  { id: 840, name: "哈尔滨剑桥学院", province: "黑龙江", city: "哈尔滨", type: "综合", level: [], isPublic: false, topMajors: ["学前教育", "小学教育", "英语", "计算机科学", "会计学"], description: "哈尔滨民办本科，教育类特色。", employmentRate: 0.84, genderRatio: { male: 32, female: 68 }, avgScore: 440 },
  { id: 841, name: "哈尔滨广厦学院", province: "黑龙江", city: "哈尔滨", type: "综合", level: [], isPublic: false, topMajors: ["会计学", "计算机科学", "国际经济与贸易", "汉语言文学", "艺术设计"], description: "哈尔滨民办本科。", employmentRate: 0.84, genderRatio: { male: 40, female: 60 }, avgScore: 438 },
  { id: 842, name: "哈尔滨华德学院", province: "黑龙江", city: "哈尔滨", type: "理工", level: [], isPublic: false, topMajors: ["机械工程", "电气工程", "土木工程", "计算机科学", "焊接工程"], description: "哈尔滨民办工科本科。", employmentRate: 0.86, genderRatio: { male: 62, female: 38 }, avgScore: 442 },
  { id: 843, name: "哈尔滨远东理工学院", province: "黑龙江", city: "哈尔滨", type: "理工", level: [], isPublic: false, topMajors: ["机械工程", "土木工程", "计算机科学", "机器人工程", "电气工程"], description: "哈尔滨民办工科本科。", employmentRate: 0.85, genderRatio: { male: 62, female: 38 }, avgScore: 440 },
  { id: 844, name: "黑龙江外国语学院", province: "黑龙江", city: "哈尔滨", type: "语言", level: [], isPublic: false, topMajors: ["英语", "俄语", "日语", "翻译", "商务英语"], description: "民办外语本科。", employmentRate: 0.84, genderRatio: { male: 24, female: 76 }, avgScore: 438 },
  { id: 845, name: "黑龙江工商职业技术学院", province: "黑龙江", city: "哈尔滨", type: "理工", level: [], isPublic: true, topMajors: ["机械制造", "电气自动化", "计算机应用", "数控技术", "汽车检测"], description: "黑龙江省属职业本科。", employmentRate: 0.87, genderRatio: { male: 62, female: 38 }, avgScore: 420 },
  { id: 846, name: "齐齐哈尔工程学院", province: "黑龙江", city: "齐齐哈尔", type: "理工", level: [], isPublic: false, topMajors: ["土木工程", "机械工程", "计算机科学", "汽车服务", "财务管理"], description: "齐齐哈尔民办本科。", employmentRate: 0.84, genderRatio: { male: 58, female: 42 }, avgScore: 435 },
  { id: 847, name: "新疆天山职业技术大学", province: "新疆", city: "乌鲁木齐", type: "理工", level: [], isPublic: false, topMajors: ["计算机应用", "建筑工程", "机械制造", "电子商务", "会计学"], description: "新疆民办职业本科。", employmentRate: 0.83, genderRatio: { male: 56, female: 44 }, avgScore: 420 },
  { id: 848, name: "海南医科大学", province: "海南", city: "海口", type: "医药", level: [], isPublic: true, topMajors: ["临床医学", "口腔医学", "热带医学", "护理学", "药学"], description: "海南最好的医学院。", employmentRate: 0.89, genderRatio: { male: 40, female: 60 }, avgScore: 550 },
  { id: 849, name: "琼台师范学院", province: "海南", city: "海口", type: "师范", level: [], isPublic: true, topMajors: ["小学教育", "学前教育", "汉语言文学", "数学", "美术学"], description: "海南基础教育师资基地。", employmentRate: 0.86, genderRatio: { male: 28, female: 72 }, avgScore: 510 },
  { id: 850, name: "海南警察学院", province: "海南", city: "海口", type: "政法", level: [], isPublic: true, topMajors: ["侦查学", "治安学", "网络安全", "交通管理", "刑事科学技术"], description: "2024年在建，海南公安人才培养。", employmentRate: 0.92, genderRatio: { male: 64, female: 36 }, avgScore: 520 },
  { id: 851, name: "海口经济学院", province: "海南", city: "海口", type: "财经", level: [], isPublic: false, topMajors: ["会计学", "金融学", "旅游管理", "计算机科学", "电子商务"], description: "海南民办本科。", employmentRate: 0.83, genderRatio: { male: 44, female: 56 }, avgScore: 450 },
  { id: 852, name: "青海理工学院", province: "青海", city: "西宁", type: "理工", level: [], isPublic: true, topMajors: ["计算机科学", "生态学", "土木工程", "环境科学", "新能源"], description: "2024年新设公办本科。", employmentRate: 0.84, genderRatio: { male: 55, female: 45 }, avgScore: 442 },
  { id: 853, name: "青海职业技术大学", province: "青海", city: "西宁", type: "理工", level: [], isPublic: true, topMajors: ["交通运输", "汽车服务", "建筑工程", "计算机应用", "旅游管理"], description: "2024年升格。", employmentRate: 0.86, genderRatio: { male: 58, female: 42 }, avgScore: 430 },
  { id: 854, name: "青海大学昆仑学院", province: "青海", city: "西宁", type: "综合", level: [], isPublic: false, topMajors: ["经济学", "工商管理", "计算机科学", "土木工程", "电气工程"], description: "青海大学独立学院。", employmentRate: 0.83, genderRatio: { male: 48, female: 52 }, avgScore: 435 }
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
  },
  "福建": {
    "2025": {
      "物理类": { "本科线": 428, "特控线": 518, "专科线": 220 },
      "历史类": { "本科线": 431, "特控线": 531, "专科线": 220 }
    },
    "2024": {
      "物理类": { "本科线": 431, "特控线": 518, "专科线": 220 },
      "历史类": { "本科线": 441, "特控线": 533, "专科线": 220 }
    }
  },
  "辽宁": {
    "2025": {
      "物理类": { "本科线": 362, "特控线": 494, "专科线": 150 },
      "历史类": { "本科线": 404, "特控线": 500, "专科线": 150 }
    },
    "2024": {
      "物理类": { "本科线": 368, "特控线": 494, "专科线": 150 },
      "历史类": { "本科线": 404, "特控线": 503, "专科线": 150 }
    }
  },
  "天津": {
    "2025": { "综合": { "本科线": 463, "特控线": 563, "专科线": 160 } },
    "2024": { "综合": { "本科线": 463, "特控线": 563, "专科线": 160 } }
  },
  "重庆": {
    "2025": {
      "物理类": { "本科线": 411, "特控线": 500, "专科线": 180 },
      "历史类": { "本科线": 415, "特控线": 506, "专科线": 180 }
    },
    "2024": {
      "物理类": { "本科线": 415, "特控线": 499, "专科线": 180 },
      "历史类": { "本科线": 421, "特控线": 506, "专科线": 180 }
    }
  },
  "安徽": {
    "2025": {
      "物理类": { "本科线": 427, "特控线": 514, "专科线": 200 },
      "历史类": { "本科线": 451, "特控线": 527, "专科线": 200 }
    },
    "2024": {
      "物理类": { "本科线": 435, "特控线": 514, "专科线": 200 },
      "历史类": { "本科线": 454, "特控线": 528, "专科线": 200 }
    }
  },
  "江西": {
    "2025": {
      "物理类": { "本科线": 443, "特控线": 518, "专科线": 200 },
      "历史类": { "本科线": 463, "特控线": 533, "专科线": 200 }
    },
    "2024": {
      "物理类": { "本科线": 445, "特控线": 518, "专科线": 200 },
      "历史类": { "本科线": 463, "特控线": 532, "专科线": 200 }
    }
  },
  "黑龙江": {
    "2025": {
      "物理类": { "本科线": 308, "特控线": 429, "专科线": 160 },
      "历史类": { "本科线": 354, "特控线": 430, "专科线": 160 }
    },
    "2024": {
      "物理类": { "本科线": 318, "特控线": 427, "专科线": 160 },
      "历史类": { "本科线": 354, "特控线": 432, "专科线": 160 }
    }
  },
  "吉林": {
    "2025": {
      "物理类": { "本科线": 305, "特控线": 463, "专科线": 150 },
      "历史类": { "本科线": 341, "特控线": 483, "专科线": 150 }
    },
    "2024": {
      "物理类": { "本科线": 317, "特控线": 463, "专科线": 150 },
      "历史类": { "本科线": 353, "特控线": 486, "专科线": 150 }
    }
  },
  "陕西": {
    "2025": {
      "理科": { "本科一批": 449, "本科二批": 362, "专科线": 150 },
      "文科": { "本科一批": 484, "本科二批": 397, "专科线": 150 }
    },
    "2024": {
      "理科": { "本科一批": 447, "本科二批": 363, "专科线": 150 },
      "文科": { "本科一批": 488, "本科二批": 402, "专科线": 150 }
    }
  },
  "河北": {
    "2025": {
      "物理类": { "本科线": 430, "特控线": 492, "专科线": 200 },
      "历史类": { "本科线": 443, "特控线": 506, "专科线": 200 }
    },
    "2024": {
      "物理类": { "本科线": 430, "特控线": 492, "专科线": 200 },
      "历史类": { "本科线": 443, "特控线": 506, "专科线": 200 }
    }
  },
  "山西": {
    "2025": {
      "理科": { "本科一批": 498, "本科二批": 418, "专科线": 130 },
      "文科": { "本科一批": 516, "本科二批": 446, "专科线": 130 }
    },
    "2024": {
      "理科": { "本科一批": 498, "本科二批": 417, "专科线": 130 },
      "文科": { "本科一批": 516, "本科二批": 446, "专科线": 130 }
    }
  },
  "内蒙古": {
    "2025": {
      "理科": { "本科一批": 434, "本科二批": 333, "专科线": 160 },
      "文科": { "本科一批": 459, "本科二批": 377, "专科线": 160 }
    },
    "2024": {
      "理科": { "本科一批": 434, "本科二批": 333, "专科线": 160 },
      "文科": { "本科一批": 468, "本科二批": 381, "专科线": 160 }
    }
  },
  "广西": {
    "2025": {
      "物理类": { "本科线": 375, "特控线": 518, "专科线": 180 },
      "历史类": { "本科线": 395, "特控线": 501, "专科线": 180 }
    },
    "2024": {
      "物理类": { "本科线": 371, "特控线": 475, "专科线": 180 },
      "历史类": { "本科线": 400, "特控线": 528, "专科线": 180 }
    }
  },
  "海南": {
    "2025": { "综合": { "本科线": 471, "特控线": 569, "专科线": 250 } },
    "2024": { "综合": { "本科线": 483, "特控线": 568, "专科线": 250 } }
  },
  "贵州": {
    "2025": {
      "物理类": { "本科线": 371, "特控线": 482, "专科线": 180 },
      "历史类": { "本科线": 446, "特控线": 529, "专科线": 180 }
    },
    "2024": {
      "物理类": { "本科线": 371, "特控线": 475, "专科线": 180 },
      "历史类": { "本科线": 450, "特控线": 522, "专科线": 180 }
    }
  },
  "云南": {
    "2025": {
      "理科": { "本科一批": 505, "本科二批": 430, "专科线": 200 },
      "文科": { "本科一批": 555, "本科二批": 480, "专科线": 200 }
    },
    "2024": {
      "理科": { "本科一批": 485, "本科二批": 405, "专科线": 200 },
      "文科": { "本科一批": 565, "本科二批": 495, "专科线": 200 }
    }
  },
  "西藏": {
    "2025": {
      "理科": { "本科一批": 400, "本科二批": 300, "专科线": 180 },
      "文科": { "本科一批": 435, "本科二批": 315, "专科线": 180 }
    },
    "2024": {
      "理科": { "本科一批": 400, "本科二批": 300, "专科线": 180 },
      "文科": { "本科一批": 430, "本科二批": 310, "专科线": 180 }
    }
  },
  "甘肃": {
    "2025": {
      "物理类": { "本科线": 358, "特控线": 488, "专科线": 160 },
      "历史类": { "本科线": 415, "特控线": 516, "专科线": 160 }
    },
    "2024": {
      "物理类": { "本科线": 355, "特控线": 480, "专科线": 160 },
      "历史类": { "本科线": 405, "特控线": 510, "专科线": 160 }
    }
  },
  "青海": {
    "2025": {
      "理科": { "本科一批": 363, "本科二批": 308, "专科线": 150 },
      "文科": { "本科一批": 405, "本科二批": 375, "专科线": 150 }
    },
    "2024": {
      "理科": { "本科一批": 363, "本科二批": 308, "专科线": 150 },
      "文科": { "本科一批": 405, "本科二批": 375, "专科线": 150 }
    }
  },
  "宁夏": {
    "2025": {
      "理科": { "本科一批": 397, "本科二批": 335, "专科线": 150 },
      "文科": { "本科一批": 488, "本科二批": 415, "专科线": 150 }
    },
    "2024": {
      "理科": { "本科一批": 397, "本科二批": 335, "专科线": 150 },
      "文科": { "本科一批": 488, "本科二批": 419, "专科线": 150 }
    }
  },
  "新疆": {
    "2025": {
      "理科": { "本科一批": 405, "本科二批": 302, "专科线": 140 },
      "文科": { "本科一批": 443, "本科二批": 334, "专科线": 140 }
    },
    "2024": {
      "理科": { "本科一批": 400, "本科二批": 290, "专科线": 140 },
      "文科": { "本科一批": 435, "本科二批": 325, "专科线": 140 }
    }
  }
};

// ---------- 资料包产品 ----------
const materials = [
  {
    id: "m1",
    name: "2026高考志愿填报完全指南",
    price: 29.9,
    originalPrice: 59.9,
    cover: "📕",
    desc: "60页超全攻略！包含填报流程详解、平行志愿规则、退档避坑指南、各批次填报策略。看完你就是半个专家。",
    highlights: ["平行志愿怎么填不亏分", "退档/滑档怎么避免", "提前批和普通批怎么选", "征集志愿是什么"],
    tag: "最畅销"
  },
  {
    id: "m2",
    name: "全国高校专业详解大全",
    price: 24.9,
    originalPrice: 49.9,
    cover: "📗",
    desc: "覆盖200+热门专业！每个专业学什么、课程难不难、就业方向、薪资水平、适合什么性格。",
    highlights: ["计算机类各方向对比", "医学类学制说明", "文科专业出路分析", "'天坑专业'真的坑吗"],
    tag: "热门"
  },
  {
    id: "m3",
    name: "各省近三年分数线汇总",
    price: 14.9,
    originalPrice: 29.9,
    cover: "📊",
    desc: "Excel可筛选表格！涵盖30省近3年各批次分数线+100+院校录取最低分/位次。",
    highlights: ["30个省份全覆盖", "2023-2025三年数据", "可筛选可排序", "含位次对照表"],
    tag: "实用"
  },
  {
    id: "m4",
    name: "女生专属：适合女生的大学专业推荐",
    price: 19.9,
    originalPrice: 39.9,
    cover: "🌸",
    desc: "专为女生整理！从就业前景、工作环境、性别友好度等维度分析推荐。避开'重男轻女'行业。",
    highlights: ["就业不歧视女生的专业", "工作环境舒适体面", "女生薪资天花板高的行业", "真实学姐经验分享"],
    tag: "女生必看"
  },
  {
    id: "m5",
    name: "全套打包：志愿填报大礼包",
    price: 59.9,
    originalPrice: 119.5,
    cover: "🎁",
    desc: "以上四份资料一键打包！还额外赠送「大学四年规划指南」和「考研保研科普」。",
    highlights: ["四份资料全部包含", "额外赠送2份", "一次购买永久更新", "加学姐微信随时答疑"],
    tag: "最划算",
    isBundle: true
  }
];

// ---------- 大学录取分数线参考（多省数据）----------
// 数据为近年参考值，实际以各省教育考试院公布为准
const uniScores = {
  "广东": {
    "2025": {
      "物理类": [
        { name: "北京大学", minScore: 694, rank: 83 }, { name: "清华大学", minScore: 693, rank: 88 }, { name: "复旦大学", minScore: 682, rank: 274 }, { name: "上海交通大学", minScore: 681, rank: 298 }, { name: "浙江大学", minScore: 676, rank: 457 }, { name: "中国科学技术大学", minScore: 675, rank: 492 }, { name: "南京大学", minScore: 672, rank: 601 }, { name: "中国人民大学", minScore: 670, rank: 682 }, { name: "北京航空航天大学", minScore: 658, rank: 1432 }, { name: "同济大学", minScore: 655, rank: 1689 }, { name: "武汉大学", minScore: 648, rank: 2345 }, { name: "华中科技大学", minScore: 646, rank: 2567 }, { name: "西安交通大学", minScore: 644, rank: 2789 }, { name: "电子科技大学", minScore: 643, rank: 2912 }, { name: "南开大学", minScore: 642, rank: 3010 }, { name: "北京师范大学", minScore: 640, rank: 3288 }, { name: "天津大学", minScore: 638, rank: 3533 }, { name: "中山大学", minScore: 635, rank: 3956 }, { name: "华南理工大学", minScore: 628, rank: 5123 }, { name: "厦门大学", minScore: 626, rank: 5488 }, { name: "四川大学", minScore: 620, rank: 6712 }, { name: "中南大学", minScore: 618, rank: 7067 }, { name: "山东大学", minScore: 614, rank: 7890 }, { name: "重庆大学", minScore: 610, rank: 8712 }, { name: "深圳大学", minScore: 608, rank: 9134 }, { name: "暨南大学", minScore: 606, rank: 9532 }, { name: "西南财经大学", minScore: 603, rank: 10235 }, { name: "中南财经政法大学", minScore: 598, rank: 11456 }, { name: "华南师范大学", minScore: 592, rank: 12890 }, { name: "南方医科大学", minScore: 588, rank: 13987 }
      ],
      "历史类": [
        { name: "北京大学", minScore: 663, rank: 35 }, { name: "清华大学", minScore: 662, rank: 38 }, { name: "复旦大学", minScore: 655, rank: 87 }, { name: "上海交通大学", minScore: 654, rank: 92 }, { name: "中国人民大学", minScore: 648, rank: 156 }, { name: "南京大学", minScore: 645, rank: 198 }, { name: "浙江大学", minScore: 642, rank: 245 }, { name: "武汉大学", minScore: 632, rank: 456 }, { name: "南开大学", minScore: 626, rank: 612 }, { name: "北京师范大学", minScore: 624, rank: 668 }, { name: "中山大学", minScore: 620, rank: 801 }, { name: "同济大学", minScore: 616, rank: 945 }, { name: "厦门大学", minScore: 614, rank: 1023 }, { name: "华东师范大学", minScore: 612, rank: 1098 }, { name: "中国政法大学", minScore: 610, rank: 1176 }, { name: "上海财经大学", minScore: 608, rank: 1256 }, { name: "对外经济贸易大学", minScore: 605, rank: 1389 }, { name: "暨南大学", minScore: 598, rank: 1789 }, { name: "中国传媒大学", minScore: 595, rank: 1956 }, { name: "中南财经政法大学", minScore: 590, rank: 2267 }, { name: "华南师范大学", minScore: 585, rank: 2623 }, { name: "深圳大学", minScore: 582, rank: 2856 }, { name: "西南政法大学", minScore: 578, rank: 3167 }
      ]
    }
  },
  "四川": {
    "2025": {
      "理科": [
        { name: "北京大学", minScore: 698, rank: 55 }, { name: "清华大学", minScore: 697, rank: 62 }, { name: "复旦大学", minScore: 685, rank: 213 }, { name: "上海交通大学", minScore: 684, rank: 228 }, { name: "浙江大学", minScore: 680, rank: 343 }, { name: "中国科学技术大学", minScore: 678, rank: 396 }, { name: "南京大学", minScore: 675, rank: 487 }, { name: "中国人民大学", minScore: 673, rank: 538 }, { name: "北京航空航天大学", minScore: 665, rank: 897 }, { name: "同济大学", minScore: 662, rank: 1068 }, { name: "西安交通大学", minScore: 658, rank: 1289 }, { name: "武汉大学", minScore: 655, rank: 1467 }, { name: "华中科技大学", minScore: 652, rank: 1634 }, { name: "南开大学", minScore: 650, rank: 1756 }, { name: "电子科技大学", minScore: 648, rank: 1892 }, { name: "北京师范大学", minScore: 645, rank: 2123 }, { name: "天津大学", minScore: 642, rank: 2345 }, { name: "四川大学", minScore: 636, rank: 2876 }, { name: "厦门大学", minScore: 634, rank: 3067 }, { name: "中山大学", minScore: 632, rank: 3256 }, { name: "华南理工大学", minScore: 628, rank: 3678 }, { name: "中南大学", minScore: 626, rank: 3890 }, { name: "西南交通大学", minScore: 618, rank: 4823 }, { name: "重庆大学", minScore: 615, rank: 5234 }, { name: "西南财经大学", minScore: 608, rank: 6234 }
      ],
      "文科": [
        { name: "北京大学", minScore: 656, rank: 25 }, { name: "清华大学", minScore: 655, rank: 28 }, { name: "复旦大学", minScore: 648, rank: 62 }, { name: "上海交通大学", minScore: 647, rank: 68 }, { name: "中国人民大学", minScore: 642, rank: 95 }, { name: "南京大学", minScore: 638, rank: 128 }, { name: "浙江大学", minScore: 635, rank: 156 }, { name: "武汉大学", minScore: 626, rank: 267 }, { name: "南开大学", minScore: 622, rank: 323 }, { name: "北京师范大学", minScore: 620, rank: 356 }, { name: "中山大学", minScore: 614, rank: 467 }, { name: "厦门大学", minScore: 610, rank: 545 }, { name: "华东师范大学", minScore: 608, rank: 589 }, { name: "四川大学", minScore: 596, rank: 923 }, { name: "中国政法大学", minScore: 595, rank: 956 }, { name: "西南财经大学", minScore: 590, rank: 1123 }
      ]
    }
  },
  "湖北": {
    "2025": {
      "物理类": [
        { name: "北京大学", minScore: 691, rank: 65 }, { name: "清华大学", minScore: 690, rank: 72 }, { name: "复旦大学", minScore: 678, rank: 234 }, { name: "上海交通大学", minScore: 677, rank: 248 }, { name: "浙江大学", minScore: 673, rank: 356 }, { name: "中国科学技术大学", minScore: 671, rank: 398 }, { name: "南京大学", minScore: 668, rank: 478 }, { name: "中国人民大学", minScore: 666, rank: 523 }, { name: "北京航空航天大学", minScore: 656, rank: 912 }, { name: "同济大学", minScore: 652, rank: 1098 }, { name: "武汉大学", minScore: 645, rank: 1523 }, { name: "华中科技大学", minScore: 643, rank: 1634 }, { name: "西安交通大学", minScore: 640, rank: 1823 }, { name: "南开大学", minScore: 637, rank: 2012 }, { name: "电子科技大学", minScore: 635, rank: 2145 }, { name: "北京师范大学", minScore: 633, rank: 2289 }, { name: "天津大学", minScore: 630, rank: 2512 }, { name: "中山大学", minScore: 628, rank: 2678 }, { name: "厦门大学", minScore: 625, rank: 2956 }, { name: "四川大学", minScore: 620, rank: 3423 }, { name: "中南大学", minScore: 618, rank: 3634 }, { name: "华南理工大学", minScore: 616, rank: 3856 }, { name: "山东大学", minScore: 612, rank: 4321 }, { name: "重庆大学", minScore: 608, rank: 4834 }, { name: "华中师范大学", minScore: 605, rank: 5234 }
      ],
      "历史类": [
        { name: "北京大学", minScore: 660, rank: 28 }, { name: "清华大学", minScore: 659, rank: 32 }, { name: "复旦大学", minScore: 652, rank: 65 }, { name: "上海交通大学", minScore: 651, rank: 70 }, { name: "中国人民大学", minScore: 645, rank: 112 }, { name: "南京大学", minScore: 642, rank: 138 }, { name: "浙江大学", minScore: 639, rank: 165 }, { name: "武汉大学", minScore: 626, rank: 356 }, { name: "南开大学", minScore: 622, rank: 423 }, { name: "北京师范大学", minScore: 620, rank: 456 }, { name: "中山大学", minScore: 614, rank: 589 }, { name: "厦门大学", minScore: 610, rank: 678 }, { name: "华东师范大学", minScore: 608, rank: 723 }, { name: "中国政法大学", minScore: 606, rank: 789 }, { name: "中南财经政法大学", minScore: 595, rank: 1123 }
      ]
    }
  },
  "山东": {
    "2025": {
      "综合": [
        { name: "北京大学", minScore: 689, rank: 85 }, { name: "清华大学", minScore: 688, rank: 92 }, { name: "复旦大学", minScore: 675, rank: 289 }, { name: "上海交通大学", minScore: 674, rank: 305 }, { name: "浙江大学", minScore: 669, rank: 445 }, { name: "中国科学技术大学", minScore: 667, rank: 492 }, { name: "南京大学", minScore: 664, rank: 578 }, { name: "中国人民大学", minScore: 662, rank: 623 }, { name: "北京航空航天大学", minScore: 652, rank: 1023 }, { name: "同济大学", minScore: 648, rank: 1234 }, { name: "武汉大学", minScore: 640, rank: 1789 }, { name: "华中科技大学", minScore: 637, rank: 1967 }, { name: "西安交通大学", minScore: 634, rank: 2123 }, { name: "南开大学", minScore: 632, rank: 2267 }, { name: "电子科技大学", minScore: 630, rank: 2412 }, { name: "北京师范大学", minScore: 627, rank: 2634 }, { name: "天津大学", minScore: 625, rank: 2823 }, { name: "中山大学", minScore: 622, rank: 3056 }, { name: "厦门大学", minScore: 620, rank: 3234 }, { name: "四川大学", minScore: 615, rank: 3789 }, { name: "山东大学", minScore: 608, rank: 4567 }, { name: "中南大学", minScore: 605, rank: 4890 }, { name: "中国海洋大学", minScore: 598, rank: 5678 }
      ]
    }
  },
  "河南": {
    "2025": {
      "理科": [
        { name: "北京大学", minScore: 696, rank: 78 }, { name: "清华大学", minScore: 695, rank: 83 }, { name: "复旦大学", minScore: 683, rank: 256 }, { name: "上海交通大学", minScore: 682, rank: 271 }, { name: "浙江大学", minScore: 678, rank: 398 }, { name: "中国科学技术大学", minScore: 676, rank: 445 }, { name: "南京大学", minScore: 673, rank: 534 }, { name: "中国人民大学", minScore: 671, rank: 589 }, { name: "北京航空航天大学", minScore: 662, rank: 956 }, { name: "同济大学", minScore: 658, rank: 1145 }, { name: "武汉大学", minScore: 648, rank: 1765 }, { name: "华中科技大学", minScore: 646, rank: 1890 }, { name: "西安交通大学", minScore: 643, rank: 2067 }, { name: "南开大学", minScore: 640, rank: 2234 }, { name: "电子科技大学", minScore: 638, rank: 2389 }, { name: "北京师范大学", minScore: 635, rank: 2612 }, { name: "天津大学", minScore: 632, rank: 2823 }, { name: "中山大学", minScore: 628, rank: 3123 }, { name: "厦门大学", minScore: 625, rank: 3456 }, { name: "四川大学", minScore: 618, rank: 4234 }, { name: "郑州大学", minScore: 595, rank: 8234 }, { name: "中南大学", minScore: 612, rank: 5123 }, { name: "河南大学", minScore: 575, rank: 12345 }
      ],
      "文科": [
        { name: "北京大学", minScore: 658, rank: 25 }, { name: "清华大学", minScore: 657, rank: 28 }, { name: "复旦大学", minScore: 650, rank: 58 }, { name: "上海交通大学", minScore: 649, rank: 62 }, { name: "中国人民大学", minScore: 643, rank: 95 }, { name: "南京大学", minScore: 640, rank: 118 }, { name: "浙江大学", minScore: 637, rank: 145 }, { name: "武汉大学", minScore: 628, rank: 278 }, { name: "南开大学", minScore: 624, rank: 345 }, { name: "北京师范大学", minScore: 622, rank: 378 }, { name: "中山大学", minScore: 618, rank: 456 }, { name: "厦门大学", minScore: 615, rank: 512 }, { name: "郑州大学", minScore: 580, rank: 2345 }
      ]
    }
  },
  "浙江": {
    "2025": {
      "综合": [
        { name: "北京大学", minScore: 703, rank: 45 }, { name: "清华大学", minScore: 702, rank: 50 }, { name: "复旦大学", minScore: 696, rank: 178 }, { name: "上海交通大学", minScore: 695, rank: 192 }, { name: "浙江大学", minScore: 675, rank: 1890 }, { name: "中国科学技术大学", minScore: 690, rank: 345 }, { name: "南京大学", minScore: 688, rank: 398 }, { name: "中国人民大学", minScore: 686, rank: 445 }, { name: "北京航空航天大学", minScore: 678, rank: 789 }, { name: "同济大学", minScore: 675, rank: 923 }, { name: "武汉大学", minScore: 668, rank: 1345 }, { name: "华中科技大学", minScore: 665, rank: 1523 }, { name: "西安交通大学", minScore: 662, rank: 1678 }, { name: "南开大学", minScore: 660, rank: 1823 }, { name: "电子科技大学", minScore: 658, rank: 1956 }, { name: "北京师范大学", minScore: 655, rank: 2134 }, { name: "浙江工业大学", minScore: 615, rank: 12345 }, { name: "杭州电子科技大学", minScore: 612, rank: 13234 }
      ]
    }
  },
  "江苏": {
    "2025": {
      "物理类": [
        { name: "北京大学", minScore: 689, rank: 70 }, { name: "清华大学", minScore: 688, rank: 75 }, { name: "复旦大学", minScore: 678, rank: 245 }, { name: "上海交通大学", minScore: 677, rank: 260 }, { name: "浙江大学", minScore: 673, rank: 378 }, { name: "中国科学技术大学", minScore: 671, rank: 423 }, { name: "南京大学", minScore: 665, rank: 589 }, { name: "中国人民大学", minScore: 663, rank: 634 }, { name: "北京航空航天大学", minScore: 655, rank: 945 }, { name: "同济大学", minScore: 652, rank: 1089 }, { name: "武汉大学", minScore: 644, rank: 1678 }, { name: "华中科技大学", minScore: 642, rank: 1789 }, { name: "西安交通大学", minScore: 640, rank: 1934 }, { name: "南开大学", minScore: 638, rank: 2056 }, { name: "东南大学", minScore: 645, rank: 1567 }, { name: "电子科技大学", minScore: 636, rank: 2234 }, { name: "南京理工大学", minScore: 630, rank: 2789 }, { name: "南京航空航天大学", minScore: 628, rank: 2956 }, { name: "南京师范大学", minScore: 610, rank: 5234 }
      ],
      "历史类": [
        { name: "北京大学", minScore: 658, rank: 30 }, { name: "清华大学", minScore: 657, rank: 33 }, { name: "复旦大学", minScore: 650, rank: 68 }, { name: "上海交通大学", minScore: 649, rank: 73 }, { name: "中国人民大学", minScore: 643, rank: 105 }, { name: "南京大学", minScore: 638, rank: 145 }, { name: "浙江大学", minScore: 635, rank: 178 }, { name: "武汉大学", minScore: 625, rank: 345 }, { name: "南开大学", minScore: 622, rank: 398 }, { name: "北京师范大学", minScore: 620, rank: 423 }, { name: "南京师范大学", minScore: 595, rank: 1234 }
      ]
    }
  },
  "湖南": {
    "2025": {
      "物理类": [
        { name: "北京大学", minScore: 688, rank: 72 }, { name: "清华大学", minScore: 687, rank: 78 }, { name: "复旦大学", minScore: 676, rank: 256 }, { name: "上海交通大学", minScore: 675, rank: 271 }, { name: "浙江大学", minScore: 671, rank: 389 }, { name: "中国科学技术大学", minScore: 669, rank: 438 }, { name: "南京大学", minScore: 666, rank: 512 }, { name: "中国人民大学", minScore: 664, rank: 556 }, { name: "北京航空航天大学", minScore: 654, rank: 923 }, { name: "同济大学", minScore: 650, rank: 1078 }, { name: "武汉大学", minScore: 642, rank: 1623 }, { name: "华中科技大学", minScore: 640, rank: 1734 }, { name: "西安交通大学", minScore: 637, rank: 1912 }, { name: "中南大学", minScore: 625, rank: 3123 }, { name: "湖南大学", minScore: 620, rank: 3789 }, { name: "湖南师范大学", minScore: 585, rank: 10234 }
      ]
    }
  }
};
