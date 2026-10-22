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
  title: "Cosmos Meter 藍錶｜計程車跳表／跳錶 App、派單接單報分鍵盤",
  description: "Cosmos Meter（藍錶）是計程車司機的跳表 App：GPS 跳錶計費、距離／時間／混合計費、行程記錄，另有 iPhone 報分鍵盤，派單接單時貼上單就自動算車程、排好報分格式。",
  keywords: "藍錶, 跳表, 跳錶, 跳表app, 計程車跳表, 計程車跳錶, 計程車計費, Cosmos Meter, 智慧跳錶, 報分, 報分鍵盤, 派單鍵盤, 鍵盤, 接單, 派單接單, 接單報分, 車程估算, 計程車司機, 車隊管理, GPS定位, 計費系統, 計程車應用程式, 台灣計程車, 計程車費率",
  authors: [{ name: "季先生科技" }],
  creator: "季先生科技",
  publisher: "季先生科技",
  robots: "index, follow",
  alternates: { canonical: "https://cosmos-meter.netlify.app" },
  openGraph: {
    title: "Cosmos Meter 藍錶｜計程車跳表 App、派單接單報分鍵盤",
    description: "GPS 跳錶計費、行程記錄，加上 iPhone 報分鍵盤：派單接單貼上單就自動算車程、排好報分格式。專為計程車司機與車隊打造。",
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
    title: "Cosmos Meter 藍錶｜計程車跳表 App、派單接單報分鍵盤",
    description: "GPS 跳錶計費＋iPhone 派單接單報分鍵盤，專為計程車司機打造",
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
    "description": "Cosmos Meter（藍錶）是計程車司機的跳表 App：GPS 跳錶計費、距離／時間／混合計費、行程記錄，另有 iPhone 報分鍵盤，派單接單時貼上單就自動算車程、排好報分格式。",
    "keywords": "跳表, 跳錶, 計程車跳表, 報分鍵盤, 派單接單, 報分",
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
