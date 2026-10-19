import type { Metadata } from "next";
import { KeyboardAddonHeader } from "@/components/keyboard-addon/KeyboardAddonHeader";
import { HeroSection } from "@/components/keyboard-addon/HeroSection";
import { FlowSection } from "@/components/keyboard-addon/FlowSection";
import { FeaturesSection } from "@/components/keyboard-addon/FeaturesSection";
import { PrivacySection } from "@/components/keyboard-addon/PrivacySection";
import { AddOnSection } from "@/components/keyboard-addon/AddOnSection";
import { FaqSection } from "@/components/keyboard-addon/FaqSection";
import { KeyboardAddonFooter } from "@/components/keyboard-addon/KeyboardAddonFooter";
import { KEYBOARD_ADDON_PATH } from "@/content/keyboard-addon";
import { SITE_URL } from "@/content/site";
import styles from "@/components/keyboard-addon/KeyboardAddon.module.css";

const TITLE = "報分鍵盤 - iPhone 派單司機的快速報分鍵盤｜Cosmos Meter 藍錶加價購";
const DESCRIPTION =
  "派單貼進來，地址幫你抓、車程幫你算、格式幫你排。報分鍵盤是 Cosmos Meter 藍錶的加價購功能，專為 iPhone 派單司機打造的快速報分鍵盤。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "報分鍵盤, 藍錶加價購派單司機, 報分鍵盤, iPhone鍵盤, 車程估算, 派單回報, 計程車司機, 藍錶加價購, Cosmos Meter",
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

/** 報分鍵盤介紹頁（Screen）：只負責組合各區塊元件 */
export default function KeyboardAddonPage() {
  return (
    <main className={`${styles.theme} ${styles.page}`}>
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
