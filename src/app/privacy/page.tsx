'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Privacy() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', fontFamily: 'Noto Sans TC, Segoe UI, Arial, sans-serif', margin: 0 }}>
      {/* 導覽列 */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 5vw', background: 'rgba(17,24,39,0.97)', position: 'sticky', top: 0, zIndex: 10, boxShadow: '0 2px 8px #0ea5e93a' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Image src="/cosmos-meter-logo.png" alt="Cosmos Meter Logo" width={48} height={48} style={{ borderRadius: 12, background: '#111' }} />
          <span style={{ color: '#fff', fontWeight: 700, fontSize: 22, letterSpacing: 1 }}>Cosmos Meter</span>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <Link href="/" style={{ color: '#0EA5E9', background: '#fff', borderRadius: 24, padding: '10px 28px', fontWeight: 700, fontSize: 18, letterSpacing: 1, boxShadow: '0 2px 8px #0ea5e93a', textDecoration: 'none', border: '2px solid #0EA5E9' }}>首頁</Link>
        </div>
      </nav>
      
      {/* 主要內容區 */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 5vw', color: '#fff' }}>
        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 24, padding: '48px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h1 style={{ color: '#0EA5E9', fontSize: 48, fontWeight: 900, marginBottom: 32, textAlign: 'center', letterSpacing: 1 }}>Privacy Policy</h1>
          
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ color: '#38bdf8', fontSize: 32, fontWeight: 700, marginBottom: 24, letterSpacing: 1 }}>Privacy Policy</h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: '#cbd5e1' }}>
              [Cosmos Meter] respects and protects your privacy.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h3 style={{ color: '#0EA5E9', fontSize: 24, fontWeight: 600, marginBottom: 20 }}>What information we collect</h3>
            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 8 }}><strong style={{ color: '#fff' }}>Account information.</strong> When you sign in with Apple or Google, we receive your email address (and the name you choose to share). It identifies your account, your membership and your synced data.</li>
              <li style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 8 }}><strong style={{ color: '#fff' }}>Location.</strong> Precise and coarse location while a trip is running, including in the background, so the meter can measure distance and time, record the route and calculate the fare accurately.</li>
              <li style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 8 }}><strong style={{ color: '#fff' }}>Trip records.</strong> Start and end points, route, duration and fare of each trip, plus any receipt or dispatch details you add. They are stored on your device and, when you are signed in, on our servers linked to your account so you can view history and keep data across devices.</li>
              <li style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 8 }}><strong style={{ color: '#fff' }}>Content you choose to upload.</strong> If you use AI fare estimation or receipt recognition, the photo or text you submit is sent to our servers to be processed and returned to you.</li>
              <li style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 8 }}><strong style={{ color: '#fff' }}>Voice input.</strong> AI bookkeeping and dispatch entry can use speech recognition. Audio is handled by Apple&apos;s speech service under Apple&apos;s privacy policy; we only receive the resulting text.</li>
              <li style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 8 }}><strong style={{ color: '#fff' }}>Purchases.</strong> Subscriptions and add-ons are processed by Apple and RevenueCat. We receive purchase status, not your payment details.</li>
            </ul>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 16 }}>
              We do not collect contacts, messages or your photo library beyond the images you explicitly choose to save or upload.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h3 style={{ color: '#0EA5E9', fontSize: 24, fontWeight: 600, marginBottom: 20 }}>How your data is used</h3>
            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 8 }}>Running the meter, recording trips and calculating fares.</li>
              <li style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 8 }}>Keeping your trip history, bookkeeping and settings available when you sign in on another device.</li>
              <li style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 8 }}>Providing membership features and verifying purchases.</li>
              <li style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 8 }}>Sending notifications you have enabled, such as trip or dispatch reminders.</li>
              <li style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 8 }}>Showing ads in the free version (see below).</li>
            </ul>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 16 }}>
              We do not sell your personal data.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h3 style={{ color: '#0EA5E9', fontSize: 24, fontWeight: 600, marginBottom: 20 }}>Advertising and tracking</h3>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 16 }}>
              The free version shows ads served by <strong style={{ color: '#fff' }}>Google AdMob</strong>. AdMob may use your device&apos;s advertising identifier and coarse location to show relevant ads and to measure them, which Apple classifies as data used to track you. On iOS you decide this through the App Tracking Transparency prompt and can change it any time in Settings &gt; Privacy &amp; Security &gt; Tracking. Declining does not limit any feature. Paid members do not see ads.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h3 style={{ color: '#0EA5E9', fontSize: 24, fontWeight: 600, marginBottom: 20 }}>Data Sharing</h3>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 16 }}>
              We share data only with the service providers needed to run the app, and only for the purposes above:
            </p>
            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 8 }}><strong style={{ color: '#fff' }}>Apple</strong> and <strong style={{ color: '#fff' }}>Google</strong> for sign-in, maps, speech recognition and push notifications.</li>
              <li style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 8 }}><strong style={{ color: '#fff' }}>Google AdMob</strong> for advertising in the free version.</li>
              <li style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 8 }}><strong style={{ color: '#fff' }}>RevenueCat</strong> for subscription and add-on management.</li>
            </ul>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1' }}>
              We never share your data with other third parties, and we do not sell it.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h3 style={{ color: '#0EA5E9', fontSize: 24, fontWeight: 600, marginBottom: 20 }}>Retention and deletion</h3>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1' }}>
              Trip records and account data are kept while your account exists. You can delete trips in the app, and you can delete your account and all data linked to it from the app or by following the steps on our <Link href="/delete" style={{ color: '#0EA5E9', textDecoration: 'underline' }}>account deletion page</Link>. Data stored only on your device is removed when you uninstall the app.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h3 style={{ color: '#0EA5E9', fontSize: 24, fontWeight: 600, marginBottom: 20 }}>Dispatch Keyboard (Keyboard Extension)</h3>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 16 }}>
              Cosmos Meter includes an optional custom keyboard, <strong style={{ color: '#fff' }}>藍錶派單鍵盤 (Dispatch Keyboard)</strong>, that helps drivers reply to dispatch messages with an estimated travel time. It only works after you enable it in iOS Settings and is designed to keep your data on your iPhone.
            </p>
            <h4 style={{ color: '#38bdf8', fontSize: 18, fontWeight: 600, marginBottom: 12 }}>Why the keyboard asks for &quot;Allow Full Access&quot;</h4>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 16 }}>
              iOS requires Full Access for a keyboard to read the clipboard, use location and share settings with its main app. The Dispatch Keyboard uses Full Access only to:
            </p>
            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 8 }}>Read the dispatch message you copied or pasted, so it can find the destination address.</li>
              <li style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 8 }}>Read the settings you saved in the Cosmos Meter app (vehicle plate and color, report templates, quick replies and membership status) from a shared container on your device.</li>
              <li style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 8 }}>Use your current location (with the permission you granted to the Cosmos Meter app) to estimate travel time to the destination.</li>
              <li style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 8 }}>Save the dispatch you replied to into the app&apos;s local trip list on your device.</li>
            </ul>
            <h4 style={{ color: '#38bdf8', fontSize: 18, fontWeight: 600, marginBottom: 12 }}>What the keyboard does not do</h4>
            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 8 }}>It does <strong style={{ color: '#fff' }}>not</strong> record, log or transmit your keystrokes.</li>
              <li style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 8 }}>It does <strong style={{ color: '#fff' }}>not</strong> send the messages you type, the clipboard contents or your location to our servers.</li>
              <li style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 8 }}>It does <strong style={{ color: '#fff' }}>not</strong> show ads or track you across other apps.</li>
            </ul>
            <h4 style={{ color: '#38bdf8', fontSize: 18, fontWeight: 600, marginBottom: 12 }}>Apple services used for travel-time estimates</h4>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 16 }}>
              To estimate travel time, the destination text from the dispatch message and your current coordinates are sent to <strong style={{ color: '#fff' }}>Apple Maps</strong> (address lookup and route calculation). This is handled by Apple under <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" style={{ color: '#0EA5E9', textDecoration: 'underline' }}>Apple&apos;s Privacy Policy</a>; we do not receive this data. Where available, address extraction uses Apple&apos;s on-device language model and never leaves your iPhone.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 16 }}>
              The keyboard uses local notifications to let you return to the Cosmos Meter app (for example to start navigation). It never opens other apps on its own.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1' }}>
              You can turn off Full Access or remove the keyboard at any time in iOS Settings &gt; General &gt; Keyboard &gt; Keyboards. Data stored in the shared container is deleted when you uninstall the Cosmos Meter app.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h3 style={{ color: '#0EA5E9', fontSize: 24, fontWeight: 600, marginBottom: 20 }}>報分鍵盤（鍵盤擴充功能）</h3>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 16 }}>
              藍錶提供選用的自訂鍵盤「藍錶派單鍵盤」，協助司機快速回覆派單車程。鍵盤需要在 iOS 設定中手動啟用，並以「資料留在你的 iPhone 上」為設計原則。
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 16 }}>
              <strong style={{ color: '#fff' }}>為什麼需要「允許完整取用」：</strong>iOS 規定鍵盤必須開啟完整取用才能讀取剪貼簿、使用定位、以及與主 App 共用設定。報分鍵盤只用完整取用來做這些事：讀取你複製或貼上的派單文字以找出目的地；讀取你在藍錶 App 設定的車牌車色、報分模板、快捷按鍵與會員狀態；使用你授權給藍錶的定位計算車程；把回覆過的派單存進 App 本機的行程清單。
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 16 }}>
              <strong style={{ color: '#fff' }}>鍵盤不會做的事：</strong>不記錄、不上傳你的按鍵內容；不會把你輸入的訊息、剪貼簿內容或位置傳到我們的伺服器；不顯示廣告、不做跨 App 追蹤。
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 16 }}>
              <strong style={{ color: '#fff' }}>車程估算使用的 Apple 服務：</strong>估算車程時，派單中的目的地文字與你目前的座標會送交 Apple 地圖進行地址查詢與路線計算，由 Apple 依其隱私權政策處理，我們不會取得這些資料。地址擷取在支援的裝置上使用 Apple 裝置端語言模型，資料不會離開你的 iPhone。
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1' }}>
              鍵盤以本機通知提醒你回到藍錶 App（例如開始導航），不會自行開啟其他 App。你隨時可以在 iOS 設定 &gt; 一般 &gt; 鍵盤 &gt; 鍵盤 關閉完整取用或移除鍵盤；解除安裝藍錶 App 時，共用容器中的資料會一併刪除。
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h3 style={{ color: '#0EA5E9', fontSize: 24, fontWeight: 600, marginBottom: 20 }}>Contact Us</h3>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1' }}>
              If you have any questions about our privacy practices, feel free to contact us at: <a href="mailto:mr.chi.service@gmail.com" style={{ color: '#0EA5E9', textDecoration: 'underline' }}>mr.chi.service@gmail.com</a>
            </p>
          </div>

          <div style={{ textAlign: 'center', padding: '24px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ fontSize: 14, color: '#94a3b8' }}>
              Effective Date: [2025-07-10] · Last updated: 2026-10-23
            </p>
          </div>
        </div>
      </main>

      {/* 底部聯絡資訊 */}
      <footer
        style={{
          width: "100%",
          background: "#0f172a",
          color: "#cbd5e1",
          textAlign: "center",
          fontSize: 16,
          borderTop: "1px solid #334155",
          padding: "32px 0",
          marginTop: 0,
        }}
      >
        <div>聯絡我們：mr.chi.service@gmail.com ｜ <a href="https://line.me/R/ti/p/@478umgog" target="_blank" rel="noopener noreferrer" style={{ color: "#0EA5E9", textDecoration: "underline" }}>Cosmos Meter 官方 LINE</a></div>
        <div style={{ marginTop: "16px" }}>
          <Link
            href="/privacy"
            style={{
              color: "#0EA5E9",
              textDecoration: "underline",
              fontSize: 14,
            }}
          >
            隱私權政策
          </Link>
          <span style={{ margin: "0 8px", color: "#64748b" }}>｜</span>
          <Link
            href="/terms"
            style={{
              color: "#0EA5E9",
              textDecoration: "underline",
              fontSize: 14,
            }}
          >
            使用者條款
          </Link>
        </div>
        <div style={{ marginTop: "16px", fontSize: 14, color: "#9ca3af" }}>
          © 2025 季先生科技@版權所有 All Rights Reserved
        </div>
      </footer>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        
        /* 手機版 (768px 以下) */
        @media (max-width: 768px) {
          nav {
            padding: 16px 4vw !important;
          }
          
          nav span {
            font-size: 16px !important;
          }
          
          nav div:last-child {
            gap: 8px !important;
          }
          
          nav a {
            padding: 6px 16px !important;
            font-size: 12px !important;
            border-radius: 16px !important;
            border-width: 1px !important;
          }
          
          main {
            padding: 40px 4vw !important;
          }
          
          main > div {
            padding: 32px 24px !important;
            border-radius: 16px !important;
          }
          
          main h1 {
            font-size: 36px !important;
            margin-bottom: 24px !important;
          }
          
          main h2 {
            font-size: 24px !important;
            margin-bottom: 16px !important;
          }
          
          main h3 {
            font-size: 20px !important;
            margin-bottom: 16px !important;
          }
          
          main p, main li {
            font-size: 14px !important;
            line-height: 1.6 !important;
          }
          
          footer {
            font-size: 12px !important;
            padding: 24px 4vw !important;
            line-height: 1.6 !important;
          }
        }
        
        /* 小型手機 (480px 以下) */
        @media (max-width: 480px) {
          nav {
            padding: 10px 2vw !important;
          }
          
          nav span {
            font-size: 14px !important;
          }
          
          nav div:last-child {
            gap: 6px !important;
          }
          
          nav a {
            padding: 4px 12px !important;
            font-size: 11px !important;
          }
          
          main {
            padding: 24px 2vw !important;
          }
          
          main > div {
            padding: 24px 16px !important;
          }
          
          main h1 {
            font-size: 28px !important;
          }
          
          main h2 {
            font-size: 20px !important;
          }
          
          main h3 {
            font-size: 18px !important;
          }
        }
      `}</style>
    </div>
  );
}