import type { Metadata } from "next";
import { SITE_URL } from "@/content/site";

const TITLE = "Taipei Meter 北錶｜台北計程車跳表 App、GPS 跳錶計費";
const DESCRIPTION =
  "北錶（Taipei Meter）是台北計程車司機的跳表 App：GPS 跳錶計費、台北費率內建、行程記錄與收入統計，精準計費、輕鬆上路。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "北錶, 跳表, 跳錶, 台北計程車跳表, 計程車跳錶, 跳表app, 計程車計費, Taipei Meter, 計程車司機",
  alternates: { canonical: `${SITE_URL}/taipei-meter/` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/taipei-meter/`,
    siteName: "Cosmos Meter 藍錶",
    locale: "zh_TW",
    type: "website",
  },
};

/** 北錶頁的 metadata 容器：頁面本身是 client component，SEO 資訊放這裡 */
export default function TaipeiMeterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
