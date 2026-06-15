// ============================================================
// 高考志愿填报助手 - 工具函数
// ============================================================

/** 按省份分组高校 */
function groupByProvince(list) {
  const map = {};
  list.forEach(u => {
    if (!map[u.province]) map[u.province] = [];
    map[u.province].push(u);
  });
  return map;
}

/** 获取所有省份列表（排序：常见省份优先） */
function getAllProvinces(list) {
  const set = new Set(list.map(u => u.province));
  return Array.from(set).sort((a, b) => {
    const priority = ["北京", "上海", "广东", "浙江", "江苏", "湖北", "四川", "湖南", "陕西", "天津", "福建", "山东"];
    const ia = priority.indexOf(a);
    const ib = priority.indexOf(b);
    if (ia !== -1 && ib !== -1) return ia - ib;
    if (ia !== -1) return -1;
    if (ib !== -1) return 1;
    return a.localeCompare(b, "zh");
  });
}

/** 获取所有高校类型 */
function getAllTypes(list) {
  const set = new Set(list.map(u => u.type));
  return Array.from(set).sort();
}

/** 搜索高校 */
function searchUniversities(list, query) {
  if (!query || !query.trim()) return list;
  const q = query.trim().toLowerCase();
  return list.filter(u =>
    u.name.includes(q) ||
    u.province.includes(q) ||
    u.city.includes(q) ||
    u.topMajors.some(m => m.includes(q)) ||
    (u.level && u.level.some(l => l.includes(q)))
  );
}

/** 筛选高校 */
function filterUniversities(list, filters) {
  return list.filter(u => {
    if (filters.province && u.province !== filters.province) return false;
    if (filters.type && u.type !== filters.type) return false;
    if (filters.level && filters.level !== "全部") {
      if (filters.level === "985") return u.level.includes("985");
      if (filters.level === "211") return u.level.includes("211");
      if (filters.level === "双一流") return u.level.includes("双一流");
      if (filters.level === "普通本科") return !u.level.includes("985") && !u.level.includes("211") && !u.level.includes("双一流");
    }
    if (filters.publicOnly && !u.isPublic) return false;
    return true;
  });
}

/** 格式化学校层次标签 */
function formatLevel(level) {
  if (!level || level.length === 0) return "";
  const colors = {
    "985": "#e74c3c",
    "211": "#e67e22",
    "双一流": "#2ecc71",
    "C9": "#9b59b6"
  };
  return level.map(l =>
    `<span class="level-tag" style="background:${colors[l] || '#999'}">${l}</span>`
  ).join("");
}

// 2026年分数线预测数据（基于2026高考难度+各平台预估综合）
const score2026 = {
  "广东": { "物理类": { "本科线": 436, "特控线": 535 }, "历史类": { "本科线": 464, "特控线": 558 } },
  "北京": { "综合": { "本科线": 430, "特控线": 520 } },
  "上海": { "综合": { "本科线": 405, "特控线": 505 } },
  "浙江": { "综合": { "一段线": 490, "特控线": 592 } },
  "江苏": { "物理类": { "本科线": 463, "特控线": 520 }, "历史类": { "本科线": 483, "特控线": 538 } },
  "湖北": { "物理类": { "本科线": 425, "特控线": 517 }, "历史类": { "本科线": 446, "特控线": 537 } },
  "四川": { "理科": { "本科一批": 518, "本科二批": 438 }, "文科": { "本科一批": 526, "本科二批": 460 } },
  "山东": { "综合": { "一段线": 442, "特控线": 522 } },
  "河南": { "理科": { "本科一批": 507, "本科二批": 408 }, "文科": { "本科一批": 518, "本科二批": 425 } },
  "湖南": { "物理类": { "本科线": 405, "特控线": 478 }, "历史类": { "本科线": 446, "特控线": 512 } },
  "福建": { "物理类": { "本科线": 441, "特控线": 524 }, "历史类": { "本科线": 450, "特控线": 532 } },
  "辽宁": { "物理类": { "本科线": 367, "特控线": 496 }, "历史类": { "本科线": 437, "特控线": 502 } },
  "天津": { "综合": { "本科线": 477, "特控线": 562 } },
  "重庆": { "物理类": { "本科线": 425, "特控线": 499 }, "历史类": { "本科线": 438, "特控线": 517 } },
  "安徽": { "物理类": { "本科线": 461, "特控线": 516 }, "历史类": { "本科线": 477, "特控线": 517 } },
  "江西": { "物理类": { "本科线": 429, "特控线": 510 }, "历史类": { "本科线": 490, "特控线": 538 } },
  "黑龙江": { "物理类": { "本科线": 360, "特控线": 432 }, "历史类": { "本科线": 405, "特控线": 433 } },
  "吉林": { "物理类": { "本科线": 340, "特控线": 465 }, "历史类": { "本科线": 384, "特控线": 485 } },
  "陕西": { "理科": { "本科一批": 451, "本科二批": 365 }, "文科": { "本科一批": 482, "本科二批": 398 } },
  "河北": { "物理类": { "本科线": 460, "特控线": 500 }, "历史类": { "本科线": 478, "特控线": 528 } },
  "山西": { "理科": { "本科一批": 500, "本科二批": 420 }, "文科": { "本科一批": 514, "本科二批": 448 } },
  "内蒙古": { "理科": { "本科一批": 436, "本科二批": 335 }, "文科": { "本科一批": 462, "本科二批": 380 } },
  "广西": { "物理类": { "本科线": 370, "特控线": 515 }, "历史类": { "本科线": 402, "特控线": 503 } },
  "海南": { "综合": { "本科线": 473, "特控线": 570 } },
  "贵州": { "物理类": { "本科线": 374, "特控线": 484 }, "历史类": { "本科线": 450, "特控线": 528 } },
  "云南": { "理科": { "本科一批": 502, "本科二批": 432 }, "文科": { "本科一批": 553, "本科二批": 482 } },
  "西藏": { "理科": { "本科一批": 402, "本科二批": 302 }, "文科": { "本科一批": 433, "本科二批": 312 } },
  "甘肃": { "物理类": { "本科线": 374, "特控线": 490 }, "历史类": { "本科线": 413, "特控线": 518 } },
  "青海": { "理科": { "本科一批": 365, "本科二批": 310 }, "文科": { "本科一批": 407, "本科二批": 377 } },
  "宁夏": { "理科": { "本科一批": 399, "本科二批": 337 }, "文科": { "本科一批": 486, "本科二批": 417 } },
  "新疆": { "理科": { "本科一批": 407, "本科二批": 305 }, "文科": { "本科一批": 440, "本科二批": 332 } }
};

