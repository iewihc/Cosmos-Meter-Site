import type { Metadata } from "next";
import { KeyboardAddonHeader } from "@/components/keyboard-addon/KeyboardAddonHeader";
import { HeroSection } from "@/components/keyboard-addon/HeroSection";
import { FlowSection } from "@/components/keyboard-addon/FlowSection";
import { FeaturesSection } from "@/components/keyboard-addon/FeaturesSection";
import { PrivacySection } from "@/components/keyboard-addon/PrivacySection";
import { AddOnSection } from "@/components/keyboard-addon/AddOnSection";
import { FaqSection } from "@/components/keyboard-addon/FaqSection";
import { KeyboardAddonFooter } from "@/components/keyboard-addon/KeyboardAddonFooter";
import { KEYBOARD_ADDON_PATH, faq } from "@/content/keyboard-addon";
import { SITE_URL } from "@/content/site";
import styles from "@/components/keyboard-addon/KeyboardAddon.module.css";

const TITLE = "報分鍵盤｜iPhone 派單接單司機的報分鍵盤，貼上派單自動算車程｜Cosmos Meter 藍錶加價購";
const DESCRIPTION =
  "派單貼進來，地址幫你抓、車程幫你算、報分格式幫你排。報分鍵盤是 Cosmos Meter 藍錶跳表 App 的加價購功能，專為 iPhone 派單接單司機打造：接單報分三步完成，快捷鍵一顆送出。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "報分鍵盤, 報分, 接單, 派單接單, 接單報分, 派單鍵盤, 接單鍵盤, 鍵盤, iPhone鍵盤, 派單回報, 車程估算, 派單司機, 計程車司機, 藍錶, 跳表, 藍錶加價購, Cosmos Meter",
  alternates: { canonical: `${SITE_URL}${KEYBOARD_ADDON_PATH}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${KEYBOARD_ADDON_PATH}`,
    siteName: "Cosmos Meter 藍錶",
    locale: "zh_TW",
    type: "website",
  },
};

/** 結構化資料：FAQ 讓搜尋結果可展開問答，SoftwareApplication 標明是藍錶的 iOS 鍵盤功能 */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "報分鍵盤",
    alternateName: "藍錶派單鍵盤",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "iOS",
    description: DESCRIPTION,
    keywords: "報分鍵盤, 報分, 接單, 派單接單, 派單鍵盤, 跳表",
    isPartOf: { "@type": "MobileApplication", name: "Cosmos Meter 藍錶", url: SITE_URL },
    publisher: { "@type": "Organization", name: "季先生科技", url: SITE_URL },
  },
];

/** 報分鍵盤介紹頁（Screen）：只負責組合各區塊元件 */
export default function KeyboardAddonPage() {
  return (
    <main className={`${styles.theme} ${styles.page}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KeyboardAddonHeader />
      <HeroSection />
      <FlowSection />
      <FeaturesSection />
      <PrivacySection />
      <AddOnSection />
      <FaqSection />
      <KeyboardAddonFooter />
    </main>
  );
}
