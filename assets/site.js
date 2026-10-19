/* ==========================================================================
   shengdanetworktechnology — shared site script
   - English is the default and the source content in the HTML itself
   - Chinese translations live in the dictionary below
   - English originals are captured from the DOM on load, so the page works
     fully even if JavaScript is unavailable (English is always rendered)
   ========================================================================== */
(function () {
  "use strict";

  var ZH = {
    /* ------------------------------- Header ------------------------------- */
    "nav.about": "关于我们",
    "nav.games": "游戏",
    "nav.support": "开发者支持",
    "nav.privacy": "隐私政策",
    "nav.menu": "菜单",

    /* ------------------------------- Footer ------------------------------- */
    "footer.tagline": "由武汉盛达网络科技有限公司运营的独立移动游戏研发团队。",
    "footer.rights": "保留所有权利。",
    "footer.company": "公司",
    "footer.legal": "法律条款",
    "footer.privacy": "隐私政策",
    "footer.terms": "服务条款",
    "footer.deletion": "账号与数据删除",
    "footer.note": "本网站为 shengdanetworktechnology 的官方企业信息页面。",
    "footer.langNote":
      "本页面以英文版本为正式版本，中文译文仅供参考；如中英文存在歧义，以英文版本为准。",

    /* ------------------------------- Home --------------------------------- */
    "home.badge": "独立移动游戏工作室",
    "home.title": "创造下一代<span class=\"grad-text\">移动娱乐体验</span>",
    "home.lead":
      "shengdanetworktechnology 是一家专注于移动游戏研发的独立团队，由武汉盛达网络科技有限公司运营。",
    "home.p2": "我们专注于打造创新、有趣的移动娱乐体验。",
    "home.p3": "我们的首款作品 Tribe Defense: Monster Era 已于 2026 年发行于 Android 平台。",
    "home.cta1": "查看游戏",
    "home.cta2": "开发者支持",
    "home.meta1": "成立于 2022 年",
    "home.meta2": "独立研发团队",
    "home.meta3": "中国 · 武汉",
    "home.v1": "Android 平台",
    "home.v2": "2026 年发行",
    "home.v3": "Tribe Defense",

    /* ------------------------------- Games -------------------------------- */
    "games.eyebrow": "产品",
    "games.title": "我们的游戏",
    "games.lead": "以下为我们已发行的移动游戏作品。",

    "about.eyebrow": "关于我们",
    "about.title": "专注于原创移动游戏的独立研发团队",
    "about.p1":
      "shengdanetworktechnology 是武汉盛达网络科技有限公司运营的独立游戏研发团队。",
    "about.p2":
      "我们的目标是探索创新玩法，为全球玩家创造有趣的互动娱乐体验。",
    "about.v1t": "创新玩法",
    "about.v1d": "我们探索原创玩法思路，而不是套用已有的现成模板。",
    "about.v2t": "原创项目",
    "about.v2d": "所有项目均由团队自主研发，从概念设计到技术实现。",
    "about.v3t": "面向全球玩家",
    "about.v3d": "我们希望能把有趣的互动体验带给世界各地的玩家。",

    "company.eyebrow": "公司信息",
    "company.title": "工商登记信息",
    "company.lead":
      "以下信息用于说明 shengdanetworktechnology 背后的法律实体。",
    "company.k1": "开发者名称",
    "company.k2": "法律实体",
    "company.k3": "成立年份",
    "company.k4": "官方网站",
    "company.k5": "注册及办公地址",
    "company.k6": "邓白氏编码",

    /* ---------------------------- Compliance ------------------------------ */
    "trust.eyebrow": "合规",
    "trust.title": "合规与法律信息",
    "trust.lead":
      "本网站所列开发者信息，与我们在 Google Play 的开发者账号及已发布的隐私政策保持一致。",
    "trust.c1t": "隐私政策",
    "trust.c1d": "我们在游戏中如何处理数据。",
    "trust.c2t": "服务条款",
    "trust.c2d": "适用于我们游戏的条款。",
    "trust.c3t": "账号与数据删除",
    "trust.c3d": "可随时申请删除您的数据。",

    "support.eyebrow": "开发者支持",
    "support.title": "联系与支持",
    "support.lead":
      "如有应用相关问题、隐私请求或技术支持需求，请通过以下方式联系我们。",
    "support.person": "联系人",
    "support.email": "电子邮箱",
    "support.phone": "联系电话",
    "support.website": "官方网站",
    "contact.team": "开发者支持团队",

    /* --------------------- Company identity (bilingual) ---------------------
       Registered entity name and address are proper nouns: they are stored in
       both languages so the Company Information block follows the language
       switch like everything else (English is the default in the HTML). */
    "info.legalName": "武汉盛达网络科技有限公司",
    "info.address":
      "武汉东湖新技术开发区光谷大道77号金融后台服务中心二期B7栋11层01室2号（自贸区武汉片区）",

    /* ------------------------------ Privacy ------------------------------- */
    "pv.title": "隐私政策",
    "pv.lead":
      "本隐私政策说明 shengdanetworktechnology（武汉盛达网络科技有限公司）如何收集、使用和保护用户信息。本政策适用于我们的官方网站，以及由我们开发并在 Google Play 上分发的所有移动游戏与应用程序。",
    "pv.updated": "最后更新：2026 年 10 月 19 日",

    "pv.s1t": "引言",
    "pv.s1p1":
      "本隐私政策说明 shengdanetworktechnology（以下称“我们”）如何处理与我们提供的移动游戏应用（统称“应用”或“游戏”）、官方网站及相关服务有关的信息。",
    "pv.s1p2":
      "在您安装、运行我们的游戏或使用相关服务时，即表示您已阅读并同意本隐私政策所述的做法。如果您不同意本政策，请停止使用我们的应用及服务。",

    "pv.s2t": "开发者信息与适用应用清单",
    "pv.s2p":
      "本政策由以下法律实体发布并负责执行（所有主体信息均与邓白氏 D-U-N-S 记录一致）：",
    "pv.s2k1": "开发者账号名称",
    "pv.s2k2": "法律实体",
    "pv.s2k3": "邓白氏编码",
    "pv.s2k4": "联系邮箱",
    "pv.s2k5": "联系电话",
    "pv.s2k6": "注册地址",
    "pv.s2k7": "官方网站",
    "pv.s2appsT": "适用应用清单",
    "pv.s2appsP":
      "本隐私政策直接适用于我们旗下的以下移动游戏应用（我们将随新游戏发布持续更新此列表）：",
    "pv.s2appsLbl": "包名",

    "pv.s3t": "信息收集与使用",
    "pv.s3p1":
      "在您安装并运行我们的移动游戏（包括《Tribe Defense: Monster Era》及我们旗下的其他游戏）时，应用会收集和处理以下必要类别的信息，以保障核心游戏功能正常运行：",
    "pv.s3l1t": "设备与标识符信息",
    "pv.s3l1d":
      "设备型号、操作系统版本、系统语言、大致地区（基于 IP 的国家/地区级别，非精确 GPS 位置），以及用于应用分析、反作弊或广告归因的设备标识符（如 Google Advertising ID / GAID，用户可随时在系统设置中重置或关闭个性化广告）。",
    "pv.s3l2t": "游戏进度与交互信息",
    "pv.s3l2d":
      "您的游戏关卡进度、角色与道具状态、本地存档及一般游戏内交互事件。",
    "pv.s3l3t": "崩溃报告与诊断日志",
    "pv.s3l3d":
      "应用异常退出或卡顿时产生的崩溃堆栈与性能诊断数据，仅用于定位和修复程序错误。",
    "pv.s3l4t": "应用内购买与交易记录（如适用）",
    "pv.s3l4d":
      "如果游戏包含应用内购买（IAP），所有支付过程均由 Google Play 结算系统（Google Play Billing）安全处理。我们不会收集或存储您的信用卡号或银行账户密码，仅接收由 Google Play 返回的非敏感订单验证码以向您发放游戏内虚拟物品。",
    "pv.s3l5t": "基础技术与网络权限",
    "pv.s3l5d":
      "应用仅请求运行所必需的基础权限（如访问网络连接 INTERNET、查看网络状态 ACCESS_NETWORK_STATE），不会在未经您主动授权的情况下访问通讯录、麦克风、相机或精确位置等敏感权限。",
    "pv.s3p2": "我们收集上述信息仅用于以下明确目的：",
    "pv.s3u1": "提供、维护并运行游戏的核心玩法与存档同步",
    "pv.s3u2": "优化游戏性能、修复程序崩溃并保障运行稳定性",
    "pv.s3u3": "提供客户支持与处理用户请求",
    "pv.s3p3":
      "我们不会以出售为目的收集信息，也不会收集与上述目的无关的个人信息。",

    "pv.s4t": "数据共享与第三方服务",
    "pv.s4p1":
      "我们绝不会出售用户的个人信息，也不会为第三方自身的营销目的共享个人信息。仅在以下有限且合规的情形下，我们可能会共享必要的技术数据：",
    "pv.s4l1t": "第三方基础服务提供商（SDK）",
    "pv.s4l1d":
      "为了实现游戏基础功能、崩溃分析或广告变现，我们的部分游戏可能会集成符合 Google Play 政策认证的第三方 SDK（例如：Google Play Services、Google Play Games Services、Firebase Crashlytics / Analytics 或 Google AdMob）。这些服务商严格按照其各自的隐私政策及 Google Play 数据安全要求处理受限的技术数据。",
    "pv.s4l2t": "法律合规要求",
    "pv.s4l2d": "适用法律、法规或具有法律效力的司法程序要求时。",
    "pv.s4l3t": "安全与权益保护",
    "pv.s4l3d":
      "为防止欺诈、作弊，或保护用户及公众的合法权利与安全所必需时。",
    "pv.s4p2":
      "凡发生上述共享，我们均要求相关方按照本政策及适用的数据保护法律法规处理信息。",

    "pv.s5t": "儿童隐私",
    "pv.s5p1":
      "我们的游戏与服务不面向 13 周岁以下的儿童（或您所在司法管辖区适用法律规定的最低年龄）。我们不会在知情的情况下收集儿童的个人信息。",
    "pv.s5p2":
      "如果我们发现无意中收集了儿童的个人信息，将采取合理措施立即予以彻底删除。",
    "pv.s5p3":
      "如您认为儿童向我们提供了个人信息，请立即通过 shengdanetworktechnology@gmail.com 联系我们。我们严格遵守 Google Play 家庭政策（Families Policy）及相关儿童隐私保护法规。",

    "pv.s6t": "数据安全",
    "pv.s6p1":
      "我们采取合理的技术与组织措施保护信息免遭未经授权的访问、篡改、披露或销毁。相关措施包括访问权限控制、移动应用与服务器之间传输数据的 HTTPS/TLS 加密，以及对开发与运营流程的定期审查。",
    "pv.s6p2":
      "请注意，任何传输或存储方式都无法做到绝对安全，我们无法保证信息的绝对安全性。",

    "pv.s7t": "联系我们与数据删除",
    "pv.s7p":
      "如果您对本隐私政策有任何疑问，或希望行使您的数据查询、更正或删除权利，请通过以下方式联系我们：",
    "pv.s7h": "账号与数据删除说明",
    "pv.s7o1t": "本地游戏数据删除",
    "pv.s7o1d":
      "您可以随时通过移动设备的“设置 → 应用管理 → 选择对应游戏（如 Tribe Defense: Monster Era）→ 清除存储空间 / 缓存”，或直接卸载本应用，立即删除存储在您设备本地的所有游戏进度与数据。",
    "pv.s7o2t": "服务器及关联数据删除请求",
    "pv.s7o2d":
      "您也可以直接点击本页面底部的“账号与数据请求”链接，或发送邮件至 shengdanetworktechnology@gmail.com（邮件标题请注明：“Data Deletion Request - 游戏名称”）。我们将在收到请求后的 7 个工作日内彻底删除与您相关的所有记录，并向您发送确认邮件。",

    /* ------------------------------- Terms -------------------------------- */
    "tm.title": "服务条款",
    "tm.lead":
      "本服务条款适用于 shengdanetworktechnology 提供的移动应用、网站及相关服务。",
    "tm.updated": "最后更新：2026 年 9 月 30 日",

    "tm.s1t": "条款接受",
    "tm.s1p1":
      "在下载、安装、访问或使用由 shengdanetworktechnology（由武汉盛达网络科技有限公司运营，以下称“我们”）提供的任何移动应用、网站或相关服务之前，请仔细阅读本服务条款。",
    "tm.s1p2":
      "您访问或使用我们的服务，即表示您已阅读、理解并同意受本条款约束。如果您不同意本条款，请停止使用我们的服务。",

    "tm.s2t": "应用使用",
    "tm.s2p1":
      "我们授予您一项个人的、非独占的、不可转让且不可再许可的有限许可，用于在您拥有或控制的设备上使用我们的应用，且仅限于个人、非商业用途。",
    "tm.s2p2":
      "您同意不进行以下行为：对本应用进行反向工程、反编译或反汇编；复制、修改、分发或出售本应用的任何部分；将本应用用于任何违法或未经授权的用途；以任何方式干扰或破坏本应用及服务器正常运行。",
    "tm.s2p3":
      "我们的应用持续更新维护中。部分功能可能新增、变更或调整，具体以最新发布版本为准。",

    "tm.s3t": "用户责任",
    "tm.s3p1":
      "您同意仅以合法方式使用我们的服务，并对您在服务中的行为负责。您承诺：",
    "tm.s3l1": "不利用我们的服务从事任何违反法律法规的活动；",
    "tm.s3l2": "不侵犯他人的知识产权、隐私权或其他合法权益；",
    "tm.s3l3": "不传播恶意代码，或试图未经授权访问我们的系统与数据；",
    "tm.s3l4": "不冒用他人身份，或提供虚假信息与我们联系。",

    "tm.s4t": "知识产权",
    "tm.s4p1":
      "我们的服务及其全部内容，包括但不限于软件代码、游戏设计、美术素材、音效、文字、商标与标识，均归 shengdanetworktechnology 或武汉盛达网络科技有限公司所有，并受著作权、商标权及其他相关法律的保护。",
    "tm.s4p2":
      "未经我们事先书面许可，您不得以任何形式复制、修改、发布、传播、展示或用于商业用途。",

    "tm.s5t": "服务变更",
    "tm.s5p1":
      "我们保留随时修改、暂停或终止全部或部分服务的权利，包括新增、变更或下架功能，且不承担由此产生的责任。",
    "tm.s5p2":
      "我们可能不时更新本服务条款。更新后的条款将在本页面发布并标注更新日期，继续使用我们的服务即视为您接受更新后的条款。",

    "tm.s6t": "免责声明",
    "tm.s6p1":
      "我们的服务按“现状”与“现有”基础提供。在法律允许的最大范围内，我们不对服务的适用性、可靠性、可用性或无错误运行作出任何明示或默示的保证。",
    "tm.s6p2":
      "对于因使用或无法使用我们的服务而产生的任何间接、附带或后果性损失，我们不承担责任。",
    "tm.s6p3":
      "此外，随着我们持续更新产品，游戏功能、内容与可获取性均可能发生变化。",

    "tm.s7t": "联系信息",
    "tm.s7p":
      "如您对本服务条款有任何疑问，请通过以下方式与我们联系：",

    /* --------------------------- Account deletion -------------------------- */
    "dl.title": "账号与数据请求",
    "dl.lead":
      "本页面说明如何申请删除账号以及如何提出个人数据删除请求。",
    "dl.updated": "最后更新：2026 年 10 月 19 日",
    "dl.appsT": "本页面适用的应用",

    "dl.s1t": "当前状态",
    "dl.s1p1":
      "我们的游戏无需注册账号即可游玩，游戏进度与设置保存在您的设备本地。如果您曾通过电子邮件与我们联系，或游戏存储了与您设备相关的数据，您可以随时按以下步骤申请删除。",
    "dl.s1p2":
      "我们通过电子邮件受理删除请求，提交请求无需注册账号。",

    "dl.s2t": "您可以提交的请求",
    "dl.s2l1t": "数据删除",
    "dl.s2l1d":
      "您可以申请删除我们持有的与您相关的个人数据。",
    "dl.s2l2t": "信息查询",
    "dl.s2l2d":
      "您可以要求我们说明持有哪些与您相关的信息。",

    "dl.s3t": "如何提交请求",
    "dl.s3p1":
      "请向下方邮箱发送邮件；如您此前与我们联系过，建议使用同一邮箱，并在邮件中说明以下内容：",
    "dl.s3u1": "邮件主题请注明“数据删除请求”；",
    "dl.s3u2": "请写明相关的应用名称，以及游戏内使用的 Google Play 账号（如相关）；",
    "dl.s3u3": "请简要说明您的请求内容，便于我们核实与处理。",
    "dl.s3p2":
      "为保护数据安全，我们可能需要您补充必要信息以核实身份。",

    "dl.s4t": "处理说明",
    "dl.s4p1":
      "我们会在收到请求并完成身份核实后，于 7 个工作日内处理您的请求。",
    "dl.s4p2":
      "相关数据将被删除或匿名化处理。仅在法律法规要求保留的情形下，我们才会在必要期限内保留特定信息（例如法律、税务或安全合规所要求的数据）。",

    "dl.s5t": "联系方式",
    "dl.s5p": "如对账号删除或数据请求有任何疑问，请联系我们："
  };

  var EN_CACHE = {};
  var EN_ATTR_CACHE = {};
  var EN_ARIA_CACHE = {};
  var EN_TITLE = document.title;
  var EN_DESC = "";
  var currentLang = "en";

  /* Language preference is remembered across pages and reloads.
     Anything unreadable / blocked (e.g. file:// origin) falls back to English. */
  var LANG_KEY = "sdt.lang";

  function readStoredLang() {
    try {
      var v = window.localStorage.getItem(LANG_KEY);
      return v === "zh" || v === "en" ? v : "en";
    } catch (e) {
      return "en";
    }
  }

  function storeLang(lang) {
    try {
      window.localStorage.setItem(LANG_KEY, lang);
    } catch (e) {
      /* storage unavailable — language still applies for this page */
    }
  }

  function captureOriginal() {
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (!(key in EN_CACHE)) {
        EN_CACHE[key] = nodes[i].innerHTML;
      }
    }

    var attrNodes = document.querySelectorAll("[data-i18n-ph]");
    for (var j = 0; j < attrNodes.length; j++) {
      var akey = attrNodes[j].getAttribute("data-i18n-ph");
      if (!(akey in EN_ATTR_CACHE)) {
        EN_ATTR_CACHE[akey] = attrNodes[j].getAttribute("placeholder") || "";
      }
    }

    var md = document.querySelector('meta[name="description"]');
    EN_DESC = md ? md.getAttribute("content") || "" : "";

    var ariaNodes = document.querySelectorAll("[data-i18n-aria]");
    for (var k = 0; k < ariaNodes.length; k++) {
      var ak = ariaNodes[k].getAttribute("data-i18n-aria");
      if (!(ak in EN_ARIA_CACHE)) {
        EN_ARIA_CACHE[ak] = ariaNodes[k].getAttribute("aria-label") || "";
      }
    }
  }

  function applyText(lang) {
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-i18n");
      var value = lang === "zh" && ZH[key] != null ? ZH[key] : EN_CACHE[key];
      if (value != null) {
        el.innerHTML = value;
      }
    }

    var attrNodes = document.querySelectorAll("[data-i18n-ph]");
    for (var j = 0; j < attrNodes.length; j++) {
      var ael = attrNodes[j];
      var akey = ael.getAttribute("data-i18n-ph");
      var aval =
        lang === "zh" && ZH[akey] != null ? ZH[akey] : EN_ATTR_CACHE[akey];
      if (aval != null) {
        ael.setAttribute("placeholder", aval);
      }
    }

    var md = document.querySelector('meta[name="description"]');
    var body = document.body;

    var ariaNodes = document.querySelectorAll("[data-i18n-aria]");
    for (var n = 0; n < ariaNodes.length; n++) {
      var ael2 = ariaNodes[n];
      var ak2 = ael2.getAttribute("data-i18n-aria");
      var av2 = lang === "zh" && ZH[ak2] != null ? ZH[ak2] : EN_ARIA_CACHE[ak2];
      if (av2 != null) {
        ael2.setAttribute("aria-label", av2);
      }
    }

    if (lang === "zh") {
      if (body.getAttribute("data-title-zh")) {
        document.title = body.getAttribute("data-title-zh");
      }
      if (md && body.getAttribute("data-desc-zh")) {
        md.setAttribute("content", body.getAttribute("data-desc-zh"));
      }
    } else {
      document.title = EN_TITLE;
      if (md && EN_DESC) {
        md.setAttribute("content", EN_DESC);
      }
    }
  }

  function applySwitchState(lang) {
    var btns = document.querySelectorAll("[data-lang-btn]");
    for (var i = 0; i < btns.length; i++) {
      if (btns[i].getAttribute("data-lang-btn") === lang) {
        btns[i].classList.add("is-active");
      } else {
        btns[i].classList.remove("is-active");
      }
    }
  }

  /* ------------------------- Product catalogue ---------------------------- */
  /* Everything product-related is rendered from window.SDT_CATALOG
     (assets/games.js). The homepage cards, the privacy policy app list and the
     deletion page list therefore can never disagree with each other. */
  var STATUS_LABEL = {
    live: { en: "Available on Google Play", zh: "已在 Google Play 上架" },
    delisted: { en: "Not currently listed", zh: "当前未在架上" },
    "in-dev": { en: "In development", zh: "研发中" }
  };

  var PKG_LABEL = { en: "Package Identifier", zh: "包名" };

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function pick(bilingual, lang) {
    if (bilingual == null) return "";
    if (typeof bilingual === "string") return bilingual;
    return bilingual[lang] != null ? bilingual[lang] : bilingual.en || "";
  }

  function initials(title) {
    var parts = String(title || "").replace(/[^A-Za-z0-9 ]/g, " ").split(/\s+/);
    var out = "";
    for (var i = 0; i < parts.length && out.length < 2; i++) {
      if (parts[i]) out += parts[i].charAt(0).toUpperCase();
    }
    return out || "?";
  }

  function catalogGames() {
    var catalog = window.SDT_CATALOG;
    return catalog && catalog.games instanceof Array ? catalog.games : [];
  }

  function renderGameCard(game, lang) {
    var state = STATUS_LABEL[game.status] || STATUS_LABEL["in-dev"];
    var meta = [game.packageId, game.platform, game.firstRelease]
      .filter(Boolean)
      .map(esc)
      .join(" · ");

    /* A store button is only rendered for games that are actually listed —
       this is what keeps a delisted title from becoming a dead link. */
    var button =
      game.status === "live" && game.storeUrl
        ? '<a class="btn btn-primary game-btn" href="' +
          esc(game.storeUrl) +
          '" target="_blank" rel="noopener">Google Play</a>'
        : "";

    return (
      '<article class="panel game-card">' +
      '<div class="game-head">' +
      '<div class="game-icon" aria-hidden="true">' +
      esc(initials(game.title)) +
      "</div>" +
      '<div class="game-head-text">' +
      '<h3 class="game-title">' +
      esc(game.title) +
      "</h3>" +
      '<p class="game-meta">' +
      meta +
      "</p>" +
      "</div>" +
      "</div>" +
      (game.tagline
        ? '<p class="game-tagline">' + esc(pick(game.tagline, lang)) + "</p>"
        : "") +
      '<div class="game-foot">' +
      '<span class="game-badge is-' +
      esc(game.status) +
      '">' +
      esc(pick(state, lang)) +
      "</span>" +
      button +
      "</div>" +
      "</article>"
    );
  }

  function renderCatalog(lang) {
    var games = catalogGames();

    var grids = document.querySelectorAll("[data-games]");
    for (var i = 0; i < grids.length; i++) {
      /* Without data the static markup already says the right thing, so never
         replace it with an empty state — a missing games.js must not wipe the
         product card off the homepage. */
      if (!games.length) continue;
      var cards = "";
      for (var j = 0; j < games.length; j++) {
        cards += renderGameCard(games[j], lang);
      }
      grids[i].innerHTML = cards;
    }

    var lists = document.querySelectorAll("[data-games-list]");
    for (var k = 0; k < lists.length; k++) {
      if (!games.length) continue; /* keep the static fallback text */
      var items = "";
      for (var m = 0; m < games.length; m++) {
        var game = games[m];
        items +=
          "<li><strong>" +
          esc(game.title) +
          "</strong> — " +
          esc(pick(PKG_LABEL, lang)) +
          ": <code>" +
          esc(game.packageId) +
          "</code></li>";
      }
      lists[k].innerHTML = items;
    }
  }

  function setLang(lang) {
    currentLang = lang === "zh" ? "zh" : "en";
    var html = document.documentElement;
    html.setAttribute("lang", currentLang === "zh" ? "zh-CN" : "en");
    html.setAttribute("data-lang", currentLang);
    storeLang(currentLang);

    applyText(currentLang);
    applySwitchState(currentLang);
    renderCatalog(currentLang);

    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  /* --------------------------- Header behaviour --------------------------- */
  function initHeader() {
    var header = document.getElementById("site-header");
    if (header) {
      var onScroll = function () {
        if (window.pageYOffset > 8) {
          header.classList.add("is-scrolled");
        } else {
          header.classList.remove("is-scrolled");
        }
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    var btn = document.getElementById("menu-btn");
    var menu = document.getElementById("mobile-menu");
    if (btn && menu) {
      btn.addEventListener("click", function () {
        var open = menu.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
      var links = menu.querySelectorAll("a");
      for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function () {
          menu.classList.remove("is-open");
          btn.setAttribute("aria-expanded", "false");
        });
      }
    }
  }

  /* ------------------------------ Language -------------------------------- */
  function initLang() {
    var btns = document.querySelectorAll("[data-lang-btn]");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        setLang(this.getAttribute("data-lang-btn"));
      });
    }
  }

  /* ------------------------------- Reveal --------------------------------- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    var show = function (el) {
      el.classList.add("is-in");
    };

    if (!("IntersectionObserver" in window)) {
      for (var k = 0; k < items.length; k++) show(items[k]);
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) {
            show(entries[i].target);
            io.unobserve(entries[i].target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    for (var j = 0; j < items.length; j++) {
      io.observe(items[j]);
    }

    /* Safety net: never leave content hidden */
    window.setTimeout(function () {
      for (var m = 0; m < items.length; m++) show(items[m]);
    }, 1600);
  }

  /* -------------------------------- Boot ---------------------------------- */
  function boot() {
    document.documentElement.classList.add("js");
    captureOriginal();
    initHeader();
    initLang();
    initReveal();
    /* Restore the visitor's last choice; English when nothing is stored */
    setLang(readStoredLang());
  }

  /* site.js is loaded at the very end of <body>, so the markup above is already
     parsed — applying the language now avoids a flash of English before paint. */
  boot();
})();
