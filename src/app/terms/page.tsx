'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Terms() {
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
          <h1 style={{ color: '#0EA5E9', fontSize: 48, fontWeight: 900, marginBottom: 32, textAlign: 'center', letterSpacing: 1 }}>Terms of Service</h1>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ color: '#38bdf8', fontSize: 32, fontWeight: 700, marginBottom: 24, letterSpacing: 1 }}>Introduction</h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: '#cbd5e1' }}>
              Welcome to Cosmos Meter. By using our services, you agree to these Terms of Service.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h3 style={{ color: '#0EA5E9', fontSize: 24, fontWeight: 600, marginBottom: 20 }}>Acceptable Use</h3>
            <ul style={{ paddingLeft: 24 }}>
              <li style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 8 }}>Do not engage in unlawful activities or infringe upon others&apos; rights.</li>
              <li style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 8 }}>Do not access, modify, or distribute service content or software without authorization.</li>
              <li style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 8 }}>You are responsible for the security of your account and device.</li>
            </ul>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h3 style={{ color: '#0EA5E9', fontSize: 24, fontWeight: 600, marginBottom: 20 }}>Liability and Disclaimer</h3>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1', marginBottom: 16 }}>
              The service is provided &quot;as is&quot; without warranties of availability, accuracy, or fitness for a particular purpose.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1' }}>
              To the extent permitted by law, we are not liable for any direct or indirect damages arising from the use of or inability to use the service.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h3 style={{ color: '#0EA5E9', fontSize: 24, fontWeight: 600, marginBottom: 20 }}>Changes to These Terms</h3>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1' }}>
              We may update these terms from time to time. Material changes will be announced on this page. Please review periodically for the latest information.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h3 style={{ color: '#0EA5E9', fontSize: 24, fontWeight: 600, marginBottom: 20 }}>Contact Us</h3>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#cbd5e1' }}>
              If you have any questions about these terms, please contact us at <a href="mailto:mr.chi.service@gmail.com" style={{ color: '#0EA5E9', textDecoration: 'underline' }}>mr.chi.service@gmail.com</a>
            </p>
          </div>

          <div style={{ textAlign: 'center', padding: '24px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ fontSize: 14, color: '#94a3b8' }}>
              Effective Date: 2025-10-14
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


