'use client';
import Image from 'next/image';
import Link from 'next/link';

const googlePlaySvg = 'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg';
const appStoreSvg = 'https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', fontFamily: 'Noto Sans TC, Segoe UI, Arial, sans-serif', margin: 0 }}>
      {/* 導覽列 */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 5vw', background: 'rgba(17,24,39,0.97)', position: 'sticky', top: 0, zIndex: 10, boxShadow: '0 2px 8px #0ea5e93a' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Image src="/cosmos-meter-logo.png" alt="Cosmos Meter Logo" width={48} height={48} style={{ borderRadius: 12, background: '#111' }} />
          <span style={{ color: '#fff', fontWeight: 700, fontSize: 22, letterSpacing: 1 }}>Cosmos Meter</span>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <Link href="/" style={{ color: '#0EA5E9', background: '#fff', borderRadius: 24, padding: '10px 28px', fontWeight: 700, fontSize: 18, letterSpacing: 1, boxShadow: '0 2px 8px #0ea5e93a', textDecoration: 'none', border: '2px solid #0EA5E9' }}>Cosmos Meter</Link>
          <Link href="/driver" style={{ color: '#fff', background: 'transparent', borderRadius: 24, padding: '10px 28px', fontWeight: 700, fontSize: 18, letterSpacing: 1, border: '2px solid #fff', textDecoration: 'none', opacity: 0.7 }}>Cosmos Driver</Link>
        </div>
      </nav>
      
      {/* Hero 區塊 */}
      <section className="hero-section" style={{ 
        width: '100%', 
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10rem',
        padding: '0 3vw'
      }}>
        {/* 左側手機區域 */}
        <div className="phone-container" style={{
          position: 'relative',
          width: '350px',
          height: '700px',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: '-3rem'
        }}>
          {/* iPhone 16 外殼 */}
          <div className="iphone-16-frame" style={{
            position: 'relative',
            width: '280px',
            height: '580px',
            background: 'linear-gradient(145deg,rgb(0, 0, 0),rgb(0, 0, 0))',
            borderRadius: '45px',
            padding: '8px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(0, 0, 0, 0)',
            border: '1px solid #333'
          }}>
            {/* 螢幕區域 */}
            <div className="phone-screen" style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              background: '#000',
              borderRadius: '37px',
              overflow: 'hidden',
              border: '2px solid #1a1a1a'
            }}>
              {/* Dynamic Island */}
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '28px',
                background: '#000',
                borderRadius: '14px',
                zIndex: 10,
                border: '1px solid #333'
              }}></div>
              
              {/* 影片播放區域 */}
              <div className="video-area" style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {/* 實際影片元素 */}
                <video 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    borderRadius: '35px'
                  }}
                  autoPlay
                  muted
                  loop
                  playsInline
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  onLoadedData={(e) => {
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'none';
                  }}
                >
                  <source src="/demo-video.mp4" type="video/mp4" />
                </video>
                
                {/* 影片載入失敗時的備用內容 */}
                <div id="video-fallback" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: '#00ff00',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  color: '#000',
                  fontSize: '14px',
                  fontWeight: '600',
                  textAlign: 'center',
                  padding: '20px',
                  zIndex: 0,
                  borderRadius: '35px'
                }}>
                  <div style={{ marginBottom: '10px' }}>📱</div>
                  <div>Cosmos Meter</div>
                  <div style={{ fontSize: '12px', opacity: 0.7, marginTop: '10px' }}>
                    影片播放區域
                  </div>
                </div>
              </div>
            </div>
            
            {/* 左側按鈕 */}
            <div style={{
              position: 'absolute',
              left: '-4px',
              top: '130px',
              width: '5px',
              height: '40px',
              background: '#333',
              borderRadius: '8px 0 0 8px'
            }}></div>
            
            <div style={{
              position: 'absolute',
              left: '-4px',
              top: '180px',
              width: '5px',
              height: '30px',
              background: '#333',
              borderRadius: '6px 0 0 6px'
            }}></div>
            <div style={{
              position: 'absolute',
              left: '-4px',
              top: '220px',
              width: '5px',
              height: '30px',
              background: '#333',
              borderRadius: '6px 0 0 6px'
            }}></div>
            
            <div style={{
              position: 'absolute',
              right: '-4px',
              top: '160px',
              width: '5px',
              height: '65px',
              background: '#333',
              borderRadius: '0 8px 8px 0'
            }}></div>
          </div>
        </div>

        {/* 右側內容區域 */}
        <div className="hero-content-area" style={{
          flex: 1,
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 1rem',
          marginLeft: '-2rem'
        }}>
          <Image src="/cosmos-meter-logo.png" alt="Cosmos Meter Logo" width={140} height={140} style={{ borderRadius: 40, background: '#111', marginBottom: 18, boxShadow: '0 4px 32px #0ea5e93a' }} />
          <h1 style={{ color: '#fff', fontSize: 54, fontWeight: 900, margin: '0 0 18px 0', letterSpacing: 2, textShadow: '0 2px 12px #0ea5e980', textAlign: 'center' }}>跳錶新革命</h1>
          <h1 style={{ color: '#fff', fontSize: 45, fontWeight: 900, margin: '0 0 18px 0', letterSpacing: 2, textShadow: '0 2px 12px #0ea5e980', textAlign: 'center' }}>Cosmos Meter - 藍錶</h1>
          <div style={{ color: '#fff', fontSize: 26, marginBottom: 24, fontWeight: 500, textShadow: '0 2px 8px #0ea5e950', textAlign: 'center' }}>精準里程 • 安心收費</div>
          <div style={{ background: '#fff', color: '#0EA5E9', fontWeight: 800, fontSize: 20, borderRadius: 32, padding: '10px 32px', marginBottom: 24, boxShadow: '0 2px 12px #0ea5e93a', letterSpacing: 1, textAlign: 'center' }}>8月底前填表單可享三個月免費試用</div>
          <a href="https://forms.gle/XFTX938K7KgR9Z8RA" target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(90deg, #0EA5E9 60%, #38bdf8 100%)', color: '#fff', fontWeight: 700, borderRadius: 32, padding: '20px 56px', textDecoration: 'none', fontSize: 22, letterSpacing: 1, boxShadow: '0 4px 16px #0ea5e93a', margin: '18px 0 0 0', transition: 'background 0.2s', display: 'inline-block' }}>申請試用帳號</a>
        </div>
      </section>

      {/* 手機版專用影片區塊 */}
      <section className="mobile-video-section" style={{ 
        width: '100%', 
        padding: '2rem 4vw',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
      }}>
        <div className="mobile-phone-container" style={{
          position: 'relative',
          width: '240px',
          height: '480px',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* iPhone 16 外殼 */}
          <div className="mobile-iphone-frame" style={{
            position: 'relative',
            width: '200px',
            height: '400px',
            background: 'linear-gradient(145deg,rgb(0, 0, 0),rgb(0, 0, 0))',
            borderRadius: '32px',
            padding: '6px',
            boxShadow: '0 15px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(0, 0, 0, 0)',
            border: '1px solid #333'
          }}>
            {/* 螢幕區域 */}
            <div className="mobile-phone-screen" style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              background: '#000',
              borderRadius: '26px',
              overflow: 'hidden',
              border: '1px solid #1a1a1a'
            }}>
              {/* Dynamic Island - 手機版較小 */}
              <div className="mobile-dynamic-island" style={{
                position: 'absolute',
                top: '12px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '50px',
                height: '16px',
                background: '#000',
                borderRadius: '8px',
                zIndex: 10,
                border: '1px solid #333'
              }}></div>
              
              {/* 影片播放區域 */}
              <div className="mobile-video-area" style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {/* 實際影片元素 */}
                <video 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    borderRadius: '24px'
                  }}
                  autoPlay
                  muted
                  loop
                  playsInline
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  onLoadedData={(e) => {
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'none';
                  }}
                >
                  <source src="/demo-video.mp4" type="video/mp4" />
                </video>
                
                {/* 影片載入失敗時的備用內容 */}
                <div className="mobile-video-fallback" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: '#00ff00',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  color: '#000',
                  fontSize: '12px',
                  fontWeight: '600',
                  textAlign: 'center',
                  padding: '15px',
                  zIndex: 0,
                  borderRadius: '24px'
                }}>
                  <div style={{ marginBottom: '8px' }}>📱</div>
                  <div>Cosmos Meter</div>
                  <div style={{ fontSize: '10px', opacity: 0.7, marginTop: '8px' }}>
                    影片播放區域
                  </div>
                </div>
              </div>
            </div>
            
            {/* 按鈕區域 - 縮小版 */}
            <div style={{
              position: 'absolute',
              left: '-3px',
              top: '90px',
              width: '3px',
              height: '28px',
              background: '#333',
              borderRadius: '6px 0 0 6px'
            }}></div>
            
            <div style={{
              position: 'absolute',
              left: '-3px',
              top: '125px',
              width: '3px',
              height: '20px',
              background: '#333',
              borderRadius: '4px 0 0 4px'
            }}></div>
            <div style={{
              position: 'absolute',
              left: '-3px',
              top: '150px',
              width: '3px',
              height: '20px',
              background: '#333',
              borderRadius: '4px 0 0 4px'
            }}></div>
            
            <div style={{
              position: 'absolute',
              right: '-3px',
              top: '110px',
              width: '3px',
              height: '45px',
              background: '#333',
              borderRadius: '0 6px 6px 0'
            }}></div>
          </div>
        </div>
      </section>

      {/* 下載區 */}
      <section style={{ width: '100%', background: '#111827', padding: '48px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ color: '#fff', fontWeight: 700, fontSize: 24, marginBottom: 24 }}>下載連結</div>
        <div className="download-btn-row">
          <a href="#" target="_blank" rel="noopener noreferrer" className="download-btn">
            <img src={googlePlaySvg} alt="Google Play 下載" style={{ height: 56, width: 'auto', display: 'block' }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="download-btn">
            <img src={appStoreSvg} alt="App Store 下載" style={{ height: 56, width: 'auto', display: 'block' }} />
          </a>
        </div>
        <div style={{ color: '#38bdf8', fontSize: 16, marginTop: 12 }}>Android、iOS 皆可下載</div>
      </section>

      {/* 產品特色區 */}
      <section style={{ width: '100%', background: '#1e293b', padding: '80px 5vw' }}>
        {/* 第一組：左側文字，右側圖片 */}
        <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: '80px', marginBottom: '120px', maxWidth: '1200px', margin: '0 auto 120px auto' }}>
          {/* 左側文字內容 */}
          <div className="feature-text" style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{ color: '#fff', fontSize: 42, fontWeight: 900, marginBottom: 24, letterSpacing: 1 }}>計費準確度業界領先</h3>
            <p style={{ color: '#cbd5e1', fontSize: 20, lineHeight: 1.7, marginBottom: 24 }}>跳錶精準，無誤差，支援多種車型與計費方式，讓每一趟行程都安心透明。專業的計費算法確保公平合理的收費標準。</p>
            <ul style={{ color: '#cbd5e1', fontSize: 18, lineHeight: 1.8, paddingLeft: 20 }}>
              <li>精準GPS定位追蹤</li>
              <li>多種計費模式支援</li>
              <li>透明化收費明細</li>
            </ul>
          </div>
          
          {/* 右側手機截圖 */}
          <div className="feature-image" style={{ flex: '0 0 auto' }}>
            <div style={{ 
              width: '280px', 
              height: '500px', 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
              borderRadius: 24, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: '#fff', 
              fontSize: 18, 
              fontWeight: 600, 
              textAlign: 'center',
              boxShadow: '0 12px 40px rgba(102, 126, 234, 0.4)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* 模擬手機狀態欄 */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '30px',
                background: 'rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 16px',
                fontSize: '12px'
              }}>
                <span>9:41</span>
                <span>100%</span>
              </div>
              <div style={{ marginTop: '20px' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>📊</div>
                <div style={{ fontSize: '20px', marginBottom: '8px' }}>Cosmos Meter</div>
                <div style={{ fontSize: '14px', opacity: 0.8 }}>
                  計費界面截圖
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 第二組：左側圖片，右側文字 */}
        <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: '80px', maxWidth: '1200px', margin: '0 auto' }}>
          {/* 左側手機截圖 */}
          <div className="feature-image" style={{ flex: '0 0 auto' }}>
            <div style={{ 
              width: '280px', 
              height: '500px', 
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', 
              borderRadius: 24, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: '#fff', 
              fontSize: 18, 
              fontWeight: 600, 
              textAlign: 'center',
              boxShadow: '0 12px 40px rgba(240, 147, 251, 0.4)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* 模擬手機狀態欄 */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '30px',
                background: 'rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 16px',
                fontSize: '12px'
              }}>
                <span>9:41</span>
                <span>100%</span>
              </div>
              <div style={{ marginTop: '20px' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>🎯</div>
                <div style={{ fontSize: '20px', marginBottom: '8px' }}>操作界面</div>
                <div style={{ fontSize: '14px', opacity: 0.8 }}>
                  UI 設計截圖
                </div>
              </div>
            </div>
          </div>
          
          {/* 右側文字內容 */}
          <div className="feature-text" style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{ color: '#fff', fontSize: 42, fontWeight: 900, marginBottom: 24, letterSpacing: 1 }}>現代化 UI，操作流暢</h3>
            <p style={{ color: '#cbd5e1', fontSize: 20, lineHeight: 1.7, marginBottom: 24 }}>簡單易用，快速上手，讓司機與乘客都能安心信賴，享受順暢的使用體驗。直覺的操作介面讓每個功能都觸手可及。</p>
            <ul style={{ color: '#cbd5e1', fontSize: 18, lineHeight: 1.8, paddingLeft: 20 }}>
              <li>直覺式操作介面</li>
              <li>快速響應設計</li>
              <li>友善的用戶體驗</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* FAQ 區 */}
      <section style={{ width: '100%', background: '#1e293b', padding: '48px 0' }}>
        <div style={{ color: '#0EA5E9', fontWeight: 800, fontSize: 26, marginBottom: 18, textAlign: 'center' }}>常見問題</div>
        <ul style={{ color: '#fff', fontSize: 18, lineHeight: 2, paddingLeft: 32, maxWidth: 900, margin: '0 auto' }}>
          <li>Q: 如何申請免費試用？<br />A: 點擊上方「申請試用帳號」按鈕，填寫表單即可。</li>
          <li>Q: 支援哪些車型？<br />A: 支援多種計程車車型與計費方式。</li>
          <li>Q: 有客服支援嗎？<br />A: 有，請見下方聯絡資訊。</li>
        </ul>
      </section>

      {/* 底部聯絡資訊 */}
      <footer style={{ width: '100%', background: '#0f172a', color: '#cbd5e1', textAlign: 'center', fontSize: 16, borderTop: '1px solid #334155', padding: '32px 0', marginTop: 0 }}>
        聯絡我們：service@cosmosmeter.com ｜ Cosmos Meter 官方 LINE ｜ Facebook 粉專
      </footer>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        
        .download-btn-row {
          display: flex;
          gap: 24px;
          justify-content: center;
        }
        
        .download-btn {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px #0ea5e93a;
          background: #111;
          transition: transform 0.1s, box-shadow 0.2s;
        }
        
        .download-btn:hover {
          transform: translateY(-4px) scale(1.04);
          box-shadow: 0 8px 24px #0ea5e9cc;
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
          
          .hero-section {
            flex-direction: column !important;
            height: auto !important;
            min-height: 90vh !important;
            gap: 2rem !important;
            padding: 2rem 4vw !important;
          }
          
          .phone-container {
            display: none !important;
          }
          
          .mobile-video-section {
            display: flex !important;
          }
          
          .hero-content-area {
            width: 100% !important;
            max-width: 500px !important;
            text-align: center !important;
            margin-left: 0 !important;
          }
          
          .hero-content-area img {
            width: 80px !important;
            height: 80px !important;
            border-radius: 24px !important;
            margin-bottom: 16px !important;
          }
          
          .hero-content-area h1:first-of-type {
            font-size: 28px !important;
            margin-bottom: 12px !important;
            line-height: 1.2 !important;
          }
          
          .hero-content-area h1:nth-of-type(2) {
            font-size: 24px !important;
            margin-bottom: 16px !important;
            line-height: 1.2 !important;
          }
          
          .hero-content-area div:nth-of-type(3) {
            font-size: 18px !important;
            margin-bottom: 20px !important;
          }
          
          .hero-content-area div:nth-of-type(4) {
            font-size: 14px !important;
            padding: 8px 20px !important;
            margin-bottom: 20px !important;
            letter-spacing: 0.5px !important;
            line-height: 1.3 !important;
          }
          
          .hero-content-area a {
            font-size: 16px !important;
            padding: 14px 32px !important;
            border-radius: 24px !important;
            letter-spacing: 0.5px !important;
            margin-top: 12px !important;
          }
          
          section:nth-of-type(4) {
            padding: 32px 4vw !important;
          }
          
          section:nth-of-type(4) > div:first-child {
            font-size: 20px !important;
            margin-bottom: 20px !important;
          }
          
          .download-btn-row {
            gap: 16px !important;
            flex-wrap: wrap !important;
          }
          
          .download-btn img {
            height: 48px !important;
          }
          
          section:nth-of-type(4) > div:last-child {
            font-size: 14px !important;
          }
          
          section:nth-of-type(5) {
            padding: 48px 4vw !important;
          }
          
          .feature-item {
            flex-direction: column !important;
            gap: 24px !important;
            margin-bottom: 48px !important;
            max-width: 500px !important;
          }
          
          /* 第一組特色：手機版先圖後文字 */
          .feature-item:first-child {
            flex-direction: column !important;
          }
          
          .feature-item:first-child .feature-image {
            order: 1 !important;
          }
          
          .feature-item:first-child .feature-text {
            order: 2 !important;
          }
          
          .feature-text {
            text-align: center !important;
            min-width: auto !important;
          }
          
          .feature-text h3 {
            font-size: 24px !important;
            margin-bottom: 16px !important;
            letter-spacing: 0.5px !important;
          }
          
          .feature-text p {
            font-size: 16px !important;
            line-height: 1.6 !important;
            margin-bottom: 16px !important;
          }
          
          .feature-text ul {
            font-size: 14px !important;
            line-height: 1.6 !important;
            padding-left: 16px !important;
            text-align: left !important;
            display: inline-block !important;
          }
          
          .feature-image > div {
            width: 200px !important;
            height: 360px !important;
            border-radius: 20px !important;
            font-size: 16px !important;
            box-shadow: 0 8px 32px rgba(102, 126, 234, 0.4) !important;
          }
          
          .feature-image > div > div:first-child {
            height: 24px !important;
            padding: 0 12px !important;
            font-size: 10px !important;
          }
          
          .feature-image > div > div:last-child {
            margin-top: 16px !important;
          }
          
          .feature-image > div > div:last-child > div:first-child {
            font-size: 28px !important;
            margin-bottom: 10px !important;
          }
          
          .feature-image > div > div:last-child > div:nth-child(2) {
            font-size: 16px !important;
            margin-bottom: 6px !important;
          }
          
          .feature-image > div > div:last-child > div:last-child {
            font-size: 12px !important;
          }
          
          section:nth-of-type(6) {
            padding: 32px 4vw !important;
          }
          
          section:nth-of-type(6) > div:first-child {
            font-size: 20px !important;
            margin-bottom: 16px !important;
          }
          
          section:nth-of-type(6) ul {
            font-size: 14px !important;
            line-height: 1.8 !important;
            padding-left: 20px !important;
            max-width: 500px !important;
            list-style: none !important;
          }
          
          section:nth-of-type(6) ul li {
            margin-bottom: 16px !important;
            padding: 12px !important;
            background: rgba(255,255,255,0.05) !important;
            border-radius: 8px !important;
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
          
          .hero-section {
            padding: 1rem 2vw !important;
            gap: 1.5rem !important;
          }
          
          .mobile-phone-container {
            width: 180px !important;
            height: 360px !important;
          }
          
          .mobile-iphone-frame {
            width: 140px !important;
            height: 280px !important;
          }
          
          .mobile-dynamic-island {
            width: 40px !important;
            height: 12px !important;
            border-radius: 6px !important;
          }
          
          .hero-content-area h1:first-of-type {
            font-size: 20px !important;
          }
          
          .hero-content-area h1:nth-of-type(2) {
            font-size: 18px !important;
          }
          
          .hero-content-area div:nth-of-type(3) {
            font-size: 16px !important;
          }
          
          .hero-content-area div:nth-of-type(4) {
            font-size: 12px !important;
            padding: 6px 16px !important;
          }
          
          .hero-content-area a {
            font-size: 14px !important;
            padding: 12px 24px !important;
          }
          
          section:nth-of-type(4),
          section:nth-of-type(5),
          section:nth-of-type(6) {
            padding: 20px 2vw !important;
          }
          
          .download-btn-row {
            flex-direction: column !important;
            align-items: center !important;
          }
          
          .feature-item {
            margin-bottom: 32px !important;
          }
        }
        
        /* 超小螢幕 (360px 以下) */
        @media (max-width: 360px) {
          .mobile-phone-container {
            width: 160px !important;
            height: 320px !important;
          }
          
          .mobile-iphone-frame {
            width: 120px !important;
            height: 240px !important;
          }
          
          .mobile-dynamic-island {
            width: 35px !important;
            height: 10px !important;
          }
          
          .hero-content-area h1:first-of-type {
            font-size: 18px !important;
          }
          
          .hero-content-area h1:nth-of-type(2) {
            font-size: 16px !important;
          }
          
          .hero-content-area div:nth-of-type(3) {
            font-size: 14px !important;
          }
        }
      `}</style>
    </div>
  );
}
