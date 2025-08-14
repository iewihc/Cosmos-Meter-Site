'use client';
import Image from 'next/image';
import Link from 'next/link';

const googlePlaySvg = 'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg';
const appStoreSvg = 'https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg';

export default function Driver() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)', fontFamily: 'Noto Sans TC, Segoe UI, Arial, sans-serif', margin: 0 }}>
      {/* 導覽列 */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 5vw', background: 'rgba(255,255,255,0.97)', position: 'sticky', top: 0, zIndex: 10, boxShadow: '0 2px 8px #bae6fd55' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Image src="/cosmos-driver-logo.png" alt="Cosmos Driver Logo" width={48} height={48} style={{ borderRadius: 12, background: '#fff' }} />
          <span style={{ color: '#0EA5E9', fontWeight: 700, fontSize: 22, letterSpacing: 1 }}>Cosmos Driver</span>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <Link href="/" style={{ color: '#0EA5E9', background: 'transparent', borderRadius: 24, padding: '10px 28px', fontWeight: 700, fontSize: 18, letterSpacing: 1, border: '2px solid #0EA5E9', textDecoration: 'none', opacity: 0.7 }}>Cosmos Meter</Link>
          <Link href="/driver" style={{ color: '#fff', background: '#0EA5E9', borderRadius: 24, padding: '10px 28px', fontWeight: 700, fontSize: 18, letterSpacing: 1, boxShadow: '0 2px 8px #0ea5e93a', textDecoration: 'none', border: '2px solid #0EA5E9' }}>Cosmos Driver</Link>
        </div>
      </nav>
      {/* Hero 區塊 */}
      <section style={{ width: '100%', background: 'linear-gradient(90deg, #fff 0%, #bae6fd 100%)', padding: '64px 0 48px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
        <Image src="/cosmos-driver-logo.png" alt="Cosmos Driver Logo" width={140} height={140} style={{ borderRadius: 40, background: '#fff', marginBottom: 18, boxShadow: '0 4px 32px #bae6fd55' }} />
        <h1 style={{ color: '#0EA5E9', fontSize: 54, fontWeight: 900, margin: '0 0 18px 0', letterSpacing: 2, textShadow: '0 2px 12px #0ea5e980' }}>司機派單神器</h1>
        <div style={{ color: '#222', fontSize: 26, marginBottom: 24, fontWeight: 500, textShadow: '0 2px 8px #bae6fd50' }}>報表美觀，準確快速</div>
        <a href="https://forms.gle/oiWC1bwMk581UNyE8" target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(90deg, #0EA5E9 60%, #38bdf8 100%)', color: '#fff', fontWeight: 700, borderRadius: 32, padding: '20px 56px', textDecoration: 'none', fontSize: 22, letterSpacing: 1, boxShadow: '0 4px 16px #0ea5e91a', margin: '18px 0 0 0', transition: 'background 0.2s', display: 'inline-block' }}>申請測試帳號</a>
      </section>
      {/* 下載區 */}
      <section style={{ width: '100%', background: '#e0e7ef', padding: '48px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ color: '#0EA5E9', fontWeight: 700, fontSize: 24, marginBottom: 24 }}>下載連結</div>
        <div className="download-btn-row">
          <a href="xxxx" target="_blank" rel="noopener noreferrer" className="download-btn" style={{ background: '#fff' }}>
            <img src={googlePlaySvg} alt="Google Play 下載" style={{ height: 56, width: 'auto', display: 'block' }} />
          </a>
          <a href="https://www.apple.com/tw/app-store/" target="_blank" rel="noopener noreferrer" className="download-btn" style={{ background: '#fff' }}>
            <img src={appStoreSvg} alt="App Store 下載" style={{ height: 56, width: 'auto', display: 'block' }} />
          </a>
        </div>
        <div style={{ color: '#64748b', fontSize: 16, marginTop: 12 }}>Android 用戶請下載 APK，iOS 用戶請用 TestFlight</div>
      </section>
      {/* 產品特色區 */}
      <section style={{ width: '100%', background: '#fff', padding: '56px 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32 }}>
        {/* 建議放派單畫面截圖 */}
        <div style={{ flex: '1 1 400px', maxWidth: 500, background: '#e0e7ef', borderRadius: 32, boxShadow: '0 2px 16px #bae6fd55', padding: 32, minWidth: 280, minHeight: 280, display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24 }}>
          <div style={{ width: '100%', height: 180, background: '#0EA5E9', borderRadius: 18, marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 22, fontWeight: 500, letterSpacing: 1, opacity: 0.95, boxShadow: '0 2px 8px #bae6fd55' }}>
            派單畫面截圖（建議放app派單主畫面）
          </div>
          <div style={{ color: '#0EA5E9', fontWeight: 700, fontSize: 24, marginBottom: 12 }}>派單給司機，接客超方便</div>
          <div style={{ color: '#334155', fontSize: 18, textAlign: 'center' }}>報表美觀，數據一目了然，系統穩定，反應快速。</div>
        </div>
        {/* 特色卡片 */}
        <div style={{ flex: '1 1 400px', maxWidth: 500, background: '#e0e7ef', borderRadius: 32, boxShadow: '0 2px 16px #bae6fd55', padding: 32, minWidth: 280, minHeight: 280, display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24 }}>
          <div style={{ width: '100%', height: 180, background: '#0EA5E9', borderRadius: 18, marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 22, fontWeight: 500, letterSpacing: 1, opacity: 0.95, boxShadow: '0 2px 8px #bae6fd55' }}>
            報表美觀示意圖（建議放數據圖、報表畫面等）
          </div>
          <div style={{ color: '#0EA5E9', fontWeight: 700, fontSize: 24, marginBottom: 12 }}>多平台支援，隨時隨地接單</div>
          <div style={{ color: '#334155', fontSize: 18, textAlign: 'center' }}>現代化 UI，操作流暢，讓管理員與司機都能輕鬆上手。</div>
        </div>
      </section>
      {/* 使用情境/流程區 */}
      <section style={{ width: '100%', background: '#bae6fd', padding: '56px 0', display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ flex: '1 1 400px', minWidth: 280 }}>
          <div style={{ color: '#0EA5E9', fontWeight: 800, fontSize: 26, marginBottom: 18 }}>使用流程</div>
          <ol style={{ color: '#222', fontSize: 20, lineHeight: 2, paddingLeft: 24 }}>
            <li>申請 Cosmos Driver 測試帳號</li>
            <li>下載 App（Android APK 或 iOS TestFlight）</li>
            <li>開始接單，享受高效派單體驗</li>
          </ol>
        </div>
        <div style={{ flex: '1 1 400px', minWidth: 280, background: '#e0e7ef', borderRadius: 24, height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0EA5E9', fontSize: 22, fontWeight: 500, letterSpacing: 1, opacity: 0.85, boxShadow: '0 2px 8px #bae6fd55' }}>
          情境照（建議放司機接單、管理員派單照片）
        </div>
      </section>
      {/* FAQ 區 */}
      <section style={{ width: '100%', background: '#fff', padding: '48px 0' }}>
        <div style={{ color: '#0EA5E9', fontWeight: 800, fontSize: 26, marginBottom: 18, textAlign: 'center' }}>常見問題</div>
        <ul style={{ color: '#222', fontSize: 18, lineHeight: 2, paddingLeft: 32, maxWidth: 900, margin: '0 auto' }}>
          <li>Q: 如何申請測試帳號？<br />A: 點擊上方「申請測試帳號」按鈕，填寫表單即可。</li>
          <li>Q: Android APK 下載後如何安裝？<br />A: 下載後直接安裝，若有安全提示請選擇允許。</li>
          <li>Q: iOS 用戶如何加入 TestFlight？<br />A: 申請帳號後，管理員會發送邀請連結。</li>
        </ul>
      </section>
      {/* 底部聯絡資訊 */}
      <footer style={{ width: '100%', background: '#e0e7ef', color: '#334155', textAlign: 'center', fontSize: 16, borderTop: '1px solid #bae6fd', padding: '32px 0', marginTop: 0 }}>
        聯絡我們：service@cosmosmeter.com ｜ Cosmos Driver 官方 LINE ｜ Facebook 粉專
      </footer>
      <style jsx global>{`
        .download-btn-row {
          display: flex;
          gap: 24px;
          justify-content: center;
        }
        .download-btn {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 2px 8px #bae6fd55;
          background: #fff;
          transition: transform 0.1s, box-shadow 0.2s;
        }
        .download-btn:hover {
          transform: translateY(-4px) scale(1.04);
          box-shadow: 0 8px 24px #0ea5e9cc;
        }
        @media (max-width: 800px) {
          nav { flex-direction: column; gap: 12px; padding: 14px 2vw !important; }
        }
        @media (max-width: 600px) {
          section, main { padding: 12px 2vw 12px 2vw !important; }
          nav { padding: 10px 2vw !important; }
          img { width: 80px !important; height: 80px !important; }
          .download-btn-row {
            flex-direction: column;
            gap: 16px;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
} 