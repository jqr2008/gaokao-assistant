// ============================================================
// 高考志愿填报助手 - 主逻辑
// Tab 切换 · 大学查询 · 分数线 · 资料包 · 咨询预约
// ============================================================

// ====== 全局状态 ======
let currentTab = "home";
let expandedUniId = null;

// ====== 初始化 ======
document.addEventListener("DOMContentLoaded", () => {
  initTabNavigation();
  initUniversityTab();
  initScoreTab();
  initMaterialsTab();
  initConsultTab();
  renderHomeMaterials();
  populateProvinceSelects();

  // 如果 URL hash 指定了 tab，切换到对应 tab
  const hash = window.location.hash.replace("#", "");
  if (hash && document.getElementById(`tab-${hash}`)) {
    switchTab(hash);
  }
  updateFloatingBtn();
});

// ====== Tab 导航 ======
function initTabNavigation() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      switchTab(tab);
    });
  });
}

function switchTab(tab) {
  currentTab = tab;
  // 更新导航
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  const activeBtn = document.querySelector(`[data-tab="${tab}"]`);
  if (activeBtn) activeBtn.classList.add("active");

  // 更新内容
  document.querySelectorAll(".tab-content").forEach(s => s.classList.remove("active"));
  const content = document.getElementById(`tab-${tab}`);
  if (content) content.classList.add("active");

  // 滚动到顶部
  window.scrollTo({ top: 0, behavior: "smooth" });

  // 更新 URL hash
  window.location.hash = tab;

  // 按需刷新
  if (tab === "university") renderUniversityList();
  if (tab === "score") updateScoreTab();
}

// ====== Tab 1: 首页 - 资料预览 ======
function renderHomeMaterials() {
  const container = document.getElementById("home-materials");
  if (!container) return;

  container.innerHTML = materials.slice(0, 4).map(m => `
    <div class="mini-material-card" onclick="switchTab('materials'); setTimeout(() => document.getElementById('mat-${m.id}').scrollIntoView({behavior:'smooth'}), 200)">
      <div class="mini-cover">${m.cover}</div>
      <h4>${m.name}</h4>
      <span class="mini-price">¥${m.price}</span>
      <span class="mini-original">¥${m.originalPrice}</span>
    </div>
  `).join("");
}

// ====== Tab 2: 查大学 ======
function initUniversityTab() {
  const searchInput = document.getElementById("uni-search");
  const filterProvince = document.getElementById("filter-province");
  const filterType = document.getElementById("filter-type");
  const filterLevel = document.getElementById("filter-level");
  const filterPublic = document.getElementById("filter-public");

  // 填充筛选下拉
  const provinces = getAllProvinces(universities);
  filterProvince.innerHTML = '<option value="">📍 全部省份</option>' +
    provinces.map(p => `<option value="${p}">${p}</option>`).join("");

  const types = getAllTypes(universities);
  filterType.innerHTML = '<option value="">🏷️ 全部类型</option>' +
    types.map(t => `<option value="${t}">${t}</option>`).join("");

  // 绑定事件
  const debouncedRender = debounce(renderUniversityList, 250);
  searchInput.addEventListener("input", debouncedRender);
  filterProvince.addEventListener("change", renderUniversityList);
  filterType.addEventListener("change", renderUniversityList);
  filterLevel.addEventListener("change", renderUniversityList);
  filterPublic.addEventListener("change", renderUniversityList);
}

