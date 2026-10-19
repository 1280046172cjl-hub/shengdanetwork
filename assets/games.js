/* ==========================================================================
   shengdanetworktechnology — product catalogue (single source of truth)
   --------------------------------------------------------------------------
   首页产品卡、隐私政策的应用清单、账号与数据删除页的应用清单，全部由这份
   数据渲染。以后维护只需要改这里：

   - 上新游戏  → 往 games 数组里加一个对象
   - 产品下架  → 把该游戏的 status 改成 "delisted"
   - 改联系方式 → 改 developer 里的字段

   status 取值（决定徽章文案与是否渲染商店按钮）：
     live     商店页可正常打开，渲染 "Available on Google Play" + 商店按钮
     delisted 曾发行但当前不可用，渲染 "Not currently listed"，不渲染商店按钮
     in-dev   真在研发、尚未发行，渲染 "In development"，不渲染商店按钮

   注意：title 是专有名词，不翻译；tagline 只写可核实的事实，不写玩法描述。
   ========================================================================== */
window.SDT_CATALOG = {
  developer: {
    name: "shengdanetworktechnology",
    legalName: {
      en: "Wuhan Shengda Network Technology Co., Ltd.",
      zh: "武汉盛达网络科技有限公司"
    },
    duns: "699427677",
    established: "2022",
    email: "shengdanetworktechnology@gmail.com",
    phone: "+86-17679223723"
  },

  games: [
    {
      id: "tribe-defense-monster-era",
      title: "Tribe Defense: Monster Era",
      packageId: "buluohelianmeng-release",
      platform: "Android",
      firstRelease: "2026",
      status: "delisted",
      storeUrl: "",
      tagline: {
        en: "Our first mobile title, released for Android in 2026.",
        zh: "我们的首款移动游戏，2026 年发行于 Android 平台。"
      }
    }
  ]
};
