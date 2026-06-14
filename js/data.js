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
  { id: 216, name: "东北电力大学", province: "吉林", city: "吉林市", type: "理工", level: [], isPublic: true, topMajors: ["电气工程", "能源动力", "自动化", "核工程", "土木工程"], description: "电力系统的重要人才基地，电气工程就业无敌。进国网的主力校之一，很多学子进央企。", employmentRate: 0.94, genderRatio: { male: 64, female: 36 }, avgScore: 550 }
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
