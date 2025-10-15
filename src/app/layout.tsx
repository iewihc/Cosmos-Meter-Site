import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cosmos-meter.netlify.app'),
  title: "Cosmos Meter 藍錶 - 最精準的計程車跳錶應用程式 | 智慧計費系統",
  description: "Cosmos Meter (藍錶) 是最精準的計程車計費跳錶應用程式。GPS 即時定位追蹤，支援距離計費、時間計費、混合計費模式，為計程車司機與車隊管理打造的智慧計費系統。",
  keywords: "藍錶, 跳錶, 計程車計費, 計程車跳錶, Cosmos Meter, 智慧跳錶, 計程車司機, 車隊管理, GPS定位, 計費系統, 計程車應用程式, 智慧計費, 台灣計程車, 出租車計費, 計程車費率",
  authors: [{ name: "季先生科技" }],
  creator: "季先生科技",
  publisher: "季先生科技",
  robots: "index, follow",
  openGraph: {
    title: "Cosmos Meter 藍錶 - 最精準的計程車跳錶應用程式",
    description: "專為計程車司機與車隊管理打造的智慧計費系統，GPS 精準定位與智慧化計算引擎，讓每一公里、每一秒鐘的計費都精確無誤。",
    url: "https://cosmos-meter.netlify.app",
    siteName: "Cosmos Meter 藍錶",
    images: [
      {
        url: "/cosmos-meter-logo.png",
        width: 800,
        height: 600,
        alt: "Cosmos Meter 藍錶 Logo",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosmos Meter 藍錶 - 最精準的計程車跳錶應用程式",
    description: "專為計程車司機與車隊管理打造的智慧計費系統",
    images: ["/cosmos-meter-logo.png"],
  },
  icons: {
    icon: '/cosmos-meter-logo.png',
    apple: '/cosmos-meter-logo.png',
  },
  other: {
    "apple-mobile-web-app-title": "Cosmos Meter 藍錶",
    "application-name": "Cosmos Meter 藍錶",
    "msapplication-TileColor": "#0EA5E9",
    "theme-color": "#0EA5E9",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "Cosmos Meter 藍錶",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "iOS, Android",
    "description": "Cosmos Meter (藍錶) 是最精準的計程車計費跳錶應用程式。GPS 即時定位追蹤，支援距離計費、時間計費、混合計費模式，為計程車司機與車隊管理打造的智慧計費系統。",
    "offers": {
      "@type": "Offer",
      "price": "252",
      "priceCurrency": "TWD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "100"
    },
    "publisher": {
      "@type": "Organization",
      "name": "季先生科技",
      "url": "https://cosmos-meter.netlify.app"
    }
  };

  return (
    <html lang="zh-TW">
      <head>
        <meta name="google-site-verification" content="Z9h0ThjTz2CjR7KzoisIROe8zhXaklCb4pX_fiW3SVk" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
