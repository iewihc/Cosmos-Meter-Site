/**
 * 報分鍵盤（藍錶加價購）頁面文案。
 * 純資料，不含任何 UI 邏輯；元件只負責呈現。
 */
export type FeatureIconKey =
  | "magic"
  | "clock"
  | "map"
  | "keyboard"
  | "compass"
  | "shield";

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: FeatureIconKey;
  title: string;
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PhoneMockContent {
  time: string;
  battery: string;
  incomingMessage: string;
  outgoingMessage: string;
  detectedLabel: string;
  detectedAddress: string;
  eta: string;
  sendLabel: string;
  navLabel: string;
  quickKeys: string[];
  minuteKeys: string[];
}

export const KEYBOARD_ADDON_PATH = "/keyboard-addon";

export const brand = {
  name: "報分鍵盤",
  headerTitle: "Cosmos Meter - 報分鍵盤",
  tagline: "派單回報，交給我算。",
  parentApp: "Cosmos Meter 藍錶",
};

export const nav: NavItem[] = [
  { label: "功能", href: "#features" },
  { label: "流程", href: "#flow" },
  { label: "加價購", href: "#addon" },
  { label: "常見問題", href: "#faq" },
];

export const hero = {
  eyebrow: "專為 iPhone 打造",
  titleLine1: "派單回報，",
  titleLine2: "交給我算。",
  body: "接單的人都知道——差個幾秒，單可能就不是你的了。報分鍵盤是專為派單接單司機設計的 iPhone 鍵盤：幫你抓地址、算車程、排好報分格式，看到單的那一刻，少浪費每一秒。",
  primaryCta: { label: "了解加價購方案", href: "#addon" },
  secondaryCta: { label: "看它怎麼運作", href: "#flow" },
  trustLine: "不改機 · 不越獄 · 不碰你的帳號",
};

export const phoneMock: PhoneMockContent = {
  time: "21:14",
  battery: "84%",
  incomingMessage: "🚕／台中超級巨星公園店 回20",
  outgoingMessage: "🚕／台中超級巨星公園店 回20\n9999 白\n7",
  detectedLabel: "已辨識地點",
  detectedAddress: "台中市北區公園路195號",
  eta: "7 min",
  sendLabel: "送出",
  navLabel: "導航",
  quickKeys: ["到", "上", "準", "過5", "過10", "過15", "客指", "未結"],
  minuteKeys: ["3", "5", "7", "9", "10", "15", "20", "25"],
};

export const flow = {
  kicker: "Workflow",
  title: "少切幾次畫面，就可能快別人好幾秒",
  before: {
    label: "以前",
    steps: ["打開 LINE", "複製單號", "刪除前綴跟備註", "打開 Map", "貼上地址", "回到 LINE", "打車牌", "打分鐘數", "送出"],
    note: "九個步驟，每一步都在流失秒數。",
  },
  after: {
    label: "用報分鍵盤",
    steps: ["貼上", "確認", "送出"],
    note: "看到單、貼上、回報。就是這麼直接。",
  },
};

export const featuresSection = {
  kicker: "Features",
  titleLine1: "你負責看單，",
  titleLine2: "我負責幫你把回報打好。",
};

export const features: Feature[] = [
  {
    icon: "magic",
    title: "派單一貼，回報直接準備好",
    body: "地址辨識 → 車程估算 → 車牌車色 → 報分格式，一次幫你整理好。最後確認一下，直接送出。",
  },
  {
    icon: "clock",
    title: "車程不用自己算",
    body: "依照你目前的位置估算前往派單地點的時間，塞車、路況、距離都納入。也能依跑車習慣選擇路線方式。",
  },
  {
    icon: "map",
    title: "派單再亂，也幫你抓重點",
    body: "Emoji、備註、回幾、低消、街口、車隊黑話混在一起也沒關係。常跑的特殊地點還能自訂別名。",
  },
  {
    icon: "keyboard",
    title: "常用回報，一顆鍵完成",
    body: "到／上／準／過5／過10／過15／客指／未結，全部做成快捷鍵，而且每顆都能照自己的習慣修改。",
  },
  {
    icon: "compass",
    title: "報完，直接去導航",
    body: "送出前顯示「25 min｜12.5 km｜○○地址」讓你快速確認，確認後直接接著開啟地圖導航。",
  },
  {
    icon: "shield",
    title: "不是搶單外掛",
    body: "不碰你的帳號、不自動搶單、不用改機越獄。只把最浪費時間的步驟縮短，你依然自己判斷、自己送出。",
  },
];