function renderUniversityList() {
  const listEl = document.getElementById("uni-list");
  const countEl = document.getElementById("uni-count");
  const emptyEl = document.getElementById("uni-empty");

  const query = document.getElementById("uni-search")?.value || "";
  const filters = {
    province: document.getElementById("filter-province")?.value || "",
    type: document.getElementById("filter-type")?.value || "",
    level: document.getElementById("filter-level")?.value || "",
    publicOnly: document.getElementById("filter-public")?.checked || false
  };

  let result = searchUniversities(universities, query);
  result = filterUniversities(result, filters);

  // 统计
  countEl.textContent = `共找到 ${result.length} 所大学`;

  if (result.length === 0) {
    listEl.innerHTML = "";
    emptyEl.style.display = "block";
    return;
  }

  emptyEl.style.display = "none";

  // 渲染卡片
  listEl.innerHTML = result.map(u => {
    const isExpanded = expandedUniId === u.id;
    return `
      <div class="uni-card ${isExpanded ? 'expanded' : ''}" id="uni-${u.id}">
        <div class="uni-card-header" onclick="toggleUniCard(${u.id})">
          <div>
            <div class="uni-name">${u.name}</div>
            <div class="uni-location">📍 ${u.province} · ${u.city}</div>
          </div>
          <div class="uni-level-tags">
            ${formatLevel(u.level)}
          </div>
        </div>
        <div class="uni-majors">
          ${u.topMajors.slice(0, 4).map(m => `<span class="uni-major-tag">${m}</span>`).join("")}
          ${u.topMajors.length > 4 ? `<span class="uni-major-tag">+${u.topMajors.length - 4}更多</span>` : ""}
        </div>
        <div class="uni-card-detail">
          <div class="uni-detail-row">
            <span>🏛️ ${u.isPublic ? "公办" : "民办"}</span>
            <span>🎯 就业率 ${(u.employmentRate * 100).toFixed(0)}%</span>
            <span>👫 男${u.genderRatio.male}:女${u.genderRatio.female}</span>
          </div>
          <p class="uni-desc">${u.description}</p>
          <div class="uni-majors" style="margin-top:6px">
            <strong style="font-size:12px;color:var(--text-muted)">王牌专业：</strong>
            ${u.topMajors.map(m => `<span class="uni-major-tag">${m}</span>`).join("")}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function toggleUniCard(id) {
  if (expandedUniId === id) {
    expandedUniId = null;
  } else {
    expandedUniId = id;
  }
  renderUniversityList();
  // 滚动到展开的卡片
  setTimeout(() => {
    const el = document.getElementById(`uni-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, 100);
}

// ====== Tab 3: 查分数 ======
function initScoreTab() {
  const scoreProvince = document.getElementById("score-province");
  const scoreYear = document.getElementById("score-year");
  const scoreCategory = document.getElementById("score-category");

  // 填充省份选项
  const provinces = Object.keys(provinceScores).sort((a, b) => {
    const priority = ["广东", "北京", "上海", "浙江", "江苏", "湖北", "四川", "山东", "河南", "湖南"];
    const ia = priority.indexOf(a), ib = priority.indexOf(b);
    if (ia !== -1 && ib !== -1) return ia - ib;
    if (ia !== -1) return -1;
    if (ib !== -1) return 1;
    return a.localeCompare(b, "zh");
  });
  scoreProvince.innerHTML = '<option value="">选择省份</option>' +
    provinces.map(p => `<option value="${p}">${p}</option>`).join("");

  // 省份变化时更新科类选项
  scoreProvince.addEventListener("change", () => {
    updateCategorySelect();
    updateScoreTab();
  });
  scoreYear.addEventListener("change", updateScoreTab);
  scoreCategory.addEventListener("change", updateScoreTab);
}

function updateCategorySelect() {
  const province = document.getElementById("score-province").value;
  const year = document.getElementById("score-year").value;
  const categorySelect = document.getElementById("score-category");

  if (!province || !year) {
    categorySelect.innerHTML = '<option value="">选择科类</option>';
    return;
  }

  // 2026年用2025年的分类结构
  const lookupYear = (year === "2026") ? "2025" : year;
  const pData = provinceScores[province];
  if (!pData || !pData[lookupYear]) {
    categorySelect.innerHTML = '<option value="">选择科类</option>';
    return;
  }

  const categories = Object.keys(pData[lookupYear]);
  categorySelect.innerHTML = '<option value="">选择科类</option>' +
    categories.map(c => `<option value="${c}">${c}</option>`).join("");
}

function updateScoreTab() {
  const province = document.getElementById("score-province").value;
  const year = document.getElementById("score-year").value;
  const category = document.getElementById("score-category").value;
  const batchLinesCard = document.getElementById("batch-lines");
  const uniScoreTable = document.getElementById("uni-score-table");
  const scoreEmpty = document.getElementById("score-empty");

  if (!province || !year || !category) {
    batchLinesCard.style.display = "none";
    uniScoreTable.style.display = "none";
    scoreEmpty.style.display = "block";
    return;
  }

  scoreEmpty.style.display = "none";

  // 隐藏说明卡片
  const introCard = document.getElementById("score-intro");
  if (introCard) introCard.style.display = "none";

  // 批次线
  const batchData = getProvinceScores(province, year, category);
  if (batchData) {
    batchLinesCard.style.display = "block";
    const linesHtml = Object.entries(batchData).map(([name, score]) => `
      <div class="batch-line-item">
        <div class="batch-line-label">${name}</div>
        <div class="batch-line-value">${score}</div>
      </div>
    `).join("");
    document.getElementById("batch-lines-content").innerHTML =
      `<div class="batch-lines-grid">${linesHtml}</div>`;
  } else {
    batchLinesCard.style.display = "none";
  }

  // 院校录取线
  const uniData = getUniScores(province, year, category);
  if (uniData.length > 0) {
    uniScoreTable.style.display = "block";
    // 获取本科线做颜色参考
    const refLine = batchData
      ? (batchData["本科线"] || batchData["本科一批"] || batchData["一段线"] || batchData["特控线"] || 500)
      : 500;

    document.getElementById("uni-score-tbody").innerHTML = uniData.map(u => `
      <tr>
        <td>${u.name}</td>
        <td class="${getScoreColor(u.minScore, refLine)}">${u.minScore}</td>
        <td>${u.rank.toLocaleString()}</td>
      </tr>
    `).join("");
  } else {
    uniScoreTable.style.display = "none";
  }
}

// ====== Tab 4: 资料包 ======
function initMaterialsTab() {
  renderMaterials();
}

function renderMaterials() {
  const grid = document.getElementById("materials-grid");
  if (!grid) return;

  // 普通资料（非打包）
  const regularMaterials = materials.filter(m => !m.isBundle);
  const bundleMaterial = materials.find(m => m.isBundle);

  grid.innerHTML = regularMaterials.map(m => `
    <div class="material-card" id="mat-${m.id}">
      ${m.tag ? `<span class="material-tag">${m.tag}</span>` : ""}
      <div class="material-card-header">
        <div class="material-cover">${m.cover}</div>
        <div class="material-info">
          <h3>${m.name}</h3>
          <div class="material-price-row">
            <span class="material-price">${m.price}</span>
            <span class="material-original">¥${m.originalPrice}</span>
          </div>
        </div>
      </div>
      <p class="material-desc">${m.desc}</p>
      <div class="material-highlights">
        ${m.highlights.map(h => `<span class="highlight-tag">✓ ${h}</span>`).join("")}
      </div>
      <button class="btn btn-primary btn-full" onclick="openBuyModal('${m.id}')">
        🛒 立即购买 · ¥${m.price}
      </button>
    </div>
  `).join("");

  // 打包套餐
  if (bundleMaterial) {
    const bundleCard = document.getElementById("bundle-card");
    bundleCard.style.display = "block";
    bundleCard.innerHTML = `
      <div class="bundle-badge">🎁 限时优惠</div>
      <h3>${bundleMaterial.cover} ${bundleMaterial.name}</h3>
      <p class="material-desc">${bundleMaterial.desc}</p>
      <div class="bundle-save">省 ¥${(bundleMaterial.originalPrice - bundleMaterial.price).toFixed(1)}</div>
      <div>
        <span class="bundle-price">${bundleMaterial.price}</span>
        <span class="bundle-original">¥${bundleMaterial.originalPrice}</span>
      </div>
      <div class="material-highlights" style="justify-content:center;margin-top:12px">
        ${bundleMaterial.highlights.map(h => `<span class="highlight-tag">✓ ${h}</span>`).join("")}
      </div>
      <button class="btn btn-primary btn-lg" style="margin-top:14px" onclick="openBuyModal('${bundleMaterial.id}')">
        🎁 一键打包购买 · 立省 ¥${(bundleMaterial.originalPrice - bundleMaterial.price).toFixed(1)}
      </button>
    `;
  }
}

// 解锁码映射
const UNLOCK_CODES = { m1: "gk2026zn", m2: "gk2026zy", m3: "gk2026fs", m4: "gk2026ns", m5: "gk2026all" };

function openBuyModal(materialId) {
  const m = materials.find(mat => mat.id === materialId);
  if (!m) return;
  const code = UNLOCK_CODES[materialId] || "";

  const body = document.getElementById("buy-modal-body");
  body.innerHTML = `
    <div class="buy-modal-material">
      <div class="material-cover">${m.cover}</div>
      <h3>${m.name}</h3>
      <div class="material-price-row" style="text-align:center;margin:8px 0">
        <span style="font-size:28px;font-weight:800;color:var(--orange)">¥${m.price}</span>
        <span style="font-size:14px;color:var(--text-muted);text-decoration:line-through;margin-left:8px">¥${m.originalPrice}</span>
      </div>
    </div>

    <div style="background:#FFF8E1;border-radius:10px;padding:12px;margin:12px 0;font-size:13px;text-align:left;line-height:1.8;">
      <strong>📋 购买步骤：</strong><br>
      ① 扫码付款 <strong>¥${m.price}</strong><br>
      ② 截图发给学姐微信 <strong>k77m10n10</strong><br>
      ③ 学姐发你<strong>解锁码</strong><br>
      ④ 点下方按钮输入解锁码查看
    </div>

    <div class="qrcode-placeholder">
      <p style="font-size:13px;color:var(--text-secondary);margin-bottom:8px">📱 微信扫码付款</p>
      <img class="qrcode-img" src="img/wechat-pay.jpg" alt="收款码" style="width:180px;height:180px;object-fit:contain;border-radius:10px;">
    </div>

    <div class="buy-modal-actions" style="gap:8px;">
      <button class="btn btn-primary btn-full" onclick="closeModal('buy-modal'); window.open('materials/index.html','_blank')">
        🔓 点此输入解锁码查看资料
      </button>
      <button class="btn btn-outline btn-full" onclick="closeModal('buy-modal'); showWechatModal()">
        💬 加学姐微信领码
      </button>
    </div>
  `;

  showModal("buy-modal");
}

// ====== Tab 5: 约咨询 ======
function initConsultTab() {
  const form = document.getElementById("consult-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
      name: document.getElementById("consult-name").value.trim(),
      wechat: document.getElementById("consult-wechat").value.trim(),
      province: document.getElementById("consult-province").value,
      score: document.getElementById("consult-score").value.trim(),
      question: document.getElementById("consult-question").value.trim()
    };

    if (!data.name || !data.wechat || !data.province) {
      showToast("请填写昵称、微信号和省份哦~", "info");
      return;
    }

    // 保存到 localStorage
    const count = saveConsultation(data);

    // 显示成功 + 微信二维码
    showToast(`预约成功！学姐会在24小时内加你微信~`, "success");
    form.reset();

    // 弹窗引导加微信
    setTimeout(() => showWechatModal(), 800);
  });
}

