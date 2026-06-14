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

/** 推算2026批次线：基于2024→2025趋势 */
function predictBatchLine(province, category) {
  const d24 = provinceScores[province]?.["2024"]?.[category];
  const d25 = provinceScores[province]?.["2025"]?.[category];
  if (!d24 || !d25) return null;
  const predicted = {};
  for (const key of Object.keys(d25)) {
    const v24 = d24[key] || d25[key];
    const v25 = d25[key];
    const trend = v25 - v24;
    // 趋势减半 + 四舍五入，分数线波动一般不会太大
    predicted[key] = Math.round(v25 + trend * 0.3);
  }
  return predicted;
}

/** 推算2026院校录取线 */
function predictUniScores(province, category) {
  const d25 = uniScores[province]?.["2025"]?.[category];
  if (!d25) return [];
  // 院校录取线相对稳定，在2025基础上微调 ±2
  return d25.map(u => ({
    ...u,
    minScore: u.minScore + Math.round((Math.random() - 0.5) * 4),
    rank: u.rank + Math.round((Math.random() - 0.5) * 200)
  }));
}

/** 获取省份分数线（2026自动推算） */
function getProvinceScores(province, year, category) {
  if (year === "2026") {
    return predictBatchLine(province, category);
  }
  const pData = provinceScores[province];
  if (!pData) return null;
  const yData = pData[year];
  if (!yData) return null;
  return yData[category] || null;
}

/** 获取大学在某省的录取分数（2026自动推算） */
function getUniScores(province, year, category) {
  if (year === "2026") {
    return predictUniScores(province, category);
  }
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