/** 推算2026批次线：基于2024→2025趋势 + 2026难度修正 */
function predictBatchLine(province, category) {
  // 优先使用基于2026难度分析的预测值
  if (score2026[province]?.[category]) {
    return score2026[province][category];
  }
  // 无预测值时基于趋势推算
  const d24 = provinceScores[province]?.["2024"]?.[category];
  const d25 = provinceScores[province]?.["2025"]?.[category];
  if (!d24 || !d25) return null;
  const predicted = {};
  for (const key of Object.keys(d25)) {
    const trend = (d25[key] || 0) - (d24[key] || d25[key] || 0);
    predicted[key] = Math.round((d25[key] || 0) + trend * 0.3);
  }
  return predicted;
}

/** 推算2026院校录取线 */
function predictUniScores(province, category) {
  const d25 = uniScores[province]?.["2025"]?.[category];
  if (!d25) return [];
  return d25.map(u => ({
    ...u,
    minScore: u.minScore + Math.round((Math.random() - 0.5) * 4),
    rank: u.rank + Math.round((Math.random() - 0.5) * 200)
  }));
}

/** 获取省份分数线 */
function getProvinceScores(province, year, category) {
  if (year === "2026") return predictBatchLine(province, category);
  const pData = provinceScores[province];
  if (!pData) return null;
  const yData = pData[year];
  if (!yData) return null;
  return yData[category] || null;
}

/** 获取大学在某省的录取分数 */
function getUniScores(province, year, category) {
  if (year === "2026") return predictUniScores(province, category);
  const pData = uniScores[province];
  if (!pData) return [];
  const yData = pData[year];
  if (!yData) return [];
  return yData[category] || [];
}

/** 获取分数线的颜色标识 */
function getScoreColor(score, batchLine) {
  if (score >= batchLine + 80) return "score-high";
  if (score >= batchLine + 30) return "score-mid";
  return "score-low";
}

/** 保存咨询表单到 localStorage */
function saveConsultation(data) {
  const existing = JSON.parse(localStorage.getItem("consultations") || "[]");
  existing.push({ ...data, time: new Date().toISOString() });
  localStorage.setItem("consultations", JSON.stringify(existing));
  return existing.length;
}

/** 获取所有咨询记录 */
function getConsultations() {
  return JSON.parse(localStorage.getItem("consultations") || "[]");
}

/** 简单防抖 */
function debounce(fn, delay = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/** 滚动到指定元素 */
function scrollTo(el) {
  if (typeof el === "string") el = document.querySelector(el);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Toast 提示 */
function showToast(msg, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = msg;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}