// ====== 省份选择器填充（咨询表单用） ======
function populateProvinceSelects() {
  const provinces = getAllProvinces(universities);
  const options = provinces.map(p => `<option value="${p}">${p}</option>`).join("");

  const consultSelect = document.getElementById("consult-province");
  if (consultSelect) {
    consultSelect.innerHTML = '<option value="">你所在的省份</option>' + options;
  }
}

// ====== Modal 管理 ======
function showModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }
}

function showWechatModal() {
  showModal("wechat-modal");
}

// 点击背景关闭弹窗
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal-backdrop")) {
    const modal = e.target.closest(".modal");
    if (modal) closeModal(modal.id);
  }
});

// ESC 关闭弹窗
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal.show").forEach(m => closeModal(m.id));
  }
});

// ====== 浮动按钮：当前在资料/咨询 tab 时隐藏 ======
function updateFloatingBtn() {
  const floating = document.getElementById("floating-cta");
  if (!floating) return;
  // 在咨询页隐藏悬浮按钮（因为已经在表单页了）
  if (currentTab === "consult") {
    floating.style.display = "none";
  } else {
    floating.style.display = "flex";
  }
}

// 监听 tab 切换来更新悬浮按钮
const originalSwitchTab = switchTab;
switchTab = function(tab) {
  originalSwitchTab(tab);
  updateFloatingBtn();
};