export const privacy = {
  kicker: "Privacy",
  title: "你的派單，不該到處亂跑",
  body: "派單內容裡可能包含地址、對話、客戶資訊與工作內容。所以我們的設計方向很簡單：能在你的 iPhone 上完成的，就盡量留在你的 iPhone 上。速度要快，隱私也不能犧牲。",
};

/** 加價購區塊：刻意不揭露定價 */
export const addOn = {
  kicker: "Add-on",
  title: "藍錶加價購功能",
  body: "報分鍵盤是 Cosmos Meter 藍錶的加價購功能，安裝藍錶後即可在 App 內加購啟用。定價將另行公告，想先了解或預約的話，歡迎透過官方 LINE 聯絡我們。",
  badge: "定價即將公布",
  cardTitle: "加購後可使用",
  includes: [
    "完整鍵盤功能",
    "地址辨識與車程估算",
    "自訂回報格式與快捷鍵",
    "車牌車色自動帶入",
    "地點別名與自訂路線偏好",
  ],
  primaryCta: { label: "官方 LINE 洽詢" },
  secondaryCta: { label: "回到藍錶首頁", href: "/" },
  note: "適用 iPhone，需搭配 Cosmos Meter 藍錶使用。",
};

export const faqSection = {
  kicker: "FAQ",
  title: "常見問題",
};

export const faq: FaqItem[] = [
  {
    question: "怎麼購買報分鍵盤？",
    answer:
      "報分鍵盤是 Cosmos Meter 藍錶的加價購功能。請先安裝藍錶，於 App 內加購即可啟用。定價將另行公告，歡迎透過官方 LINE 詢問。",
  },
  {
    question: "這是搶單外掛嗎？",
    answer:
      "不是。報分鍵盤不會操作你的聊天帳號，也不會自動搶單。它只幫你把「算時間＋整理格式＋輸入回報」做得更快，最後仍由你自己送出。",
  },
  {
    question: "需要改機或越獄嗎？",
    answer: "不需要。安裝後在 iPhone 鍵盤設定中啟用即可使用。",
  },
  {
    question: "我們車隊格式很特殊，可以用嗎？",
    answer:
      "可以。原文＋車牌＋分鐘、車牌＋車色＋分鐘，或其他自訂格式都能設定，車牌與車色設定一次就自動帶入。",
  },
  {
    question: "報分鍵盤怎麼讓接單報分更快？",
    answer:
      "派單群組的單貼進輸入框，鍵盤就辨識地點、用目前位置估算車程，並按你的格式把車牌、車色、分鐘數排好；常用的到／上／準等回報做成快捷鍵，一顆鍵送出。整個接單報分流程從九步縮到貼上、確認、送出三步。",
  },
  {
    question: "報分鍵盤和藍錶跳表 App 是什麼關係？",
    answer:
      "報分鍵盤是 Cosmos Meter 藍錶跳表 App 的加價購功能，和跳錶共用同一個帳號與司機資料。報分用的車牌車色、報分模板、快捷鍵都在藍錶 App 裡設定，鍵盤在 LINE 或任何輸入框都能用。",
  },
  {
    question: "哪些派單格式可以辨識？",
    answer:
      "常見的車隊派單格式都可以：Emoji 開頭、地點＋回幾、含備註與低消、街口或車隊黑話混在一起也能抓出目的地；常跑的特殊地點還能自訂別名，辨識更準。",
  },
];

export const footer = {
  titleLine1: "iPhone 報分，",
  titleLine2: "也可以很快。",
  cta: { label: "官方 LINE 洽詢" },
  disclaimer: "報分鍵盤並非自動搶單程式，不會操作你的聊天帳號。",
  year: 2026,
};

/** 藍錶首頁的加價購導流區塊文案 */
export const homeTeaser = {
  badge: "藍錶加價購功能 · iPhone",
  titleLine1: "派單回報，",
  titleLine2: "交給我算。",
  body: "報分鍵盤是專為派單接單司機打造的 iPhone 報分鍵盤：派單貼進來，地址幫你抓、車程幫你算、報分格式幫你排，確認後直接送出並導航。",
  chips: ["地址辨識", "車程估算", "車牌車色自動帶入", "自訂快捷鍵", "一鍵導航"],
  primaryCta: { label: "了解報分鍵盤", href: KEYBOARD_ADDON_PATH },
  secondaryCta: { label: "官方 LINE 洽詢" },
  note: "定價將另行公告，歡迎先透過官方 LINE 詢問。",
};
